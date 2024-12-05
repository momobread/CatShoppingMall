import { navItmes } from '../ui/SideNav';

const makeSideNav = (category: string | null): navItmes[] => {
  let itemListFied;
  if (!category) throw new Error('카테고리가 없습니다'); //null,undefined
  if (category === '1') {
    //베스트
    itemListFied = [
      { field: '최신순', sort: 'date_desc' },
      { field: '인기순', sort: 'liked_desc' },
      { field: '높은할인율순', sort: 'price_desc' },
      { field: '높은가격순', sort: 'price_desc' },
      { field: '낮은가격순', sort: 'price_asc' },
    ];
    return itemListFied;
  }
  if (category === '2') {
    //신상품
    itemListFied = [
      { field: '최신순', sort: 'date_desc' },
      { field: '인기순', sort: 'liked_desc' },
      { field: '높은할인율순', sort: 'price_desc' },
      { field: '높은가격순', sort: 'price_desc' },
      { field: '낮은가격순', sort: 'price_asc' },
    ];
    return itemListFied;
  }
  //
  throw new Error(`등록되지 않은 카테고리 입니다,category : ${category}`);
};

export default makeSideNav;
