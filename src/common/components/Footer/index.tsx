import * as CS from 'src/common/components/Styles';
import * as S from './Styles';

function Footer() {
  return (
    <S.FooterContainer>
      <CS.MainInfo>
        <S.FooterBody>
          Created by <a href="https://github.com/finani">Inhwan</a> and{' '}
          <a href="https://github.com/kcyoon689">Chaeyoon</a>.
        </S.FooterBody>
      </CS.MainInfo>
    </S.FooterContainer>
  );
}

export default Footer;
