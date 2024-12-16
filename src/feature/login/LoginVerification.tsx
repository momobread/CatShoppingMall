import { useEffect, type ReactNode } from 'react';
import useVerificate from '../../hooks/useVerificate';
import { useLocation } from 'react-router-dom';
import useUserStore from '../../store/user';

interface LoginVerificationProps {
  children: ReactNode;
}
const LoginVerification = ({ children }: LoginVerificationProps) => {
  const data = useVerificate(); // 로컬스토리지에 세션이 없으면 null이 나옴
  const { setIsLogined, isLogined, setUser_uuid, user_uuid } = useUserStore();
  console.log(isLogined);
  console.log(user_uuid);
  useEffect(() => {
    if (!data) {
      //로컬에 세션이 없는 경우
      console.log('세션이 없어요');
    }
    if (data) {
      // 로컬에 세션이 있는 경우
      console.log('세션이 잇어요~');
      setUser_uuid(data.user_uuid);
      setIsLogined(true);
    }
  }, [data]);

  // if("성공하면")
  //   const { data } = useVerificate();
  return children;
};
export default LoginVerification;
