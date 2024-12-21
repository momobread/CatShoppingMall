import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addCartApi, deleteCartApi, deleteCartsApi, fetchCartApi } from '../service/cartApi';
import { UserType } from '../types/login';
import { CartAddParams, CartDeleteParams, CartInfoType, CartListType, CartsDeleteParams } from '../types/cart';
import useUserStore from '../store/user';
import Activemodal from '../utils/activemodal';

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
  });

  //여기 수정❄️
  if (user_uuid === null || cartItem === undefined) return { cartItemList: null, user_cart: null };

  const user_cart = cartItem?.[0].user_cart!;

  return { cartItemList, user_cart };
};

const useAddCart = () => {
  const queryClient = useQueryClient();
  const { user_uuid } = useUserStore();
  const { mutate: addCart } = useMutation<void, Error, CartAddParams>({
    mutationFn: (data) => addCartApi(data),
    onSuccess: async () => {
      //캐시에 있는 유저를 갱신해줘야된다(이안에도 장바구니가 잇음.)
      await queryClient.invalidateQueries({ queryKey: ['user'] });
      await queryClient.invalidateQueries({ queryKey: ['cart', user_uuid] });

      await queryClient.refetchQueries({ queryKey: ['cart', user_uuid] });
      Activemodal('장바구니에 추가되었습니다~');
    },
    onError: (error) => {
      console.log(error.message);
    },
  });

  return addCart;
};

const useDeleteCart = () => {
  const { user_uuid } = useUserStore();
  const queryClient = useQueryClient();
  const { mutate: deleteCartItem } = useMutation<void, Error, CartDeleteParams>({
    mutationFn: (data: CartDeleteParams) => deleteCartApi(data),
    onSuccess: async () => {
      console.log('dsdsds');
      await queryClient.invalidateQueries({ queryKey: ['user'] });
      await queryClient.invalidateQueries({ queryKey: ['cart', user_uuid] });

      queryClient.refetchQueries({ queryKey: ['cart', user_uuid] });
    },
  });
  return deleteCartItem;
};

const useDeleteCarts = () => {
  const { user_uuid } = useUserStore();
  const queryClient = useQueryClient();
  const { mutate: deleteAllCart } = useMutation<void, Error, CartsDeleteParams>({
    mutationFn: (data: CartsDeleteParams) => deleteCartsApi(data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['user'] });
      await queryClient.invalidateQueries({ queryKey: ['cart', user_uuid] });

      queryClient.refetchQueries({ queryKey: ['cart', user_uuid] });
    },
  });

  return deleteAllCart;
};

export { useCart, useAddCart, useDeleteCart, useDeleteCarts };
