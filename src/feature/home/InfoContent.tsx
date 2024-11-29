import styled from 'styled-components';
import { homeInfoDatas } from '../../data/HomeInfo';

const StyledInfoContent = styled.ul`
  /* background-color: azure; */
  padding: 3rem 0;
  display: grid;
  grid-template-columns: 50rem 50rem;
  grid-template-rows: 24rem 24rem;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  img {
    min-width: 29rem;
    max-height: 21rem;
    border-radius: 7px;
    opacity: 0.7;
  }
  li {
    justify-self: center;
    width: 50rem;
    height: 23rem;
    border: 1px solid var(--color-grey-400);
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    span {
      color: var(--color-accent_blue);
    }
    a {
      max-width: 40rem;
    }
  }
  #href {
    color: var(--color-accent_blue4);
    font-weight: 500;
    font-size: 2rem;
  }
  @media screen and (max-width: 900px) {
    /* width: 100vw; */
    grid-template-columns: 30rem 30rem;
    grid-template-rows: 24rem 24rem;
    li {
      width: 30rem;
      height: 23rem;
    }
    img {
      min-width: 21rem;
      max-width: 29rem;
      border-radius: 7px;
      opacity: 0.7;
    }
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    font-size: 1.5rem;
  }
`;

const InfoContent = () => {
  return (
    <StyledInfoContent>
      {homeInfoDatas.map((data) =>
        data.home_info_img ? (
          <li>
            <img src={data.home_info_img} />
          </li>
        ) : (
          <li>
            <a>
              <span>Q. </span>
              {data.home_info_question}?
            </a>
            <a>{data.home_info_answer}</a>
            <a href={data.home_info_link} target="_blank">
              <span id="href">바로가기</span>
            </a>
          </li>
        )
      )}
    </StyledInfoContent>
  );
};
export default InfoContent;
