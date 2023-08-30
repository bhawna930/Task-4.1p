import React from 'react'
import './Email.css'


function Email() {

    return(
        <div className="emailbox">
            <div className="emailbox-form">
                <h1>SIGN UP FOR OUR DAILY INSIDER</h1>
            
                <input type="email" className="input" name="email" placeholder="Enter Your Email" required="required" />
               
                <div className="emailbutton">SUBSCRIBE</div>
            </div>
        </div>
    )
}

export default Email