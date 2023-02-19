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
        <S.FlowerCardBody>
          <a href="https://www.barunsonflower.com/?barunid=301069">
            <S.FlowerCardTextContainer>
              <CS.CommonTable>
                <tbody>
                  <tr>
                    <S.FlowerCardTd>
                      <S.FlowerCardP>신랑, 신부님께</S.FlowerCardP>
                      <S.FlowerCardP>축하의 마음을 전해보세요</S.FlowerCardP>
                      <S.FlowerCardPBold>
                        <b>화환 선물하기 ►</b>
                      </S.FlowerCardPBold>
                    </S.FlowerCardTd>
                    <td>
                      <S.FlowerCardImageContainer>
                        <CS.MainImg
                          src="/images/barunson/flowers_img_v2.png"
                          alt="Love, love, love"
                        />
                      </S.FlowerCardImageContainer>
                    </td>
                  </tr>
                </tbody>
              </CS.CommonTable>
            </S.FlowerCardTextContainer>
          </a>
        </S.FlowerCardBody>
      </CS.CommonBody>
      <CS.CommonMargin margin="50px" />
    </CS.CommonContainer>
  );
}

export default FlowerCard;
