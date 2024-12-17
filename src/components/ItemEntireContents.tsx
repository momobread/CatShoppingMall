import styled from 'styled-components';
import ItemList from './ItemList';
import { useSearchParams } from 'react-router-dom';
import Loader from '../ui/Loader';
import { makePageNation } from '../utils/MakePageNation';
import { useState } from 'react';
import { NavigateBeforeOutlined, NavigateNextOutlined } from '@mui/icons-material';
import Button from '../ui/Button';
import test from '../service/test';
import PageNation from './PageNation/PageNation';
import { CategoryType } from '../types/Item';
import useItemSortList from '../hooks/useItemSortList';

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
  const [currentPageIndex, setcurrentPageIndex] = useState<number>(0);

  const [params] = useSearchParams();
  const sort = params.get('sort') || null;
  const categoryField: CategoryType = { category, sort };
  let items = useItemSortList(categoryField);
  if (!items) return <Loader />;

  const [pageNationItems, pageIndex] = makePageNation(items, currentPageIndex);

  return (
    <StyledItemEntireContents>
      <ul id="item_list">
        {pageNationItems.map((item) => (
          <ItemList item={item} categoryField={categoryField} key={item.item_num} />
        ))}
      </ul>
      <PageNation currentPageIndex={currentPageIndex} setcurrentPageIndex={setcurrentPageIndex} pageIndex={pageIndex} />
      <button onClick={test} disabled={true}>
        만들기
      </button>
    </StyledItemEntireContents>
  );
};
export default ItemEntireContents;
