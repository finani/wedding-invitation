import styled from 'styled-components';
import { color } from 'src/common/utils/styles';

export const CommonMargin = styled.div.attrs(
  (props: { margin: string }) => props,
)`
  margin: ${(props) => props.margin};
`;

export const CommonContainer = styled.div`
  max-width: 450px;
  margin: auto;
`;

export const CommonTextContainer = styled.div`
  margin: 10px;
  padding: 5px 20px;
  border-radius: 20px;
  background-color: ${color.gray100};
`;

export const CommonBody = styled.div`
  max-width: 90%;
  margin: auto;
`;

export const CommonTitle = styled.h1`
  margin: 1rem;

  font-size: 1.7rem;
  text-align: center;
`;

export const CommonSubTitle = styled.h4`
  font-size: 1.1rem;
  text-align: center;

  line-height: 0rem;
`;

export const CommonSubTitleLong = styled.h4`
  font-size: 1rem;
  text-align: center;
`;

export const CommonSubSubTitle = styled.h4`
  font-size: 0.8rem;
  text-align: center;

  line-height: 0.5rem;
`;

export const CommonP = styled.p`
  font-size: 0.8rem;

  line-height: 1.4rem;
`;

export const CommonTable = styled.table`
  margin: auto;

  font-size: 1.1rem;
  text-align: center;

  line-height: 2rem;
  letter-spacing: 0.1rem;
`;

export const HorizontalBar = styled.hr`
  width: 30%;
  height: 3px;
  border: none;

  background-color: ${color.gray900};
`;

export const MainImg = styled.img`
  width: 100%;
`;

export const ImageContainer = styled.div.attrs(
  (props: { width: string }) => props,
)`
  width: ${(props) => props.width};
  margin: 0px 5px;

  cursor: pointer;
`;
