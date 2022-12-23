import React from 'react';
import Navbar from './Navbar';
import './about.css'
function About () {
	return <div>
		<Navbar/>

		<div className="outer-container container">
		<div className="steps-to-register-title">
			5 Simple steps for registration
		</div>
		<div className="steps-to-register">
			<ol>
				<li className='step-numbers'>Register at <a href="/register">https://feedback-frontend-cgv.pages.dev/register</a></li>
				<li className='step-numbers'>
					After successful registration, login at <a href="/login">https://feedback-frontend-cgv.pages.dev/login</a> </li>
				<li className='step-numbers'>
				Your restaurants Qr Code is available at <a href="/qr-code">https://feedback-frontend-cgv.pages.dev/qr-code</a></li>
				<li className='step-numbers'>
					 Customers can share their feedback by scanning the QR code.
				</li>
				<li className='step-numbers'>
					 You can see the customer feedbacks at  <a href="/client">https://feedback-frontend-cgv.pages.dev/client</a>
				</li>
			</ol>
		</div>

		
	</div>
		</div>
}
export default About;
