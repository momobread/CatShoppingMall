import { type ReactNode } from 'react';
import styled from 'styled-components';

interface ItemTitle {
  children: ReactNode;
}

const StyledItemTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--color-grey-400);
  span {
    font-size: 2rem;
    font-weight: 500;
  }
`;

const ItemTitle = ({ children }: ItemTitle) => {
  return (
    <StyledItemTitle>
      <span>{children}</span>
    </StyledItemTitle>
  );
};
export default ItemTitle;
