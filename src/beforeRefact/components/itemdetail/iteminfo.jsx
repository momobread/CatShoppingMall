import ItemBasket from "./itembasket";

function ItemInfo({ itemDetail }) {
  return (
    <div className="item_info_wrap">
      <div className="item_img">
        <img src={itemDetail.img} />
      </div>
      <div className="item_info">
        <div className="item_basic_info">
          <span>{itemDetail.title}</span>
          <span>{itemDetail.text}</span>
          <span>{itemDetail.price}</span>
        </div>
        <button className="share_button">
          <span>
            <img src="/src/assets/icon/share.png" />
          </span>
        </button>
        <ItemBasket />
      </div>
    </div>
  );
}

export default ItemInfo;
