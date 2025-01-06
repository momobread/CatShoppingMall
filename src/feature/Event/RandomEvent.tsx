import styled from 'styled-components';
import EventCoupon from './EventCoupon';
import { useState } from 'react';
import Loader from '../../ui/Loader';
import getRanDomCoupon from './RandomCoupon';
import { CouponType } from '../../data/RandomCoupon';
import useUserStore from '../../store/user';
import Activemodal from '../../utils/ActiveModal';
import { useRandomEvent } from '../../hooks/useEvent';
import { useQueryClient } from '@tanstack/react-query';
import { UserType } from '../../types/login';

const StyledRandomEvent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  gap: 2rem;
  margin-bottom: 5rem;
  #random_btn {
    width: 40rem;
    height: 6rem;
    color: var(--color-accent_blue4);
    background-color: #fff;
    /* background-color: var(--color-accent_yellow); */
    border: none;
    font-weight: 700;
    font-size: 2rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  #exam_random {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 1rem;
  }
  #exam_random_wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }
  #random_content {
    text-align: center;
    font-size: 2rem;
    font-weight: 500;
    margin: 1rem;
  }
  #ramdom_title {
    font-size: 5rem;
    font-weight: 700;
  }
  @media screen and (max-width: 600px) {
    #ramdom_title {
      font-size: 4rem;
    }
    #random_btn {
      width: 80vw;
    }
  }
`;

const RandomEvent = () => {
  const { user_uuid } = useUserStore();
  const queryClient = useQueryClient();
  const randomCheck = useRandomEvent();
  const [startCoupon, setStartCoupon] = useState<boolean>(false);
  const [randomCoupon, setRandomCoupon] = useState<CouponType[]>([]);
  const handleClickRandom = () => {
    if (!user_uuid) return Activemodal('로그인하세요');
    const alreadyGetRandom = queryClient.getQueryData<UserType[]>(['user'])?.[0]?.user_monthCoupon;
    if (alreadyGetRandom) return Activemodal('이미 쿠폰을 발급받았습니다. 다음달에 또 만나요👋🏻');
    setStartCoupon(true);
    const randomCoupon = getRanDomCoupon();
    setRandomCoupon(randomCoupon);
    randomCheck({ user_uuid, randomCoupon });
  };

  return (
    <StyledRandomEvent>
      <div id="ramdom_title">랜덤 쿠폰 발급 받자👍🏻</div>
      <div id="random_content">
        <p>당신의 행운은 어디까지인가?</p>
        <p>최대 15%할인 쿠폰까지?!</p>
        <p>랜덤으로 쿠폰을 뽑아보아요</p>
      </div>
      {!startCoupon ? (
        <div id="exam_random_wrap">
          <ExampleCoupons />
          <button id="random_btn" onClick={() => handleClickRandom()}>
            랜덤 쿠폰 발급 받기
          </button>
        </div>
      ) : randomCoupon.length > 1 ? (
        randomCoupon.map((coupon) => <EventCoupon coupon={coupon} startCoupon={startCoupon} />)
      ) : (
        <Loader />
      )}
    </StyledRandomEvent>
  );
};

function ExampleCoupons() {
  return (
    <div id="exam_random">
      <EventCoupon coupon={{ title: '전상품 할인 쿠폰', value: '???%' }} />
      <EventCoupon coupon={{ title: '포인트 적립', value: '???%' }} />
      <EventCoupon coupon={{ title: '베스트상품 할인 쿠폰', value: '???%' }} />
    </div>
  );
}

export default RandomEvent;
