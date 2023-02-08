import styled from 'styled-components';

export const FloatingShareContainer = styled.div`
  position: fixed;
  bottom: 5vh;
  right: max(min(3vw, 10px), calc(50vw + min(3vw, 10px) - 225px));
  z-index: 10;
`;
