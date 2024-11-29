import styled from 'styled-components';

export type navItmes = { field: string };

interface SideNavProps {
  navItems: navItmes[];
}
const StyledSideNav = styled.ul`
  background-color: aquamarine;
`;

const SideNav = ({ navItems }: SideNavProps) => {
  return (
    <StyledSideNav>
      {navItems.map((navItem) => (
        <li>{navItem.field}</li>
      ))}
    </StyledSideNav>
  );
};
export default SideNav;
