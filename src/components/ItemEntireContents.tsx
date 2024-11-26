import ItemList from './ItemList';

const ItemEntireContents = ({ datas = [] }) => {
  return (
    <ul>
      {datas.map((v) => (
        <ItemList item={v} />
      ))}
    </ul>
  );
};
export default ItemEntireContents;
