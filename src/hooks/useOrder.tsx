import { useMutation, useQueryClient } from '@tanstack/react-query';
import { orderApi } from '../service/orderApi';
import useUserStore from '../store/user';
import { OrderConfirmType, OrderParams } from '../types/order';
import Activemodal from '../utils/ActiveModal';

const useOrder = () => {
  const { user_uuid } = useUserStore();
  const queryClient = useQueryClient();
  const { mutate: order, data: orderConfirm } = useMutation<OrderConfirmType[], Error, OrderParams>({
    mutationFn: (data) => orderApi({ ...data, user_uuid }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['user'] });
      await queryClient.invalidateQueries({ queryKey: ['cart', user_uuid] });

      await queryClient.refetchQueries({ queryKey: ['cart', user_uuid] });
      Activemodal('주문에 성공하엿습니다');
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return { order, orderConfirm };
};
export default useOrder;
