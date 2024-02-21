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
                                <Image src={bouldDao} alt="" srcset="" />
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className="part-logo">
                                <img src="https://unicorn-cdn.b-cdn.net/6dd6c5da-b114-427d-b641-4d56dc1c42c9/logo-dark128.png?width=468&height=72" alt="" srcset="" />
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className="part-logo">
                                <img src="https://unicorn-cdn.b-cdn.net/82630842-e71b-4b56-84d8-71988eb58eba/seobot-logo.png?width=218&height=76" alt="" srcset="" />
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className="part-logo">
                                <img src="https://unicorn-cdn.b-cdn.net/64a02109-bf2e-4c3e-a305-be836e4d05be/allgpts-logo.png?width=205&height=45" alt="" srcset="" />
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