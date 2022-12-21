import React from 'react'
import  './home/home.css'
export default function Navbar({currentUser,setCurrentUser,myStorage}) {
    const handleLogout = () => {
        myStorage.removeItem("user");
        setCurrentUser(null);
        
	}
  return (
    <nav>

        <div class="container main-nav flex">
            <a href="/" class="company-logo company-title">
                Feeder Hub
            </a>

            <div class="nav-links">
                <ul class="flex">
                    <li><a href="/contact" class="hover-link">Contact</a></li>
                    <li><a href="/about" class="hover-link">About</a></li>
                    <li><a href="/" class="hover-link">Pricing</a></li>
                    <li><a href="/client" class="hover-link">Feedbacks</a></li>
                   
				    {currentUser ?
				   ( 
                   <>
                    <li><a href="/qr-code" class="hover-link">QR Code</a></li>
                   <li><a href="#" class="hover-link primary-button" onClick={handleLogout}>Log Out</a></li>
                   </>
                   )
				   :
					(
					<>
					<li><a href="/login" class="hover-link secondary-button" >Sign in</a></li>
                    <li><a href="/register" class="hover-link primary-button" >Sign up</a></li>
					</>
					)}
                </ul>
            </div>
        </div>

    </nav>

  )
}
