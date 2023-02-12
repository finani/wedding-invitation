import * as CS from 'src/common/components/Styles';
import Modal from './Modal';

function Account() {
  return (
    <CS.CommonContainer>
      <CS.HorizontalBar />
      <CS.CommonMargin margin='40px' />
      <CS.CommonTitle>마음 전하실 곳</CS.CommonTitle>
      <CS.CommonBody>
        <CS.CommonTextContainer>
          <CS.CommonTable>
            <tbody>
              <tr>
                <td colSpan={2}>
                  <CS.CommonSubSubTitle>신랑 위인환</CS.CommonSubSubTitle>
                </td>
                <td colSpan={2} style={{ paddingLeft: '60px' }}>
                  <CS.CommonSubSubTitle>신부 김채윤</CS.CommonSubSubTitle>
                </td>
              </tr>
              <tr>
                <td style={{ padding: '0px 0px 7px 0px' }}>
                  <Modal
                    btnTitle="계좌번호"
                    bank="우리은행"
                    account="1002-741-419049"
                    name="위인환"
                    copyString="1002741419049"
                  ></Modal>
                </td>
                <td>
                  <CS.ImageContainer width="50px">
                    <a
                      href="https://qr.kakaopay.com/Ej9TwHIQQ"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <CS.MainImg
                        src="/images/share/kakao-pay-small.png"
                        alt="kakao pay"
                      />
                    </a>
                  </CS.ImageContainer>
                </td>
                <td style={{ padding: '0px 0px 7px 60px' }}>
                  <Modal
                    btnTitle="계좌번호"
                    bank="-" // TODO
                    account="-" // TODO
                    name="김채윤"
                    copyString="-" // TODO
                  ></Modal>
                </td>
                <td>
                  <CS.ImageContainer width="50px">
                    <a
                      href="-" // TODO
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <CS.MainImg
                        src="/images/share/kakao-pay-small.png"
                        alt="kakao pay"
                      />
                    </a>
                  </CS.ImageContainer>
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <CS.CommonSubSubTitle>아버님 위희량</CS.CommonSubSubTitle>
                </td>
                <td colSpan={2} style={{ paddingLeft: '60px' }}>
                  <CS.CommonSubSubTitle>아버님 김태우</CS.CommonSubSubTitle>
                </td>
              </tr>
              <tr>
                <td style={{ padding: '0px 0px 7px 0px' }}>
                  <Modal
                    btnTitle="계좌번호"
                    bank="우리은행"
                    account="422-07-013808"
                    name="위희량"
                    copyString="42207013808"
                  ></Modal>
                </td>
                <td>
                  <CS.ImageContainer width="50px">
                    <a
                      href="https://qr.kakaopay.com/FTgdJiU7E"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <CS.MainImg
                        src="/images/share/kakao-pay-small.png"
                        alt="kakao pay"
                      />
                    </a>
                  </CS.ImageContainer>
                </td>
                <td style={{ padding: '0px 0px 7px 60px' }}>
                  <Modal
                    btnTitle="계좌번호"
                    bank="-" // TODO
                    account="-" // TODO
                    name="김태우"
                    copyString="-" // TODO
                  ></Modal>
                </td>
                <td>
                  <CS.ImageContainer width="50px">
                    <a
                      href="-" // TODO
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <CS.MainImg
                        src="/images/share/kakao-pay-small.png"
                        alt="kakao pay"
                      />
                    </a>
                  </CS.ImageContainer>
                </td>
              </tr>
            </tbody>
          </CS.CommonTable>
        </CS.CommonTextContainer>
      </CS.CommonBody>
      <CS.CommonMargin margin="40px" />
    </CS.CommonContainer>
  );
}

export default Account;
