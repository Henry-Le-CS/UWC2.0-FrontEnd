import { Button } from "bootstrap";
import { Routes, Route, Link, useNavigate, useLocation} from "react-router-dom"
import React from "react";
import "./login.css"
import { ValidateAccount } from "../../utils/validate.js"
export default function Login(props) {
    const location = useLocation() //These to lines are added
    const { from } = location.state // to check if the the user say they're BO or Worker
    let navigate = useNavigate()
    const [currentAccount, setCurrentAccount] = React.useState({
        account: "",
        password: "",
        isBO: from == 'BOBtn' ? true : false,
    }) 
    const [isPassword, setIsPassword] = React.useState(2) // 2 <-> not click login button yet
    // 0 <-> incorrect password, 1 <-> correct password
    React.useEffect(()=>{
        if(isPassword==1){
            if(currentAccount.isBO) navigate("/BO")
            else navigate("/worker")
        }
        else return;
    },[isPassword])
    const BOaccount = [
        {
            UserName: "Hieu Le",
            account: "henryle@hcmut.edu.vn",
            password: "henryle@hcmut.edu.vn",
            isBO: true,
        },
        {  
            UserName: "Back Officer A",
            account: "boA@hcmut.edu.vn",
            password: "boA@hcmut.edu.vn",
            isBO: true,
        },
    ];
    const Workeraccount = [
        {
            UserName: "Henry Le",
            account: "henryle@hcmut.edu.vn",
            password: "henryle@hcmut.edu.vn",
            isBO: false,
        },
        {
            UserName: "Worker A",
            account: "WkA@hcmut.edu.vn",
            password: "WkA@hcmut.edu.vn",
            isBO: false,
        },
    ];

    function handleChange(event){
        setCurrentAccount({
            ...currentAccount,
            [event.target.name]: event.target.value 
        })
    }

    function handleSubmit(){
        console.log(currentAccount)
        if(ValidateAccount(currentAccount, currentAccount.isBO ? BOaccount : Workeraccount)){
            setIsPassword(1)
        }
        else setIsPassword(0)
    }

    return (
        <div className="login--container uwc--background">
            <h1 className="uwc--title">UWC 2.0</h1>
            <div className="uwc--logo">
                <img src={require("../../assets/UWC-logo.png")} className="uwc--logo-img"></img>
            </div>
            <div className="login--account">
                <input
                    placeholder="Username"
                    className="login--input login--User"
                    name="account"
                    onChange={handleChange}
                />
                <input
                    placeholder="Password"
                    type = "password"
                    className="login--input"
                    name="password"
                    onChange={handleChange}
                />
                {isPassword == 0 ? <h4 className="login--incorrect">Account or password is incorrect!</h4> 
                : isPassword == 1 ? <h4 className="login--correct">Logging in...</h4>: <></>}
                <button type="button" className="login--button" onClick={handleSubmit}>Login</button>
            </div>
        </div>
    )
}  