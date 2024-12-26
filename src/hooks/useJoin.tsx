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
      navigate('/member/login');
    },
    onError: () => {
      Activemodal('회원가입에 실패하였습니다. 관리자이게 문의하세요');
    },
  });
  return { JoinMember, isJoining };
};
export default useJoin;
