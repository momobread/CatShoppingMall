import { useMutation, useQueryClient } from '@tanstack/react-query';
import { logOut as logoutApi } from '../service/loginApi';
import useUserStore from '../store/user';
import { useNavigate } from 'react-router-dom';

const useLogout = () => {
  const { setIsLogined, setUser_uuid, user_uuid } = useUserStore();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: logout } = useMutation({
    mutationFn: logoutApi,
    onSuccess: (success) => {
      if (success) {
        queryClient.invalidateQueries({ queryKey: ['user'] });
        queryClient.removeQueries({ queryKey: ['cart', user_uuid] });
        setUser_uuid(null);
        setIsLogined(false);
        navigate('/');
      }
    },
    onError: (error) => {
      console.log(error, '로그인실패');
    },
  });

  return { logout };
};
export default useLogout;
