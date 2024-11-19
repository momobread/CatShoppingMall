function DetailInfo({ itemDetail }) {
  return (
    <div className="detailinfo_wrap">
      <div className="detailinfo">
        <img src={itemDetail && itemDetail.content} />
        <img src={itemDetail && itemDetail.content} />
      </div>
    </div>
  );
}
export default DetailInfo;
