import styled from 'styled-components';
import Button from '../ui/Button';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import useHomeStore from '../store/home';
import { useEffect, useState, type ReactNode } from 'react';
const StyledItemContents = styled.ul`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  justify-content: center;
  /* width: 80%; */

  @media screen and (max-width: 900px) {
    gap: 1rem;
  }
  /* background-color: beige; */
  @media screen and (max-width: 600px) {
    flex-direction: column;
    button {
      display: none;
    }
  }
`;

interface ItemContentsProps {
  render: ReactNode;
  type: string;
}
const ItemContents = ({ render, type }: ItemContentsProps) => {
  const { setSlideBestIndexUp, setSlideBestIndexDown, slideBestIndex } = useHomeStore();
  const { setSlideNewIndexDown, setSlideNewIndexUp, slideNewIndex } = useHomeStore();
  const { maxBestSlide, maxNewSlide } = useHomeStore();
  const [isUpDisabled, setIsUpDisabled] = useState<boolean>(false);
  const [isDownDisabled, setIsDownDisabled] = useState<boolean>(false);

  const handleSlideUpButton = () => {
    if (type === 'bestItems') {
      if (slideBestIndex === maxBestSlide - 1) setIsUpDisabled(true);
      else {
        setIsUpDisabled(false);
        setIsDownDisabled(false);
        setSlideBestIndexUp();
      }
    } else {
      //newItems
      if (slideNewIndex === maxNewSlide - 1) setIsUpDisabled(true);
      else {
        setIsUpDisabled(false);
        setIsDownDisabled(false);
        setSlideNewIndexUp();
      }
    }
  };

  const handleSlideDownButton = () => {
    if (type === 'bestItems') {
      if (slideBestIndex === 0) setIsDownDisabled(true);
      else {
        setIsDownDisabled(false);
        setIsUpDisabled(false);
        setSlideBestIndexDown();
      }
    } else {
      //newItems
      if (slideNewIndex === 0) setIsUpDisabled(true);
      else {
        setIsUpDisabled(false);
        setIsDownDisabled(false);
        setSlideNewIndexDown();
      }
    }
  };

  return (
    <StyledItemContents>
      <Button onClick={() => handleSlideDownButton()} disabled={isDownDisabled}>
        <KeyboardArrowLeftIcon fontSize="large" />
      </Button>
      {render}
      <Button onClick={() => handleSlideUpButton()} disabled={isUpDisabled}>
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
