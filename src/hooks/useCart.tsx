import { useQuery } from '@tanstack/react-query';
import { fetchCartApi } from '../service/cartApi';

// const useCart = (user_uuid: string) => {
//   if (user_uuid.length === 0) return [];

//   const { data } = useQuery({
//     queryKey: ['cart'],
//     queryFn: () => fetchCartApi(user_uuid),
//   });

//   return data;
// };
// export { useCart };
