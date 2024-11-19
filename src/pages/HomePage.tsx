// import { useState } from "react";

import styled from 'styled-components';

// import '/src/style/main.css';
// import '/src/style/mediaquery.css';
// import '../public/reset.css';
// import MainPage from './components/mainPage';
// import { useState } from 'react';
// import ItemDetailPage from './components/itemDetailPage';
// import Login from './components/loginPage';
// import User from '../public/user';

//어떻게 다음 아이템을 보여줄 것인가?
// onclick시 state에 index 4567 보여주기
//

const HomePage = () => {
  return (
    <>
      <div style={{ height: '200px', backgroundColor: 'var(--color-grey-200)' }}>HomePage</div>
      <div style={{ height: '200px', backgroundColor: 'var(--color-grey-200)' }}>HomePage</div>
      <div style={{ height: '200px', backgroundColor: 'var(--color-grey-200)' }}>HomePage</div>
      <div style={{ height: '200px', backgroundColor: 'var(--color-grey-200)' }}>HomePage</div>
      <div style={{ height: '200px', backgroundColor: 'var(--color-grey-200)' }}>HomePage</div>
      <div style={{ height: '200px', backgroundColor: 'var(--color-grey-200)' }}>HomePage</div>
    </>
  );
};
export default HomePage;

function App() {
  // const [pageIndex, setPageIndex] = useState(1); //현재페이지
  // const [itemDetail, setItemDetail] = useState([]); //상품디테일 정보
  // const [backpage, setBackPage] = useState(0); //전 페이지
  // const [user, setUser] = useState(User); //user배열

  // const [islogin, setIslogin] = useState(false); //로그인성공실패 -> 전역

  // function handleUser(v) {
  //   setUser((user) => [...user, v]);
  // }

  // function pageNum(e) {
  //   setPageIndex(e);
  //   setBackPage(pageIndex);
  // }
  // function detailContent(item) {
  //   console.log(item);

  //   setItemDetail(item);
  // }
  // function handleBack() {
  //   setPageIndex(backpage);
  // }

  return (
    <div className="container">
      <>
        {/* <Header pageNum={pageNum} islogin={islogin} /> */}

        {/* <Nav />
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

          <ItemList items={newitems[newNum]} handleNext={handleNextNewItem} handlePrevious={handlePreviousNewItem}>
            NewItem
          </ItemList>

          <Recommand>Recommand</Recommand>
          <Information>Information</Information>
        </div>

        <Footer /> */}
      </>
      {/* {pageIndex == 2 && (
        <ItemDetailPage
          itemDetail={itemDetail}
          handleBack={handleBack}
          pageNum={pageNum}
          islogin={islogin}
        ></ItemDetailPage>
      )}
      {pageIndex == 3 && (
        <Login
          handleUser={handleUser}
          handleBack={handleBack}
          setIslogin={setIslogin}
          user={user}
          pageNum={pageNum}
          pageIndex={pageIndex}
        />
      )} */}
    </div>
  );
}
