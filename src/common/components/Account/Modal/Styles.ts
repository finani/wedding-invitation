import { color } from 'src/common/utils/styles';
import styled from 'styled-components';

export const ModalContainer = styled.div`
  display: flex;

  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const ModalBtn = styled.button`
  padding: 4px 8px;
  border: none;
  border-radius: 30px;

  font-size: 0.6rem;
  color: white;
  background-color: ${color.groomColor};

  cursor: pointer;
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;

  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;

  background: rgba(0, 0, 0, 0.5);
`;

export const ModalView = styled.div.attrs((props) => ({
  role: 'dialog',
}))`
  width: min(270px, 60vw);
  padding: 30px 20px;
  border-radius: 30px;

  color: ${color.gray900};
  background-color: white;
  text-align: center;
`;

export const ModalTimes = styled.div`
  font-size: 1rem;
  text-align: right;

  color: ${color.groomColor};
  line-height: 0rem;
`;

export const ModalBody = styled.h4`
  font-size: 0.8rem;
  text-align: center;

  line-height: 0.6rem;
`;
