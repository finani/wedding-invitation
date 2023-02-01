import * as CS from 'src/common/components/Styles';
import * as S from './Styles';

interface ContactProps {
  showAccount: Boolean;
}
function Contact({ showAccount }: ContactProps) {
  return (
    <CS.EvenContainer>
      <CS.MainInfoGridList>
        <CS.MainDetails>
          <CS.Title>
            <br></br>
            Contact
            <br></br>
          </CS.Title>
          {showAccount && <CS.Title>showAccount</CS.Title>}
        </CS.MainDetails>
        <CS.MainImg src="/images/mobile/SYD_0056.jpg" alt="Love, love, love" />
      </CS.MainInfoGridList>
    </CS.EvenContainer>
  );
}

export default Contact;
