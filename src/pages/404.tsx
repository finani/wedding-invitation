import { useRouter } from 'next/router';

import * as CS from 'src/common/components/Styles';
import * as S from 'src/common/components/MainView/Styles';

function Custom404() {
  const router = useRouter();

  return (
    <>
      <S.MainImg
        src="/images/studio/SYD_0140.jpg"
        alt="Page Not Found"
        onClick={() => router.push('/')}
      />
      <CS.MainInfo>&nbsp;</CS.MainInfo>
    </>
  );
}

export default Custom404;
