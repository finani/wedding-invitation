import Link from 'next/link';

import * as CS from 'src/common/components/Styles';
import * as S from './Styles';

function MainCard() {
  return (
    <CS.OddContainer>
      <CS.MainInfoGridList>
        <CS.MainDetails>
          <CS.Title>
            <br></br>
            인환, 채윤
            <br></br>
            <br></br>
            <Link href="/">우리 결혼!</Link>
          </CS.Title>
        </CS.MainDetails>
        <CS.MainImg src="/images/mobile/SYD_0602.jpg" alt="Love, love, love" />
      </CS.MainInfoGridList>
    </CS.OddContainer>
  );
}

export default MainCard;
