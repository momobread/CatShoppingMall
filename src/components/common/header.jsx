function Header({ pageNum, islogin }) {
  return (
    <div className="header_wrap">
      <div className="header_bar">
        <div className="login_button"></div>
        {islogin ? (
          <div className="Mypage">
            <p>mypage</p>
          </div>
        ) : (
          <p href="" onClick={() => pageNum(3)}>
            Login
          </p>
        )}
        <div className="nav_menu">
          <img src="/src/assets/shopping_icon.png" />
        </div>
        <div className="shopping_cart_button">
          <a href="./shoppingCart/shoppingCart.html">
            <img src="/src/assets/header_nav_bar_icon.png" />
          </a>
        </div>
      </div>
      <div className="header">
        <span className="logo">
          <img src="/src/assets/모모고양이.jpg" />
        </span>
        <span className="company_name">하리묘 컴퍼니</span>
      </div>
    </div>
  );
}

export default Header;
