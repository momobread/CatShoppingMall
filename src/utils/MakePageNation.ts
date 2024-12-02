import { ItemType } from '../types/Item';

const makePageNation = (items: ItemType[], currentPageIndex: number): [ItemType[], number[]] => {
  let makeItems: ItemType[] = items;
  const dataLength = items.length;
  const itemSize = 16; //27/16
  const pageSize = Math.ceil(dataLength / itemSize); // 2
  const pageIndex: number[] = Array.from({ length: pageSize }, (_, i) => {
    return i;
  });

  makeItems = items.slice(itemSize * currentPageIndex, (currentPageIndex + 1) * itemSize); //0 17 17 32
  //0*16 +1  1 * 16 + 1

  return [makeItems, pageIndex];
};

export { makePageNation };
