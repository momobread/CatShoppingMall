import styled from 'styled-components';
import EventCoupon from './EventCoupon';
import { useState } from 'react';
import Loader from '../../ui/Loader';
import getRanDomCoupon from './RandomCoupon';
import { CouponType } from '../../data/RandomCoupon';

const StyledRandomEvent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  #random_btn {
    width: 10rem;
    height: 10rem;
    border-radius: 5rem;
  }
`;

const RandomEvent = () => {
  const [startCoupon, setStartCoupon] = useState<boolean>(false);
  const [randomCoupon, setRandomCoupon] = useState<CouponType[]>([]);
  const handleClickRandom = () => {
    setStartCoupon(true);
    const randomCoupon = getRanDomCoupon();
    setRandomCoupon(randomCoupon);
  };

  return (
    <StyledRandomEvent>
      {!startCoupon ? (
        <button id="random_btn" onClick={() => handleClickRandom()}>
          쿠폰 뽑기
        </button>
      ) : randomCoupon.length > 1 ? (
        randomCoupon.map((coupon) => <EventCoupon coupon={coupon} />)
      ) : (
        <Loader />
      )}
    </StyledRandomEvent>
  );
};
export default RandomEvent;
