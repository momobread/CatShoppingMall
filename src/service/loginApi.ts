import { UserType } from '../types/user';
import dateFormat from '../utils/DateFormat';
import supabase from './supabase';
import { LoginType } from '../types/login';

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

  if (error) return console.log(error);

  return userInform;
};

const signUp = async (userInfo: UserType): Promise<void> => {
  console.log(userInfo);
  const formattedDate = dateFormat(userInfo.user_birth);
  const { user_email, user_name, user_nickname, user_phone, user_pw, user_birth } = userInfo;

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
  const user_uuid = updateAuth.user?.id;
  console.log(user_uuid);
  console.log(updateAuth);
  const { error: userError } = await supabase
    .from('users')
    .insert([{ user_name, user_nickname, user_phone, user_birth, user_email, user_uuid }])
    .select();

  if (userError) throw new Error(userError.message);

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
