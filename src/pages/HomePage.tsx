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

  const currentBestItem = bestItemsData?.slice(
    slideBestIndex * itemCountToShow,
    (slideBestIndex + 1) * itemCountToShow
  ); //4
  const currentNewItem = newItems?.slice(slideNewIndex * itemCountToShow, (slideNewIndex + 1) * itemCountToShow);

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
          render={currentBestItem?.map((bestItem) => (
            <ItemList
              item={bestItem}
              categoryField={{ sort: '1', category: 'date_desc', etc: 'home' }}
              key={bestItem.item_num}
            />
          ))}
        />
      )}
      {typeof newItems === 'undefined' ? (
        <Loader />
      ) : (
        <PreviewItems
          type="newItems"
          title="NewItems"
          render={currentNewItem?.map((newItem) => (
            <ItemList
              item={newItem}
              key={newItem.item_num}
              categoryField={{ sort: '2', category: 'date_desc', etc: 'home' }}
            />
          ))}
        />
      )}
      <EditorRecommend />
      <HomeInfo />
    </StyledHomePage>
  );
};
export default HomePage;
