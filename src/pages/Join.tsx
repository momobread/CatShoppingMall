import styled from 'styled-components';
import InputLabel from '../ui/InputLabel';
import Button from '../ui/Button';
import { Controller, useForm, SubmitHandler } from 'react-hook-form';
import CustomDatePicker from '../components/CustomDatePicker';
import useJoin from '../hooks/useJoin';
import { UserType } from '../types/login';

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

  const onSubmit: SubmitHandler<UserType> = (userInfo) => {
    console.log(userInfo);
    JoinMember(userInfo);
  };
  console.log(formState.errors);

  return (
    <StyledJoin>
      <form id="join_form" onSubmit={handleSubmit(onSubmit)}>
        {/* <InputLabel title="아이디">
          <input id="id" {...register('user_id')} />
        </InputLabel> */}
        <InputLabel title="아이디(이메일)" error={formState.errors.user_email?.message}>
          <input
            id="user_email"
            {...register('user_email', {
              required: '아이디는 필수입니다',
              // pattern: {
              //   value: /[a-zA-Z0-9\-\_]{4,15}/,
              //   message: '아이디는 6~15자의 영문 소문자,숫자의 특수기호(-),(_)만 사용 가능 ',
              // },
            })}
            disabled={isJoining}
          />
        </InputLabel>
        <InputLabel title="비밀번호" error={formState.errors.user_pw?.message}>
          <input
            id="user_pw"
            {...register('user_pw', {
              required: '비밀번호는 필수입니다',
              min: 6,
              // pattern: {
              //   // value: /^[a-zA-Z]/,
              //   message:
              //     '비밀번호는 영문자로 시작하는 글자여야 하며,최소 특수문자 1개를 포함하는 8자리 글자여야 합니다',
              // },
            })}
            disabled={isJoining}
          />
        </InputLabel>
        <InputLabel title="이름">
          <input id="user_name" {...register('user_name')} disabled={isJoining} />
        </InputLabel>
        <InputLabel title="닉네임">
          <input id="user_nickname" {...register('user_nickname')} disabled={isJoining} />
        </InputLabel>
        <CustomDatePicker control={control} isJoining={isJoining} />
        <InputLabel title="전화번호">
          <input id="user_pw" {...register('user_phone')} disabled={isJoining} />
        </InputLabel>
        <Button type="submit">회원가입</Button>
      </form>
    </StyledJoin>
  );
};
export default Join;
