import { Button } from "bootstrap";
import { Routes, Route, Link } from "react-router-dom"
import React from "react";
import "./role.css"
import "../../index.css"
// import Register from "../Register/register"
export default function Role() {
    const [showRole, setShowRole] = React.useState(true)
    return (
        <div className="role--container uwc--background">
                <h1 className="uwc--title">UWC 2.0</h1>
                <div className="uwc--logo">
                    <img src={require("../../assets/UWC-logo.png")} className="uwc--logo-img"></img>
                </div>
                <div className=" role--selection uwc--box"> 
                    <h2 className="role--login">You are logging in as ...</h2>
                    <Link to="/login" className="role--bofficer role--button" state={{from: "BOBtn"}}>Back officer</Link>
                    <Link to="/login" className="role--collector role--button" state={{from: "ColBtn"}}>Collector</Link>
                    <Link to="/login" className="role--janitor role--button" state={{from: "JanBtn"}}>Janitor</Link>
                    <p className="role--register">Not a member yet? <Link to="/register" className="role--register-button">Register</Link> now</p>
                </div>
        </div>
    )
}  