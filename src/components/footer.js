import React, {  } from "react";
import Image from 'next/image';
import '../style/footer.css';
import logo from "./../../public/img/builogo.jpeg";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const Footer = () => {

    return(<>
        <section id="forter">
            <div id="footrt-container">
                <div id="mar-div" className="mars-footer">
                    <h1>
                        <div className="img">
                            <Image src={logo} alt="" id="img"/>
                        </div>
                    </h1>
                    <p>© 2024 African Buidl Innovations.</p>
                    <p>All rights reserved.</p>
                </div>
                <div id="company" className="mars-footer">
                    <h1>Company</h1>
                    <ul>
                        <li><a href="#" onClick={() => { window.location.href = '/about';}}>About Us</a></li>
                        <li><a href="#" onClick={() => { window.location.href = '/contact';}}>Contact Us</a></li>
                    </ul>
                </div>
                <div id="resource" className="mars-footer">
                    <h1>Resources</h1>
                    <ul>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Support</a></li>
                    </ul>
                </div>
                <div id="follow" className="mars-footer">
                    <h1>Follow Us</h1>
                    <ul>
                        <li><a href="#" ><FaTelegramPlane></FaTelegramPlane></a></li>
                        <li><a href="https://x.com/BuidlAfrica?s=09" target="blank"><FaXTwitter></FaXTwitter></a></li>
                    </ul>
                </div>
            </div>
        </section>
    </>)
}