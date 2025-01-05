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
  //이제 자자
  return userInform;
};

const fetchUserInform = async () => {
  //클라이언트 측 토큰이 유효한지 확인
  const { data: userInform, error: userInformError } = await supabase.auth.getUser();
  if (userInformError || !userInform?.user) return null;
  const user_uuid = userInform.user?.id;

  // 유저데이터 가져오기
  const fetchUserData = async () => {
    let { data, error: userError } = await supabase.from('users').select('*,cart(*)').eq('user_uuid', user_uuid);
    if (userError) throw new Error(userError.message);
    return data;
  };
  let user = await fetchUserData();
  let enableReset: boolean;

  //  dailycheck 초기화
  await resetDailyCheck(user?.[0]);

  // 초기화 후 다시 유저 데이터 가져오기
  user = await fetchUserData();
  return user;

  async function resetDailyCheck(preResetUserData: UserType) {
    const { user_checkedIn_at } = preResetUserData;

    const preDate = new Date(user_checkedIn_at);
    const today = new Date();

    if (preDate.getDate() < today.getDate()) {
      if (preDate.getMonth() <= today.getMonth()) {
        enableReset = true;
      }
    } else if (preDate.getDate() > today.getDate()) {
      //1월 31일 2월 3일
      if (preDate.getMonth() < today.getDate()) {
        enableReset = true;
      }
    }
    if (!enableReset) return;
    const { error } = await supabase
      .from('users')
      .update({ user_isChecked_daily: false })
      .eq('user_uuid', user_uuid)
      .select();
    if (error) throw new Error(error.message);
  }
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
