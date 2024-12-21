import styled from 'styled-components';
import { CategoryType, ItemType } from '../types/Item';
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import useDetail from '../hooks/useDetail';
import { useEffect } from 'react';
import { useItemStore } from '../store/item';
import { useItemInfo } from '../hooks/useItemDetail';
import priceFormat from '../utils/PriceFormat';
import useItemSortList from '../hooks/useItemSortList';
import { Category } from '@mui/icons-material';

const StyledItemList = styled.li`
  /* background-color: aqua; */
  /* background-color: aliceblue; */
  display: grid;
  padding: 10px;
  border-radius: 5px;
  width: 35rem;
  height: 45rem;
  text-align: center;
  justify-content: center;
  font-size: 2rem;

  grid-template-rows: 1fr 3rem 3rem 3rem;
  img {
    height: 32rem;
    max-width: 30rem;
    border-radius: 5px;
  }
  #content {
    max-width: 30rem;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  @media screen and (max-width: 900px) {
    & {
      width: 13rem;
      height: 26rem;
    }

    img {
      max-width: 13rem;
      height: 20rem;
    }
  }
  @media screen and (max-width: 600px) {
    & {
      width: 100%;
      height: fit-content;
    }
    img {
      height: 30rem;
      max-width: 40rem;

      /* height:  */
    }
    #content {
      max-width: inherit;
    }
  }
`;

interface ItemListProps {
  item: ItemType;
  categoryField: CategoryType;
}

const ItemList = ({ item, categoryField }: ItemListProps) => {
  const { setDetailQueryKey } = useItemStore();
  const { item_content, item_img, item_price, item_title, item_num, id } = item;
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const queryClient = useQueryClient();

  let queryKey: any[];
  let cachedData: ItemType[];
  let detailData: ItemType[];
  let newQueryKey: any[];

  // console.log(categoryField);

  const handleClick = () => {
    //홈에서 바로 상세보기로 갈때

    if (categoryField.etc === 'home') {
      console.log(categoryField);

      //이게 캐시가 필요없더나~
      // newQueryKey = ['itemDetail', categoryField.category, item.item_num];
      // queryClient.setQueryData(newQueryKey, item);
      // setDetailQueryKey(newQueryKey);
      navigate(`/category/${categoryField.sort}/detail/${item_num}?info=info`);
    }

    //상품 페이지에서 상세보기로 갈때
    // 상품별 캐시 만드는 작업=> 이렇게 맨처음 카테고리 진입에서 받아온 아이템 리스트를 한번만 로딩하면 다음부터는 로딩이 필요없음
    if (categoryField.etc === 'sortList') {
      //카테고리가 있으면 캐시 필드 진행
      console.log(categoryField);
      //=> ItemPage.tsx에서 이미 불러온 캐시중 [베스트상품 or 신상품 아이템 전체] 아이템 넘에 해당하는 아이템만 꺼내서 쓸꺼임
      queryKey = ['itemList', categoryField.category, categoryField.sort];
      cachedData = queryClient.getQueryData(queryKey) ?? []; //
      detailData = cachedData.filter((item) => item.id === id) ?? [];

      if (detailData.length === 0 || detailData === undefined) throw new Error('아이템디테일이 없습니다');

      //캐시에 있는 데이터 중 특정 데이터만 다시 쿼리로 올림
      newQueryKey = ['itemDetail', categoryField.category, detailData[0].item_num];
      queryClient.setQueryData(newQueryKey, detailData);
      setDetailQueryKey(newQueryKey);
      navigate(`${location}/detail/${item_num}?info=info`);
    }
  };

  return (
    <StyledItemList onClick={() => handleClick()}>
      <img src={item_img} />
      <span>{item_title}</span>
      <span id="content">{item_content}</span>
      <span>{priceFormat(item_price)}원</span>
    </StyledItemList>
  );
};
export default ItemList;
