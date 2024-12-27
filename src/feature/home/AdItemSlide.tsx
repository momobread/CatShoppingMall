import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import AdPosition from './AdPosition';

const StyledAdItemSlide = styled.div`
  /* background-color: black; */
  display: flex;
  justify-content: center;
  /* border-bottom: 1px solid var(--color-grey-300); */
  img {
    height: 45rem;
    max-width: 42.5rem;

    /* width는 425px나옴 */
    /* height: 35rem; */
  }
  div {
    position: relative;
    width: 100%;
    /* background-color: bisque; */
    overflow: hidden;
    ul::-webkit-scrollbar {
      display: none;
    }
    ul {
      max-width: 42.5rem;
      overflow: scroll; // 450px
      height: 45rem;
      position: absolute;
      left: 50%;
      display: flex;
      transform: translateX(-50%);
    }
  }
  #ad_position {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-85px);
  }
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const AdItemSlide = () => {
  // const [slidePosition, setSlidePostision] = useState<number>(0);
  const [slidePositionIndex, setSlidePositionIndex] = useState<number>(0);
  const AddUlEl = useRef<HTMLUListElement>(null);

  useEffect(() => {
    // 슬라이드 개당 사이즈 : width : 425px
    let entitleSlideSize = 425 * 4;
    let slideSize = 425;

    const timerId = setInterval(() => {
      if (entitleSlideSize === slideSize) {
        slideSize = 0;
        setSlidePositionIndex(-1);
      } //슬라이드가 마지막일때 초기화

      AddUlEl.current?.scrollTo({ left: slideSize, behavior: 'smooth' });
      slideSize = slideSize + 425;

      setSlidePositionIndex((v) => v + 1);
    }, 3000);
    return () => clearInterval(timerId);
  }, []);

  return (
    <StyledAdItemSlide>
      <div>
        <ul ref={AddUlEl}>
          <img src="/asset/ad_slide/snack_1.png" alt="adPicture" />
          <img src="/asset/ad_slide/wash_1.png" alt="adPicture" />
          <img src="/asset/ad_slide/snack_3.png" alt="adPicture" />
          <img src="/asset/ad_slide/chu_10.png" alt="adPicture" />
        </ul>
        <AdPosition slidePositionIndex={slidePositionIndex} />
      </div>
    </StyledAdItemSlide>
  );
};
export default AdItemSlide;
