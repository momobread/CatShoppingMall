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
  @media screen and (max-width: 600px) {
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
  const [params] = useSearchParams();
  const navPostion = params.get('info');

  let { detailQeuryKey } = useItemStore();
  let detailData: ItemType | undefined = queryClient.getQueryData<ItemType[]>(detailQeuryKey)?.[0] ?? undefined;

  const { data: detail } = useQuery<ItemType>({
    queryKey: detailQeuryKey.length > 0 ? detailQeuryKey : ['itemDetail', categorNum, item_num],
    queryFn: detailQeuryKey.length > 0 ? undefined : () => itemDetailApi(item_num),
    staleTime: 1000 * 60 * 60 * 12,
    enabled: detailQeuryKey.length === 0,
  });

  if (detailData === undefined) detailData = detail;

  const { data } = useItemInfo(item_num);
  const { id, item_info } = (data as ItemInfoType) ?? {};
  const item_info_img = item_info?.split(',') ?? [];

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
