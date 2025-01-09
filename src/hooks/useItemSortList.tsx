import { useQuery } from '@tanstack/react-query';
import { ItemType } from '../types/Item';
import { itemListApi } from '../service/itemListApi';

interface useItemSortList {
  category: string | null;
  sort: string | null;
}

const useItemSortList = ({ category, sort }: useItemSortList) => {
  let field = sort?.split('_').at(0) ?? 'createdDate'; //Mainnav로 바로 눌렀을때\
  let direction: string;
  if (category === '1' || category === '2') {
    direction = sort?.split('_').at(1) ?? 'desc';
  } else {
    direction = 'none';
  }

  let query_field = `item_${field}`;

  const { data: items, error } = useQuery<ItemType[], Error>({
    queryKey: ['itemList', category, sort === null ? 'date_desc' : sort],
    queryFn: () => itemListApi({ category, query_field, direction }),
    staleTime: 1000 * 60 * 60 * 12,
  });
  if (error) throw new Error('찿으시려는 아이템이 없습니다');

  return items;
};
export default useItemSortList;
