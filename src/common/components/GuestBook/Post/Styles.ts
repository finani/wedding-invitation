import { color, media } from 'src/common/utils/styles';
import styled from 'styled-components';

export const PostBox = styled.div`
  width: 90%;
  margin: auto;

  background-color: white;
`;

export const PostTitle = styled.h1`
  margin: 1em;

  font-size: 3vw;
  ${media.medium} {
    font-size: 3.75vw;
  }
  ${media.xSmall} {
    font-size: 4.5vw;
  }
  color: ${color.gray700};
`;

export const PostDate = styled.p`
  margin: 1em 2em 1em 2em;

  font-size: 2vw;
  ${media.medium} {
    font-size: 2.5vw;
  }
  ${media.xSmall} {
    font-size: 3vw;
  }
  color: ${color.gray300};
`;

export const PostContent = styled.p`
  margin: 1em;

  font-size: 3vw;
  ${media.medium} {
    font-size: 3.75vw;
  }
  ${media.xSmall} {
    font-size: 4.5vw;
  }
  color: ${color.gray500};
`;
