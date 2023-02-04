import { media } from 'src/common/utils/styles';
import styled from 'styled-components';

export const GalleryTitle = styled.h1`
  margin: 1em;

  font-size: 4vw;
  ${media.medium} {
    font-size: 5vw;
  }
  ${media.xSmall} {
    font-size: 6vw;
  }
  text-align: center;
`;

export const GalleryBody = styled.div`
  max-width: 45vh;
  margin: auto;
`;
