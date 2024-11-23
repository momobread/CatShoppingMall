import styled from 'styled-components';
import AdItemSlide from '../feature/home/AdItemSlide';
import PreviewItems from '../feature/home/PreviewBestItems';
import { fetchBestItems } from '../service/bestItemsApi';
import { ItemType } from '../types/Item';
import { useQuery } from '@tanstack/react-query';
import { fetchNewItems } from '../service/newItemApi';
import ItemList from '../components/ItemList';
import Test from './Test';

// import '/src/style/main.css';
// import '/src/style/mediaquery.css';
// import '../public/reset.css';
// import MainPage from './components/mainPage';
// import { useState } from 'react';
// import ItemDetailPage from './components/itemDetailPage';
// import Login from './components/loginPage';
// import User from '../public/user';

const StyledHomePage = styled.section`
  display: grid;
  /* background-color: aliceblue; */
  grid-template-rows: 45rem 55rem 55rem 1fr;
  @media screen and (max-width: 600px) {
    grid-template-rows: 1fr 1fr;
  }
`;

const HomePage = () => {
  const { data: bestItems } = useQuery<ItemType[], Error>({
    queryKey: ['bestItems'],
    queryFn: fetchBestItems,
  });

  const { data: newItems } = useQuery<ItemType[], Error>({
    queryKey: ['newItems'],
    queryFn: fetchNewItems,
  });

  return (
    <StyledHomePage>
      <AdItemSlide />
      {/* render pattern 사용  */}
      <PreviewItems title="BestItems" render={bestItems?.map((bestItem) => <ItemList item={bestItem} />)} />
      <PreviewItems title="NewItems" render={newItems?.map((newItem) => <ItemList item={newItem} />)} />
    </StyledHomePage>
  );
};
export default HomePage;

//
// 참고용

// function App() {
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

// return (
//   <div className="container">
{
  /* <Nav />
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

        <Footer /> */
}

{
  /* {pageIndex == 2 && (
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
      )} */
}
//     </div>
//   );
// }
