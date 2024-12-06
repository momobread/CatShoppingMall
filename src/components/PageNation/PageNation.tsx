import { NavigateBeforeOutlined, NavigateNextOutlined } from '@mui/icons-material';
import React, { useState } from 'react';
import Button from '../../ui/Button';

interface PageNationProps {
  currentPageIndex: number;
  //   ❄️요 부분 다시 체크해 주세요
  setcurrentPageIndex: React.Dispatch<React.SetStateAction<number>>;
  pageIndex: number[];
}

const PageNation = ({ currentPageIndex, setcurrentPageIndex, pageIndex }: PageNationProps) => {
  const [isDonwButton, setIsDownButton] = useState<boolean>(true);
  const [isUpButton, setIsUpButton] = useState<boolean>(false);
  const handleLeftButton = () => {
    if (currentPageIndex > 0) {
      setcurrentPageIndex((v: number) => v - 1); //이전페이지 완료
      setIsUpButton(false);
    } else {
      setIsDownButton(true);
      setIsUpButton(false);
    }
  };
  const handleRightButton = () => {
    if (currentPageIndex < pageIndex.length - 1) {
      setcurrentPageIndex((v) => v + 1); //다음페이지 완료
      setIsDownButton(false);
    } else {
      setIsUpButton(true);
      setIsDownButton(false);
    }
  };
  return (
    <ul id="item_list_button">
      <Button onClick={handleLeftButton} disabled={isDonwButton}>
        <NavigateBeforeOutlined fontSize="large" />
      </Button>
      {pageIndex.map((_, i) => (
        <li key={i}>
          <Button
            style={{ backgroundColor: `${currentPageIndex === i ? 'var(--color-accent_blue)' : ''}` }}
            onClick={() => setcurrentPageIndex(i)}
          >
            {i + 1}
          </Button>
        </li>
      ))}
      <Button onClick={handleRightButton} disabled={isUpButton}>
        <NavigateNextOutlined fontSize="large" />
      </Button>
    </ul>
  );
};
export default PageNation;
