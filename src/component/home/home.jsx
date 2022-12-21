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
                        New to feedback Hub: Sign up
                    </div>

                </div>
            </div>
            <Navbar myStorage={myStorage} setCurrentUser={setCurrentUser} currentUser={currentUser} />


            <header>
                <div class="container flex header-section">
                    <div class="header-left">
                        <h2>Sell Food Confidently</h2>
                        <p>
                            Ha bhai reviews dekho apne hotel ke!!
                        </p>
                        <a href="#" class="primary-button get-started-btn">Get Started</a>
                    </div>
                    <div class="header-right">
                        <img src={img} alt="" class="img-desk" />
                    </div>
                </div>
            </header>
        </>
    )
}

