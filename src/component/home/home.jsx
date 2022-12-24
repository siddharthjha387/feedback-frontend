import React from 'react'
import './home.css'
import img from './assets/asset 2.png'
import Navbar from '../Navbar'
export default function Home({ myStorage, currentUser, setCurrentUser }) {


    return (
        <>
            <div class="top-banner">
                <div class="container">

                    <div class="small-bold-text banner-text">
                        {currentUser == null ? (<> New to QuickFeed : Sign up</>) : (<>
                            If you have any query let us know at &nbsp;
                            <a href="mailto:akshit@gmail.com" id='email'>akshit@gmail.com</a>
                        </>)}

                    </div>

                </div>
            </div>
            <Navbar myStorage={myStorage} setCurrentUser={setCurrentUser} currentUser={currentUser} />


            <header>
                <div class="container flex header-section">
                    <div class="header-left">
                        <h2>Sell Food Confidently</h2>
                        <p>
                            Quick Feed is a platform that takes the feedback of customers and provides it to restaurant owners.
                        </p>
                        <a href="/login" class="primary-button get-started-btn">Get Started</a>
                    </div>
                    <div class="header-right">
                        <img src={img} alt="" class="img-desk" />
                    </div>
                </div>
            </header>
        </>
    )
}

