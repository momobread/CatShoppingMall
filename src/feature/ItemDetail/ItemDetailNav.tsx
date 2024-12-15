import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledItemDetailNav = styled.ul`
  display: grid;
  height: 5rem;
  gap: 1rem;

  /* grid-template-columns: 1fr 1fr 1fr; */
  grid-template-columns: 1fr 1fr 1fr;

  li {
    background-color: var(--color-grey-200);
    padding: 1rem 5rem;
    text-align: center;
    font-weight: 600;
    font-size: 2rem;
  }
  .active {
    background-color: var(--color-accent_blue6);
  }
`;
interface ItemDetailNavProps {
  location: string;
}

const ItemDetailNav = ({ location }: ItemDetailNavProps) => {
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
          navigate(`${location}?info=etc`);
          setIsNavClick(2);
        }}
      >
        배송/교환/반품 안내
      </li>
    </StyledItemDetailNav>
  );
};
export default ItemDetailNav;
