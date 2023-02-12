import { useState } from 'react';

import * as CS from 'src/common/components/Styles';
import * as S from './Styles';
import copyToClipboard from 'src/common/utils';

interface ModalState {
  btnTitle: string;
  bank: string;
  account: string;
  name: string;
  copyString: string;
}

function Modal({ btnTitle, bank, account, name, copyString }: ModalState) {
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <S.ModalContainer>
      <S.ModalBtn onClick={openModalHandler}>{btnTitle}</S.ModalBtn>
      {isOpen ? (
        <S.ModalBackdrop onClick={openModalHandler}>
          <S.ModalView>
            <S.ModalTimes onClick={openModalHandler}>&times;</S.ModalTimes>
            <S.ModalBody>{bank}</S.ModalBody>
            <S.ModalBody>{account}</S.ModalBody>
            <S.ModalBody>{name}</S.ModalBody>
            <S.ModalBtn
              onClick={() => {
                copyToClipboard(copyString);
              }}
            >
              복사하기
            </S.ModalBtn>
          </S.ModalView>
        </S.ModalBackdrop>
      ) : null}
    </S.ModalContainer>
  );
}

export default Modal;
