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
  const { detailQeuryKey } = useItemStore();
  let location = useLocation().pathname;
  const item_num = location.split('/').at(4) ?? '';
  const queryClient = useQueryClient();
  const detailData: ItemType | undefined = queryClient.getQueryData<ItemType[]>(detailQeuryKey)?.at(0) ?? undefined;
  const [params, setParams] = useSearchParams();
  const navPostion = params.get('info');

  //새로고침했을때 이부분이 안되기 때문에 수정 필요함.
  const {} = useQuery({
    queryKey: detailQeuryKey,
    staleTime: 1000 * 60 * 60 * 12,
  });

  // 아이템 그림, 후기 가져오기~

  const { data, isLoading } = useItemInfo(item_num);
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
