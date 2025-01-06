import { dailyCheckParams, randomCheckParams } from '../types/event';
import supabase from './supabase';

const dailyEventApi = async (value: dailyCheckParams) => {
  const { CheckedIndex, stampPosition, user_dailyCheck, user_uuid, user_point } = value;
  if (user_point === null) throw new Error('로그인하세요');

  const nowDate = new Date();
  let newDailyCheck = user_dailyCheck.map((v: boolean) => v);
  newDailyCheck[stampPosition] = true;
  const bonusPoint = await EventPoint(CheckedIndex);

  const { error } = await supabase
    .from('users')
    .update({
      user_dailyCheck: newDailyCheck,
      user_isChecked_daily: true,
      user_checkedDaily_at: nowDate,
      user_point: user_point + bonusPoint,
    })
    .eq('user_uuid', user_uuid)
    .select();

  if (error) throw new Error(error.message);
  return bonusPoint;
  async function EventPoint(CheckedIndex: number) {
    let bonusPoint;
    (CheckedIndex + 1) / 7 === 1
      ? (bonusPoint = 100)
      : (CheckedIndex + 1) / 7 === 2
        ? (bonusPoint = 200)
        : (CheckedIndex + 1) / 7 === 3
          ? (bonusPoint = 500)
          : (CheckedIndex + 1) / 7 === 4
            ? (bonusPoint = 1000)
            : (bonusPoint = 40);

    return bonusPoint;
  }
};

const randomEventApi = async ({ user_uuid, randomCoupon }: randomCheckParams) => {
  const nowDate = new Date();
  const { error } = await supabase
    .from('users')
    .update({
      user_monthCoupon: true,
      user_coupons: randomCoupon,
      user_getRandom_at: nowDate,
    })
    .eq('user_uuid', user_uuid)
    .select();

  if (error) throw new Error(error.message);
};

export { dailyEventApi, randomEventApi };
