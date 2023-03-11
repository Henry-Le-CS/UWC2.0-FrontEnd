import { Button } from "bootstrap";
import React, { useState } from "react";
import "./register.css"
const Register = ({ setShowModal, isSignUp }) => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [error, setError] = useState(null)
    const [isChecked, setIsChecked] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isChecked) {
            setError("Please complete the CAPTCHA.");
            return;
        }

        console.log("Submitting the form data...");
    };

    const handleClick = () => {
        setShowModal(false)
    }

    const handleCheck = (e) => {
        setIsChecked(e.target.checked);
        setError(null);
    };

    return (
        <div className="register--container uwc--background">
            <h1 className="uwc--title">UWC 2.0</h1>
            <div className="uwc--logo">
                <img src={require("../../assets/UWC-logo.png")} className="uwc--logo-img"></img>
            </div>
            <div className="register--selection">

                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder='Email'
                        required={true}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder='Password'
                        required={true}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <input
                        type="password"
                        id="password-check"
                        name="password-check"
                        placeholder='Confirm password'
                        required={true}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />

                    <input className='register--button' type='submit' value='Register' />
                    {/* <div className="open--paragraph">
                        <p>By clicking Register, you agree to our terms. <br></br> Learn how we process your data in our Privacy Policy and Cookie Policy.</p>
                    </div> */}
                    <p>{error}</p>



                </form>
            </div>


        </div>
    )
}

export default Register