import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
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
  @media screen and (max-width: 600px) {
    flex-direction: row;
    li {
      font-size: 1.5rem;
    }
  }
`;

const SideNav = ({ navItems }: SideNavProps) => {
  const [params, setParams] = useSearchParams();
  const NavFilter = params.get('sort') as string; //
  const CategoryFilter = useLocation().pathname.split('/')?.[2]; //1 2

  const [clickListIndex, setClickListIndex] = useState<number>(0);
  console.log(clickListIndex);
  useEffect(() => {
    const sideNavIndex = makeSideNavIndex(NavFilter, CategoryFilter);
    setClickListIndex(sideNavIndex);
  }, [NavFilter]);

  const handleListClick = (sort: string, i: number) => {
    setClickListIndex(i);
    params.set('sort', sort);
    setParams(params);
  };
  console.log(navItems);

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

function makeSideNavIndex(NavFilter: string, CategoryFilter: string) {
  let index;
  if (CategoryFilter === '1' || CategoryFilter === '2') {
    NavFilter === 'date_desc'
      ? (index = 0)
      : NavFilter === 'date_asc'
        ? (index = 1)
        : NavFilter === 'price_desc'
          ? (index = 2)
          : (index = 3);
  } else {
    //3
    NavFilter === 'eat'
      ? (index = 0)
      : NavFilter === 'snack'
        ? (index = 1)
        : NavFilter === 'toy'
          ? (index = 2)
          : NavFilter === 'bath'
            ? (index = 3)
            : (index = 4);
  }
  console.log(index);
  return index;
}

export default SideNav;
