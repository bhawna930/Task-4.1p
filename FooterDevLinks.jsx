import React from 'react'
import './Footer.css'

function FooterDevLinks() {
    return (
        <div class="footer-dark">
            <footer>
                <div class="container">
                    <h2 style={{textAlign: 'center'}}>MySite</h2>
                    <div class="row">
                        <div class="col-md-3 item">
                            <ul>
                                <li><a href="#">Privacy</a></li>
                            </ul>
                        </div>
                        <div class="col-md-3 item">
                            <ul>
                                <li><a href="#">Terms of Use</a></li>
                            </ul>
                        </div>
                        <div class="col-md-3 item">
                            <ul>
                                <li><a href="#">Guidelines</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default FooterDevLinks;

