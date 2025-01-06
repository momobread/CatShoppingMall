import { CouponType } from '../data/RandomCoupon';

interface dailyCheckParams {
  user_dailyCheck: boolean[];
  stampPosition: number;
  user_uuid: string | null;
  CheckedIndex: number;
  user_point: number | null;
}

interface randomCheckParams {
  user_uuid: string;
  randomCoupon: CouponType[];
}

export type { dailyCheckParams, randomCheckParams };
