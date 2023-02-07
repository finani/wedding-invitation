import { useState } from 'react';

import * as CS from 'src/common/components/Styles';

function Account() {
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <CS.CommonContainer>
      <CS.CommonTitle>Account</CS.CommonTitle>
        <CS.CommonTable>
          <tbody>
            <tr>
              <td>신랑 위인환</td>
              <td>신부 김채윤</td>
            </tr>
            <tr>
              <td>계좌번호,
                <CS.ImageContainer width='60px' >
                  <a href='https://qr.kakaopay.com/Ej9TwHIQQ' target='_blank' rel='noopener noreferrer'>
                    <CS.MainImg src='/images/share/kakao-pay-small.png' alt='kakao pay' />
                  </a>
                </CS.ImageContainer>
              </td>
              <td>계좌번호, 카카오페이</td>
            </tr>
            <tr>
              <td>아버님 위희량</td>
              <td>아버님 김태우</td>
            </tr>
            <tr>
              <td>계좌번호, 카카오페이</td>
              <td>계좌번호, 카카오페이</td>
            </tr>
          </tbody>
        </CS.CommonTable>
    </CS.CommonContainer>
  );
}

export default Account;
