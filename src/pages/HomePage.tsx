import styled from 'styled-components';
import AdItemSlide from '../feature/home/AdItemSlide';
import { ItemType } from '../types/Item';
import { useQuery } from '@tanstack/react-query';
import ItemList from '../components/ItemList';
import { useEffect } from 'react';
import PreviewItems from '../feature/home/PreviewItems';
import useHomeStore from '../store/home';
import Loader from '../ui/Loader';
import HomeInfo from '../feature/home/HomeInfo';
import EditorRecommend from '../feature/home/EditorRecommend';
import { fetchBestItems, fetchNewItems } from '../service/ItemsApi';

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
  grid-template-rows: 45rem 55rem 55rem 1fr 70rem;
  @media screen and (max-width: 600px) {
    grid-template-rows: 1fr 1fr;
  }
`;

const HomePage = () => {
  const { data: bestItemsData } = useQuery<ItemType[], Error>({
    queryKey: ['bestItems'],
    queryFn: fetchBestItems,
    staleTime: 1000 * 60 * 60 * 12,
    //setIntervel은 필요가없다. 제품이 자주 등록되는건 아니여서
  });

  const { data: newItems } = useQuery<ItemType[], Error>({
    queryKey: ['newItems'],
    queryFn: fetchNewItems,
    staleTime: 1000 * 60 * 60 * 12,
  });
  const { slideBestIndex, slideNewIndex, setMaxBestSlide, setMaxNewSlide } = useHomeStore();

  useEffect(() => {
    if (typeof bestItemsData !== 'undefined') setMaxBestSlide(Math.round(bestItemsData?.length / itemCountToShow));
  }, [bestItemsData]);

  useEffect(() => {
    if (typeof newItems !== 'undefined') setMaxNewSlide(Math.round(newItems?.length / itemCountToShow));
  }, [newItems]);

  const itemCountToShow = 4;
  // const bestItemSliceLength =
  // const newItemSliceLength = Math.round(newItems?.length / itemCountToShow);

  const currentBestItem = bestItemsData?.slice(
    slideBestIndex * itemCountToShow,
    (slideBestIndex + 1) * itemCountToShow
  ); //4
  const currentNewItem = newItems?.slice(slideNewIndex * itemCountToShow, (slideNewIndex + 1) * itemCountToShow);
  // const slideBundle = bestItems?.slice(slideIndex + 3 * slideIndex, slideIndex + 3 * slideIndex + 4); // 0 + 0
  // console.log(currentNewItem);
  return (
    <StyledHomePage>
      <AdItemSlide />
      {/* render pattern 사용  */}
      {typeof bestItemsData === 'undefined' ? (
        <Loader />
      ) : (
        <PreviewItems
          type="bestItems"
          title="BestItems"
          render={currentBestItem?.map((bestItem) => <ItemList item={bestItem} key={bestItem.item_num} />)}
        />
      )}
      {typeof newItems === 'undefined' ? (
        <Loader />
      ) : (
        <PreviewItems
          type="newItems"
          title="NewItems"
          render={currentNewItem?.map((newItem) => <ItemList item={newItem} key={newItem.item_num} />)}
        />
      )}
      <EditorRecommend />
      <HomeInfo />
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
