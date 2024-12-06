import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledItemDetailNav = styled.ul`
  display: grid;
  height: 5rem;
  gap: 1rem;

  grid-template-columns: 1fr 1fr 1fr;

  li {
    background-color: var(--color-accent_blue4);
    padding: 1rem 5rem;
    text-align: center;
  }
`;

const ItemDetailNav = () => {
  const navigate = useNavigate();
  return (
    <StyledItemDetailNav>
      <li onClick={() => navigate('info')}>상품상세정보</li>
      <li onClick={() => navigate('review')}>후기</li>
      <li onClick={() => navigate('inquiry')}>문의</li>
    </StyledItemDetailNav>
  );
};
export default ItemDetailNav;
