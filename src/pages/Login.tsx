import styled from 'styled-components';
import { type SubmitHandler, useForm } from 'react-hook-form';
import InputLabel from '../ui/InputLabel';
import Logo from '../ui/Logo';
import { LoginType } from '../types/login';
import Button from '../ui/Button';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { loginApi } from '../service/loginApi';
import { useNavigate } from 'react-router-dom';
const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100dvw;
  header {
    height: 15rem;
    display: flex;
    justify-content: cneter;
    align-items: center;
    span {
      font-size: 3.8rem;
      font-weight: 500;
    }
  }
  form {
    border: 1px solid black;
    width: 50rem;
    height: 50rem;
    background-color: white;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
`;

const Login = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: login } = useMutation<null | any, Error, LoginType>({
    mutationFn: (logindata) => loginApi(logindata),
    onSuccess: (data) => {
      //null일때도 일단 성공으로 나온다 [아이디와 비번이 일치하지 않는경우]
      console.log(data, '데이터입니다');
      if (!data) return console.log('아이디와 비밀번호가 일치하지 않습니다');
      if (data.session) {
        queryClient.invalidateQueries(['user']);
        navigate('/');
      }
    },
    onError: (error) => {
      //url주소나 서버가 이상하거나 등의 에러
      console.log(error);
    },
  });
  const onSubmit: SubmitHandler<LoginType> = async (data: LoginType) => {
    login(data);
  };

  const { register, handleSubmit } = useForm<LoginType>();

  return (
    <StyledLogin>
      <header>
        <Logo />
        <span>Momo CatShop</span>
      </header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputLabel title="id">
          <input id="id" type="text" {...register('id')} />
        </InputLabel>
        <InputLabel title="password">
          <input id="password" type="text" {...register('password')} />
        </InputLabel>
        <Button>로그인</Button>
      </form>
    </StyledLogin>
  );
};
export default Login;
