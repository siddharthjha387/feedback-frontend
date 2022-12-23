import axios from "axios";


import React, { useRef, useState } from 'react'


import './feedbackform.css'
import { API_URL } from "../Api_Url";
axios.defaults.withCredentials = true;
export default function Register() {
    const [success, setSuccess] = useState(false);
    const [failure, setFailure] = useState(false);
    const fullNameRef = useRef();
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const hotelName = useRef();
    const hotelFullName = useRef();
    const mobileNumber = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();


        const newUser = {
            fullName: fullNameRef.current.value,
            username: nameRef.current.value,
            password: passwordRef.current.value,
            email: emailRef.current.value,
            hotelName: hotelName.current.value,
            hotelFullName: hotelFullName.current.value,
            mobileNumber: mobileNumber.current.value,
        };

        try {
            console.log(API_URL);
            const res = await axios.post(`${API_URL}/api/users/register`, newUser);
            console.log(res);
            setFailure(false);
            setSuccess(true);
        }
        catch (err) {

            console.log(err);
            setFailure(true);
            setSuccess(false);
        }
    }
    return (
        <div class="outer-box-register">
            <div class="inner-box">


                <header class="signup-header">
                    <h1>Signup</h1>
                    <p>It just takes 30 seconds</p>
                </header>

                <main class="signup-body">
                    <form onSubmit={handleSubmit}>
                        <div class="full-name">
                            <label for="fullname">Full Name</label>
                            <input type="text" name="fullName" id='fullname' placeholder="Akshit Sharma" ref={fullNameRef} />                </div>

                        <div class="user-name">
                            <label for="username">User Name</label>
                            <input type="text" id='username' name="username" placeholder="Akshit123" ref={nameRef} />                </div>

                        <div class="email">
                            <label for="email-Id">Email</label>
                            <input type="email" name="email" id='email-Id' placeholder="akshitsharma@gmail.com" ref={emailRef} />                </div>

                        <div class="password">
                            <label for="user-password">Password</label>
                            <input type="password" name="password" id='user-password' placeholder="Password" autocomplete="new-password" ref={passwordRef} />
                        </div>
                        <div class="hotelUserName">
                            <label for="hotelUserName">Hotel User Name</label>
                            <input type="text" name="hotelUserName" id='hotelUserName' placeholder="chitrakhut" ref={hotelName} />                </div>

                        <div class="hotelName">
                            <label for="hotelName">Hotel's Full Name</label>
                            <input type="text" name="hotelName" id='hotelName' placeholder="Chitrakhut" ref={hotelFullName} />                </div>
                        <div class="MobileNumber">
                            <label for="mobileNumber">Mobile Number</label>
                            <input type="text" name="mobile" id='mobileNumber' placeholder="8090706050" pattern="[6789][0-9]{9}" ref={mobileNumber} />
                        </div>
                        <div class="submit-button">
                            {/* <button className="registerbtn" type = 'submit' >Register</button> */}

                            <input type="submit" id="submit" value="Create Account" />
                        </div>

                    </form>
                    {success && (<span className="success">Successful. Please Login</span>)}
                    {failure && (<span className="failure">Register Again</span>)}
                    <footer class="signup-footer">
                        <div>Already have an account? <a href="/login">Login</a></div>
                    </footer>

                </main>


            </div>

            <div class="circle c1"></div>
            <div class="circle c2"></div>
        </div>
    )
}
