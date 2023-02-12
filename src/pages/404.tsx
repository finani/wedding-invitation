import Link from 'next/link';

import * as CS from 'src/common/components/Styles';

function Custom404() {
  return (
    <CS.CommonContainer>
      <CS.CommonMargin margin="40px" />
      <CS.CommonTitle>길을 잘못 들었나봐요!</CS.CommonTitle>
      <CS.CommonBody>
        <Link href="/">
          <CS.MainImg
            src="/images/mobile/SYD_0140.jpg"
            alt="Page Not Found"
            style={{ cursor: 'pointer' }}
          />
        </Link>
        <CS.CommonSubTitleLong>
          사진을 누르면 뒤로 돌아가져요 ~ ❤
        </CS.CommonSubTitleLong>
      </CS.CommonBody>
    </CS.CommonContainer>
  );
}

export default Custom404;
