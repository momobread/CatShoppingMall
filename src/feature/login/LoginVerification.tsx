import { useEffect, type ReactNode } from 'react';
import useVerificate from '../../hooks/useVerificate';
import useUserStore from '../../store/user';
import { UserType } from '../../types/login';

interface LoginVerificationProps {
  children: ReactNode;
}
const LoginVerification = ({ children }: LoginVerificationProps) => {
  const data: UserType = useVerificate(); // 로컬스토리지에 세션이 없으면 null이 나옴
  const { setIsLogined, setUser_uuid, setUser_metaData, setUser_dailyCheck } = useUserStore();
  useEffect(() => {
    if (!data) {
      //로컬에 세션이 없는 경우
    }
    if (data) {
      // 로컬에 세션이 있는 경우
      setUser_uuid(data.user_uuid);
      setUser_metaData({ nickname: data.user_nickname, userPoint: data.user_point });
      setUser_dailyCheck(data.user_dailyCheck);
      setIsLogined(true);
    }
  }, [data]);

  // if("성공하면")
  //   const { data } = useVerificate();
  return children;
};
export default LoginVerification;
