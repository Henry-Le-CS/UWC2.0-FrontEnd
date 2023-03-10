import { Button } from "bootstrap";
import React, { useState } from "react";
import "./register.css"
const Register = ({setShowModal, isSignUp}) => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [error, setError] = useState(null)
    const handleSubmit = () => {
        // setShowModal(false)
        console.log("3");
    }

    const handleClick = () => {
        setShowModal(false)
    }

    return (
        <div className="register--container uwc--background">
            <h1 className="uwc--title">UWC 2.0</h1>
            <div className="uwc--logo">
                <img src={require("../../assets/UWC-logo.png")} className="uwc--logo-img"></img>
            </div>
            <div className="register--selection">
                <div className="open--paragraph">
                    <p>By clicking Log In, you agree to our terms. <br></br> Learn how we process your data in our Privacy Policy and Cookie Policy.</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder='email'
                        required={true}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder='password'
                        required={true}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <input
                        type="password"
                        id="password-check"
                        name="password-check"
                        placeholder='confirm password'
                        required={true}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />

                    <input className='role--button' type='submit' />
                    <p>{error}</p>

                </form>
            </div>


        </div>
    )
}

export default Register