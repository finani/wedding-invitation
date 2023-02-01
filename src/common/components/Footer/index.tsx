import * as CS from 'src/common/components/Styles';
import * as S from './Styles';

function Footer() {
  return (
    <S.FooterContainer>
      <CS.MainInfo>
        <S.FooterBody>
          Created by{' '}
          <a
            href="https://github.com/finani"
            target="_blank"
            rel="noopener noreferrer"
          >
            Inhwan
          </a>{' '}
          and{' '}
          <a
            href="https://github.com/kcyoon689"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chaeyoon
          </a>
          .
        </S.FooterBody>
      </CS.MainInfo>
    </S.FooterContainer>
  );
}

export default Footer;
