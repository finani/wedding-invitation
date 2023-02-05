import PhoneIcon from '@mui/icons-material/Phone';
import SmsIcon from '@mui/icons-material/Sms';

import * as CS from 'src/common/components/Styles';
import CircleIcon from './CircleIcon';

function Contact() {
  const groomColor = "#70b5f9";
  const brideColor = "#db7290";

  return (
    <CS.CommonContainer>
      <CS.CommonBody>
        <CS.CommonTable>
          <tbody>
            <tr>
              <td>신랑에게 연락하기</td>
              <td>
                <CircleIcon Icon={PhoneIcon} color={groomColor} />
              </td>
              <td>
                <CircleIcon Icon={SmsIcon} color={groomColor} />
              </td>
            </tr>
            <tr>
              <td>신부에게 연락하기</td>
              <td>
                <CircleIcon Icon={PhoneIcon} color={brideColor} />
              </td>
              <td>
                <CircleIcon Icon={SmsIcon} color={brideColor} />
              </td>
            </tr>
          </tbody>
        </CS.CommonTable>
        <CS.CommonTitle>혼주에게 연락하기</CS.CommonTitle>
        <CS.CommonTable>
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
                <CircleIcon Icon={PhoneIcon} color={groomColor} />
                <CircleIcon Icon={SmsIcon} color={groomColor} />
              </td>
              <td>
                <CircleIcon Icon={PhoneIcon} color={brideColor} />
                <CircleIcon Icon={SmsIcon} color={brideColor} />
              </td>
            </tr>
            <tr>
              <td>어머니 조단자</td>
              <td>어머니 박소연</td>
            </tr>
            <tr>
              <td>
                <CircleIcon Icon={PhoneIcon} color={groomColor} />
                <CircleIcon Icon={SmsIcon} color={groomColor} />
              </td>
              <td>
                <CircleIcon Icon={PhoneIcon} color={brideColor} />
                <CircleIcon Icon={SmsIcon} color={brideColor} />
              </td>
            </tr>
          </tbody>
        </CS.CommonTable>
      </CS.CommonBody>
    </CS.CommonContainer>
  );
}

export default Contact;
