import { useState } from "react";
import Header from "./common/header";
import Nav from "/src/components/common/nav.jsx";
import ADD from "./main/add";
import ItemList from "./main/itemlist";
import bestitems from "../../public/bestitem";
import newitems from "../../public/newitem";
import Recommand from "./main/recommand";
import Information from "./main/information";
import Footer from "./common/footer";

function MainPage({ pageNum, detailContent, islogin }) {
  const [bestNum, setBestNum] = useState(0);
  const [newNum, setNewNum] = useState(0);

  function handleNextBestItem() {
    setBestNum((v) => v + 1);
  }
  function handlePreviousBestItem() {
    setBestNum((v) => v - 1);
  }
  function handleNextNewItem() {
    setNewNum((v) => v + 1);
  }
  function handlePreviousNewItem() {
    setNewNum((v) => v - 1);
  }

  return (
    <>
      <header>
        <Header pageNum={pageNum} islogin={islogin} />
      </header>
      <Nav />
      <ADD />
      <div className="mobile">ALL Items</div>
      <div className="content">
        <ItemList
          pageNum={pageNum}
          detailContent={detailContent}
          items={bestitems[bestNum]}
          handleNext={handleNextBestItem}
          handlePrevious={handlePreviousBestItem}
        >
          bestItem
        </ItemList>

        <ItemList
          items={newitems[newNum]}
          handleNext={handleNextNewItem}
          handlePrevious={handlePreviousNewItem}
        >
          NewItem
        </ItemList>

        <Recommand>Recommand</Recommand>
        <Information>Information</Information>
      </div>

      <Footer />
    </>
  );
}

export default MainPage;
