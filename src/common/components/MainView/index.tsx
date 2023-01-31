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
              인환, 채윤
              <br></br>
              <br></br>
              결혼식
            </CS.Title>
          </CS.MainDetails>
          <S.MainImg
            src="/images/studio/SYD_0602.jpg"
            alt="Love, love, love"
          />
        </CS.MainInfoGridList>
      </CS.OddContainer>
      <CS.EvenContainer>
        <CS.Title>
          <Link href="/">우리 결혼!</Link>
        </CS.Title>
      </CS.EvenContainer>
    </>
  );
}

export default MainView;
