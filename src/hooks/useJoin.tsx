import { useMutation, useQueryClient } from '@tanstack/react-query';
import { signUp } from '../service/loginApi';
import { UserType } from '../types/user';
import { useNavigate } from 'react-router-dom';
import ModalStore from '../store/modal';
import activemodal from '../utils/activemodal';

const useJoin = () => {
  const navigate = useNavigate();
  const { setIsModal } = ModalStore();
  const { mutate: JoinMember, isPending: isJoining } = useMutation<void, Error, UserType>({
    mutationFn: (data: UserType) => signUp(data),
    onSuccess: () => {
      activemodal('회원가입이 되었습니다~ 로그인을 하여주세요');
      console.log('업데이트에 성공아형ㅆ스빈다');
      navigate('/member/login');
    },
    onError: () => {
      console.log('sdsdsd');
    },
  });
  return { JoinMember, isJoining };
};
export default useJoin;
