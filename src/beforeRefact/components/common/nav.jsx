function Nav() {
  return (
    <div className="nav">
      <div className="tablet_login_button">
        {/* <a href="./loginPage/login.html" id="login_button">
          Login
        </a> */}
      </div>

      <div className="search">
        <input
          id="search"
          type="search"
          placeholder="원하시는 상품을 입력해 주세요."
          autocomplete="off"
        />
      </div>
      <button className="search_button">search</button>
    </div>
  );
}
export default Nav;
