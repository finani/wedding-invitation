import { useState } from 'react';

import * as CS from 'src/common/components/Styles';
import * as S from './Styles';

interface ModalState {
  btnTitle: string;
  bank: string;
  account: string;
  name: string;
  copyString: string;
}

function Modal({btnTitle, bank, account, name, copyString}: ModalState) {
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  const copyToClipboard = () => {
    if (!document.queryCommandSupported('copy')) {
      return alert('복사 기능이 지원되지 않는 브라우저입니다.');
    }

    const el = document.createElement('textarea');
    el.value = copyString;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    const selected =
      document.getSelection()?.rangeCount! > 0
        ? document.getSelection()?.getRangeAt(0)
        : false;
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    if (selected) {
      document.getSelection()?.removeAllRanges();
      document.getSelection()?.addRange(selected);
    }
    alert('복사되었습니다.\n( ' + copyString + ' )');
  };

  return (
    <S.ModalContainer>
      <S.ModalBtn onClick={openModalHandler}>
        {btnTitle}
      </S.ModalBtn>
      {isOpen ?
      <S.ModalBackdrop onClick={openModalHandler}>
        <S.ModalView>
          <S.ModalTimes onClick={openModalHandler}>&times;</S.ModalTimes>
          <S.ModalBody>{bank}</S.ModalBody>
          <S.ModalBody>{account}</S.ModalBody>
          <S.ModalBody>{name}</S.ModalBody>
          <S.ModalBtn onClick={copyToClipboard}>복사하기</S.ModalBtn>
        </S.ModalView>
      </S.ModalBackdrop>
      : null}
    </S.ModalContainer>
  );
}

export default Modal;
