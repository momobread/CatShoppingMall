interface ItemType {
  id: number;
  item_title: string;
  item_content: string;
  item_price: number;
  item_img: string;
  item_num: number;
  item_createdDate: Date;
  item_category: number;
}

export type { ItemType };
