import { Button } from "bootstrap";
import { Routes, Route, Link } from "react-router-dom"
import React from "react";
import "./login.css"
export default function login() {
    return (
        <div className="login--container uwc--background">
            <h1 className="uwc--title">UWC 2.0</h1>
            <div className="uwc--logo">
                <img src={require("../../assets/UWC-logo.png")} className="uwc--logo-img"></img>
            </div>
            <div className="login--account">
                    <input placeholder="Username" className="login--input login--User"></input>
                    <input placeholder="Password" className="login--input"></input>
                    <button type="button" className="login--button">Login</button>
            </div>
        </div>
    )
}  