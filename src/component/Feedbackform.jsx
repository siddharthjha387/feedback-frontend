import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import axios from "axios";
import { API_URL } from '../../Api_Url';
axios.defaults.withCredentials = true;


import { useState } from 'react';
import './feedbackform.css';
export default function FeedbackForm() {

  const [currentHotel, setCurrentHotel] = useState();
  const [name, setName] = React.useState("");
  const [dineIn, setDineIn] = React.useState("");
  const [feedback, setFeedback] = React.useState("");
  const [foodRating, setFoodRating] = React.useState(0);
  const location = useLocation();
  const [submitted, setSubmitted] = useState(false)
  const str = location.pathname.substring(15);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newFeedback = {
      name,
      dineIn,
      foodRating,
      feedback
    };
    try {
      const res = await axios.post(`${API_URL}/api/feedback/${str}`, newFeedback);
      
      setSubmitted(true);

    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    const getHotel = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/hotels/` + str);
        setCurrentHotel(res.data);
      } catch (err) {
        console.log(err);
        return <pre>Error! Sorry</pre>
      }
    };
    getHotel();
  }, []);

  return (
    <div className="outer-box">
      <div className="inner-box">

        {(!submitted) &&
          (<header className="signup-header">

            <h1>Feedback Form</h1>
            <p>We would love to hear your feedback. It just takes 30 seconds</p>
          </header>
          )}


        {(!submitted) &&
          (<main className="signup-body">
            <form onSubmit={handleSubmit}>
              <div className="full-name">
                <label for="fullname">Name</label>
                <input type="text" id="fullname" placeholder="Your name" onChange={(e) => { setName(e.target.value) }} required />
              </div>


              <div className="dineIn">
                <label for="Dine-in">Dine-in/Take out</label>

                <div className="dine-in-label-1">
                  <input type="radio" id="Dine-in" name='Dine-in' onChange={(e) => { setDineIn("dineIn") }} value="dine-In" />
                  <label for="Dine-in" className="dine-in-label">Dine-in</label>
                </div>
                <div className="dine-in-label-1">
                  <input type="radio" id="Dine-in" name='Dine-in' onChange={(e) => { setDineIn(e.target.value) }} value="Take-out" />
                  <label for="Dine-in" className="dine-in-label">Take-out</label>


                </div>

              </div>
              <label for="food-rating" id='food-rating-label'>Food-rating</label>
              <div className="food-rating">

                <div className="rate">


                  <input type="radio" id="star5" name="rate" value="5" onChange={(e) => { setFoodRating(e.target.value) }} />
                  <label for="star5" title="text">5 stars</label>
                  <input type="radio" id="star4" name="rate" value="4" onChange={(e) => { setFoodRating(e.target.value) }} />
                  <label for="star4" title="text">4 stars</label>
                  <input type="radio" id="star3" name="rate" value="3" onChange={(e) => { setFoodRating(e.target.value) }} />
                  <label for="star3" title="text">3 stars</label>
                  <input type="radio" id="star2" name="rate" value="2" onChange={(e) => { setFoodRating(e.target.value) }} />
                  <label for="star2" title="text">2 stars</label>
                  <input type="radio" id="star1" name="rate" value="1" onChange={(e) => { setFoodRating(e.target.value) }} />
                  <label for="star1" title="text">1 star</label>
                </div>
              </div>

              <div className="feedback">
                <label for="feedback">Feedback</label>
                <textarea name="feedback" id="feedback" rows="5" onChange={(e) => { setFeedback(e.target.value) }}></textarea>

              </div>
              <div className="submit-button">
                <input type="submit" id="submit" value="Submit feedback" />
              </div>
            </form>



          </main>
          )}
        {(submitted) &&
          (

            <div className="thankyou">Thankyou </div>

          )}


      </div>


      <div className="circle c1"></div>
      <div className="circle c2"></div>
    </div>
  )
}
