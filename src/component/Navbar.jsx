import React, { useState } from 'react'
import  './home/home.css'
export default function Navbar({currentUser,setCurrentUser,myStorage}) {
    const handleLogout = () => {
        myStorage.removeItem("user");
        setCurrentUser(null); 
	}
    const [active, setActive] = useState(false);
    const showMenu=(e)=>{
        e.preventDefault();
        setActive(!active);
    }
  return (
    <nav>

        <div className="container main-nav flex">
            <a href="/" className="company-logo company-title">
                QuickFeed
            </a>

            <div className={active?'nav-links nav-links-active':'nav-links'}  id="nav-links">
                <ul className="flex">
                    {/* <li><a href="/contact" className="hover-link">Contact</a></li> */}
                    <li><a href="/about" className="hover-link">About</a></li>
                    {/* <li><a href="/" className="hover-link">Pricing</a></li> */}
                    <li><a href="/client" className="hover-link">Feedbacks</a></li>
                   
				    {currentUser ?
				   ( 
                   <>
                    <li><a href="/qr-code" className="hover-link">QR Code</a></li>
                   <li><a href="#" className="hover-link primary-button" onClick={handleLogout}>Log Out</a></li>
                   </>
                   )
				   :
					(
					<>
					<li><a href="/login" className="hover-link secondary-button" >Sign in</a></li>
                    <li><a href="/register" className="hover-link primary-button" >Sign up</a></li>
					</>
					)}
                </ul>
            </div>
            <a href="" className='nav-toggle hover-link' onClick={(e)=>{console.log(e);showMenu(e)}} ><i className="fa-solid fa-bars"></i></a>
        </div>

    </nav>

  )
}
