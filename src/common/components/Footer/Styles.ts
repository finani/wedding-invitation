import { media } from 'src/common/utils/styles';
import styled from 'styled-components';

export const FooterContainer = styled.div`
  padding: 20px 0px;
`;

export const FooterBody = styled.h4`
  margin: 0 2em;

  font-size: 1.5vw;
  ${media.medium} {
    font-size: 2.25vw;
  }
  ${media.xSmall} {
    font-size: 3vw;
  }
  text-align: right;
`;
