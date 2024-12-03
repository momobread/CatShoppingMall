import supabase from './supabase';

const loginApi = async (login) => {
  const { id, password } = login;
  let { data: userInform, error } = await supabase.auth.signInWithPassword({
    email: id,
    password: password,
  });
  if (error) {
    //에러 처리
    if (error.message.includes('Invalid')) {
      //아이디와 비밀번호가 일치하지 않을때 null을 강제적으로 설정, 에러가 나도 값을 null로해서 페이지가 실행될수 있도록 할라고(로그인안해도 이용가능해야 되잖아)
      return null;
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

export { loginApi, fetchUserInform };
