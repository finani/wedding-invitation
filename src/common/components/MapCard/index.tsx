import { useEffect, useRef } from 'react';

import * as CS from 'src/common/components/Styles';
import * as S from './Styles';

function MapCard() {
  const mapRef = useRef<HTMLElement | null | any>(null);

  const name = '지타워컨벤션';
  const lat = 37.4800335;
  const lon = 126.8953833;

  useEffect(() => {
    const center = new naver.maps.LatLng(lat, lon);
    mapRef.current = new naver.maps.Map('map', {
      center: center,
      disableDoubleClickZoom: false,
      disableDoubleTapZoom: false,
      disableTwoFingerTapZoom: false,
      draggable: false,
      keyboardShortcuts: false,
      pinchZoom: false,
      scrollWheel: false,
      zoom: 13,
      zoomControl: true,
      zoomControlOptions: {
        position: naver.maps.Position.LEFT_CENTER,
      },
      zoomOrigin: center,
    });

    const marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(lat, lon),
      map: mapRef.current,
      animation: naver.maps.Animation.BOUNCE,
    });

    const contentHtml = [
      '<div style="padding:0px 10px 5px 10px;">',
      '<a title="지타워 컨벤션" href="https://m.place.naver.com/share?id=1090437805" target="_blank" rel="noopener noreferrer">' +
        '<h4 style="text-align:center;">지타워 컨벤션</h4></a>',
      '<a title="지타워 컨벤션" href="https://m.place.naver.com/share?id=1090437805" target="_blank" rel="noopener noreferrer">' +
        '<img src="https://ldb-phinf.pstatic.net/20211027_73/1635312757019eR6q1_JPEG/0rQFPGvbVjAbWhGRh3OeTI69.jpeg.jpg"' +
        'style="width: 40vw; max-width: 150px;" /></a>',
      '</div>',
    ].join('');

    const mapElement = document.getElementById('map');
    const mapElementWidth =
      mapElement?.offsetWidth === undefined ? 0 : mapElement.offsetWidth;
    const mapElementHeight =
      mapElement?.offsetHeight === undefined ? 0 : mapElement.offsetHeight;

    const offsetX = mapElementWidth * 0.15;
    const offsetY = mapElementHeight * -0.15;
    const wineShopInfoWindow = new naver.maps.InfoWindow({
      content: contentHtml,
      anchorSkew: true,
      pixelOffset: new naver.maps.Point(offsetX, offsetY),
    });

    const listener = naver.maps.Event.addListener(
      marker,
      'click',
      function (e) {
        if (wineShopInfoWindow.getMap()) {
          wineShopInfoWindow.close();
          mapRef.current.setCenter(center);
        } else {
          wineShopInfoWindow.open(mapRef.current, marker);
        }
      },
    );
  }, []);

  const navigateNaverMap = () => {
    location.href = 'http://app.map.naver.com/launchApp/?version=11&menu=navigation&elat='+lat+'&elng='+lon+'&etitle='+name;
  }

  const navigateKakaoMap = () => {
    location.href = 'https://map.kakao.com/link/to/'+name+','+lat+','+lon;
  }

  const navigateTMap = () => {
    location.href = 'https://apis.openapi.sk.com/tmap/app/routes?appKey=l7xx7179ddde21ca4bfb8e6b03c710138f41&name='+name+'&lon='+lon+'&lat='+lat;
  }

  return (
    <CS.CommonContainer>
      <CS.CommonBody>
        <CS.CommonTitle>오시는 길</CS.CommonTitle>
        <S.MapContainer id="map" />
        <CS.CommonTable>
          <tbody>
            <tr>
              <td>
                <CS.CommonText>네이버 지도</CS.CommonText>
              </td>
              <td>
                <CS.ImageContainer>
                  <a href='https://m.place.naver.com/share?id=1090437805' target='_blank' rel='noopener noreferrer' >
                    <CS.MainImg src="/images/share/naver-map.png" alt="naver map" />
                  </a>
                </CS.ImageContainer>
              </td>
            </tr>
            <tr>
              <td>
                <CS.CommonText>카카오 지도</CS.CommonText>
              </td>
              <td>
                <CS.ImageContainer>
                  <a href='https://place.map.kakao.com/197749949' target='_blank' rel='noopener noreferrer' >
                    <CS.MainImg src="/images/share/kakao-map.png" alt="kakao map" />
                  </a>
                </CS.ImageContainer>
              </td>
            </tr>
            <tr>
              <td>
                <CS.CommonText>구글 지도</CS.CommonText>
              </td>
              <td>
                <CS.ImageContainer>
                  <a href='https://goo.gl/maps/2yS9ShBbmGD3d7BS6' target='_blank' rel='noopener noreferrer' >
                    <CS.MainImg src="/images/share/google-map.jpg" alt="google map" />
                  </a>
                </CS.ImageContainer>
              </td>
            </tr>
          </tbody>
        </CS.CommonTable>
        <CS.CommonSubTitle>
          [예식장 주소] 서울 구로구 디지털로26길 38<br></br>
          [전화번호] 02-432-9000
        </CS.CommonSubTitle>
        <CS.CommonSubTitle>- 지하철 및 셔틀버스 이용시</CS.CommonSubTitle>
        <CS.CommonText>
          1호선&7호선 가산디지털단지역 공용4번 출구 - 출구 나와서 국민은행 앞
          <br></br>* 1호선 1번 출구로 나오는 경우 - 나온 방향으로 120M 직진 후,
          4번 출구 앞 횡단보도 이용하여 건너서 탑승<br></br>
          2호선 구로디지털단지역 4번 출구 - 4번 출구 나와서 약 100M 직진 후 탑승
          <br></br>
          셔틀버스는 15분 간격으로 운행됩니다
        </CS.CommonText>
        <CS.CommonSubTitle>- 일반버스 이용시</CS.CommonSubTitle>
        <CS.CommonText>
          지선: 5536, 5615, 5616<br></br>
          디지털단지 방향 - 지하이시티 ,G밸리 보건지소<br></br>
          구로남초등학교 방향 - 하이엔드 1차, G밸리 보건지소<br></br>
          마을버스: 금천07 - 지타워 하차
        </CS.CommonText>
        <CS.CommonSubTitle>- 자가용 이용시</CS.CommonSubTitle>
        <CS.CommonText>
          동시 1400대 주차 가능 / 2시간 무료주차 / 10분당 700원<br></br>
          네비게이션 검색 주소: 서울시 구로구 디지털로 26길 38 (지타워몰, 지타워
          주차장) / 디지털로 28길 도로 이용 진입
        </CS.CommonText>
        <CS.CommonTable>
          <tbody>
            <tr>
              <td>
                <CS.CommonText>네이버 길찾기</CS.CommonText>
              </td>
              <td>
                <CS.ImageContainer>
                  <a onClick={navigateNaverMap} >
                    <CS.MainImg src="/images/share/naver-map.png" alt="naver map" />
                  </a>
                </CS.ImageContainer>
              </td>
            </tr>
            <tr>
              <td>
                <CS.CommonText>카카오 길찾기</CS.CommonText>
              </td>
              <td>
                <CS.ImageContainer>
                  <a onClick={navigateKakaoMap} >
                    <CS.MainImg src="/images/share/kakao-map.png" alt="kakao map" />
                  </a>
                </CS.ImageContainer>
              </td>
            </tr>
            <tr>
              <td>
                <CS.CommonText>티맵 길찾기</CS.CommonText>
              </td>
              <td>
                <CS.ImageContainer>
                  <a onClick={navigateTMap} >
                    <CS.MainImg src="/images/share/t-map.svg" alt="t map" />
                  </a>
                </CS.ImageContainer>
              </td>
            </tr>
          </tbody>
        </CS.CommonTable>
      </CS.CommonBody>
    </CS.CommonContainer>
  );
}

export default MapCard;
