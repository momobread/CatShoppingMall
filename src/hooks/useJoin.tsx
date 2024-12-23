import { useMutation } from '@tanstack/react-query';
import { signUp } from '../service/loginApi';
import { useNavigate } from 'react-router-dom';
import { UserType } from '../types/login';
import Activemodal from '../utils/ActiveModal';

const useJoin = () => {
  const navigate = useNavigate();
  const { mutate: JoinMember, isPending: isJoining } = useMutation<void, Error, UserType>({
    mutationFn: (data: UserType) => signUp(data),
    onSuccess: () => {
      Activemodal('회원가입이 되었습니다~ 로그인을 하여주세요');
      console.log('업데이트에 성공아형ㅆ스빈다');
      navigate('/member/login');
    },
    onError: (e) => {
      console.log(e);
      console.log('sdsdsd');
    },
  });
  return { JoinMember, isJoining };
};
export default useJoin;
