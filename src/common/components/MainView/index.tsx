import Link from 'next/link';

import * as CS from 'src/common/components/Styles';
import * as S from './Styles';

function MainView() {
  return (
    <>
      <CS.OddContainer>
        <CS.MainInfoGridList>
          <CS.MainDetails>
            <CS.Title>
              <br></br>
              마시고 싶은 그 와인,
              <br></br>
              <br></br>
              어디서 팔까?
            </CS.Title>
          </CS.MainDetails>
          <S.MainImg
            src="/images/WallpaperDog-5518832.jpg"
            alt="https://wallpaper.dog/download-wallpaper/5518832_wine-wallpapers"
          />
        </CS.MainInfoGridList>
      </CS.OddContainer>
      <CS.EvenContainer>
        <CS.Title>
          와인샵 in <Link href="/">MaShow</Link>
        </CS.Title>
      </CS.EvenContainer>
    </>
  );
}

export default MainView;
