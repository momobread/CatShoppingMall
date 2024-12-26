import styled from 'styled-components';
import ItemList from './ItemList';
import { useSearchParams } from 'react-router-dom';
import Loader from '../ui/Loader';
import { makePageNation } from '../utils/MakePageNation';
import { useEffect, useState } from 'react';
import PageNation from './PageNation/PageNation';
import { CategoryType } from '../types/Item';
import useItemSortList from '../hooks/useItemSortList';

const StyledItemEntireContents = styled.div`
  padding: 2rem 1rem;
  /*  */
  #item_list_wrap {
    min-height: 200rem;
    max-height: 270rem;
    max-width: 160rem;
    min-width: 130rem;
  }
  #item_list {
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
  @media screen and (max-width: 600px) {
    max-width: 60rem;
    min-width: 30rem;

    #item_list_wrap {
      max-width: 60rem;
      min-width: 30rem;
      min-height: fit-content;
      max-height: fit-content;
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
  const categoryField: CategoryType = { category, sort, etc: 'sortList' };

  useEffect(() => {
    if (category === '1') setcurrentPageIndex(0);
    if (category === '2') setcurrentPageIndex(0);
  }, [category]);

  let items = useItemSortList(categoryField);
  if (!items) return <Loader />;

  const [pageNationItems, pageIndex] = makePageNation(items, currentPageIndex);

  return (
    <StyledItemEntireContents>
      <div id="item_list_wrap">
        <ul id="item_list">
          {pageNationItems.map((item) => (
            <ItemList item={item} categoryField={categoryField} key={item.item_num} />
          ))}
        </ul>
      </div>
      <PageNation currentPageIndex={currentPageIndex} setcurrentPageIndex={setcurrentPageIndex} pageIndex={pageIndex} />
    </StyledItemEntireContents>
  );
};
export default ItemEntireContents;
