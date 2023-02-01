import Link from 'next/link';

import * as CS from 'src/common/components/Styles';

function Custom404() {
  return (
    <>
      <Link href="/">
        <CS.MainImg src="/images/mobile/SYD_0140.jpg" alt="Page Not Found" />
      </Link>
      <CS.MainInfo>&nbsp;</CS.MainInfo>
    </>
  );
}

export default Custom404;
