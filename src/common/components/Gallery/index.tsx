import ReactImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

import * as CS from 'src/common/components/Styles';

function Gallery() {
  const images = [
    {
      original: '/images/mobile/SYD_0013.jpg',
      thumbnail: '/images/mobile/SYD_0013.jpg',
    },
    {
      original: '/images/mobile/SYD_0056.jpg',
      thumbnail: '/images/mobile/SYD_0056.jpg',
    },
    {
      original: '/images/mobile/SYD_0140.jpg',
      thumbnail: '/images/mobile/SYD_0140.jpg',
    },
    {
      original: '/images/mobile/SYD_0237.jpg',
      thumbnail: '/images/mobile/SYD_0237.jpg',
    },
    {
      original: '/images/mobile/SYD_0270.jpg',
      thumbnail: '/images/mobile/SYD_0270.jpg',
    },
    {
      original: '/images/studio/SYD_0305.jpg',
      thumbnail: '/images/studio/SYD_0305.jpg',
    },
    {
      original: '/images/mobile/SYD_0328.jpg',
      thumbnail: '/images/mobile/SYD_0328.jpg',
    },
    {
      original: '/images/mobile/SYD_0357.jpg',
      thumbnail: '/images/mobile/SYD_0357.jpg',
    },
    {
      original: '/images/studio/SYD_0487.jpg',
      thumbnail: '/images/studio/SYD_0487.jpg',
    },
    {
      original: '/images/studio/SYD_0490.jpg',
      thumbnail: '/images/studio/SYD_0490.jpg',
    },
    {
      original: '/images/mobile/SYD_0508.jpg',
      thumbnail: '/images/mobile/SYD_0508.jpg',
    },
    {
      original: '/images/studio/SYD_0553.jpg',
      thumbnail: '/images/studio/SYD_0553.jpg',
    },
    {
      original: '/images/studio/SYD_0570.jpg',
      thumbnail: '/images/studio/SYD_0570.jpg',
    },
    {
      original: '/images/mobile/SYD_0602.jpg',
      thumbnail: '/images/mobile/SYD_0602.jpg',
    },
    {
      original: '/images/mobile/SYD_0613.jpg',
      thumbnail: '/images/mobile/SYD_0613.jpg',
    },
    {
      original: '/images/studio/SYD_0729.jpg',
      thumbnail: '/images/studio/SYD_0729.jpg',
    },
    {
      original: '/images/studio/SYD_0740.jpg',
      thumbnail: '/images/studio/SYD_0740.jpg',
    },
    {
      original: '/images/daily/1637499857042-3.jpg',
      thumbnail: '/images/daily/1637499857042-3.jpg',
    },
    {
      original: '/images/daily/IMG_0823.jpg',
      thumbnail: '/images/daily/IMG_0823.jpg',
    },
  ];

  return (
    <CS.CommonContainer>
      <CS.CommonBody>
        <CS.CommonTitle>Gallery</CS.CommonTitle>
        <ReactImageGallery
          items={images}
          lazyLoad={true}
          thumbnailPosition="right"
          showIndex={true}
          autoPlay={true}
          slideInterval={4000}
        />
      </CS.CommonBody>
    </CS.CommonContainer>
  );
}

export default Gallery;
