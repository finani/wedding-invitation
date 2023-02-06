import LinkIcon from '@mui/icons-material/Link';

import * as CS from 'src/common/components/Styles';
import * as S from './Styles';
import CircleIcon from '../CircleIcon';
import { color } from 'src/common/utils/styles';

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

const copyToClipboard = () => {
  if (!document.queryCommandSupported('copy')) {
    return alert('복사 기능이 지원되지 않는 브라우저입니다.');
  }

  const linkAddress = 'https://wedding-invitation-hazel.vercel.app';
  const el = document.createElement('textarea');
  el.value = linkAddress;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  const selected =
    document.getSelection()?.rangeCount! > 0
      ? document.getSelection()?.getRangeAt(0)
      : false;
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  if (selected) {
    document.getSelection()?.removeAllRanges();
    document.getSelection()?.addRange(selected);
  }
  alert('주소가 복사되었습니다.\n(' + linkAddress + ')');
};

function FloatingShare() {
  return (
    <S.FloatingShareContainer>
      <CS.ImageContainer onClick={shareKakao}>
        <CS.MainImg src="/images/share/kakao-talk-circle.png" alt="kakao talk" />
      </CS.ImageContainer>
      <div onClick={copyToClipboard}>
        <CircleIcon Icon={LinkIcon} color={color.groomColor} />
      </div>
    </S.FloatingShareContainer>
  );
}

export default FloatingShare;
