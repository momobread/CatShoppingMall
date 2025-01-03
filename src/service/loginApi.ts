import dateFormat from '../utils/DateFormat';
import supabase from './supabase';
import { LoginType, UserType } from '../types/login';
import { CartType } from '../types/cart';

const loginApi = async (login: LoginType) => {
  const { id, password } = login;

  let { data: userInform, error } = await supabase.auth.signInWithPassword({
    email: id,
    password: password,
  });

  if (error) {
    //에러 처리
    if (error.message.includes('Invalid')) {
      throw new Error(error.message);
    } else if (error.message.includes('missing')) {
      throw new Error(error.message);
    } else {
      throw new Error(error.message);
    }
  }

  return userInform;
};

const fetchUserInform = async () => {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null; //세션이 없으면 유저정보도 받아오지 않기

  const { data: userInform, error } = await supabase.auth.getUser();
  if (error) return error.message;
  const uuid = userInform.user?.id;

  let { data: users, error: userError } = await supabase.from('users').select('*,cart(*)').eq('user_uuid', uuid);
  if (userError) throw new Error(userError.message);

  return users;
  // return userInform;
};

const signUp = async (userInfo: UserType): Promise<void> => {
  let formattedDate;
  if (!userInfo.user_birth) formattedDate = null;
  if (userInfo.user_birth) formattedDate = dateFormat(userInfo.user_birth);

  const { user_email, user_name, user_nickname, user_phone, user_pw, user_birth } = userInfo;
  //auth에 등록
  let { data: updateAuth, error: authError } = await supabase.auth.signUp({
    email: user_email,
    password: user_pw,
    options: {
      data: {
        name: user_name,
        nickname: user_nickname,
        phone: user_phone,
        birth: formattedDate,
      },
    },
  });
  if (authError) {
    throw new Error(authError.message);
  }

  //user테이블에 등록
  const user_uuid = updateAuth.user?.id;
  const { error: userError } = await supabase
    .from('users')
    .insert([{ user_name, user_nickname, user_phone, user_birth, user_email, user_uuid }])
    .select();

  if (userError) throw new Error(userError.message);

  //장바구니 만들기

  const { data: cartData, error: cartError } = (await supabase
    .from('cart')
    .insert([{ cart_status: false, cart_info: [] }])
    .select()) as { data: CartType[]; error: any };

  if (cartError) throw new Error('장바구니 생성에 실패하였습니다');

  //유저테이블에 장바구니 포린키 연결

  const { error: addCartToUserError } = await supabase
    .from('users')
    .update({ user_cart: cartData?.[0].id })
    .eq('user_uuid', user_uuid)
    .select();

  if (addCartToUserError) throw new Error('장바구니 연결에 실패하였습니다');

  //회원가입시 자동으로 세션이 생기는거 방지
  await supabase.auth.signOut();
};

const logOut = async () => {
  let success = false;
  let { error } = await supabase.auth.signOut();
  if (error) {
    throw new Error(error.message);
  }

  success = true;
  return success;
};

export { loginApi, fetchUserInform, signUp, logOut };
