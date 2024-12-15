import styled from 'styled-components';

const StyledInquiry = styled.li`
  border-bottom: 1px solid var(--color-grey-400);
  height: fit-content;
  padding: 1rem 2rem;
`;
const StyledAnswer = styled.div`
  background-color: var(--color-grey-200);
  height: 20rem;
`;
const Inquiry = () => {
  return (
    <>
      <StyledInquiry>
        <p>제목</p>
        {/* 유저네임 마스킹 */}
        <span>유저네임</span>
        <span>날짜</span>
        <span>상태</span>
        <button>v</button>
        {/* 클릭시 내용/유저 */}
        <p>.</p>
        <div>
          질문내용 <br /> sdsdsd <br />
          sdsdsdsd
          <br />
          dsdsdsdsd
          <br />
        </div>
      </StyledInquiry>
      <StyledAnswer>답변내용</StyledAnswer>
    </>
  );
};
export default Inquiry;
