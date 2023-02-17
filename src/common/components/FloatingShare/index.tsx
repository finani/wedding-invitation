import LinkIcon from '@mui/icons-material/Link';

import * as CS from 'src/common/components/Styles';
import * as S from './Styles';
import CircleIcon from '../CircleIcon';
import { color } from 'src/common/utils/styles';
import copyToClipboard from 'src/common/utils';

const shareKakao = () => {
  window.Kakao.Share.sendDefault({
    objectType: 'location',
    address: '서울 구로구 디지털로26길 38 지타워몰 2층',
    addressTitle: '지타워컨벤션',
    content: {
      title: '인환 ♥︎ 채윤 결혼식',
      description: '2023년 4월 8일\n많이 많이 축하해주세요~♥︎',
      imageUrl:
        'https://wedding-invitation-hazel.vercel.app/images/studio/SYD_0613.jpg',
      link: {
        mobileWebUrl: 'https://wedding-invitation-hazel.vercel.app',
        webUrl: 'https://wedding-invitation-hazel.vercel.app',
      },
    },
    social: {
      likeCount: 17171771,
      commentCount: 486,
      sharedCount: 1052,
    },
    buttons: [
      {
        title: '웹으로 보기',
        link: {
          mobileWebUrl: 'https://wedding-invitation-hazel.vercel.app',
          webUrl: 'https://wedding-invitation-hazel.vercel.app',
        },
      },
    ],
  });
};

function FloatingShare() {
  return (
    <S.FloatingShareContainer>
      <CS.ImageContainer width="40px" onClick={shareKakao}>
        <CS.MainImg
          src="/images/share/kakao-talk-circle.png"
          alt="kakao talk"
        />
      </CS.ImageContainer>
      <div
        onClick={() => {
          copyToClipboard('https://wedding-invitation-hazel.vercel.app?showAccount=true');
        }}
        style={{ margin: '0px 0px 0px 4px' }}
      >
        <CircleIcon
          Icon={LinkIcon}
          circleSize="40px"
          topOffset="8px"
          leftOffset="8px"
          fontSize="medium"
          color={color.groomColor}
        />
      </div>
    </S.FloatingShareContainer>
  );
}

export default FloatingShare;
