import styled from 'styled-components';
import Button from '../ui/Button';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
const StyledItemContents = styled.ul`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  justify-content: center;
  /* background-color: beige; */
  @media screen and (max-width: 600px) {
    flex-direction: column;
    button {
      display: none;
    }
  }
  @media screen and (max-width: 900px) {
  }
`;

const ItemContents = ({ render }) => {
  // const { data: bestItems } = useQuery<ItemType[], Error>({
  //   queryKey: ['bestItems'],
  //   queryFn: fetchBestItems,
  // });

  return (
    <StyledItemContents>
      <Button>
        <KeyboardArrowLeftIcon fontSize="large" />
      </Button>
      {render}
      <Button>
        <KeyboardArrowRightIcon fontSize="large" />
      </Button>
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
