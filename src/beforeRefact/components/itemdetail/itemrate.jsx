import { useState } from "react";
import userRate from "../../../public/userrate";
import User from "/public/user.js";
import bestitems from "../../../public/bestitem";
function ItemRate({ itemDetail, detailindex }) {
  console.log("itemrate");

  return (
    <div className="itemrate_wrap">
      <PreviewRate />
      <ReviewContent itemDetail={itemDetail} detailindex={detailindex} />
    </div>
  );
}

function PreviewRate() {
  return (
    <div className="item_preview_rate_wrap">
      <div className="item_rate_title">Real 후기</div>
      <div className="item_preview_rate">
        <div className="item_average_rate">
          <div>총 평점</div>
          <div>⭐️⭐️⭐️⭐️</div>
        </div>
        <ul>
          <Ratebar>아주 만족해요</Ratebar>
          <Ratebar>조금 만족해요</Ratebar>
          <Ratebar>만족해요</Ratebar>
          <Ratebar>조금 불만족해요</Ratebar>
          <Ratebar>아주 불만족해요</Ratebar>
        </ul>
      </div>
      {/* <div>포장상태</div>
      <div>배송속도</div>
      <div>사용성</div> */}
      <div className="item_rate_img">
        <div>리뷰 사진</div>
        <Reviewimg />
        <Reviewimg />
      </div>
    </div>
  );
}
function Ratebar({ children }) {
  return (
    <li className="rate_bar_content">
      <div>{children}</div>
      <div className="rate_bar_bg">
        <div className="rate_bar"></div>
      </div>
      <div> 57%</div>
    </li>
  );
}

function Reviewimg() {
  return (
    <>
      <img src={userRate[0].img} />
      <img src={userRate[0].img} />
    </>
  );
}

function ReviewContent({ itemDetail, detailindex }) {
  const [reviewNum, setReviewNum] = useState(1);
  return (
    <div className="review_content">
      <ReviewFilter
        setReviewNum={setReviewNum}
        detailindex={detailindex}
        reviewNum={reviewNum}
      />
      {reviewNum == 1 ? (
        <LikeReview itemDetail={itemDetail} />
      ) : reviewNum == 2 ? (
        <BestReview itemDetail={itemDetail} />
      ) : reviewNum == 3 ? (
        <NewReview />
      ) : (
        -1
      )}
    </div>
  );
}
function ReviewFilter({ setReviewNum, detailindex, reviewNum }) {
  return (
    <div className="review_filter">
      <div>
        <button
          className={`filter1${reviewNum == 1 ? "_clicked" : ""}`}
          onClick={() => setReviewNum(1)}
        >
          좋아요순
        </button>
        <button
          className={`filter2${reviewNum == 2 ? "_clicked" : ""}`}
          onClick={() => setReviewNum(2)}
        >
          별점순
        </button>
        <button
          className={`filter3${reviewNum == 3 ? "_clicked" : ""}`}
          onClick={() => setReviewNum(3)}
        >
          최신순
        </button>
      </div>
      <div>
        <button>리뷰작성하기</button>
        <button>🔍</button>
      </div>
    </div>
  );
}
function ReviewNav() {
  return <div className="review_nav_wrap"></div>;
}

function LikeReview({ itemDetail }) {
  return (
    <div className="liked_content_wrap">
      {/* 좋아요순 리뷰입니다 - 1234 + */}
      <LikedContent itemDetail={itemDetail} />
    </div>
  );
}

// 좋아요순
function LikedContent({ itemDetail }) {
  console.log(itemDetail);
  return (
    <>
      {/* 객체를 sort할떄는 a.key b.key로 비교해야됌 */}
      {/* {[...userRate]
        .sort((a, b) => b.liked - a.liked)
        .map((user, i) => (
          <div className="liked_content" key={i}>
            <div className="liked_user">
              작성자 :{" "}
              {User[User.findIndex((v, i) => v.userNum == user.userNum)].id}
            </div>
            <div className="liked_title">{user.title}</div>
            <img src={user.img} />
            <div className="liked_review">{user.review}</div>
            <div className="liked_rate">{"⭐️".repeat(user.rate)}</div>
            <div>
              <i className="fa-solid fa-heart" style={{ color: "#f7c0ed" }}></i>
              <span>{user.liked}</span>
            </div>
          </div>
        ))} */}

      {/*
         userrate의 모든 num과 bestitem의 모든 num을 비교하는것보다
        이미가져온 userate에서 이미 가져온 객체하나를 비교하는게 더 효율적
        */}
      {[...userRate]
        .filter((v, i) => v.itemNum == itemDetail.itemNum)
        .sort((a, b) => b.liked - a.liked)
        .map((user, i) => (
          <div className="liked_content" key={i}>
            <div className="liked_user">
              작성자 :{" "}
              {User[User.findIndex((v, i) => v.userNum == user.userNum)].id}
            </div>
            <div className="liked_title">{user.title}</div>
            <img src={user.img} />
            <div className="liked_review">{user.review}</div>
            <div className="liked_rate">{"⭐️".repeat(user.rate)}</div>
            <div>
              <i className="fa-solid fa-heart" style={{ color: "#f7c0ed" }}></i>
              <span>{user.liked}</span>
            </div>
          </div>
        ))}
    </>
  );
}

function BestReview({ itemDetail }) {
  return (
    <div>
      {[...userRate]
        .filter((v, i) => v.itemNum == itemDetail.itemNum)
        .sort((a, b) => b.rate - a.rate)
        .map((user, i) => (
          <div className="liked_content" key={i}>
            <div className="liked_user">
              작성자 :{" "}
              {User[User.findIndex((v, i) => v.userNum == user.userNum)].id}
            </div>
            <div className="liked_title">{user.title}</div>
            <img src={user.img} />
            <div className="liked_review">{user.review}</div>
            <div className="liked_rate">{"⭐️".repeat(user.rate)}</div>
            <div>
              <i className="fa-solid fa-heart" style={{ color: "#f7c0ed" }}></i>
              <span>{user.liked}</span>
            </div>
          </div>
        ))}
    </div>
  );
}

// 여기서부터 다시 해야됌
function NewReview() {
  let date = new Date();
  console.log(date.toLocaleString());
  return (
    <div>
      {[...userRate]
        .sort((a, b) => a.userNum - b.userNum)
        .map((user, i) => (
          <div className="liked_content" key={i}>
            <div className="liked_user">
              작성자 :{" "}
              {User[User.findIndex((v, i) => v.userNum == user.userNum)].id}
            </div>
            <div className="liked_title">{user.title}</div>
            <img src={user.img} />
            <div className="liked_review">{user.review}</div>
            <div className="liked_rate">{"⭐️".repeat(user.rate)}</div>
            <div>
              <i className="fa-solid fa-heart" style={{ color: "#f7c0ed" }}></i>
              <span>{user.liked}</span>
            </div>
          </div>
        ))}
    </div>
  );
}

export default ItemRate;
