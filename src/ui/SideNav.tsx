import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

export type navItmes = { field: string; sort: string };

interface SideNavProps {
  navItems: navItmes[];
}
const StyledSideNav = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: center;
  line-height: 3;
  align-items: center;

  border-right: 1px solid var(--color-grey-300);
  li {
    width: 100%;
    font-size: 2rem;
    font-weight: 600;
    cursor: pointer;
  }
  .active {
    background-color: var(--color-grey-200);
    box-shadow: var(--box-shadow_1);
  }
`;

const SideNav = ({ navItems }: SideNavProps) => {
  const [params, setParams] = useSearchParams();
  const [clickListIndex, setClickListIndex] = useState<number>(0);

  const handleListClick = (sort: string, i: number) => {
    setClickListIndex(i);
    console.log(sort);
    params.set('sort', sort);
    setParams(params);
  };

  return (
    <StyledSideNav>
      {navItems.map((navItem, i) => (
        <li
          className={`${clickListIndex === i ? 'active' : ''}`}
          key={i}
          onClick={() => handleListClick(navItem.sort, i)}
        >
          {navItem.field}
        </li>
      ))}
    </StyledSideNav>
  );
};
export default SideNav;
