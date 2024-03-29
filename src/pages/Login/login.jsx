import {
  useNavigate,
  useLocation,
} from "react-router-dom";
import React from "react";
import "./login.css";
import axios from "axios";

export default function Login(props) {
  const location = useLocation(); //These to lines are added
  const { from } = location.state; // to check if the the user say they're BO or Worker
  let navigate = useNavigate();
  const [currentAccount, setCurrentAccount] = React.useState({
    id: -1,
    account: "",
    password: "",
    isBO: from === "BOBtn" ? true : false,
  });
  const [isPassword, setIsPassword] = React.useState(2); // 2 <-> not click login button yet
  // 0 <-> incorrect password, 1 <-> correct password
  React.useEffect(() => {
    if (isPassword === 1) {
      if (currentAccount.isBO)
        navigate("/BO", { state: { isLogin: true, userID: currentAccount.id, _id: currentAccount._id} });
      else navigate("/worker",{ state: { isLogin: true, userID: currentAccount.id, _id: currentAccount._id} });
    } else return;
        //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPassword]);
  function handleChange(event) {
    setCurrentAccount({
      ...currentAccount,
      [event.target.name]: event.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await axios
      .post("http://localhost:8000/login", {
        account: currentAccount.account,
        password: currentAccount.password,
        isBO: currentAccount.isBO,
      })
      .then((res) => {
        setIsPassword(1);
        setCurrentAccount({
          ...currentAccount,
          id: res.data.user_id,
          _id: res.data._id
        });
      })
      .catch((err) => {
        if (err.response.data.message === "Wrong username or password") {
          setIsPassword(0);
        }
      });
  }
  return (
    <div className="login--container uwc--background">
      <h1 className="uwc--title">UWC 2.0</h1>
      <div className="uwc--logo">
        <img
          src={require("../../assets/UWC-logo.png")}
          className="uwc--logo-img"
          alt="uwcLogo"
        ></img>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="login--account">
          <input
            placeholder="Username"
            className="login--input login--User"
            name="account"
            onChange={handleChange}
          />
          <input
            placeholder="Password"
            type="password"
            className="login--input"
            name="password"
            onChange={handleChange}
          />
          {isPassword === 0 ? (
            <h4 className="login--incorrect">
              Account or password is incorrect!
            </h4>
          ) : isPassword === 1 ? (
            <h4 className="login--correct">Logging in...</h4>
          ) : (
            <></>
          )}
          <button type="submit" className="login--button">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
