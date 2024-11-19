function Loginmain({
  setId,
  setPw,
  pageNum,
  setLoginindex,
  checkUser,
  id,
  pw,
}) {
  return (
    <div className="login_main">
      <span className="login_title">하리묘컴퍼니</span>
      <div className="login_main_input">
        <input
          type="text"
          onChange={(e) => setId(e.target.value)}
          placeholder="id를 입력하세요"
        />
        <input
          type="text"
          placeholder="pw를 입력하세요"
          onChange={(e) => setPw(e.target.value)}
        />
      </div>
      <div className="login_option_button">
        <button
          onClick={() => {
            checkUser(id, pw);
            pageNum(1);
          }}
        >
          로그인
        </button>
        {/* <button onClick={() => pageNum(31)}>회원가입</button> */}
        <button onClick={() => setLoginindex(31)}>회원가입</button>
      </div>
    </div>
  );
}

export default Loginmain;
