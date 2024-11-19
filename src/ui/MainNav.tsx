import styled from 'styled-components';

const StyledMainNav = styled.nav`
  background-color: var(--color-grey-100);

  ul {
    display: grid;
    height: 100%;
    background-color: aliceblue;
    grid-template-columns: 4rem 4rem 4rem;
    justify-content: center;
  }
`;

const MainNav = () => {
  return (
    <StyledMainNav>
      <ul>
        <li>nav1</li>
        <li>nav2</li>
        <li>nav3</li>
      </ul>
    </StyledMainNav>
  );
};
export default MainNav;
