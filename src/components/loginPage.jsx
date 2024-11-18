import { useState } from "react";
import User from "/public/user.js";
import Loginmain from "/src/components/login/login.jsx";
import Membership from "/src/components/login/member.jsx";
import "/src/style/login.css";
//로그인은 31...32....33.... 3의자리로
function Login({ handleUser, handleBack, setIslogin, user, pageNum }) {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [loginindex, setLoginindex] = useState(3);
  const NewUser = { id, pw }; // 객체 구조분해할당 id:id,pw:pw
  let userNum = -1;

  function checkUser(id, pw) {
    // console.log(User.id);console.log(User.pw);
    //아이디가 존재하나요?
    user.forEach((v, i) => {
      return v.id == id ? (userNum = i) : -1;
    });
    if (userNum > -1) {
      user[userNum].pw == pw ? setIslogin(true) : setIslogin(false);
    }
    // console.log(userNum);
    //비번이 일치하나요?
  }

  return (
    <div className="login_wrap">
      <div className="login">
        <div className="back_button">
          {/* <button>뒤로가기</button> */}
          <i
            className="fa-solid fa-arrow-left fa-2xl"
            onClick={() => handleBack()}
          ></i>
        </div>
        {loginindex == 3 && (
          <Loginmain
            setId={setId}
            setPw={setPw}
            setLoginindex={setLoginindex}
            pageNum={pageNum}
            checkUser={checkUser}
            id={id}
            pw={pw}
          />
        )}
        {loginindex == 31 && (
          <>
            <Membership
              setId={setId}
              setPw={setPw}
              handleUser={handleUser}
              NewUser={NewUser}
              setLoginindex={setLoginindex}
            />
          </>
        )}
      </div>
    </div>
  );
}

//last 방법 : main쪽으로 올려버린다

export default Login;
