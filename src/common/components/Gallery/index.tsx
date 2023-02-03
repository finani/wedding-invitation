/* eslint-disable @next/next/no-img-element */
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import * as CS from 'src/common/components/Styles';
import * as S from './Styles';

function Gallery() {
  return (
    <CS.OddContainer>
      <CS.MainInfo>
        <S.GalleryTitle>Gallery</S.GalleryTitle>
        <S.GalleryBody>
          <Carousel
            showArrows={true}
            infiniteLoop={true}
            useKeyboardArrows={true}
            autoPlay={true}
            stopOnHover={true}
            swipeable={true}
            dynamicHeight={true}
            emulateTouch={true}
            interval={5000}
          >
            <div>
              <img src="/images/mobile/SYD_0013.jpg" alt="img1" />
            </div>
            <div>
              <img src="/images/mobile/SYD_0056.jpg" alt="img2" />
            </div>
            <div>
              <img src="/images/mobile/SYD_0140.jpg" alt="img3" />
            </div>
            <div>
              <img src="/images/mobile/SYD_0237.jpg" alt="img4" />
            </div>
            <div>
              <img src="/images/mobile/SYD_0270.jpg" alt="img5" />
            </div>
            <div>
              <img src="/images/mobile/SYD_0328.jpg" alt="img6" />
            </div>
            <div>
              <img src="/images/mobile/SYD_0357.jpg" alt="img7" />
            </div>
            <div>
              <img src="/images/mobile/SYD_0508.jpg" alt="img8" />
            </div>
            <div>
              <img src="/images/mobile/SYD_0602.jpg" alt="img9" />
            </div>
          </Carousel>
        </S.GalleryBody>
      </CS.MainInfo>
    </CS.OddContainer>
  );
}

export default Gallery;
