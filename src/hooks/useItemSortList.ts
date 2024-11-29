import { useQuery } from '@tanstack/react-query';
import { ItemType } from '../types/Item';
import { itemListApi } from '../service/itemListApi';
import useItemStore from '../store/ItemList';

const useItemSortList = (category, sort) => {
  // console.log(category);
  // console.log(sort);

  //sort가 null이 아닌  =? category/1/sort=date_asc
  //sort가 Null인 경우 category/2

  //price, createDate
  let field = sort !== null ? sort.split('_').at(0) : 'createdDate'; //Mainnav로 바로 눌렀을때\
  let direction = sort !== null ? sort.split('_').at(1) : 'desc';

  // console.log('워야', direction);

  let query_field = `item_${field}`;

  // console.log(query_field, '요가');

  const { data: items } = useQuery<ItemType[], Error>({
    queryKey: ['ItemList', category, sort],
    queryFn: () => itemListApi({ category, query_field, direction }),
    staleTime: 20000,
    refetchInterval: 20000,
  });

  return items;
};
export default useItemSortList;
