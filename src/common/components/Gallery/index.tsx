import * as CS from 'src/common/components/Styles';
import * as S from './Styles';

function Gallery() {
  return (
    <CS.EvenContainer>
      <CS.MainInfoGridList>
        <CS.MainDetails>
          <CS.Title>
            <br></br>
            Gallery
            <br></br>
          </CS.Title>
        </CS.MainDetails>
        <CS.MainImg src="/images/studio/SYD_0140.jpg" alt="Love, love, love" />
      </CS.MainInfoGridList>
    </CS.EvenContainer>
  );
}

export default Gallery;
