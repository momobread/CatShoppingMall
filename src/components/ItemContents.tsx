import styled from 'styled-components';
import Button from '../ui/Button';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import useHomeStore from '../store/home';
import { useState, type ReactNode } from 'react';
const StyledItemContents = styled.ul`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 900px) {
    gap: 1rem;
  }
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
  const [isDownDisabled, setIsDownDisabled] = useState<boolean>(true);

  const handleSlideUpButton = () => {
    if (type === 'bestItems') {
      if (slideBestIndex === maxBestSlide - 1) {
        setIsUpDisabled(true);
        setIsDownDisabled(false);
      } else {
        setIsUpDisabled(false);
        setIsDownDisabled(false);
        setSlideBestIndexUp();
      }
    } else {
      //newItems
      if (slideNewIndex === maxNewSlide - 1) {
        setIsUpDisabled(true);
        setIsDownDisabled(false);
      } else {
        setIsUpDisabled(false);
        setIsDownDisabled(false);
        setSlideNewIndexUp();
      }
    }
  };

  const handleSlideDownButton = () => {
    if (type === 'bestItems') {
      if (slideBestIndex === 0) {
        setIsDownDisabled(true);
        setIsUpDisabled(false);
      } else {
        setIsDownDisabled(false);
        setIsUpDisabled(false);
        setSlideBestIndexDown();
      }
    } else {
      //newItems
      if (slideNewIndex === 0) {
        setIsDownDisabled(true);
        setIsUpDisabled(false);
      } else {
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
