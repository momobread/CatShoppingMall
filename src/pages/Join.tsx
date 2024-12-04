import styled from 'styled-components';
import InputLabel from '../ui/InputLabel';
import Button from '../ui/Button';
import { Controller, useForm, SubmitHandler } from 'react-hook-form';
import { UserType } from '../types/user';
import CustomDatePicker from '../components/CustomDatePicker';
import useJoin from '../hooks/useJoin';

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
    gap: 1rem;
    align-items: center;
    border-radius: 10px;
  }

  /* .react-datepicker__tab-loop {
    width: 30rem;
    height: fit-content;
  } */
`;

const Join = () => {
  const { register, handleSubmit, control } = useForm<UserType>();
  const { JoinMember, isJoining } = useJoin();

  const onSubmit: SubmitHandler<UserType> = (userInfo) => {
    JoinMember(userInfo);
  };

  return (
    <StyledJoin>
      <form id="join_form" onSubmit={handleSubmit(onSubmit)}>
        {/* <InputLabel title="아이디">
          <input id="id" {...register('user_id')} />
        </InputLabel> */}
        <InputLabel title="아이디(이메일)">
          <input id="user_email" {...register('user_email')} />
        </InputLabel>
        <InputLabel title="비밀번호">
          <input id="user_pw" {...register('user_pw')} />
        </InputLabel>
        <InputLabel title="이름">
          <input id="user_name" {...register('user_name')} />
        </InputLabel>
        <InputLabel title="닉네임">
          <input id="user_nickname" {...register('user_nickname')} />
        </InputLabel>
        <CustomDatePicker control={control} />
        <InputLabel title="전화번호">
          <input id="user_pw" {...register('user_phone')} />
        </InputLabel>

        <Button>회원가입</Button>
      </form>
    </StyledJoin>
  );
};
export default Join;
