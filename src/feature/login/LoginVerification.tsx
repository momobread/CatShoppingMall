import { useEffect, type ReactNode } from 'react';
import useVerificate from '../../hooks/useVerificate';
import { useLocation } from 'react-router-dom';

interface LoginVerificationProps {
  children: ReactNode;
}
const LoginVerification = ({ children }: LoginVerificationProps) => {
  const { data } = useVerificate(); // 로컬스토리지에 세션이 없으면 null이 나옴

  // const { isLogined } = useUser();
  useEffect(() => {
    if (!data) console.log('세션이 없어요');
    if (data) console.log('세션이 잇어요~');
  }, [data]);

  // if("성공하면")
  //   const { data } = useVerificate();
  return children;
};
export default LoginVerification;
