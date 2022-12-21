
import React from 'react'
import Navbar from './Navbar';
import './qrcode.css'
export default function Qrcode({myStorage,currentUser,setCurrentUser}) {
const print=()=>{
  window.print();
}
  return (
    <>
    <Navbar myStorage={myStorage} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
    <div className="outer-container">
    
    <div className="qr-code-title">
    <h2>Qr Code for {currentUser.hotelFullName} </h2>
    <div className="print primary-button" onClick={print}>Print</div>
    </div>
   
    <img src={`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=localhost:3000/give-feedback/${currentUser.hotelName}`} alt="" />

    </div>


    </>
  )
}
