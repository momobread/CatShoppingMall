import styled from 'styled-components';
import ItemTitle from '../../components/ItemTitle';
import RecommandVideo from './RecommandVideo';
import RecommendVideo from './RecommendVideo';
import RecommendContent from './RecommendContent';
import { recommendDatas } from '../../data/Recommend';

const StyledEditorRecommend = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr;

  #recommed_layout {
    display: grid;
    grid-template-columns: 100rem 1fr;
    gap: 2rem;
    div {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      justify-content: center;
      align-items: center;
    }
  }
`;
const EditorRecommend = () => {
  return (
    <StyledEditorRecommend>
      <ItemTitle>Editor Pick</ItemTitle>
      <div id="recommed_layout">
        <RecommendVideo />
        <div>{recommendDatas?.map((data) => <RecommendContent data={data} />)}</div>
      </div>
    </StyledEditorRecommend>
  );
};
export default EditorRecommend;
