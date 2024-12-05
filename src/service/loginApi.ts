import { useState } from 'react';
import { UserType } from '../types/user';
import dateFormat from '../utils/DateFormat';
import supabase from './supabase';
import { LoginType } from '../types/login';
import useUserStore from '../store/user';

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
  // console.log(formattedDate);
  const { user_email, user_name, user_nickname, user_phone, user_pw } = userInfo;

  let { data: updateUser, error } = await supabase.auth.signUp({
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
  if (error) {
    throw new Error(error.message);
  }
  console.log(updateUser);
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
