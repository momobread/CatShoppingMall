import styled from 'styled-components';

const StyledRecommendVideo = styled.ul`
  height: 70rem;
  display: flex;
  align-items: center;

  justify-content: center;
  /* background-color: var(--color-accent_blue2); */
  border-right: 1px solid var(--color-grey-300);
  li {
    video {
      max-height: 55rem;
      max-width: 30rem;
    }
  }
`;
const RecommendVideo = () => {
  return (
    <StyledRecommendVideo>
      <li>
        <video autoPlay loop muted playsInline>
          <source src="/asset/videos/apple1.mp4" />
        </video>
      </li>
      <li>
        <video autoPlay loop muted playsInline>
          <source src="/asset/videos/apple2.mp4" />
        </video>
      </li>
      <li>
        <video autoPlay loop muted playsInline>
          <source src="/asset/videos/apple3.mp4" />
        </video>
      </li>
    </StyledRecommendVideo>
  );
};
export default RecommendVideo;
