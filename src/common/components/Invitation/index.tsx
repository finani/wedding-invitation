import * as CS from 'src/common/components/Styles';
import * as S from './Styles';

function Invitation() {
  return (
    <CS.CommonContainer>
      <CS.HorizontalBar />
      <CS.CommonMargin margin="40px" />
      <CS.CommonTitle>이제 서로, 평생 함께</CS.CommonTitle>
      <CS.CommonBody>
        <S.InvitationBody>
          작은 인연에서 시작된 소중한 사랑이<br></br>
          마침내 아름다운 결실이 되어,<br></br>
          저희 두 사람이 하나가 될<br></br>뜻 깊은 날을 맞게 되었습니다.
          <br></br>
          <br></br>
          봄날을 화사하게 수놓은 청명한 햇살처럼,<br></br>
          서로에게 영원히 빛나는 별빛처럼,<br></br>
          서로 아끼고 사랑하며 살겠습니다.<br></br>
          <br></br>
          귀한 걸음으로 저희 두 사람의 앞날을<br></br>
          축복해 주시면 감사하겠습니다.
        </S.InvitationBody>
        <CS.CommonTable>
          <tbody>
            <tr>
              <td>
                <b>위희량, 조단자</b>의
              </td>
              <S.InvitationImageTd
                backgroundImage="/images/brush_trans_groom_light.png"
                style={{ padding: '0px 0px 0px 5px' }}
              >
                &nbsp;아들&nbsp;&nbsp;&nbsp;<b>인환</b>
              </S.InvitationImageTd>
            </tr>
            <tr>
              <td>
                <b>김태우, 박소연</b>의
              </td>
              <S.InvitationImageTd
                backgroundImage="/images/brush_trans_bride_light.png"
                style={{ padding: '0px 0px 0px 5px' }}
              >
                &nbsp;&nbsp;딸
                <span style={{ fontSize: '15px' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <b>채윤</b>
              </S.InvitationImageTd>
            </tr>
          </tbody>
        </CS.CommonTable>
      </CS.CommonBody>
      <CS.MainImg src="/images/studio/SYD_0487.jpg" alt="Love, love, love" />
    </CS.CommonContainer>
  );
}

export default Invitation;
