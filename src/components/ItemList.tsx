import styled from 'styled-components';
import { ItemType } from '../types/Item';
import { useLocation, useNavigate } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { useItemStore } from '../store/item';
import priceFormat from '../utils/PriceFormat';

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
  @media screen and (max-width: 1650px) {
    width: 31rem;
    img {
      max-width: 28rem;
    }
    #content {
      max-width: 28rem;
    }
  }
  /* @media screen and (max-width: 900px) {
    & {
      width: 13rem;
      height: 26rem;
    }

    img {
      max-width: 13rem;
      height: 20rem;
    }
  } */

  @media screen and (max-width: 600px) {
    & {
      max-width: 60rem;
      min-width: 30rem;
      height: 40rem;
      display: flex;
      flex-direction: column;
    }
    img {
      height: 30rem;
      max-width: 30rem;

      /* height:  */
    }
    #content {
      max-width: 30rem;
    }
  }
`;

interface ItemListProps {
  item: ItemType;
  categoryField: any;
}

const ItemList = ({ item, categoryField }: ItemListProps) => {
  const { setDetailQueryKey } = useItemStore();
  const { item_content, item_img, item_price, item_title, item_num } = item;
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const queryClient = useQueryClient();

  let queryKey: any[];
  let cachedData: ItemType[];
  let detailData: ItemType[];
  let newQueryKey: any[];

  // 새로고침시 어디서 쿼리가 생성되더라? itemEntirecontenst의 uSeortList에서 가져옴
  const handleClick = () => {
    queryKey = categoryField.etc.includes('home')
      ? [categoryField.etc.split('_')?.at(1)]
      : ['itemList', categoryField.category, categoryField.sort];
    cachedData = queryClient.getQueryData(queryKey) as ItemType[];
    detailData = cachedData.filter((item) => item.item_num === item_num);

    if (detailData.length === 0 || detailData === undefined) throw new Error('아이템디테일이 없습니다');

    newQueryKey = ['itemDetail', categoryField.category, detailData[0].item_num];
    queryClient.setQueryData(newQueryKey, detailData);
    setDetailQueryKey(newQueryKey);
    console.log(queryKey);
    queryKey.length === 1
      ? navigate(`/category/${categoryField.category}/detail/${item_num}?info=info`)
      : navigate(`${location}/detail/${item_num}?info=info`);
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
