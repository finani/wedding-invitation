import { createGlobalStyle } from 'styled-components';
import { color } from 'src/common/utils/styles';

export const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
  }
  a {
    color: ${color.wine};
    text-decoration: none;

    :hover {
      text-decoration: wavy underline;
    }
  }
`;
