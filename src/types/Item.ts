interface ItemType {
  id: number;
  item_title: string;
  item_content: string;
  item_price: number;
  item_img: string;
  item_Num: string;
  item_createdDate: Date;
  category?: string;
}

export type { ItemType };
