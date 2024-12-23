import styled from 'styled-components';

interface ItemDetailContentProps {
  item_info_img: string[];
}

const ItemDetailContentProps = styled.div`
  img {
    width: 80rem;
  }
`;

const ItemDetailContent = ({ item_info_img }: ItemDetailContentProps) => {
  return (
    <ItemDetailContentProps id="item_info_img_wrap">
      {item_info_img?.map((v) => <img src={v} key={v} />)}
    </ItemDetailContentProps>
  );
};
export default ItemDetailContent;
