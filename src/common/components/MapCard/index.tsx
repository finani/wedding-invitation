import { useEffect, useRef } from 'react';

import * as CS from 'src/common/components/Styles';
import * as S from './Styles';

function MapCard() {
  const mapRef = useRef<HTMLElement | null | any>(null);

  useEffect(() => {
    const lat = 37.4800335;
    const lon = 126.8953833;
    mapRef.current = new naver.maps.Map('map', {
      center: new naver.maps.LatLng(lat, lon),
      zoom: 15,
      // zoomControl: true,
    });

    const marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(lat, lon),
      map: mapRef.current,
      animation: naver.maps.Animation.BOUNCE,
    });

    const contentHtml = [
      '<div style="max-width:40vw; max-height: 50vh; padding:10px 15px;">',
      '<a title="지타워 컨벤션" href="https://m.place.naver.com/share?id=1090437805" target="_blank" rel="noopener noreferrer">' +
        '<h3 style="text-align:center;">지타워 컨벤션</h3></a>',
      '<a title="지타워 컨벤션" href="https://m.place.naver.com/share?id=1090437805" target="_blank" rel="noopener noreferrer">' +
        '<img src="https://ldb-phinf.pstatic.net/20211027_73/1635312757019eR6q1_JPEG/0rQFPGvbVjAbWhGRh3OeTI69.jpeg.jpg"' +
        'style="max-width: 40vw; max-height: 20vh;" /></a>',
      '<p style="color:black; text-align:center">우리 여기서 결혼해요~♥️</p>',
      '</div>',
    ].join('');

    const wineShopInfoWindow = new naver.maps.InfoWindow({
      content: contentHtml,
      pixelOffset: new naver.maps.Point(0, -10),
    });

    const listener = naver.maps.Event.addListener(
      marker,
      'click',
      function (e) {
        if (wineShopInfoWindow.getMap()) {
          wineShopInfoWindow.close();
        } else {
          wineShopInfoWindow.open(mapRef.current, marker);
        }
      },
    );
  }, []);

  return (
    <S.MapCardContainer>
      <CS.MainInfo>
        <S.MapCardTitle>오시는 길</S.MapCardTitle>
        <S.MapDiv id="map" />
        <S.MapCardText>
          [예식장 주소] 서울 구로구 디지털로26길 38<br></br>
          [전화번호] 02-432-9000<br></br>- 지하철 및 셔틀버스 이용시<br></br>
          1호선&7호선 가산디지털단지역 공용4번 출구 - 출구 나와서 국민은행 앞
          <br></br>* 1호선 1번 출구로 나오는 경우 - 나온 방향으로 120M 직진 후,
          4번 출구 앞 횡단보도 이용하여 건너서 탑승<br></br>
          2호선 구로디지털단지역 4번 출구 - 4번 출구 나와서 약 100M 직진 후 탑승
          <br></br>
          셔틀버스는 15분 간격으로 운행됩니다<br></br>
          <br></br>- 일반버스 이용시<br></br>
          지선: 5536, 5615, 5616<br></br>
          디지털단지 방향 - 지하이시티 ,G밸리 보건지소<br></br>
          구로남초등학교 방향 - 하이엔드 1차, G밸리 보건지소<br></br>
          마을버스: 금천07 - 지타워 하차<br></br>
          <br></br>- 자가용 이용시<br></br>
          동시 1400대 주차 가능 / 2시간 무료주차 / 10분당 700원<br></br>
          네비게이션 검색 주소: 서울시 구로구 디지털로 26길 38 (지타워몰, 지타워
          주차장) / 디지털로 28길 도로 이용 진입<br></br>
        </S.MapCardText>
      </CS.MainInfo>
    </S.MapCardContainer>
  );
}

export default MapCard;
