import styled from 'styled-components';

export const FloatingShareContainer = styled.div`
  position: fixed;
  bottom: 2vh;
  right: max(2vw, calc(52vw - 225px));
  z-index: 100;
`;

export const KakaoShareContainer = styled.div`
  width: 40px;
  height: 40px;
  margin: 1vh 5px;
`;
