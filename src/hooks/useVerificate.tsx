import { useQuery } from '@tanstack/react-query';
import { fetchUserInform } from '../service/loginApi';

const useVerificate = () => {
  const { data } = useQuery({
    queryKey: ['user'],
    queryFn: fetchUserInform,
    staleTime: 1000 * 60 * 60 * 6, //6시간
  });

  const userInfo = data ?? null;
  return userInfo;
};
export default useVerificate;
