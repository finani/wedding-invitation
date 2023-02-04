import styled from 'styled-components';

export const CircleContainer = styled.div.attrs(
  (props: { backGroundColor: string }) => props,
)`
  position: relative;
  display: inline-block;

  width: 40px;
  height: 40px;
  margin: 0 5px;
  border-radius: 50%;

  background-color: ${(props) => props.backGroundColor};
`;

export const IconContainer = styled.div`
  position: absolute;
  left: 8px;
  top: 8px;
`;
