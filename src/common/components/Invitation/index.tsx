import * as CS from 'src/common/components/Styles';

function Invitation() {
  return (
    <CS.CommonContainer>
      <CS.CommonBody>
        <CS.HorizontalBar />
        <CS.CommonTitle>이제 서로, 평생 함께</CS.CommonTitle>
        <CS.CommonSubTitle>
          작은 인연에서 시작된<br></br>
          저희 두 사람의 소중한 사랑이<br></br>
          아름다운 결실이 되어,<br></br>
          저희 두 사람이 하나가 될<br></br>뜻 깊은 날을 맞게 되었습니다.
          <br></br>
          <br></br>
          봄날을 화사하게 수놓은 청명한 햇살처럼,<br></br>
          서로에게 영원히 빛나는 별빛처럼,<br></br>
          서로 아끼며 밝고 건강하게 살겠습니다.<br></br>
          <br></br>
          귀한 걸음으로 저희 두 사람의 앞날을<br></br>
          축복해 주시면 감사하겠습니다.
        </CS.CommonSubTitle>
        <CS.CommonTable>
          <tbody>
            <tr>
              <td>위희량, 조단자의</td>
              <td>아들</td>
              <td>위인환</td>
            </tr>
            <tr>
              <td>김태우, 박소연의</td>
              <td>딸</td>
              <td>김채윤</td>
            </tr>
          </tbody>
        </CS.CommonTable>
      </CS.CommonBody>
      <CS.MainImg src="/images/studio/SYD_0487.jpg" alt="Love, love, love" />
    </CS.CommonContainer>
  );
}

export default Invitation;
