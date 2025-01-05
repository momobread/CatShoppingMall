import styled from 'styled-components';
import EventCoupon from './EventCoupon';
import { useState } from 'react';
import Loader from '../../ui/Loader';
import getRanDomCoupon from './RandomCoupon';
import { CouponType } from '../../data/RandomCoupon';
import useUserStore from '../../store/user';
import Activemodal from '../../utils/ActiveModal';

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
  #exam_random {
    display: flex;
    gap: 2rem;
  }
  #exam_random_wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }
`;

const RandomEvent = () => {
  const { user_uuid } = useUserStore();
  const [startCoupon, setStartCoupon] = useState<boolean>(false);
  const [randomCoupon, setRandomCoupon] = useState<CouponType[]>([]);
  const handleClickRandom = () => {
    if (!user_uuid) return Activemodal('로그인하세요');
    setStartCoupon(true);
    const randomCoupon = getRanDomCoupon();
    setRandomCoupon(randomCoupon);
  };

  return (
    <StyledRandomEvent>
      {!startCoupon ? (
        <div id="exam_random_wrap">
          <ExampleCoupons />
          <button id="random_btn" onClick={() => handleClickRandom()}>
            쿠폰 뽑기
          </button>
        </div>
      ) : randomCoupon.length > 1 ? (
        randomCoupon.map((coupon) => <EventCoupon isLogined={true} coupon={coupon} />)
      ) : (
        <Loader />
      )}
    </StyledRandomEvent>
  );
};

function ExampleCoupons() {
  return (
    <div id="exam_random">
      <EventCoupon isLogined={false} coupon={{ title: '전상품 할인 쿠폰', value: '???%' }} />
      <EventCoupon isLogined={false} coupon={{ title: '포인트 적립', value: '???%' }} />
      <EventCoupon isLogined={false} coupon={{ title: '베스트상품 할인 쿠폰', value: '???%' }} />
    </div>
  );
}

export default RandomEvent;
