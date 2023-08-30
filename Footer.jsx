import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="footer-dark">
 <footer>
 <div className="container">
   <div className="row">
 <div className="col-md-3 item">
     <h3>Get Started</h3>
         <ul>
   <li><a href="#">How it Works</a></li>
  <li><a href="#">Create an Account</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 item">
                            <h3>Post Opportunities</h3>
                            <ul>
     <li><a href="#">How to Post a Job</a></li>
   <li><a href="#">Find Freelancers</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 item">
     <h3>Connect with Us</h3>
     <div className="col item social">
    <a href="#"><img src="https://pbs.twimg.com/profile_images/1646955748444852231/XGehZ_9v_400x400.jpg" alt="Facebook" width={40} height={40} /></a>
<a href="#"><img src="https://is1-ssl.mzstatic.com/image/thumb/Purple122/v4/91/ef/67/91ef67ae-4877-1286-a4d6-fb04f6f37e9e/ProductionAppIcon-2x-4-0-0-85-220.png/1200x630bb.png" alt="Twitter" width={40} height={40} /></a>
     <a href="#"><img src="https://pbs.twimg.com/profile_images/1526231349354303489/3Bg-2ZsT_400x400.jpg" alt="Instagram" width={40} height={40} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
