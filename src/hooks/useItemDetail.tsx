import { useMutation, useQuery } from '@tanstack/react-query';
import ItemDetail from '../pages/ItemDetail';
import ItemDetailApi from '../service/ItemDetailApi';

export interface ItemInfoType {
  item_info: string;
}

const useItemInfo = (item_num) => {
  const { data } = useQuery<ItemInfoType, Error, ItemInfoType>({
    queryKey: ['itemInfo', item_num],
    queryFn: () => ItemDetailApi(item_num),
    staleTime: 20000,
    refetchInterval: 20000,
  });
  const itemInfo = { item_info: data?.item_info };
  return itemInfo;
};
export { useItemInfo };
