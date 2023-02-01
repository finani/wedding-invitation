import * as CS from 'src/common/components/Styles';
import * as S from './Styles';

function Gallery() {
  return (
    <CS.OddContainer>
      <CS.MainInfoGridList>
        <CS.MainDetails>
          <CS.Title>
            <br></br>
            Gallery
            <br></br>
          </CS.Title>
        </CS.MainDetails>
        <CS.MainImg src="/images/mobile/SYD_0140.jpg" alt="Love, love, love" />
      </CS.MainInfoGridList>
    </CS.OddContainer>
  );
}

export default Gallery;
