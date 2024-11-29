import { useLocation, useNavigation, useParams, useSearchParams } from 'react-router-dom';
import ItemList from '../components/ItemList';
import ItemEntireContents from '../components/ItemEntireContents';
import { useItemList } from '../hooks/useItemList';
import Loader from '../ui/Loader';
import { useQuery } from '@tanstack/react-query';
import { ItemType } from '../types/Item';
import SideNav from '../ui/SideNav';
import makeSideNav from '../feature/Nav/MakeSideNav';
import styled from 'styled-components';

const StyledItemPage = styled.div`
  display: grid;
  grid-template-columns: 35rem 1fr;
`;

const ItemPage = () => {
  const location = useLocation();

  const category = location.pathname.split('/').at(2) || null;
  const navItems = makeSideNav(category);
  console.log(navItems);

  // let data;
  // console.log(logation.pathname);
  // if (logation.pathname === '/category/1') data = ['best1', 'best2'];
  // //   console.log(data);

  const { data: item } = useQuery<ItemType[], Error>({
    queryKey: ['ItemList'],
    queryFn: () => useItemList({ category }),
    staleTime: 20000,
    refetchInterval: 20000,
  });

  if (!item) return <Loader />;

  return (
    <StyledItemPage>
      <SideNav navItems={navItems} />
      <ItemEntireContents datas={item} />
    </StyledItemPage>
  );
};
export default ItemPage;
