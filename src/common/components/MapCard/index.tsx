import { useState, useRef } from 'react';

import * as CS from 'src/common/components/Styles';
import * as S from './Styles';
import copyToClipboard from 'src/common/utils';

function MapCard() {
  const mapRef = useRef<HTMLElement | null | any>(null);

  const name = '지타워컨벤션';
  const lat = 37.4800335;
  const lon = 126.8953833;

  setTimeout(() => {
    if (typeof naver !== 'undefined') {
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
    }
  }, 100);

  const navigateNaverMap = () => {
    location.href =
      'http://app.map.naver.com/launchApp/?version=11&menu=navigation&elat=' +
      lat +
      '&elng=' +
      lon +
      '&etitle=' +
      name;
  };

  const navigateKakaoMap = () => {
    location.href =
      'https://map.kakao.com/link/to/' + name + ',' + lat + ',' + lon;
  };

  const navigateTMap = () => {
    location.href =
      'https://apis.openapi.sk.com/tmap/app/routes?appKey=l7xx7179ddde21ca4bfb8e6b03c710138f41&name=' +
      name +
      '&lon=' +
      lon +
      '&lat=' +
      lat;
  };

  return (
    <CS.CommonContainer>
      <CS.HorizontalBar />
      <CS.CommonMargin margin="40px" />
      <CS.CommonTitle>오시는 길</CS.CommonTitle>
      <CS.CommonBody>
        <S.MapContainer id="map" />
        <CS.CommonMargin margin="10px" />
        <CS.CommonTable>
          <tbody>
            <tr>
              <td style={{ padding: '0px 0px 6px 0px' }}>
                <a>
                  <CS.CommonSubSubTitle>지도</CS.CommonSubSubTitle>
                </a>
              </td>
              <td style={{ padding: '0px 0px 0px 10px' }}>
                <CS.ImageContainer width="30px">
                  <a
                    href="https://m.place.naver.com/share?id=1090437805"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CS.MainImg
                      src="/images/share/naver-map.png"
                      alt="naver map"
                    />
                  </a>
                </CS.ImageContainer>
              </td>
              <td style={{ padding: '0px 0px 0px 10px' }}>
                <CS.ImageContainer width="30px">
                  <a
                    href="https://place.map.kakao.com/197749949"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CS.MainImg
                      src="/images/share/kakao-map.png"
                      alt="kakao map"
                    />
                  </a>
                </CS.ImageContainer>
              </td>
              <td style={{ padding: '0px 0px 0px 10px' }}>
                <CS.ImageContainer width="30px">
                  <a
                    href="https://goo.gl/maps/2yS9ShBbmGD3d7BS6"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CS.MainImg
                      src="/images/share/google-map.jpg"
                      alt="google map"
                    />
                  </a>
                </CS.ImageContainer>
              </td>
            </tr>
          </tbody>
        </CS.CommonTable>
        <CS.CommonTextContainer>
          <CS.CommonP>
            <b>
              [예식장 주소]{' '}
              <a
                onClick={() => {
                  copyToClipboard('서울 구로구 디지털로 26길 38');
                }}
              >
                서울 구로구 디지털로 26길 38
              </a>
              <br></br>
              [전화번호] <a href="tel:02-432-9000">02-432-9000</a>
            </b>
          </CS.CommonP>
        </CS.CommonTextContainer>
        <CS.CommonMargin margin="50px" />
        <CS.CommonSubTitle>지하철 및 셔틀버스 이용시</CS.CommonSubTitle>
        <CS.CommonTextContainer>
          <CS.CommonP>
            <u>
              <b>[지하철 및 도보]</b>
            </u>
            <br></br>
            2호선 구로디지털단지역 2번 출구에서 도보 약 15분 이동<br></br>
            <br></br>
            <u>
              <b>[지하철 및 셔틀버스 안내]</b>
            </u>
            <br></br>
            셔틀버스는 <b>15분 간격</b>으로 운행됩니다<br></br>
            <br></br>
            <b>- 1호선&7호선 가산디지털단지역</b>
            <br></br>&nbsp;&nbsp;&nbsp;공용 4번 출구 나와서 국민은행 앞에서 탑승
            <br></br>
            <br></br>&nbsp;&nbsp;&nbsp;<b>- 1호선 1번 출구로 나오는 경우</b>
            <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;나온 방향으로 120M 직진
            후,<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4번 출구 앞 횡단보도 이용하여
            건너서 탑승<br></br>
            <br></br>
            <b>- 2호선 구로디지털단지역</b>
            <br></br>&nbsp;&nbsp;&nbsp;4번 출구 나와서 약 100M 직진 후 셔틀 버스
            탑승<br></br>
          </CS.CommonP>
        </CS.CommonTextContainer>
        <CS.CommonMargin margin="30px" />
        <CS.CommonSubTitle>일반버스 이용시</CS.CommonSubTitle>
        <CS.CommonTextContainer>
          <CS.CommonP>
            <u>
              <b>[지선 버스]</b>
            </u>
            &nbsp;&nbsp;5536, 5615, 5616<br></br>&nbsp;&nbsp;&nbsp;
            <b>• 탑승 방향: </b>
            디지털단지 방향<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <b>» 하차: </b>지하이시티, G밸리 보건지소<br></br>
            <br></br>&nbsp;&nbsp;&nbsp;<b>• 탑승 방향: </b>구로남초등학교 방향
            <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <b>» 하차: </b>하이엔드 1차, G밸리 보건지소<br></br>
            <br></br>
            <u>
              <b>[마을 버스]</b>
            </u>
            &nbsp;&nbsp;금천07<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <b>» 하차: </b>지타워
          </CS.CommonP>
        </CS.CommonTextContainer>
        <CS.CommonMargin margin="30px" />
        <CS.CommonSubTitle>자가용 이용시</CS.CommonSubTitle>
        <CS.CommonTextContainer>
          <CS.CommonP>
            <u>
              <b>[내비게이션 검색 주소]</b>
            </u>
            <br></br>
            <a
              onClick={() => {
                copyToClipboard(
                  '서울시 구로구 디지털로 26길 38 (지타워몰, 지타워 주차장)',
                );
              }}
            >
              <b>서울시 구로구 디지털로 26길 38 (지타워몰, 지타워 주차장)</b>
            </a>
            <br></br>- 디지털로 28길 도로 이용 진입<br></br>- 동시 1400대 주차
            가능<br></br>- 2시간 무료주차 / 10분당 700원
          </CS.CommonP>
          <CS.CommonTable>
            <tbody>
              <tr>
                <td style={{ padding: '0px 0px 6px 0px' }}>
                  <a>
                    <CS.CommonSubSubTitle>내비게이션</CS.CommonSubSubTitle>
                  </a>
                </td>
                <td style={{ padding: '0px 0px 0px 5px' }}>
                  <CS.ImageContainer width="30px">
                    <a onClick={navigateNaverMap}>
                      <CS.MainImg
                        src="/images/share/naver-map.png"
                        alt="naver map navigation"
                      />
                    </a>
                  </CS.ImageContainer>
                </td>
                <td style={{ padding: '0px 0px 0px 5px' }}>
                  <CS.ImageContainer width="30px">
                    <a onClick={navigateKakaoMap}>
                      <CS.MainImg
                        src="/images/share/kakao-map-navigation.png"
                        alt="kakao map navigation"
                      />
                    </a>
                  </CS.ImageContainer>
                </td>
                <td style={{ padding: '0px 0px 0px 5px' }}>
                  <CS.ImageContainer width="30px">
                    <a onClick={navigateTMap}>
                      <CS.MainImg
                        src="/images/share/t-map.svg"
                        alt="t map navigation"
                      />
                    </a>
                  </CS.ImageContainer>
                </td>
              </tr>
            </tbody>
          </CS.CommonTable>
        </CS.CommonTextContainer>
        <CS.CommonMargin margin="50px" />
      </CS.CommonBody>
    </CS.CommonContainer>
  );
}

export default MapCard;
