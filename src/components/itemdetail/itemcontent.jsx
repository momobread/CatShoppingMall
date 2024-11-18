import DetailInfo from "/src/components/itemdetail/itemdetailinfo.jsx";
import ItemRate from "/src/components/itemdetail/itemrate.jsx";
import ItemQA from "/src/components/itemdetail/itemqa.jsx";
import { useState } from "react";

function ItemContent({ itemDetail }) {
  const [detailindex, setDetailindex] = useState(21);

  // itemDetail index가 2여서
  // 그에 종속되는 페이지는 21 22 23 으로 시작된다
  return (
    <div className="itemcontent_wrap">
      <div className="itemcontent_nav">
        {/* <div onClick={() => setDetailindex(21)} >상품상제정보</div> */}
        <div
          className={`nav_1${detailindex == 21 ? "_clicked" : ""}`}
          onClick={() => setDetailindex(21)}
        >
          상품상제정보
        </div>
        <div
          className={`nav_2${detailindex == 22 ? "_clicked" : ""}`}
          onClick={() => setDetailindex(22)}
        >
          상품후기
        </div>
        <div
          className={`nav_3${detailindex == 23 ? "_clicked" : ""}`}
          onClick={() => setDetailindex(23)}
        >
          상품문의
        </div>
      </div>

      {detailindex == 21 ? (
        <DetailInfo itemDetail={itemDetail} />
      ) : detailindex == 22 ? (
        <ItemRate itemDetail={itemDetail} detailindex={detailindex} />
      ) : (
        <ItemQA />
      )}
    </div>
  );
}

export default ItemContent;
