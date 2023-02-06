import styled from 'styled-components';
import { color } from 'src/common/utils/styles';

export const CommonContainer = styled.div`
  max-width: 450px;
  margin: auto;
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
  margin: 1rem;

  font-size: 0.8rem;
  text-align: center;

  line-height: 1.5rem;
`;

export const CommonText = styled.text`
  margin: 1rem;

  font-size: 0.8rem;
  text-align: center;

  line-height: 1.5rem;
`;

export const CommonTable = styled.table`
  margin: auto;

  font-size: 1.1rem;
  text-align: center;

  line-height: 2rem;
  letter-spacing: 0.1rem;
`;

export const HorizontalBar = styled.hr`
  width: 90%;
  height: 0.5vw;
  border: none;

  background-color: ${color.gray900};
`;

export const MainImg = styled.img`
  width: 100%;
`;

export const ImageContainer = styled.div`
  width: 40px;
  height: 40px;
  margin: 1vh 5px;

  cursor: pointer;
`;
