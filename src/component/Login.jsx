
import { useRef, useState } from "react";
import axios from "axios";


import './feedbackform.css'
import { Navigate } from "react-router-dom";
export default function Login({ myStorage, setCurrentUser }) {

    
    const [failure, setFailure] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false)
    const nameRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = {
            username: nameRef.current.value,
            password: passwordRef.current.value,
        };

        console.log(user);
        try {
            const res = await axios.post("/api/users/login", user);
            myStorage.setItem("user", JSON.stringify(res.data))
            setCurrentUser(res.data)
            setFailure(false);
            setLoggedIn(true);
           
        }
        catch (err) {
            console.log(err);
            setFailure(true);
            setLoggedIn(false);
            myStorage.removeItem("user");
            setCurrentUser(null);
        }
    }
    if(loggedIn)
    return <Navigate replace to="/client" />;
    else
    return (

        <div class="outer-box">
            <div class="inner-box">


                <header class="signup-header">
                    <h1>Log In</h1>
                    <p>It just takes 30 seconds</p>
                </header>

                <main class="signup-body">
                    <form onSubmit={handleSubmit}>
                        <div class="full-name">
                            <label for="fullname">User Name</label>
                            <input type="text" name="username" placeholder="Username" ref={nameRef} />                </div>

                        <div class="password">
                            <label for="user-password">Password</label>
                            <input type="password" name="password" placeholder="Password" ref={passwordRef} />
                        </div>
                        <div class="submit-button">
                            {/* <button className="registerbtn" type = 'submit' >Register</button> */}

                            <input type="submit" id="submit" value="Log In" />
                        </div>

                    </form>
                    {failure && (<span className="failure">Login Again</span>)}

                </main>



            </div>

            <div class="circle c1"></div>
            <div class="circle c2"></div>


        </div>


    )
}
