import styled from 'styled-components';
import Button from '../ui/Button';
import ItemList from './ItemList';
import { useQuery } from '@tanstack/react-query';
import { fetchBestItems } from '../service/bestItemsApi';
import { ItemType } from '../types/Item';

const StyledItemContents = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ItemContents = ({ render }) => {
  // const { data: bestItems } = useQuery<ItemType[], Error>({
  //   queryKey: ['bestItems'],
  //   queryFn: fetchBestItems,
  // });

  return (
    <StyledItemContents>
      <Button>왼쪽</Button>
      {bestItems?.map((item: ItemType) => <ItemList key={item.id} item={item} />)}
      <Button>오른쪽</Button>
    </StyledItemContents>
  );
};
export default ItemContents;

// function ItemList({
//   children,
//   items, //bestitems[0] bestitems[1]
//   handleNext,
//   handlePrevious,
//   pageNum,
//   detailContent,
// }) {
//   return (
//     <div className="ItemListWrap">
//       <div className="pc_title">
//         {/* <ItemsTitle items={items}>{children}</ItemsTitle> */}
//         <div className="ItemListTitle">
//           <ContentTitle>{children}</ContentTitle>
//         </div>
//       </div>
//       <div className="itemListContentWrap">
//         <span className="item_left_button">
//           <i
//             className="fa-solid fa-arrow-left fa-2xl"
//             style={{ color: "#fdcee2" }}
//             onClick={() => handlePrevious()}
//           ></i>
//         </span>
//         <ItemsContent
//           items={items}
//           pageNum={pageNum}
//           detailContent={detailContent}
//         />
//         <span className="item_right_button">
//           <i
//             className="fa-solid fa-arrow-right fa-2xl"
//             style={{ color: "#fdcee2" }}
//             onClick={() => handleNext()}
//           ></i>
//         </span>
//       </div>
//     </div>
//   );
// }
