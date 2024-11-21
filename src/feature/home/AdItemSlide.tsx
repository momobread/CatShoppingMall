import styled from 'styled-components';

// import '../../../public/asset/ad_slide/';

const StyledAdItemSlide = styled.div`
  /* background-color: black; */
  display: flex;
  justify-content: center;
  border-bottom: 1px solid var(--color-grey-300);
  img {
    height: 45rem;
  }
`;

const AdItemSlide = () => {
  return (
    <StyledAdItemSlide>
      <img src="/public/asset/ad_slide/ad_catwheel.jpg" alt="adPicture" />
    </StyledAdItemSlide>
  );
};
export default AdItemSlide;
