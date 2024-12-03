import styled from 'styled-components';
import ItemList from './ItemList';
import { useSearchParams } from 'react-router-dom';
import Loader from '../ui/Loader';
import useItemSortList from '../hooks/useItemSortList';
import { makePageNation } from '../utils/MakePageNation';
import { useState } from 'react';
import { NavigateBeforeOutlined, NavigateNextOutlined } from '@mui/icons-material';
import Button from '../ui/Button';
import test from '../service/test';
import PageNation from './Pagenation/PageNation';

const StyledItemEntireContents = styled.div`
  padding: 2rem 1rem;

  #item_list {
    min-height: 200rem;
    max-height: 270rem;
    max-width: 160rem;
    min-width: 130rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  #item_list_button {
    display: flex;
    justify-content: center;

    button {
      margin: 0 0.2rem;
    }
  }
`;

interface ItemEntireContentsProps {
  category: string | null; //category/1
}

const ItemEntireContents = ({ category }: ItemEntireContentsProps) => {
  // const { itemListLoading } = useItemStore();
  const [currentPageIndex, setcurrentPageIndex] = useState<number>(0);
  // const [isDonwButton, setIsDownButton] = useState<boolean>(true);
  // const [isUpButton, setIsUpButton] = useState<boolean>(false);
  const [params] = useSearchParams();
  const sort = params.get('sort') || null;
  console.log(sort);
  let items = useItemSortList({ category, sort });
  if (!items) return <Loader />;

  const [pageNationItems, pageIndex] = makePageNation(items, currentPageIndex);

  // const handleLeftButton = () => {
  //   if (currentPageIndex > 0) {
  //     setcurrentPageIndex((v) => v - 1); //이전페이지 완료
  //     setIsUpButton(false);
  //   } else {
  //     setIsDownButton(true);
  //     setIsUpButton(false);
  //   }
  // };
  // const handleRightButton = () => {
  //   if (currentPageIndex < pageIndex.length - 1) {
  //     setcurrentPageIndex((v) => v + 1); //다음페이지 완료
  //     setIsDownButton(false);
  //   } else {
  //     setIsUpButton(true);
  //     setIsDownButton(false);
  //   }
  // };

  // 한줄에 4개일때는 4*4 16개
  //한줄에 3개일때는 3*4 12개
  return (
    <StyledItemEntireContents>
      <ul id="item_list">
        {pageNationItems.map((item) => (
          <ItemList item={item} />
        ))}
      </ul>
      {/* <PageNation />
       */}
      {/* <ul id="item_list_button">
        <Button onClick={handleLeftButton} disabled={isDonwButton}>
          <NavigateBeforeOutlined fontSize="large" />
        </Button>
        {pageIndex.map((_, i) => (
          <li>
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
      </ul> */}
      <PageNation currentPageIndex={currentPageIndex} setcurrentPageIndex={setcurrentPageIndex} pageIndex={pageIndex} />
      <button onClick={test} disabled={true}>
        만들기
      </button>
    </StyledItemEntireContents>
  );
};
export default ItemEntireContents;
