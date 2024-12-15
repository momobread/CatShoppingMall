import supabase from './supabase';

const fetchCartApi = async (user_uuid: string) => {
  let { data: users, error } = await supabase.from('users').select('*,cart(*)').eq('user_uuid', user_uuid);

  if (error) throw new Error(error.message);

  return users;
};

export { fetchCartApi };
