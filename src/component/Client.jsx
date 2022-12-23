import axios from 'axios';

import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import './client.css'
import Navbar from './Navbar';
import { API_URL } from "../Api_Url";
axios.defaults.withCredentials = true;
export default function Client({ myStorage, currentUser, setCurrentUser }) {

  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const feebacks = async () => {

      try {
        console.log(currentUser);
        const res = await axios.get(`${API_URL}/api/feedback/${currentUser.hotelName}`)
        setReviews(res.data[0].reviews);

      }
      catch (err) {
        console.log(err);
      }
    }
    feebacks();
  }, [])
  if (!currentUser)
  return <Navigate replace to="/" />;
  else
  return (
    <>
      <Navbar myStorage={myStorage} setCurrentUser={setCurrentUser} currentUser={currentUser} />
      <div className="container">

        <div className="client-page">
          <div className="greet">
            Hello {currentUser.fullName}! 😊
          </div>

        </div>
        <h2 className="feedback-title">
          Customer feedbacks for {currentUser.hotelFullName}:
        </h2>
        <div className='outer-container-feedback'>
          {reviews.map((review) => (
            <div className="inner-container">
              <div className="name"><b>Name:</b>  {review.name}</div>
              <div className="user-food-rating"><b>Food-rating:</b>  {review.foodRating}</div>
              <div className="feedback"><b>Feedback: </b>{review.feedback}</div>
              <div className="dine-in">{review.dineIn}</div>
            </div>

          ))}
        </div>

      </div>
    </>
  )
}
