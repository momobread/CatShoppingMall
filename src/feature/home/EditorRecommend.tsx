import styled from 'styled-components';
import ItemTitle from '../../components/ItemTitle';
import RecommendVideo from './RecommendVideo';
import RecommendContent from './RecommendContent';
import { recommendDatas } from '../../data/Recommend';

const StyledEditorRecommend = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr;
  opacity: 0.9;
  color: var(--color-accent_blue4);
  #recommed_layout {
    display: grid;
    grid-template-columns: 100rem 1fr;
    div {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      justify-content: center;
      align-items: center;
      background-color: var(--color-accent_blue3);
    }
  }
  @media screen and (max-width: 900px) {
    ul {
      display: none;
    }
    #recommed_layout {
      display: flex;
      justify-content: center;
    }
  }
`;
const EditorRecommend = () => {
  return (
    <StyledEditorRecommend>
      <ItemTitle>Editor Pick</ItemTitle>
      <div id="recommed_layout">
        <RecommendVideo />
        <div id="recommned_content">
          {recommendDatas?.map((data) => <RecommendContent key={data.recommend_title} data={data} />)}
        </div>
      </div>
    </StyledEditorRecommend>
  );
};
export default EditorRecommend;
