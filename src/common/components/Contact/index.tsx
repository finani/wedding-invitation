import PhoneIcon from '@mui/icons-material/Phone';
import SmsIcon from '@mui/icons-material/Sms';

import * as CS from 'src/common/components/Styles';
import { color } from 'src/common/utils/styles';
import CircleIcon from '../CircleIcon';

function Contact() {
  const defaultMessage = '결혼을 축하드립니다!';

  return (
    <CS.CommonContainer>
      <CS.CommonBody>
        <CS.CommonTable>
          <tbody>
            <tr>
              <td>신랑에게 연락하기</td>
              <td>
                <a href="tel:010-4715-0476">
                  <CircleIcon Icon={PhoneIcon} color={color.groomColor} />
                </a>
              </td>
              <td>
                <a href={'sms:010-4715-0476?&body=' + defaultMessage}>
                  <CircleIcon Icon={SmsIcon} color={color.groomColor} />
                </a>
              </td>
            </tr>
            <tr>
              <td>신부에게 연락하기</td>
              <td>
                <a href="tel:010-2361-4112">
                  <CircleIcon Icon={PhoneIcon} color={color.brideColor} />
                </a>
              </td>
              <td>
                <a href={'sms:010-2361-4112?&body=' + defaultMessage}>
                  <CircleIcon Icon={SmsIcon} color={color.brideColor} />
                </a>
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
                <a href="tel:010-2206-0475">
                  <CircleIcon Icon={PhoneIcon} color={color.groomColor} />
                </a>
                <a href={'sms:010-2206-0475?&body=' + defaultMessage}>
                  <CircleIcon Icon={SmsIcon} color={color.groomColor} />
                </a>
              </td>
              <td>
                <a href="tel:010-7777-6414">
                  <CircleIcon Icon={PhoneIcon} color={color.brideColor} />
                </a>
                <a href={'sms:010-7777-6414?&body=' + defaultMessage}>
                  <CircleIcon Icon={SmsIcon} color={color.brideColor} />
                </a>
              </td>
            </tr>
            <tr>
              <td>어머니 조단자</td>
              <td>어머니 박소연</td>
            </tr>
            <tr>
              <td>
                <a href="tel:010-8547-0476">
                  <CircleIcon Icon={PhoneIcon} color={color.groomColor} />
                </a>
                <a href={'sms:010-8547-0476?&body=' + defaultMessage}>
                  <CircleIcon Icon={SmsIcon} color={color.groomColor} />
                </a>
              </td>
              <td>
                <a href="tel:010-3777-7118">
                  <CircleIcon Icon={PhoneIcon} color={color.brideColor} />
                </a>
                <a href={'sms:010-3777-7118?&body=' + defaultMessage}>
                  <CircleIcon Icon={SmsIcon} color={color.brideColor} />
                </a>
              </td>
            </tr>
          </tbody>
        </CS.CommonTable>
      </CS.CommonBody>
    </CS.CommonContainer>
  );
}

export default Contact;
