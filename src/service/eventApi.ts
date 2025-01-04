import { dailyCheckParams } from '../types/event';
import supabase from './supabase';

const eventApi = async ({ user_dailyCheck, stampPosition, user_uuid }: dailyCheckParams) => {
  let newDailyCheck = user_dailyCheck.map((v: boolean) => v);
  newDailyCheck[stampPosition] = true;
  const nowDate = new Date();

  //1차비교 데이, 2차비교 먼스

  const { error } = await supabase
    .from('users')
    .update({ user_dailyCheck: newDailyCheck, user_isChecked_daily: true, user_checkedIn_at: nowDate })
    .eq('user_uuid', user_uuid)
    .select();

  if (error) throw new Error(error.message);
};
export default eventApi;
