import { color } from 'src/common/utils/styles';
import styled from 'styled-components';

export const PostBox = styled.div`
  width: 90%;
  margin: auto auto 20px;
  padding: 2px;
  border-radius: 20px;

  background-color: ${color.gray100};
`;

export const PostTitle = styled.h4`
  font-size: 1.1rem;

  color: ${color.groomColor};
  line-height: 0rem;
`;

export const PostDate = styled.p`
  font-size: 0.5rem;
  text-align: right;
  color: ${color.gray300};
`;

export const PostContent = styled.p`
  margin: 1rem;

  font-size: 0.8rem;
  text-align: left;
  color: ${color.brideColor};
`;
