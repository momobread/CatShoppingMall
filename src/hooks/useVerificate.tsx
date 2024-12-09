import { useQuery } from '@tanstack/react-query';
import { fetchUserInform } from '../service/loginApi';

const useVerificate = () => {
  const { data } = useQuery({
    queryKey: ['user'],
    queryFn: fetchUserInform,
    staleTime: 1000 * 60 * 60 * 6, //6시간
  });

  console.log(data);
  return { data };
};
export default useVerificate;
