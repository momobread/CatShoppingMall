// import items from "../../../public/item";

import ContentTitle from "./contentTitle";

function ItemList({
  children,
  items, //bestitems[0] bestitems[1]
  handleNext,
  handlePrevious,
  pageNum,
  detailContent,
}) {
  return (
    <div className="ItemListWrap">
      <div className="pc_title">
        {/* <ItemsTitle items={items}>{children}</ItemsTitle> */}
        <div className="ItemListTitle">
          <ContentTitle>{children}</ContentTitle>
        </div>
      </div>
      <div className="itemListContentWrap">
        <span className="item_left_button">
          <i
            className="fa-solid fa-arrow-left fa-2xl"
            style={{ color: "#fdcee2" }}
            onClick={() => handlePrevious()}
          ></i>
        </span>
        <ItemsContent
          items={items}
          pageNum={pageNum}
          detailContent={detailContent}
        />
        <span className="item_right_button">
          <i
            className="fa-solid fa-arrow-right fa-2xl"
            style={{ color: "#fdcee2" }}
            onClick={() => handleNext()}
          ></i>
        </span>
      </div>
    </div>
  );
}

// function ItemsTitle({ children }) {
//   return (
//     <>
//       <div className="ItemListTitle">
//         <span>{children}</span>
//       </div>
//     </>
//   );
// }
function ItemsContent({ items, pageNum, detailContent }) {
  return (
    <>
      <ul className="itemListContent">
        {/* items &&를 붙여야 데이터를 받아왔을때 뒤에 조건을 수행한다 */}
        {/* react가 item 데이터가 오기 전에 바로 랜더링 하려고 하기 때문에  undefined에러 뜬다*/}

        {items && //[{...},{...},{...},{...}]
          items.map((item, i) => (
            <li
              key={item.id}
              className="items"
              onClick={() => {
                pageNum(2);
                detailContent(item);
              }}
            >
              <img src={item.img} />
              <span>{item.title}</span>
              <span>{item.price}</span>
              <span>{item.text}</span>
            </li>
          ))}
      </ul>
    </>
  );
}

export default ItemList;
