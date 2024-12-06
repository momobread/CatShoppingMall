import { useLocation } from 'react-router-dom';
import ItemEntireContents from '../components/ItemEntireContents';
import SideNav from '../ui/SideNav';
import styled from 'styled-components';
import makeSideNav from '../utils/MakeSideNav';

const StyledItemPage = styled.div`
  display: grid;
  grid-template-columns: 35rem 1fr;
`;

const ItemPage = () => {
  const location = useLocation();
  const category = location.pathname.split('/').at(2) || null;
  const navItems = makeSideNav(category);

  return (
    <StyledItemPage>
      <SideNav navItems={navItems} />
      <ItemEntireContents category={category} />
    </StyledItemPage>
  );
};
export default ItemPage;
