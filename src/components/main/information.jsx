import ContentTitle from "./contentTitle";
import informrates from "../../../public/informrate";
function Information({ children }) {
  return (
    <div className="informationWrap">
      <div className="ItemListTitle_3">
        <ContentTitle>{children}</ContentTitle>
      </div>
      <div className="InformContentWrap">
        <InformContent>
          {[
            "고양이도 외로움을 타나요",
            "네. 고양이도 외로움을 탄탑니다 예를 들어 집사가 집을 나가면 계속 기다리거나 운다던지 집사가 무언가에 집중하고 있을때 괜히 방해를 한다던지 표현의 강도가 강아지와 다를 뿐, 고양이만의 표현을 한답니다.",
            "https://www.google.com/search?q=%EA%B3%A0%EC%96%91%EC%9D%B4+%EC%99%B8%EB%A1%9C%EC%9B%80&sca_esv=9b22f68bf05ca09c&rlz=1C5CHFA_enKR1079KR1079&sxsrf=ADLYWII8VeL_snUYXur_KeAL5HjTA2W87w%3A1716780403567&ei=c_1TZqGnIvrb1e8PnuyVkQc&udm=&ved=0ahUKEwjhrPKw8ayGAxX6bfUHHR52JXIQ4dUDCBA&uact=5&oq=%EA%B3%A0%EC%96%91%EC%9D%B4+%EC%99%B8%EB%A1%9C%EC%9B%80&gs_lp=Egxnd3Mtd2l6LXNlcnAiE-qzoOyWkeydtCDsmbjroZzsm4AyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIIEAAYgAQYogRIzBBQAFiXEHACeAGQAQSYAfoCoAG5GaoBBzAuOS41LjK4AQPIAQD4AQGYAgagAuwHwgIKECMYgAQYJxiKBcICBBAjGCfCAgsQLhiABBixAxiDAcICCxAAGIAEGLEDGIMBwgIEEAAYA8ICBBAuGAPCAggQABiABBixA5gDAJIHBzIuMi4wLjKgB9jxAQ&sclient=gws-wiz-serp",
          ]}
        </InformContent>
        <InformImage image={"/src/assets/모모고양이.jpg"} />
        <InformImage image={"/src/assets/모모고양이.jpg"} />
        <InformContent>
          {[
            "고양이 목욕은 안시켜도 되나요?",
            "아니요.고양이는 스스로 그루밍을 해서 목욕을 안시켜도 된다고 생각할 수 있지만, 6개월에 1번정도는 시키는 것이 좋습니다.그렇게 해야 털에 먼지,진드기 및 죽은털을 좀 더 쉽게 제거할 수 있어요",
            "https://www.google.com/search?q=%EA%B3%A0%EC%96%91%EC%9D%B4%EB%AA%A9%EC%9A%95&sca_esv=9b22f68bf05ca09c&rlz=1C5CHFA_enKR1079KR1079&sxsrf=ADLYWIIxT84Bo46eostoJcBrsmKuXeAA2w%3A1716782332500&ei=_ARUZpy-HaOlvr0P2qeBQA&udm=&ved=0ahUKEwicrNbI-KyGAxWjkq8BHdpTAAgQ4dUDCBA&uact=5&oq=%EA%B3%A0%EC%96%91%EC%9D%B4%EB%AA%A9%EC%9A%95&gs_lp=Egxnd3Mtd2l6LXNlcnAiD-qzoOyWkeydtOuqqeyalTIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyCBAAGIAEGKIESL8LUNcDWMIKcAJ4AZABAJgBjgGgAa0GqgEDMC42uAEDyAEA-AEBmAIFoAKkA8ICChAAGLADGNYEGEfCAgQQIxgnwgIKECMYgAQYJxiKBcICChAAGIAEGEMYigXCAgsQLhiABBixAxiDAcICCBAAGIAEGLEDwgIFEC4YgASYAwCIBgGQBgqSBwMyLjOgB4M0&sclient=gws-wiz-serp",
          ]}
        </InformContent>
      </div>
      <div className="InformRateWrap">
        {informrates &&
          informrates.map((v, i) => (
            <InformRate
              key={i}
              informrate={informrates[i]}
              indexNum={`${i + 1}`}
            />
          ))}
        {/* <InformRate indexNum={"1"} />
        <InformRate indexNum={"2"} />
        <InformRate indexNum={"3"} /> */}
      </div>
    </div>
  );
}

function InformContent({ children }) {
  return (
    <div className="InformContent">
      <span>{children && children[0]}</span>
      <span>{children && children[1]}</span>
      <a href={`${children && children[2]}`}>더 알아보기</a>
    </div>
  );
}

function InformImage({ image }) {
  console.log(image);
  return (
    <div className="InformContent">
      <span className="InformImg">
        <img src={`${image}`} />
      </span>
    </div>
  );
}

function InformRate({ indexNum, informrate }) {
  return (
    <div className="InformRate">
      <div className="informIndexWrap">
        <span className={`informIndex${indexNum == 1 ? " checked" : ""}`}>
          Best리뷰
        </span>
        <span className={`informIndex${indexNum == 2 ? " checked" : ""}`}>
          최근리뷰
        </span>
        <span className={`informIndex${indexNum == 3 ? " checked" : ""}`}>
          Best Q & A
        </span>
      </div>
      <div className="InformRateContent">
        <OnelineRate informrate={informrate} />
      </div>
    </div>
  );
}

function OnelineRate({ informrate }) {
  console.log(informrate);
  return (
    <ul>
      {informrate &&
        informrate.map((v, i) => (
          <li key={i}>
            <span>{v.id}</span>
            <span>{v.text}</span>
          </li>
        ))}
      {/* <li>
        <span>{children[0][0]}</span>
        <span></span>
      </li>
      <li></li>
      <li></li> */}
    </ul>
  );
}

export default Information;
