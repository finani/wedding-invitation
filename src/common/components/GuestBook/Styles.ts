import { media } from 'src/common/utils/styles';
import styled from 'styled-components';

export const GuestBookTitle = styled.h1`
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

export const GuestBookPost = styled.div`
  max-width: 80%;
  margin: auto;

  text-align: center;
`;

export const GuestBookBody = styled.div`
  max-width: 80%;
  margin: auto;
`;

export const Input = styled.input`
  width: 100%;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 20vh;
`;

export const Button = styled.button`
  width: 80%;
`;
