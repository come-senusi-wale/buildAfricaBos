import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef } from 'react';
import '../style/nav.css';
import logo from "./../../public/img/builogo.jpeg";
import { FaBars, FaTimes } from "react-icons/fa";

export const Navigation = ({NavHandler}) => {
  let showRef = useRef(null);

    let [openSideBar, setOpenSideBar] = useState(false)

    let showSideBar = () => {
        NavHandler();
        setOpenSideBar(true)
    }

    let closeSideBar = () => {
        NavHandler();
        setOpenSideBar(false)
    }

  return (
    <nav>
            <section>
                <div id="nav_container">
                    <nav id="nav">
                            <div id="logo">
                                <div>
                                    <Image priority className='img' src={logo} alt=""  />
                                    <h2>BuidlAfrica</h2>
                                </div>
                            </div>
                            <div>
                                <div id="link_container">
                                    <ul>
                                        <li>
                                            <Link href='/about' className="link">about us</Link>
                                        </li>                                 
                                        <li>
                                            <Link href='/contact' className="link">contact us</Link>
                                        </li>  
                                        <li>
                                            <Link href='/' className="link start">get started</Link>
                                        </li>                                  
                                        
                                    </ul>
                                </div>
                                <div id="toggle">
                                    {!openSideBar? <h2 onClick={() => showSideBar()}><FaBars></FaBars></h2> :  <h2 onClick={() => closeSideBar()}><FaTimes></FaTimes></h2>}
                                </div>
                            </div>
                    </nav>
                </div> 
                {openSideBar ?  
                    <div id="sidebar" className="show_hight" ref={showRef}>
                        <div  id="sidebar_container">
                            <ul>
                                <li>
                                    <a className="side_link" onClick={() => { window.location.href = '/about';}}>about us</a>
                                </li>
                                <li>
                                    <a className="side_link" onClick={() => { window.location.href = '/contact';}}>contact us</a>
                                </li>  
                                <li>
                                    <a className="side_link start" onClick={() => { window.location.href = '/';}}>get started</a>
                                </li>                           
                            </ul>
                        </div>
                    </div>
                : 
                    <div></div>
                }
            </section>
        </nav>
  );
};