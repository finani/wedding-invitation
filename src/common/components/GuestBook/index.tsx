import { useEffect, useState } from 'react';

import { db } from 'src/common/firebase/Firebase';
import {
  query,
  collection,
  orderBy,
  addDoc,
  onSnapshot,
} from 'firebase/firestore';

import * as CS from 'src/common/components/Styles';
import * as S from './Styles';
import Post from './Post';

import { WeddingPost } from 'src/common/types/WeddingPost';

function GuestBook() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [weddingPosts, setWeddingPost] = useState<WeddingPost[]>([]);

  useEffect(() => {
    // https://firebase.google.com/docs/firestore/quickstart#read_data
    const dbWeddingPosts = query(
      collection(db, 'wedding-posts'),
      orderBy('timestamp', 'desc'),
    );
    onSnapshot(dbWeddingPosts, (snapshot) => {
      const weddingPosts: WeddingPost[] = snapshot.docs.reduce(
        (acc: WeddingPost[], doc) => {
          const tempWeddingPost = new WeddingPost(doc.id, doc.data());
          acc.push(tempWeddingPost);
          return acc;
        },
        [],
      );
      setWeddingPost(weddingPosts);
    });
  }, [weddingPosts.length]);

  const sendPost = (e: any) => {
    e.preventDefault();

    const trimmedName = name.trimStart().trimEnd();
    const trimmedMessage = message.trimStart().trimEnd();
    if (trimmedName === '' || trimmedMessage === '') {
      alert('이름과 내용을 채워주세요.');
      return;
    }

    // https://firebase.google.com/docs/firestore/quickstart#add_data
    addDoc(collection(db, 'wedding-posts'), {
      name: trimmedName,
      message: trimmedMessage,
      timestamp: new Date().getTime(),
    });

    setMessage('');
  };

  return (
    <CS.EvenContainer>
      <CS.MainInfo>
        <S.GuestBookTitle>GuestBook</S.GuestBookTitle>
        <S.GuestBookPost>
          <form>
            <S.Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="이름"
              required
            />
            <br></br>
            <br></br>
            <S.TextArea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="내용"
              required
            />
            <br></br>
            <br></br>
            <S.Button onClick={sendPost} type="submit">
              등록하기
            </S.Button>
          </form>
        </S.GuestBookPost>
        <S.GuestBookBody>
          {weddingPosts.map(({ id, name, message, date }) => (
            <Post key={id} name={name} message={message} date={date} />
          ))}
        </S.GuestBookBody>
      </CS.MainInfo>
    </CS.EvenContainer>
  );
}

export default GuestBook;
