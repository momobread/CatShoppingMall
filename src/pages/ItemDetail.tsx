import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useLocation, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import Loader from '../ui/Loader';
import ItemDetailInfo from '../feature/ItemDetail/ItemDetailInfo';
import ItemDetailContent from '../feature/ItemDetail/ItemDetailContent';
import ItemDetailNav from '../feature/ItemDetail/ItemDetailNav';
import { useItemStore } from '../store/item';
import { ItemType } from '../types/Item';
import { ItemInfoType, useItemInfo } from '../hooks/useItemDetail';
import ItemReview from '../feature/ItemReview/ItemReview';
import ItemEtc from '../feature/ItemEtc/ItemEtc';
import { itemDetailApi } from '../service/ItemsApi';

const StyledItemDetail = styled.section`
  width: 100vw;
  #item_info_img_wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 2rem;
  }
`;

export interface ItemCode {
  item_num?: number;
  item_category?: number;
}

const ItemDetail = () => {
  const queryClient = useQueryClient();
  let location = useLocation().pathname;
  const item_num = location.split('/').at(4) ?? '';
  const categorNum = location.split('/').at(2) ?? '';
  const [params, setParams] = useSearchParams();
  const navPostion = params.get('info');

  let { detailQeuryKey } = useItemStore();
  let detailData: ItemType | undefined = queryClient.getQueryData<ItemType[]>(detailQeuryKey)?.at(0) ?? undefined;

  //새로고침했을때 이부분이 안되기 때문에 수정 필요함. =>
  //아이템 리스트에서 아이템디테일로 오면 , 아이템리스트를 로딩할때 받아온 데이터를(20개) 중 하나를 뺴서 다시 쓰려고 ㅅ동으로 쿼리를 만들었는데
  // 시작점이 즉 아이템디테일에서 새로고침을 하게되면 아이템 리스트의 데이터가 없기 때문에 로직을 별도로 처리해주지 않으면 []이나온다
  //그래서 케이스를 나눈다. 아이템 리스트에서 아이템 디테일로 오면 캐시에 있던 데이터 쓰고, 그런게 아니라면 api요청을 해서 새로 아이템디테일 불러오자~

  //그렇게 되면 조건부로(쿼리키가 있을때, 없을때[빈배열일때]) queryFn을 실행해야 된다
  const { data: detail } = useQuery<ItemType>({
    queryKey: detailQeuryKey.length > 0 ? detailQeuryKey : ['itemDetail', categorNum, item_num],
    queryFn: detailQeuryKey.length > 0 ? undefined : () => itemDetailApi(item_num),
    staleTime: 1000 * 60 * 60 * 12,
    enabled: detailQeuryKey.length === 0,
  });

  //새로고침 시 필요한  데이터를 다시 받아온 후 원래 아이템디테일을 그려주는 데이터에 받아온 데이터를 넣어줘야 됌
  if (detailData === undefined) detailData = detail;

  const { data } = useItemInfo(item_num);
  const { id, item_info } = (data as ItemInfoType) ?? {};
  const item_info_img = item_info?.split(',') ?? [];

  // if (!detailData || !item_info_img || !data) return <Loader />;
  if (!detailData) return <Loader />;

  return (
    <StyledItemDetail>
      <ItemDetailInfo item={detailData} />
      <ItemDetailNav location={location} />
      {navPostion === 'info' ? (
        // <ItemDetailContent item_info_img={item_info_img} />
        <ItemDetailContent item_info_img={item_info_img} />
      ) : navPostion === 'review' ? (
        <ItemReview item_num={item_num} item_id={id} />
      ) : (
        // <ItemInquiry />
        <ItemEtc />
      )}
    </StyledItemDetail>
  );
};
export default ItemDetail;
