import { QueryClient, useQuery, useQueryClient } from '@tanstack/react-query';
import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { ItemType } from '../types/Item';
import { fetchItemDetail } from '../service/ItemDetailApi';
import Loader from '../ui/Loader';
import ItemDetailInfo from '../feature/ItemDetail/ItemDetailInfo';
import ItemDetailContent from '../feature/ItemDetail/ItemDetailContent';
import { useEffect, useState } from 'react';
import ItemCart from '../feature/ItemDetail/ItemCart';
import ItemDetailNav from '../feature/ItemDetail/ItemDetailNav';
import { useItemStore } from '../store/item';

const StyledItemDetail = styled.section``;

export interface ItemCode {
  item_num?: number;
  item_category?: number;
}

const ItemDetail = () => {
  const { detailQeuryKey } = useItemStore();
  const queryClient = useQueryClient();
  const detailData = queryClient.getQueryData(detailQeuryKey);
  const location = useLocation();

  if (!detailData) return <Loader />;

  return (
    <StyledItemDetail>
      <ItemDetailInfo item={detailData} />
      <ItemDetailNav />
      <ItemDetailContent />얍
    </StyledItemDetail>
  );
};
export default ItemDetail;
