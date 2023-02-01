import * as CS from 'src/common/components/Styles';
import * as S from './Styles';

function MapCard() {
  return (
    <CS.EvenContainer>
      <CS.MainInfoGridList>
        <CS.MainDetails>
          <CS.Title>
            <br></br>
            MapCard
            <br></br>
          </CS.Title>
        </CS.MainDetails>
        <CS.MainImg src="/images/mobile/SYD_0270.jpg" alt="Love, love, love" />
      </CS.MainInfoGridList>
    </CS.EvenContainer>
  );
}

export default MapCard;
