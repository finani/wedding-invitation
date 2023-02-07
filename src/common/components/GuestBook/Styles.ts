import { color } from 'src/common/utils/styles';
import styled from 'styled-components';

export const GuestBookPost = styled.div`
  text-align: center;
`;

export const Input = styled.input`
  width: 80%;
  padding: 10px;
  border-radius: 10px;
  border: none;

  background-color: ${color.gray100};
  text-align: center;
`;

export const TextArea = styled.textarea`
  width: 80%;
  height: 20vh;
  padding: 10px;
  border-radius: 10px;
  border: none;

  background-color: ${color.gray100};
  text-align: center;
`;

export const Button = styled.button`
  width: 60%;
  padding: 5px;
  border-radius: 10px;
  border: none;

  color: white;
  background-color: ${color.groomColor};
`;
