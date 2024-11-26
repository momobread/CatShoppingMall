import { ItemType } from '../types/Item';
import ItemList from './ItemList';

interface ItemEntireContentsProps {
  datas: ItemType[];
}

const ItemEntireContents = ({ datas }: ItemEntireContentsProps) => {
  return (
    <ul>
      {datas.map((item) => (
        <ItemList item={item} />
      ))}
    </ul>
  );
};
export default ItemEntireContents;
