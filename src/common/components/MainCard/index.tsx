import Link from 'next/link';

import * as CS from 'src/common/components/Styles';

function MainCard() {
  return (
    <CS.CommonContainer>
      <CS.CommonTitle>
        인환, 채윤
        <br></br>
        <br></br>
        <Link href='/'>우리 결혼!</Link>
      </CS.CommonTitle>
      <CS.CommonSubTitle>
        <CS.MainImg src='/images/mobile/SYD_0602.jpg' alt='Love, love, love' />
      </CS.CommonSubTitle>
    </CS.CommonContainer>
  );
}

export default MainCard;
