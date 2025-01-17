import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledFaqNav = styled.div`
  height: 100%;
  border-bottom: 2px solid var(--color-grey-600);
  margin-bottom: 0.5rem;
  color: var(--color-grey-500);
  ul {
    display: flex;
    justify-content: center;
    gap: 2rem;
    height: 100%;
  }
  li {
    font-size: 2rem;
    font-weight: 500;
    height: 99%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .active {
    color: var(--color-accent_blue5);
    font-weight: 700;
  }
  @media screen and (max-width: 600px) {
    border-bottom: none;
    span {
      font-size: 1.5rem;
      text-align: center;
      width: 6rem;
    }
    width: 100vw;
    ul {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 0;
    }
    .active {
      color: #000;

      background-color: var(--color-grey-300);
      box-shadow: var(--box-shadow_1);
    }
  }
`;

const FaqNav = () => {
  const navigate = useNavigate();
  const [clickIndex, setClickIndex] = useState<number>(0);

  return (
    <StyledFaqNav>
      <ul>
        <li
          onClick={() => {
            setClickIndex(0);
            navigate('?sort=all');
          }}
          className={`${clickIndex === 0 ? 'active' : ''}`}
        >
          <span>전체</span>
        </li>
        <li
          onClick={() => {
            setClickIndex(1);
            navigate('?sort=service');
          }}
          className={`${clickIndex === 1 ? 'active' : ''}`}
        >
          <span>서비스</span>
        </li>
        <li
          onClick={() => {
            setClickIndex(2);
            navigate('?sort=order');
          }}
          className={`${clickIndex === 2 ? 'active' : ''}`}
        >
          <span>주문/결제</span>
        </li>
        <li
          onClick={() => {
            setClickIndex(3);
            navigate('?sort=refund');
          }}
          className={`${clickIndex === 3 ? 'active' : ''}`}
        >
          <span>교환/취소 (반품)</span>
        </li>
      </ul>
    </StyledFaqNav>
  );
};
export default FaqNav;
