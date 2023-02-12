import * as CS from 'src/common/components/Styles';
import * as S from './Styles';

function FlowerCard() {
  return (
    <CS.CommonContainer>
      <CS.HorizontalBar />
      <CS.CommonBody>
        <CS.MainImg
          src="/images/barunson/tit_remittance_fla.png"
          alt="Love, love, love"
        />
        <S.FlowerCardTextContainer>
          <CS.CommonTable> {/* TODO: 사이즈 조정 */}
            <tbody>
              <tr>
                <td style={{ width: '65%', textAlign: 'left' }}>
                  <S.FlowerCardP>신랑, 신부님께</S.FlowerCardP>
                  <S.FlowerCardP>축하의 마음을 전해보세요</S.FlowerCardP>
                  <S.FlowerCardPBold>
                    <b>화환 선물하기 ►</b>
                  </S.FlowerCardPBold>
                </td>
                <td>
                  <a href="https://www.barunsonflower.com/?barunid=301069">
                    <S.FlowerCardImageContainer>
                      <CS.MainImg
                        src="/images/barunson/flowers_img_v2.png"
                        alt="Love, love, love"
                      />
                    </S.FlowerCardImageContainer>
                  </a>
                </td>
              </tr>
            </tbody>
          </CS.CommonTable>
        </S.FlowerCardTextContainer>
      </CS.CommonBody>
      <CS.CommonMargin margin="50px" />
    </CS.CommonContainer>
  );
}

export default FlowerCard;
