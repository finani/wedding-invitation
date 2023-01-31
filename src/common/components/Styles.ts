import styled from 'styled-components';
import { color, media } from 'src/common/utils/styles';

export const Title = styled.h1`
  margin: 0 15%;

  color: ${color.gray900};
`;

export const MainInfoGridList = styled.div`
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(2, minmax(200px, 1fr));

  margin: 0 15%;
  padding: 20px;

  ${media.medium} {
    grid-template-columns: repeat(1, minmax(100px, 1fr));

    padding: 20px;
  }
`;

export const MainPhoto = styled.div`
  width: 100%;
`;

export const MainDetails = styled.div`
  color: ${color.gray900};
`;

export const MainInfo = styled.div`
  margin: 0 15%;

  color: ${color.text};
`;

export const OddContainer = styled.div`
  padding: 40px 0px 20px;

  background-color: ${color.white};
`;

export const EvenContainer = styled.div`
  padding: 40px 0px 20px;

  background-color: ${color.gray100};
`;
