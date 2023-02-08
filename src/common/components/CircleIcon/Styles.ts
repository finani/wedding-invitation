import styled from 'styled-components';

export const CircleContainer = styled.div.attrs(
  (props: { circleSize: string; backGroundColor: string }) => props,
)`
  position: relative;
  display: inline-block;

  width: ${(props) => props.circleSize};
  height: ${(props) => props.circleSize};
  margin: 5px 0px -3px;
  border-radius: 50%;

  background-color: ${(props) => props.backGroundColor};

  cursor: pointer;
`;

export const IconContainer = styled.div.attrs(
  (props: { topOffset: string; leftOffset: string }) => props,
)`
  position: absolute;
  top: ${(props) => props.topOffset};
  left: ${(props) => props.leftOffset};
`;
