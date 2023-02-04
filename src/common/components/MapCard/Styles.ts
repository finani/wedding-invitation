import { media } from 'src/common/utils/styles';
import styled from 'styled-components';

export const MapCardContainer = styled.div`
  padding: 20px 0px;
`;

export const MapDiv = styled.div`
  min-height: 70vh;
  margin: 5%;
`;

export const MapCardTitle = styled.h1`
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

export const MapCardText = styled.h4`
  margin: 2em;

  font-size: 1vw;
  ${media.medium} {
    font-size: 1.5vw;
  }
  ${media.xSmall} {
    font-size: 2vw;
  }
  text-align: left;

  line-height: 1.5em;
  letter-spacing: 1px;
`;
