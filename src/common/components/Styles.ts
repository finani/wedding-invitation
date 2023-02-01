import styled from 'styled-components';
import { color, media } from 'src/common/utils/styles';

export const OddContainer = styled.div`
  padding: 40px 0px 20px;

  background-color: ${color.white};
`;

export const EvenContainer = styled.div`
  padding: 40px 0px 20px;

  background-color: ${color.gray100};
`;

export const MainInfo = styled.div`
  margin: 0 15%;
  ${media.large} {
    margin: 0 10%;
  }
  ${media.medium} {
    margin: 0 5%;
  }
  ${media.xsmall} {
    margin: 0;
  }
`;

export const MainInfoGridList = styled.div`
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(2, minmax(200px, 1fr));

  margin: 0 15%;
  padding: 20px;

  ${media.small} {
    grid-template-columns: repeat(1, minmax(100px, 1fr));

    margin: 0;
    padding: 20px;
  }
`;

export const Title = styled.h1`
  margin: 0 15%;

  color: ${color.gray900};
`;

export const MainDetails = styled.div`
  color: ${color.gray900};
`;

export const MainImg = styled.img`
  width: 100%;
`;

export const MainPhoto = styled.div`
  width: 100%;
`;

export const HorizontalBar = styled.hr`
  width: 90%;
  height: 0.5vw;
  border: none;

  background-color: ${color.gray900};
`;
