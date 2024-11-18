// import { useState } from "react";

import "/src/style/main.css";
import "/src/style/mediaquery.css";
import "../public/reset.css";
import MainPage from "./components/mainPage";
import { useState } from "react";
import ItemDetailPage from "./components/itemDetailPage";
import Login from "./components/loginPage";
import User from "../public/user";

//어떻게 다음 아이템을 보여줄 것인가?
// onclick시 state에 index 4567 보여주기
//

function App() {
  const [pageIndex, setPageIndex] = useState(1); //현재페이지
  const [itemDetail, setItemDetail] = useState([]); //상품디테일 정보
  const [backpage, setBackPage] = useState(0); //전 페이지
  const [user, setUser] = useState(User); //user배열
  const [islogin, setIslogin] = useState(false); //로그인성공실패
  //main 1 ....
  // detail  2....
  //login 3....

  //대 공 사 [1,2,21,...] 스택의 길이 10
  // 1-> 2-> 21-> 2{i-1} -> 1{i-1}  항상 뒤로가기 버튼을 누를때 index-1만큼 간다
  // pop을 해준다.
  //만약 스택이 다 찼으면? 가장 나중에 들어온거 지우고 맨 앞으로 민다

  console.log("페이지 인덱스", pageIndex);
  console.log(user);
  console.log("메인페이지 로그인", islogin);
  console.log(pageIndex);
  console.log(backpage, "뒤로가기 페이지 번호");
  function handleUser(v) {
    setUser((user) => [...user, v]);
  }

  function pageNum(e) {
    setPageIndex(e);
    setBackPage(pageIndex);
  }
  function detailContent(item) {
    console.log(item);

    setItemDetail(item);
  }
  function handleBack() {
    setPageIndex(backpage);
  }

  return (
    <div className="container">
      {pageIndex == 1 && (
        <MainPage
          pageNum={pageNum}
          detailContent={detailContent}
          islogin={islogin}
        />
      )}
      {pageIndex == 2 && (
        <ItemDetailPage
          itemDetail={itemDetail}
          handleBack={handleBack}
          pageNum={pageNum}
          islogin={islogin}
        ></ItemDetailPage>
      )}
      {pageIndex == 3 && (
        <Login
          handleUser={handleUser}
          handleBack={handleBack}
          setIslogin={setIslogin}
          user={user}
          pageNum={pageNum}
          pageIndex={pageIndex}
        />
      )}
    </div>
  );
}

export default App;
