import { useQuery } from '@tanstack/react-query';
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

const StyledItemDetail = styled.section``;

export interface ItemCode {
  item_num?: number;
  item_category?: number;
}

const ItemDetail = () => {
  const location = useLocation();

  const [data, setData] = useState<ItemType[]>();

  const item: ItemCode = {
    item_num: Number(
      location.pathname
        .split('/')
        .filter((v) => v !== '')
        .at(3)
    ),
    item_category: Number(
      location.pathname
        .split('/')
        .filter((v) => v !== '')
        .at(1)
    ),
  };

  useEffect(() => {
    async function fetchItem() {
      const data = await fetchItemDetail(item);
      console.log(data);
      setData(data);
    }
    fetchItem();
  }, []);
  // 상품평, 댓글을 실시간으로 불러오기 위해서 리액트쿼리 필요하다
  // const { data, isFetching: detailFetching } = useQuery<ItemType[], Error>({
  //   queryKey: ['item_detail'],
  //   queryFn: () => item && fetchItemDetail(item),
  //   // staleTime: 10000,
  //   // refetchInterval: 10000,
  // });

  if (!data) return <Loader />;
  // console.log(data, 'Detailpage'); // 여기서 데이터가 두개 나오네
  // const [{ item_num }] = data;

  // if (detailFetching) return <Loader />;
  return (
    <StyledItemDetail>
      <ItemDetailInfo item={data} />
      <ItemDetailNav />
      <ItemDetailContent />
    </StyledItemDetail>
  );
};
export default ItemDetail;
