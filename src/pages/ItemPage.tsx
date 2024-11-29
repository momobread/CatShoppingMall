import { useLocation, useNavigation, useParams, useSearchParams } from 'react-router-dom';
import ItemList from '../components/ItemList';
import ItemEntireContents from '../components/ItemEntireContents';
import Loader from '../ui/Loader';
import { useQuery } from '@tanstack/react-query';
import { ItemType } from '../types/Item';
import SideNav from '../ui/SideNav';
import styled from 'styled-components';
import makeSideNav from '../utils/MakeSideNav';
import { itemListApi } from '../service/itemListApi';
import useItemList from '../hooks/useItemList';

const StyledItemPage = styled.div`
  display: grid;
  grid-template-columns: 35rem 1fr;
`;

const ItemPage = () => {
  const location = useLocation();

  const category = location.pathname.split('/').at(2) || null;
  const navItems = makeSideNav(category);
  // console.log(navItems);

  // const { data: item } = useQuery<ItemType[], Error>({
  //   queryKey: ['ItemList'],
  //   queryFn: () => itemListApi({ category }),
  //   staleTime: 20000,
  //   refetchInterval: 20000,
  // });
  // let data;
  // console.log(logation.pathname);
  // if (logation.pathname === '/category/1') data = ['best1', 'best2'];
  // //   console.log(data);

  // if (!item) return <Loader />;

  return (
    <StyledItemPage>
      <SideNav navItems={navItems} />
      <ItemEntireContents category={category} />
    </StyledItemPage>
  );
};
export default ItemPage;
