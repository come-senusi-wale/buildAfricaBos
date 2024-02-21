import React, { } from "react";
import '../style/contact.css';

export const Contact = () => {
    return(<>
        <section id="contact">
            <div id="contact-container">
                <div Contact-wrapper>
                    <div id="contact-head">
                        <h2>Contact Us</h2>
                    </div>
                    <div className="input-text">
                        <input type="text" placeholder="Enter your name" />
                    </div>
                    <div className="input-text">
                        <input type="text" placeholder="Enter a valid email adress" />
                    </div>
                    <div className="input-text">
                        <textarea placeholder="Enter your message"  rows="5"></textarea>
                    </div>
                    <div id="submit-btn">
                       <button type="button">Submit</button>
                    </div>
                </div>
            </div>
        </section>
    </>)
}