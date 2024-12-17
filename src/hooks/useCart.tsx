import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addCartApi, fetchCartApi } from '../service/cartApi';
import { UserType } from '../types/login';
import { CartAddParams, CartInfoType, CartListType } from '../types/cart';
import useUserStore from '../store/user';

const useCart = () => {
  const { user_uuid } = useUserStore();
  const queryClinet = useQueryClient();

  const cartItem: UserType[] | undefined = queryClinet.getQueryData<UserType[]>(['user']);
  //유저가 있으면 일단 장바구니에 아이템이 있는지 체크해보자 ❄️
  const cartData: CartInfoType[] | null = cartItem?.[0].cart.cart_info ?? null;
  //아이템도 있다면 그제서야 db목록을 받아오자
  const { data: cartItemList, isLoading } = useQuery<CartListType[], Error>({
    queryKey: ['cart', user_uuid],
    queryFn: cartData ? () => fetchCartApi(cartData) : () => Promise.resolve([]),
    staleTime: 0,
    //스테일 타임은 no 왜냐하면 아이템을 추가하는 시점 예측 불가, 그리고 항상 최신 장바구니가 반영되어야 함
  });

  //여기 수정❄️
  if (user_uuid === null || cartItem === undefined) return { cartItemList: null, user_cart: null };

  const user_cart = cartItem?.[0].user_cart!;

  return { cartItemList, user_cart };
};

const useAddCart = () => {
  const { user_uuid } = useUserStore();
  const queryClient = useQueryClient();
  const { mutate: addCart } = useMutation<void, Error, CartAddParams>({
    mutationFn: (data) => addCartApi(data),
    onSuccess: async () => {
      //캐시에 있는 유저를 갱신해줘야된다(이안에 장바구니가 잇음.) 아니면 예전 장바구니에 담은 아이템 기록이 나온다...
      console.log('갱신됌');
      await queryClient.invalidateQueries({ queryKey: ['user'] });
      console.log('2');
      await queryClient.invalidateQueries({ queryKey: ['cart', user_uuid] });
    },
    onError: (error) => {
      console.log(error.message);
    },
  });

  return addCart;
};

export { useCart, useAddCart };
