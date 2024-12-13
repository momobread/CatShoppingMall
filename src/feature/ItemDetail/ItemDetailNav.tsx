import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledItemDetailNav = styled.ul`
  display: grid;
  height: 5rem;
  gap: 1rem;

  grid-template-columns: 1fr 1fr 1fr;

  li {
    background-color: var(--color-accent_blue2);
    padding: 1rem 5rem;
    text-align: center;
  }
  .active {
    background-color: var(--color-grey-300);
  }
`;

const ItemDetailNav = ({ location }) => {
  const navigate = useNavigate();
  const [isNavClick, setIsNavClick] = useState<number>(0);
  return (
    <StyledItemDetailNav>
      <li
        className={`${isNavClick === 0 ? 'active' : ''}`}
        onClick={() => {
          navigate(`${location}?info=info`);
          setIsNavClick(0);
        }}
      >
        상품상세정보
      </li>
      <li
        className={`${isNavClick === 1 ? 'active' : ''}`}
        onClick={() => {
          navigate(`${location}?info=review`);
          setIsNavClick(1);
        }}
      >
        후기
      </li>
      <li
        className={`${isNavClick === 2 ? 'active' : ''}`}
        onClick={() => {
          navigate(`${location}?info=inquiry`);
          setIsNavClick(2);
        }}
      >
        문의
      </li>
    </StyledItemDetailNav>
  );
};
export default ItemDetailNav;
