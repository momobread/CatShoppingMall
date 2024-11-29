import { navItmes } from '../../ui/SideNav';

const makeSideNav = (category: string | null): navItmes[] => {
  let itemListFied;
  if (!category) throw new Error('카테고리가 없습니다'); //null,undefined
  if (category === '1') {
    //신상품
    itemListFied = [{ field: '최신순' }, { field: '오래된순' }, { field: '높은가격순' }, { field: '낮은가격순' }];
    return itemListFied;
  }
  if (category === '2') {
    //베스트상품{
    itemListFied = [{ field: '최신순' }, { field: '오래된순' }, { field: '높은가격순' }, { field: '낮은가격순' }];
    return itemListFied;
  }
  //
  throw new Error(`등록되지 않은 카테고리 입니다,category : ${category}`);
};

export default makeSideNav;
