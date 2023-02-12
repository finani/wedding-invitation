import ReactImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

import * as CS from 'src/common/components/Styles';

function Gallery() {
  const images = [
    {
      original: '/images/mobile/SYD_0013_padding.png',
      thumbnail: '/images/mobile/SYD_0013_padding.png',
    },
    {
      original: '/images/mobile/SYD_0056_padding.png',
      thumbnail: '/images/mobile/SYD_0056_padding.png',
    },
    {
      original: '/images/mobile/SYD_0140.jpg',
      thumbnail: '/images/mobile/SYD_0140.jpg',
    },
    {
      original: '/images/mobile/SYD_0237_padding.png',
      thumbnail: '/images/mobile/SYD_0237_padding.png',
    },
    {
      original: '/images/mobile/SYD_0270_padding.png',
      thumbnail: '/images/mobile/SYD_0270_padding.png',
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
      original: '/images/studio/SYD_0487_padding.png',
      thumbnail: '/images/studio/SYD_0487_padding.png',
    },
    {
      original: '/images/studio/SYD_0490_padding.png',
      thumbnail: '/images/studio/SYD_0490_padding.png',
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
      original: '/images/studio/SYD_0613.jpg',
      thumbnail: '/images/studio/SYD_0613.jpg',
    },
    {
      original: '/images/studio/SYD_0729_padding.png',
      thumbnail: '/images/studio/SYD_0729_padding.png',
    },
    {
      original: '/images/studio/SYD_0740_padding.png',
      thumbnail: '/images/studio/SYD_0740_padding.png',
    },
  ];

  return (
    <CS.CommonContainer>
      <CS.HorizontalBar />
      <CS.CommonMargin margin="40px" />
      <CS.CommonTitle>Gallery</CS.CommonTitle>
      <CS.CommonBody>
        <ReactImageGallery
          items={images}
          lazyLoad={true}
          thumbnailPosition="right"
          showIndex={true}
          autoPlay={true}
          slideInterval={4000}
        />
      </CS.CommonBody>
      <CS.CommonMargin margin="50px" />
    </CS.CommonContainer>
  );
}

export default Gallery;
