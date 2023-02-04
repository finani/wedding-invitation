import PhoneIcon from '@mui/icons-material/Phone';
import SmsIcon from '@mui/icons-material/Sms';

import * as CS from 'src/common/components/Styles';
import * as S from './Styles';

function Contact() {
  return (
    <S.ContactContainer>
      <CS.MainInfo>
        <S.ContactTable>
          <tbody>
            <tr>
              <td>신랑에게 연락하기</td>
              <td>
                <S.ContactGroomCircle>
                  <S.ContactIcon>
                    <PhoneIcon fontSize="medium" style={{ color: 'white' }} />
                  </S.ContactIcon>
                </S.ContactGroomCircle>
              </td>
              <td>
                <S.ContactGroomCircle>
                  <S.ContactIcon>
                    <SmsIcon fontSize="medium" style={{ color: 'white' }} />
                  </S.ContactIcon>
                </S.ContactGroomCircle>
              </td>
            </tr>
            <tr>
              <td>신부에게 연락하기</td>
              <td>
                <S.ContactBrideCircle>
                  <S.ContactIcon>
                    <PhoneIcon fontSize="medium" style={{ color: 'white' }} />
                  </S.ContactIcon>
                </S.ContactBrideCircle>
              </td>
              <td>
                <S.ContactBrideCircle>
                  <S.ContactIcon>
                    <SmsIcon fontSize="medium" style={{ color: 'white' }} />
                  </S.ContactIcon>
                </S.ContactBrideCircle>
              </td>
            </tr>
          </tbody>
        </S.ContactTable>
        <S.ContactTitle>혼주에게 연락하기</S.ContactTitle>
        <S.ContactTable>
          <tbody>
            <tr>
              <td>신랑측 혼주</td>
              <td>신부측 혼주</td>
            </tr>
            <tr>
              <td>아버지 위희량</td>
              <td>아버지 김태우</td>
            </tr>
            <tr>
              <td>
                <S.ContactGroomCircle>
                  <S.ContactIcon>
                    <PhoneIcon fontSize="medium" style={{ color: 'white' }} />
                  </S.ContactIcon>
                </S.ContactGroomCircle>
                <S.ContactGroomCircle>
                  <S.ContactIcon>
                    <SmsIcon fontSize="medium" style={{ color: 'white' }} />
                  </S.ContactIcon>
                </S.ContactGroomCircle>
              </td>
              <td>
                <S.ContactBrideCircle>
                  <S.ContactIcon>
                    <PhoneIcon fontSize="medium" style={{ color: 'white' }} />
                  </S.ContactIcon>
                </S.ContactBrideCircle>
                <S.ContactBrideCircle>
                  <S.ContactIcon>
                    <SmsIcon fontSize="medium" style={{ color: 'white' }} />
                  </S.ContactIcon>
                </S.ContactBrideCircle>
              </td>
            </tr>
            <tr>
              <td>어머니 조단자</td>
              <td>어머니 박소연</td>
            </tr>
            <tr>
              <td>
                <S.ContactGroomCircle>
                  <S.ContactIcon>
                    <PhoneIcon fontSize="medium" style={{ color: 'white' }} />
                  </S.ContactIcon>
                </S.ContactGroomCircle>
                <S.ContactGroomCircle>
                  <S.ContactIcon>
                    <SmsIcon fontSize="medium" style={{ color: 'white' }} />
                  </S.ContactIcon>
                </S.ContactGroomCircle>
              </td>
              <td>
                <S.ContactBrideCircle>
                  <S.ContactIcon>
                    <PhoneIcon fontSize="medium" style={{ color: 'white' }} />
                  </S.ContactIcon>
                </S.ContactBrideCircle>
                <S.ContactBrideCircle>
                  <S.ContactIcon>
                    <SmsIcon fontSize="medium" style={{ color: 'white' }} />
                  </S.ContactIcon>
                </S.ContactBrideCircle>
              </td>
            </tr>
          </tbody>
        </S.ContactTable>
      </CS.MainInfo>
    </S.ContactContainer>
  );
}

export default Contact;
