import styled from 'styled-components';

export const InvitationBody = styled.h4`
  margin: 1rem;

  font-size: 0.9rem;
  text-align: center;

  line-height: 1.5rem;
`;

export const InvitationImageTd = styled.td.attrs(
  (props: { backgroundImage: string }) => props,
)`
  text-align: end;

  background-image: url(${(props) => props.backgroundImage});
  background-repeat: no-repeat;
  background-position: 0% 50%;
  background-size: 80%;
`;
