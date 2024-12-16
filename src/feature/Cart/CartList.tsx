import { ItemType } from '../../types/Item';

interface CartListProps {
  cartItem: ItemType;
}
const CartList = ({ cartItem }: CartListProps) => {
  const { item_title, item_img, item_price } = cartItem;
  console.log(item_title);
  return (
    <li>
      <span>{item_title}</span>
      <span>aa</span>
      <span>2222</span>
      <span>104e043</span>
    </li>
  );
};
export default CartList;
