import { useMutation, useQuery } from '@tanstack/react-query';
import { addCartApi, fetchCartApi } from '../service/cartApi';
import { UserType } from '../types/login';
import { CartAddParams, CartInfoType, CartListType } from '../types/cart';

const useCart = (cartItem: UserType[] | null, user_uuid: string | null) => {
  // 유저가 없으면 아예 받아오지 말자
  if (user_uuid === null || cartItem === null) return null;

  //유저가 있으면 일단 장바구니에 아이템이 있는지 체크해보자 ❄️
  const cartData: CartInfoType[] | null = cartItem.at(0)?.cart.cart_info ?? null;

  if (cartData === null) return [];
  //아이템도 있다면 그제서야 db목록을 받아오자
  const { data: cartItemList } = useQuery<CartListType[], Error>({
    queryKey: ['cart', user_uuid],
    queryFn: () => fetchCartApi(cartData),

    //스테일 타임은 no 왜냐하면 아이템을 추가하는 시점 예측 불가, 그리고 항상 최신 장바구니가 반영되어야 함
  });
  return cartItemList;
};

const useAddCart = () => {
  const { mutate: addCart } = useMutation<void, Error, CartAddParams>({
    mutationFn: (data) => addCartApi(data),
  });

  return addCart;
};

export { useCart, useAddCart };
