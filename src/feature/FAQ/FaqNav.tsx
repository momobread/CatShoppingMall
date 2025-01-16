import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledFaqNav = styled.div`
  ul {
    display: flex;
    gap: 1rem;
    padding: 1rem;
  }
  li {
    font-size: 2rem;
    font-weight: 500;
  }
  .active {
    color: var(--color-accent_pink);
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
          <span>교환/취소(반품)</span>
        </li>
      </ul>
    </StyledFaqNav>
  );
};
export default FaqNav;
