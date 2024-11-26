import { useLocation, useNavigation, useParams, useSearchParams } from 'react-router-dom';
import ItemList from '../components/ItemList';
import ItemEntireContents from '../components/ItemEntireContents';

const ItemPage = () => {
  const logation = useLocation();
  let data;
  console.log(logation.pathname);
  if (logation.pathname === '/category/1') data = ['best1', 'best2'];
  //   console.log(data);
  return (
    <div>
      ItemPage
      <ItemEntireContents datas={data} />
    </div>
  );
};
export default ItemPage;
