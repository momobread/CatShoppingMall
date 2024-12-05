import { useMutation, useQueryClient } from '@tanstack/react-query';
import { logOut as logoutApi } from '../service/loginApi';
import useUserStore from '../store/user';

const useLogout = () => {
  const { setIsLogined } = useUserStore();
  const queryClient = useQueryClient();
  const { mutate: logout } = useMutation({
    mutationFn: logoutApi,
    onSuccess: (success) => {
      if (success) {
        queryClient.invalidateQueries({ queryKey: ['user'] });
        setIsLogined(false);
      }
    },
    onError: (error) => {
      console.log(error, '로그인실패');
    },
  });

  return { logout };
};
export default useLogout;
