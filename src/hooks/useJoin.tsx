import { useMutation, useQueryClient } from '@tanstack/react-query';
import { signUp } from '../service/loginApi';
import { UserType } from '../types/user';
import { useNavigate } from 'react-router-dom';

const useJoin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: JoinMember, isPending: isJoining } = useMutation<void, Error, UserType>({
    mutationFn: (data: UserType) => signUp(data),
    onSuccess: () => {
      console.log('업데이트에 성공아형ㅆ스빈다');
      //   queryClient.invalidateQueries({ queryKey: ['user'] });
      navigate('/');
    },
    onError: () => {
      console.log('sdsdsd');
    },
  });
  return { JoinMember, isJoining };
};
export default useJoin;
