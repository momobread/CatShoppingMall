import { useQuery } from '@tanstack/react-query';
import { fetchUserInform } from '../service/loginApi';

const useVerificate = () => {
  const { data } = useQuery({
    queryKey: ['user'],
    queryFn: fetchUserInform,
  });

  console.log(data);
  return { data };
};
export default useVerificate;
