import { useMutation } from '@tanstack/react-query';
import { logOut as logoutApi } from '../service/loginApi';
import useUserStore from '../store/user';

const useLogout = () => {
  const { setIsLogined } = useUserStore();
  const { mutate: logout } = useMutation({
    mutationFn: logoutApi,
    onSuccess: (success) => {
      if (success) {
        console.log('로그아웃 성공');
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
