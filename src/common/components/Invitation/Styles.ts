import { media } from 'src/common/utils/styles';
import styled from 'styled-components';

export const InvitationContainer = styled.div`
  padding: 20px 0px;
`;

export const InvitationTitle = styled.h1`
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

export const InvitationTable = styled.table`
  margin: auto;

  font-size: 2vw;
  ${media.medium} {
    font-size: 3vw;
  }
  ${media.xSmall} {
    font-size: 4vw;
  }
  text-align: center;

  line-height: 2em;
  letter-spacing: 6px;
`;

export const InvitationText = styled.h4`
  margin: 2em 1em 2em 1em;

  font-size: 1.5vw;
  ${media.medium} {
    font-size: 2.25vw;
  }
  ${media.xSmall} {
    font-size: 3vw;
  }
  text-align: center;

  line-height: 1.5em;
  letter-spacing: 3px;
`;
