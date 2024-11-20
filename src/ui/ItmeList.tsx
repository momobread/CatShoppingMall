import styled from 'styled-components';

const StyledItemsList = styled.ul``;

const ItemsList = () => {
  const test = [1, 1, 1, 1, 1];

  return (
    <StyledItemsList>
      {test.map((v) => (
        <li>{v}</li>
      ))}
    </StyledItemsList>
  );
};
export default ItemsList;
