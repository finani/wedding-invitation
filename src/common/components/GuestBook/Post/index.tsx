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
      <S.PostBox>
        <CS.CommonTable>
          <tbody>
            <tr>
              <td style={{ width: '55%' }}>
                <S.PostTitle>{name}</S.PostTitle>
              </td>
              <td style={{ width: '45%' }}>
                <S.PostDate>
                  {date.toLocaleDateString()} {date.toLocaleTimeString()}
                </S.PostDate>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <S.PostContent>{message}</S.PostContent>
              </td>
            </tr>
          </tbody>
        </CS.CommonTable>
      </S.PostBox>
    </>
  );
}

export default Post;
