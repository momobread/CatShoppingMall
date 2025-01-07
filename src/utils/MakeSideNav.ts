import { navItmes } from '../ui/SideNav';

const makeSideNav = (category: string | null): navItmes[] => {
  let itemListField;
  if (!category) throw new Error('카테고리가 없습니다'); //null,undefined
  if (category === '1') {
    //베스트
    itemListField = [
      { field: '최신순', sort: 'date_desc' },
      { field: '오래된순', sort: 'date_asc' },
      // { field: '인기순', sort: 'liked_desc' },
      // { field: '높은할인율순', sort: 'price_desc' },
      { field: '높은가격순', sort: 'price_desc' },
      { field: '낮은가격순', sort: 'price_asc' },
    ];
    return itemListField;
  }
  if (category === '2') {
    //신상품
    itemListField = [
      { field: '최신순', sort: 'date_desc' },
      { field: '오래된순', sort: 'date_asc' },

      { field: '높은가격순', sort: 'price_desc' },
      { field: '낮은가격순', sort: 'price_asc' },
    ];
    return itemListField;
  }
  if (category === '3') {
    itemListField = [
      { field: '사료', sort: 'eat' },
      { field: '간식', sort: 'snack' },
      { field: '장난감', sort: 'toy' },
      { field: '화장실', sort: 'bath' },
      { field: '기타', sort: 'etc' },
    ];
    return itemListField;
  }
  throw new Error(`등록되지 않은 카테고리 입니다,category : ${category}`);
};

export default makeSideNav;
