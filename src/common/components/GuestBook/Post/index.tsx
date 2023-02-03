import * as CS from 'src/common/components/Styles';
import * as S from './Styles';

interface PostProps {
  name: string;
  message: string;
  date: Date;
}

function Post({ name, message, date }: PostProps) {
  return (
    <>
      <CS.HorizontalBar />
      <S.PostBox>
        <S.PostTitle>{name}</S.PostTitle>
        <S.PostDate>
          {date.toLocaleDateString()} {date.toLocaleTimeString()}
        </S.PostDate>
        <S.PostContent>{message}</S.PostContent>
      </S.PostBox>
    </>
  );
}

export default Post;
