import styled from 'styled-components';
import FaqNav from '../feature/FAQ/FaqNav';
import FaqContents from '../feature/FAQ/FaqContents';
import useFaq from '../hooks/useFaq';
import { useSearchParams } from 'react-router-dom';
import { FaqType } from '../types/faq';
import Loader from '../ui/Loader';

const StyledQuestions = styled.div`
  padding: 1rem 2rem;
  display: grid;
  justify-content: center;
  grid-template-rows: 5rem 1fr;
  align-items: center;
  padding-bottom: 5rem;
  /* background-color: blue; */
  #faq_tb {
    width: 85rem;
  }
  @media screen and (max-width: 600px) {
    padding: 0;
  }
`;

const Questions = () => {
  const { data, isLoading } = useFaq();
  const [searchparams] = useSearchParams();
  const sortedData = filterFaq(searchparams.get('sort') ?? 'all', data);

  if (isLoading) return <Loader />;

  return (
    <StyledQuestions>
      <FaqNav />
      <ul id="faq_tb">{sortedData?.map((faq) => <FaqContents data={faq} />)}</ul>
    </StyledQuestions>
  );
};

function filterFaq(sort: string, data?: FaqType[]) {
  console.log(sort);
  if (sort === 'all') return data;
  else if (sort === 'service') {
    return data?.filter((v) => v.faq_category === 'service');
  } else if (sort === 'refund') {
    return data?.filter((v) => v.faq_category === 'refund');
  } else if (sort === 'order') {
    return data?.filter((v) => v.faq_category === 'order');
  }
}

export default Questions;
