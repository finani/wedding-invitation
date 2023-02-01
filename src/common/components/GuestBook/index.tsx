import * as CS from 'src/common/components/Styles';
import * as S from './Styles';

function GuestBook() {
  return (
    <CS.EvenContainer>
      <CS.MainInfoGridList>
        <CS.MainDetails>
          <CS.Title>
            <br></br>
            GuestBook
            <br></br>
          </CS.Title>
        </CS.MainDetails>
        <CS.MainImg src="/images/studio/SYD_0328.jpg" alt="Love, love, love" />
      </CS.MainInfoGridList>
    </CS.EvenContainer>
  );
}

export default GuestBook;
