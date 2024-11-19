import styled from 'styled-components';

const StyledMainNav = styled.nav`
  background-color: var(--color-grey-100);
  /* border: 1px solid var(--color-grey-400); */
  display: grid;
  grid-template-columns: 4rem 4rem 4rem;
  justify-content: center;
`;

const MainNav = () => {
  return (
    <StyledMainNav>
      <div>nav1</div>
      <div>nav2</div>
      <div>nav3</div>
    </StyledMainNav>
  );
};
export default MainNav;
