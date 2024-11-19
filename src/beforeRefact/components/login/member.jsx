function Membership({ setId, setPw, handleUser, NewUser, setLoginindex }) {
  return (
    <div className="membership">
      <span className="login_title">하리묘컴퍼니</span>
      <input
        type="text"
        onChange={(e) => setId(e.target.value)}
        placeholder="id"
      />
      <input
        type="text"
        onChange={(e) => setPw(e.target.value)}
        placeholder="pw"
      />
      <button
        onClick={() => {
          handleUser(NewUser);
          setLoginindex(3);
        }}
      >
        {/* {" "} */}
        회원가입
      </button>
    </div>
  );
}

export default Membership;
