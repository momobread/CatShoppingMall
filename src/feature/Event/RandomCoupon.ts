import RandomCoupon, { CouponType } from '../../data/RandomCoupon';

const getRanDomCoupon = (): CouponType[] => {
  const RandomCount = 3;
  const RandomIndex = RandomCoupon.length;

  const RandomResult = [];
  for (let i = 0; i < RandomCount; i++) {
    let RandomNum = Math.floor(Math.random() * RandomIndex);
    RandomResult.push(RandomCoupon[RandomNum]);
  }
  return RandomResult;
};

export default getRanDomCoupon;
