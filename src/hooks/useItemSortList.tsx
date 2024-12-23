import { useQuery } from '@tanstack/react-query';
import { ItemType } from '../types/Item';
import { itemListApi } from '../service/itemListApi';

interface useItemSortList {
  category: string | null;
  sort: string | null;
}

const useItemSortList = ({ category, sort }: useItemSortList) => {
  // console.log(category);
  // console.log(sort);

  //sort가 null이 아닌  =? category/1/sort=date_asc
  //sort가 Null인 경우 category/2

  //여기서 최종적으로 sort가 널이면 기본값으로 설정 sort는 없으면 오류 페이지를 띄워주는게 아니라 기본 오름차순으로 하기 때문3
  //price, createDate
  let field = sort?.split('_').at(0) ?? 'createdDate'; //Mainnav로 바로 눌렀을때\
  let direction = sort?.split('_').at(1) ?? 'desc';

  let query_field = `item_${field}`;

  // console.log(query_field, '요가');

  const { data: items, error } = useQuery<ItemType[], Error>({
    queryKey: ['itemList', category, sort === null ? 'date_desc' : sort],
    queryFn: () => itemListApi({ category, query_field, direction }),
    staleTime: 1000 * 60 * 60 * 12,
  });
  if (error) throw new Error('찿으시려는 아이템이 없습니다');

  return items;
};
export default useItemSortList;
