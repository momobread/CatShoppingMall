import styled from 'styled-components';
import InputLabel from '../ui/InputLabel';
import Button from '../ui/Button';
import { Controller, useForm, SubmitHandler } from 'react-hook-form';
import CustomDatePicker from '../components/CustomDatePicker';
import useJoin from '../hooks/useJoin';
import { UserType } from '../types/login';
import { useRef, useState } from 'react';

const StyledJoin = styled.div`
  display: flex;
  justify-content: center;
  height: 100rem;
  #join_form {
    padding-top: 5rem;
    border: 1px solid black;
    width: 50rem;
    height: 70rem;
    background-color: white;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    border-radius: 10px;
  }

  /* .react-datepicker__tab-loop {
    width: 30rem;
    height: fit-content;
  } */
`;

const Join = () => {
  const { register, handleSubmit, control, formState } = useForm<UserType>();
  const { JoinMember, isJoining } = useJoin();

  const pwCheckInput = useRef<HTMLInputElement | null>(null);
  const [pwCheckError, setPwCheckError] = useState<string | null>(null);

  const onSubmit: SubmitHandler<UserType> = (userInfo) => {
    console.log(pwCheckInput.current?.value);
    console.log(userInfo);
    if (pwCheckInput.current?.value != userInfo.user_pw) {
      setPwCheckError('비밀번호가 일치하지 않습니다');
      return;
    } else {
      setPwCheckError('');
    }
    console.log('실행중');
    // JoinMember(userInfo);
  };
  console.log(formState.errors);

  return (
    <StyledJoin>
      <form id="join_form" onSubmit={handleSubmit(onSubmit)}>
        <InputLabel title="아이디(이메일)" error={formState.errors.user_email?.message}>
          <input
            id="user_email"
            {...register('user_email', {
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: '이메일 형식이 맞는지 확인하여 주세요 (Ex. momo@gmail.com)',
              },
            })}
            disabled={isJoining}
          />
        </InputLabel>
        <InputLabel title="비밀번호" error={formState.errors.user_pw?.message}>
          <input
            id="user_pw"
            {...register('user_pw', {
              pattern: {
                value: /^[a-zA-Z](?=.*[^a-zA-Z0-9ㄱ-ㅎ가-힣])[a-zA-Z0-9ㄱ-ㅎ가-힣!@#$%^&*(),.?":{}|<>]{7,}$/,
                message:
                  '비밀번호는 영문자로 시작하는 글자여야 하며,최소 특수문자 1개를 포함하는 8자리 글자여야 합니다',
              },
            })}
            disabled={isJoining}
          />
        </InputLabel>
        <InputLabel title="비밀번호 확인" error={pwCheckError ? pwCheckError : ''}>
          <input type="text" ref={pwCheckInput} />
        </InputLabel>
        <InputLabel title="이름">
          <input
            id="user_name"
            {...register('user_name', {
              pattern: {
                value: /^[a-zA-Zㄱ-ㅎ가-힣]{2,}$/,
                message: '최소 2자리 이상 글자여야 합니다',
              },
              validate: (userName) => /^[a-zA-Zㄱ-ㅎ가-힣]*$/.test(userName) || '특수문자가 포함되지 않아야 합니다',
            })}
            disabled={isJoining}
          />
        </InputLabel>
        <InputLabel title="닉네임">
          <input
            id="user_nickname"
            {...register('user_nickname', {
              pattern: {
                value: /^[a-zA-Z가-힣ㄱ-ㅎ]{3,}$/,
                message: '닉네임은 최소 3글자 이상이여야 합니다',
              },
              validate: (nickname) =>
                /^[a-zA-Zㄱ-ㅎ가-힣]*$/.test(nickname) || '첫글자는 특수문자나 숫자를 제외하여야 합니다',
            })}
            disabled={isJoining}
          />
        </InputLabel>
        <CustomDatePicker control={control} isJoining={isJoining} />
        <InputLabel title="전화번호">
          <input
            id="user_pw"
            {...register('user_phone', {
              pattern: {
                value: /^\d{3}-\d{3,4}-\d{4}$/,
                message: '전화번호 형식을 확인하여 주세요 (Ex.010-3333-3333/)',
              },
              validate: (phoneNumber) => /^(010|011|012)/.test(phoneNumber) || '010,012,011로 시작하는 번호여야 합니다',
            })}
            disabled={isJoining}
          />
        </InputLabel>
        <Button type="submit">회원가입</Button>
      </form>
    </StyledJoin>
  );
};
export default Join;
