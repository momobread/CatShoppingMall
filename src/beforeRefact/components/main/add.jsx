const additem = [
  {
    title: "고양이 캣 휠",
    price: 10000,
    id: "001",
    img: "/src/assets/add/catwheel.jpg",
    text: "달리고 싶은 고양이 모두 모이라옹~",
  },
  {
    title: "고양이 스크래치",
    price: 12000,
    id: "002",
    img: "/src/assets/add/cat_scratch.jpg",
    text: "긁어긁어긁어라옹",
  },
  {
    title: "고양이 캣 휠",
    price: 10000,
    id: "003",
    img: "/src/assets/add/catwheel.jpg",
    text: "달리고 싶은 고양이 모두 모이라옹~",
  },
  {
    title: "고양이 스크래치",
    price: 12000,
    id: "004",
    img: "/src/assets/add/cat_scratch.jpg",
    text: "긁어긁어긁어라옹",
  },
];

function ADD() {
  return (
    <div className="add_wrap">
      <div className="content_ad_wrap">
        <ul className="addItemList">
          <AddItem image={additem[0].img} />
        </ul>
      </div>
    </div>
  );
}

function AddItem({ image }) {
  return (
    <li className="addList">
      <img src={image} />
    </li>
  );
}

export default ADD;
