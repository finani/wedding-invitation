import * as CS from 'src/common/components/Styles';
import Modal from './Modal';

function Account() {
  return (
    <CS.CommonContainer>
      <CS.CommonTitle>Account</CS.CommonTitle>
        <CS.CommonTable>
          <tbody>
            <tr>
              <td colSpan={2}>신랑 위인환</td>
              <td colSpan={2} style={{ paddingLeft: '20px' }}>신부 김채윤</td>
            </tr>
            <tr>
              <td style={{ padding: '0px 0px 10px 0px' }}>
                <Modal btnTitle='계좌번호' bank='우리은행' account='1002-741-419049' name='위인환' copyString='1002741419049'></Modal>
              </td>
              <td>
                <CS.ImageContainer width='60px' >
                  <a href='https://qr.kakaopay.com/Ej9TwHIQQ' target='_blank' rel='noopener noreferrer'>
                    <CS.MainImg src='/images/share/kakao-pay-small.png' alt='kakao pay' />
                  </a>
                </CS.ImageContainer>
              </td>
              <td style={{ padding: '0px 0px 10px 20px' }}>
                <Modal btnTitle='계좌번호' bank='우리은행' account='1002-741-419049' name='위인환' copyString='1002741419049'></Modal>
              </td>
              <td>
                <CS.ImageContainer width='60px' >
                  <a href='https://qr.kakaopay.com/Ej9TwHIQQ' target='_blank' rel='noopener noreferrer'>
                    <CS.MainImg src='/images/share/kakao-pay-small.png' alt='kakao pay' />
                  </a>
                </CS.ImageContainer>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>아버님 위희량</td>
              <td colSpan={2} style={{ paddingLeft: '20px' }}>아버님 김태우</td>
            </tr>
            <tr>
              <td style={{ padding: '0px 0px 10px 0px' }}>
                <Modal btnTitle='계좌번호' bank='우리은행' account='1002-741-419049' name='위인환' copyString='1002741419049'></Modal>
              </td>
              <td>
                <CS.ImageContainer width='60px' >
                  <a href='https://qr.kakaopay.com/Ej9TwHIQQ' target='_blank' rel='noopener noreferrer'>
                    <CS.MainImg src='/images/share/kakao-pay-small.png' alt='kakao pay' />
                  </a>
                </CS.ImageContainer>
              </td>
              <td style={{ padding: '0px 0px 10px 20px' }}>
                <Modal btnTitle='계좌번호' bank='우리은행' account='1002-741-419049' name='위인환' copyString='1002741419049'></Modal>
              </td>
              <td>
                <CS.ImageContainer width='60px' >
                  <a href='https://qr.kakaopay.com/Ej9TwHIQQ' target='_blank' rel='noopener noreferrer'>
                    <CS.MainImg src='/images/share/kakao-pay-small.png' alt='kakao pay' />
                  </a>
                </CS.ImageContainer>
              </td>
            </tr>
          </tbody>
        </CS.CommonTable>
    </CS.CommonContainer>
  );
}

export default Account;
