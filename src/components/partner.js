import React, {  } from "react";
import '../style/partner.css';
import bouldDao from "./../../public/img/builddao.jpeg"
import Image from 'next/image';

export const Partner = () => {

    return(<>
        <section id="partner">
            <div>
                <div id="partner-header">
                    <h1>Our Partners</h1>
                </div>
                <div id="texts">
                    <p> We are proud to work with these industry leaders.</p>
                </div>
                <div id="partner_link" >
                    <ul>
                        <li>
                            <a href="https://www.nearbuilders.org/" target="blank">
                                <div className="part-logo">
                                <img src="https://saheedwale.s3.amazonaws.com/1708416492768-2c514901-3eaa-480a-832b-dccd78a04914.jpg" alt="" srcset="" />
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.potlock.io/" target="blank">
                                <div className="part-logo">
                                <img src="https://www.potlock.io/assets/logo.svg" alt="" srcset="" />
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="https://near.org/" target="blank">
                                <div className="part-logo">
                                <img src="https://near.org/_next/static/media/near-logo.1416a213.svg" alt="" srcset="" />
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="https://ndc.gov.ng/" target="blank">
                                <div className="part-logo">
                                <img src="https://ndc.gov.ng/wp-content/uploads/2020/03/Webp.net-resizeimage.png" alt="" srcset="" />
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className="part-logo">
                                <img src="https://unicorn-cdn.b-cdn.net/3d3ddf5c-ebef-4555-8219-5f57131a044d/listingbott.png?width=166&height=74" alt="" srcset="" />
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className="part-logo">
                                <img src="https://unicorn-cdn.b-cdn.net/a4803a66-d321-4f16-a424-d05ecdf0e217/cofondr-logo.png?width=266&height=60" alt="" srcset="" />
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className="part-logo">
                                <img src="https://unicorn-cdn.b-cdn.net/34007f57-9d58-4b78-83a5-2541048a6b89/index-rusher-logo.png?width=422&height=72" alt="" srcset="" />
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>   
        </section>
    </>)
}