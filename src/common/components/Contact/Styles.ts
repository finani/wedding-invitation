import { media } from 'src/common/utils/styles';
import styled from 'styled-components';

export const ContactContainer = styled.div`
  padding: 20px 0px;
`;

export const ContactTitle = styled.h1`
  margin: 1em;

  font-size: 4vw;
  ${media.medium} {
    font-size: 5vw;
  }
  ${media.xSmall} {
    font-size: 6vw;
  }
  text-align: center;
`;

export const ContactTable = styled.table`
  margin: auto;

  font-size: 2vw;
  ${media.medium} {
    font-size: 3vw;
  }
  ${media.xSmall} {
    font-size: 4vw;
  }
  text-align: center;

  line-height: 2em;
  letter-spacing: 6px;
`;

export const ContactGroomCircle = styled.div`
  width: 45px;
  height: 45px;
  background-color: #70b5f9;
  border-radius: 50%;
  margin: 0.5em;

  position: relative;
  display: inline-block;
`;

export const ContactBrideCircle = styled.div`
  width: 45px;
  height: 45px;
  background-color: #e7a33e;
  border-radius: 50%;
  margin: 0.5em;

  position: relative;
  display: inline-block;
`;

export const ContactIcon = styled.div`
  position: absolute;
  left: 22.5%;
  top: 15%;
`;

export const ContactText = styled.h4`
  margin: 2em;

  font-size: 1vw;
  ${media.medium} {
    font-size: 1.5vw;
  }
  ${media.xSmall} {
    font-size: 2vw;
  }
  text-align: left;

  line-height: 1.5em;
  letter-spacing: 1px;
`;
