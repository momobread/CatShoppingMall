import styled from 'styled-components';
import { ItemType } from '../types/Item';
import ItemList from './ItemList';
import PageNation from './PageNation/PageNation';
import { useLocation, useSearchParams } from 'react-router-dom';
import makeSideNav from '../utils/MakeSideNav';
import { useQuery } from '@tanstack/react-query';
import { itemListApi } from '../service/itemListApi';
import Loader from '../ui/Loader';
import useItemSortList from '../hooks/useItemSortList';
import { useState } from 'react';
import useItemStore from '../store/ItemList';

const StyledItemEntireContents = styled.div`
  padding: 2rem 1rem;

  ul {
    min-height: 160rem;
    max-width: 160rem;
    display: flex;
    flex-wrap: wrap;
  }
`;

interface ItemEntireContentsProps {
  category: string | null;
}

const ItemEntireContents = ({ category }: ItemEntireContentsProps) => {
  const { itemListLoading } = useItemStore();
  const [params] = useSearchParams();
  const sort = params.get('sort') || null;
  console.log(sort);
  const items = useItemSortList(category, sort);

  if (!items) return <Loader />;

  return (
    <StyledItemEntireContents>
      <ul>
        {items.map((item) => (
          <ItemList item={item} />
        ))}
      </ul>
      <PageNation />
    </StyledItemEntireContents>
  );
};
export default ItemEntireContents;
