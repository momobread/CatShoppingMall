import { useLocation } from 'react-router-dom';
import ItemEntireContents from '../components/ItemEntireContents';
import SideNav from '../ui/SideNav';
import styled from 'styled-components';
import makeSideNav from '../utils/MakeSideNav';
import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';

const StyledItemPage = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;

const ItemPage = () => {
  const queryClient = useQueryClient();
  const location = useLocation();
  const category = location.pathname.split('/').at(2) || null;
  const navItems = makeSideNav(category);

  //❄️
  useEffect(() => {
    queryClient.removeQueries({
      predicate: (qeury) => !qeury.isActive(),
    });
  }, []);

  return (
    <StyledItemPage>
      <SideNav navItems={navItems} />
      <ItemEntireContents category={category} />
    </StyledItemPage>
  );
};
export default ItemPage;
