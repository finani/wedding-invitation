import Link from 'next/link';

import * as CS from 'src/common/components/Styles';

function MainCard() {
  return (
    <CS.CommonContainer>
      <CS.MainImg src='/images/mainCard.png' alt='Love, love, love' />
    </CS.CommonContainer>
  );
}

export default MainCard;
