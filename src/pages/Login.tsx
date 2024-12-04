import styled from 'styled-components';
import { type SubmitHandler, useForm } from 'react-hook-form';
import InputLabel from '../ui/InputLabel';
import Logo from '../ui/Logo';
import { LoginType } from '../types/login';
import Button from '../ui/Button';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { loginApi } from '../service/loginApi';
import { useNavigate } from 'react-router-dom';
import Footer from '../ui/Footer';

const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80rem;

  form {
    padding-top: 5rem;
    border: 1px solid black;
    width: 50rem;
    height: 30rem;
    background-color: white;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    border-radius: 10px;
  }
  #login_button {
    margin-top: 2rem;
    width: 30rem;
    background-color: var(--color-accent_blue);
  }
  #join_buttons {
    display: flex;
    gap: 1rem;
    margin-top: 3rem;
    button {
      border-radius: 0;
      border: none;
      padding: 0 2rem;
      height: fit-content;
    }
    button:nth-of-type(2) {
      border-left: 2px solid var(--color-accent_blue3);
      border-right: 2px solid var(--color-accent_blue3);
    }
  }
`;

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<LoginType>();
  const queryClient = useQueryClient();

  const { mutate: login, error } = useMutation<null | any, Error, LoginType>({
    mutationFn: (logindata) => loginApi(logindata),
    onSuccess: (data) => {
      //null일때도 일단 성공으로 나온다 [아이디와 비번이 일치하지 않는경우]

      if (!data) return console.log('아이디와 비밀번호가 일치하지 않습니다');
      if (data.session) {
        queryClient.invalidateQueries(['user']);
        navigate('/');
      }
    },
    onError: (error) => {
      //아이디와 비밀번호가 없을때
      if (error.message.includes('missing')) console.log('아이디와 비밀번호를 입력해주세요');
      //url주소나 서버가 이상하거나 등의 에러
      else {
        console.log(error.message);
        //모달추가
      }
    },
  });
  const onSubmit: SubmitHandler<LoginType> = async (data: LoginType) => {
    login(data);
  };

  return (
    <StyledLogin>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputLabel title="id">
          <input id="id" type="text" {...register('id')} />
        </InputLabel>
        <InputLabel title="password">
          <input id="password" type="text" {...register('password')} />
        </InputLabel>
        {error?.message.includes('missing') && (
          <span style={{ color: 'red' }}>아이디와 비밀번호를 입력하여 주세요</span>
        )}
        <Button type="submit" id="login_button">
          로그인
        </Button>
      </form>
      <div id="join_buttons">
        <Button type="button" onClick={() => navigate('/member/join')}>
          회원가입
        </Button>
        <Button type="button">아이디 찾기</Button>
        <Button type="button">비밀번호 찾기</Button>
      </div>
    </StyledLogin>
  );
};
export default Login;
