import PhoneIcon from '@mui/icons-material/Phone';
import SmsIcon from '@mui/icons-material/Sms';

import * as CS from 'src/common/components/Styles';
import { color } from 'src/common/utils/styles';
import CircleIcon from '../CircleIcon';

function Contact() {
  const defaultMessage = '결혼을 축하드립니다!';

  return (
    <CS.CommonContainer>
      <CS.CommonMargin margin="30px" />
      <CS.CommonBody>
        <CS.CommonTextContainer>
          <CS.CommonTable>
            <tbody>
              <tr>
                <td>
                  <CS.CommonSubSubTitle>신랑에게 연락하기</CS.CommonSubSubTitle>
                </td>
                <td style={{ padding: '0px 0px 0px 20px' }}>
                  <a href="tel:010-4715-0476">
                    <CircleIcon Icon={PhoneIcon} color={color.groomColor} />
                  </a>
                </td>
                <td style={{ padding: '0px 0px 0px 10px' }}>
                  <a href={'sms:010-4715-0476?&body=' + defaultMessage}>
                    <CircleIcon Icon={SmsIcon} color={color.groomColor} />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <CS.CommonSubSubTitle>신부에게 연락하기</CS.CommonSubSubTitle>
                </td>
                <td style={{ padding: '0px 0px 0px 20px' }}>
                  <a href="tel:010-2361-4112">
                    <CircleIcon Icon={PhoneIcon} color={color.brideColor} />
                  </a>
                </td>
                <td style={{ padding: '0px 0px 0px 10px' }}>
                  <a href={'sms:010-2361-4112?&body=' + defaultMessage}>
                    <CircleIcon Icon={SmsIcon} color={color.brideColor} />
                  </a>
                </td>
              </tr>
            </tbody>
          </CS.CommonTable>
        </CS.CommonTextContainer>
        <CS.CommonMargin margin='50px' />
        <CS.CommonSubTitle>혼주에게 연락하기</CS.CommonSubTitle>
        <CS.CommonTable>
          <tbody>
            <tr>
              <td colSpan={2}>
                <CS.CommonTextContainer>
                  <CS.CommonSubSubTitle>
                    신랑 측
                  </CS.CommonSubSubTitle>
                </CS.CommonTextContainer>
              </td>
              <td colSpan={2} style={{ padding: '0px 0px 0px 60px' }}>
                <CS.CommonTextContainer>
                  <CS.CommonSubSubTitle>
                    신부 측
                  </CS.CommonSubSubTitle>
                </CS.CommonTextContainer>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <CS.CommonSubSubTitle>아버님 위희량</CS.CommonSubSubTitle> {/* TODO: 성, 이름만 bold */}
              </td>
              <td colSpan={2} style={{ padding: '0px 0px 0px 60px' }}>
                <CS.CommonSubSubTitle>아버님 김태우</CS.CommonSubSubTitle> {/* TODO: 성, 이름만 bold */}
              </td>
            </tr>
            <tr>
              <td>
                <a href="tel:010-2206-0475">
                  <CircleIcon Icon={PhoneIcon} color={color.groomColor} />
                </a>
              </td>
              <td>
                <a href={'sms:010-2206-0475?&body=' + defaultMessage}>
                  <CircleIcon Icon={SmsIcon} color={color.groomColor} />
                </a>
              </td>
              <td style={{ padding: '0px 0px 0px 60px' }}>
                <a href="tel:010-7777-6414">
                  <CircleIcon Icon={PhoneIcon} color={color.brideColor} />
                </a>
              </td>
              <td>
                <a href={'sms:010-7777-6414?&body=' + defaultMessage}>
                  <CircleIcon Icon={SmsIcon} color={color.brideColor} />
                </a>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <CS.CommonSubSubTitle>어머님 조단자</CS.CommonSubSubTitle> {/* TODO: 성, 이름만 bold */}
              </td>
              <td colSpan={2} style={{ padding: '0px 0px 0px 60px' }}>
                <CS.CommonSubSubTitle>어머님 박소연</CS.CommonSubSubTitle> {/* TODO: 성, 이름만 bold */}
              </td>
            </tr>
            <tr>
              <td>
                <a href="tel:010-8547-0476">
                  <CircleIcon Icon={PhoneIcon} color={color.groomColor} />
                </a>
              </td>
              <td>
                <a href={'sms:010-8547-0476?&body=' + defaultMessage}>
                  <CircleIcon Icon={SmsIcon} color={color.groomColor} />
                </a>
              </td>
              <td style={{ padding: '0px 0px 0px 60px' }}>
                <a href="tel:010-3777-7118">
                  <CircleIcon Icon={PhoneIcon} color={color.brideColor} />
                </a>
              </td>
              <td>
                <a href={'sms:010-3777-7118?&body=' + defaultMessage}>
                  <CircleIcon Icon={SmsIcon} color={color.brideColor} />
                </a>
              </td>
            </tr>
          </tbody>
        </CS.CommonTable>
      </CS.CommonBody>
      <CS.CommonMargin margin="40px" />
    </CS.CommonContainer>
  );
}

export default Contact;
