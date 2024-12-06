import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Loader from '../ui/Loader';
import ItemDetailInfo from '../feature/ItemDetail/ItemDetailInfo';
import ItemDetailContent from '../feature/ItemDetail/ItemDetailContent';
import { useEffect, useState } from 'react';
import ItemDetailNav from '../feature/ItemDetail/ItemDetailNav';
import { useItemStore } from '../store/item';
import { ItemType } from '../types/Item';
import useItemDetail, { useItemInfo } from '../hooks/useItemDetail';

const StyledItemDetail = styled.section`
  width: 100vw;
  #item_info_img_wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 2rem;
  }
  img {
    width: 80rem;
  }
`;

export interface ItemCode {
  item_num?: number;
  item_category?: number;
}

const ItemDetail = () => {
  const { detailQeuryKey } = useItemStore();
  let location = useLocation().pathname;
  const item_num = location.split('/').at(4);

  const queryClient = useQueryClient();

  const detailData: ItemType | undefined = queryClient.getQueryData<ItemType[]>(detailQeuryKey)?.at(0) ?? undefined;
  // console.log(detailData);

  //새로고침했을때 이부분이 안되기 때문에 수정 필요함.
  const {} = useQuery({
    queryKey: detailQeuryKey,
    staleTime: 20000,
    refetchInterval: 20000,
  });
  const { item_info } = useItemInfo(item_num);
  const item_info_img = item_info?.split(',') ?? [];
  console.log(item_info_img);
  if (!detailData) return <Loader />;
  if (item_info_img.length === 0) throw new Error('찾으시는 페이지가 없습니다');

  return (
    <StyledItemDetail>
      <ItemDetailInfo item={detailData} />
      <ItemDetailNav />
      <div id="item_info_img_wrap">{item_info_img?.map((v) => <img src={v} />)}</div>
      <Outlet />
    </StyledItemDetail>
  );
};
export default ItemDetail;
