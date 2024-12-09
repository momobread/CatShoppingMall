import { useQuery } from '@tanstack/react-query';
import { itemDetailApi } from '../service/ItemDetailApi';

export interface ItemInfoType {
  id: number;
  item_info: string;
}

const useItemInfo = (item_num: string) => {
  const { data, isLoading } = useQuery<ItemInfoType, Error, ItemInfoType>({
    queryKey: ['itemInfo', item_num],
    queryFn: () => itemDetailApi(item_num),
    staleTime: 1000 * 60 * 60 * 12,
  });

  return { data, isLoading };
};

export { useItemInfo };
