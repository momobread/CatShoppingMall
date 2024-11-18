import ContentTitle from "./contentTitle";

function Recommand({ children }) {
  return (
    <div className="recommandWrap">
      <div className="ItemListTitle_2">
        <ContentTitle>{children}</ContentTitle>
      </div>
      <div className="recommandContent">
        <RecommanVideo />
        <div className="recommandTextWrap">
          <ul className="recommandText">
            <RecommandText>
              {[
                "Editor.Hari",

                "당신의 고양이를 책임질 애플 정수기.프랑스 장인 정신으로 한땀한땀 깎았습니다.애플 정수기 당장 사세요",
                "⭐️⭐️⭐️⭐⭐",
                "_1",
              ]}
            </RecommandText>
            <RecommandText>
              {[
                "Designer.zoey159",
                "만족.이건 말이 필요없습니다. 저같이 귀차니즘이 맥스인 집사님들은 무조건 사셔야 됩니다.레알 진지해요. 매일 물 갈 필요도 없을 뿐더러 자체 내장 필터가 있어 물이순환되기 때문에 수질이 좋은거 같더라구요. 무조건 사세요",
                "⭐⭐⭐⭐",
                "_2",
              ]}
            </RecommandText>
            <RecommandText>
              {[
                "momo",
                "사용 해보니 너무 좋아요.프랑스 장인이 만들어서 그런지정수기를 보고 있으면 마치 프랑스 센 강에서 있는느낌이랄까요? 마치 제가 고양이가 된것처럼 멍하니쳐다보고 있습니다.",
                "⭐️⭐️⭐️⭐️⭐️",
                "_3",
              ]}
            </RecommandText>
          </ul>
        </div>
      </div>
    </div>
  );
}

function RecommanVideo() {
  return (
    <ul className="recommandVideo">
      <li>
        <video controls autoPlay loop muted playsInline>
          <source src="/src/assets/video/apple정수기.mp4" />
        </video>
      </li>
      <li>
        <video controls autoPlay loop muted playsInline>
          <source src="/src/assets/video/apple정수기2.mp4" />
        </video>
      </li>
      <li>
        <video controls autoPlay loop muted playsInline>
          <source src="/src/assets/video/apple정수기3.mp4" />
        </video>
      </li>
    </ul>
  );
}

function RecommandText({ children }) {
  return (
    <li className={`recommand${children[3]}`}>
      <RecommandTitle title={children[0]} />
      <RecommandRate rate={children[2]} />
      <RecommandSubstance text={children[1]} />
    </li>
  );
}

function RecommandTitle({ title }) {
  return <div>{title}</div>;
}

function RecommandSubstance({ text }) {
  return <div>{text}</div>;
}
function RecommandRate({ rate }) {
  return <span>{rate}</span>;
}

export default Recommand;
