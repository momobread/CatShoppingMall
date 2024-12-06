interface ItemType {
  id: number;
  item_title: string;
  item_content: string;
  item_price: number;
  item_img: string;
  item_num: string;
  item_createdDate: Date;
  item_category: number;
  item_best: boolean;
}

interface CategoryType {
  category: string | null;
  sort: string | null;
}

export type { ItemType, CategoryType };
