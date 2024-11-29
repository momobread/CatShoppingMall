import styled from 'styled-components';
import { ItemType } from '../types/Item';
import ItemList from './ItemList';

const StyledItemEntireContents = styled.div`
  padding: 2rem 1rem;

  ul {
    min-height: 160rem;
    max-width: 160rem;
    display: flex;
    flex-wrap: wrap;
  }
`;

interface ItemEntireContentsProps {
  datas: ItemType[];
}

const ItemEntireContents = ({ datas }: ItemEntireContentsProps) => {
  return (
    <StyledItemEntireContents>
      <ul>
        {datas.map((item) => (
          <ItemList item={item} />
        ))}
      </ul>
    </StyledItemEntireContents>
  );
};
export default ItemEntireContents;
