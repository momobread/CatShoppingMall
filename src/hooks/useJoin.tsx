import { useMutation, useQueryClient } from '@tanstack/react-query';
import { signUp } from '../service/loginApi';
import { UserType } from '../types/user';
import { useNavigate } from 'react-router-dom';
import ModalStore from '../store/modal';

const useJoin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { setIsModal } = ModalStore();
  const { mutate: JoinMember, isPending: isJoining } = useMutation<void, Error, UserType>({
    mutationFn: (data: UserType) => signUp(data),
    onSuccess: () => {
      setIsModal();
      console.log('업데이트에 성공아형ㅆ스빈다');
      //   queryClient.invalidateQueries({ queryKey: ['user'] });
      navigate('/member/login');
    },
    onError: () => {
      console.log('sdsdsd');
    },
  });
  return { JoinMember, isJoining };
};
export default useJoin;
