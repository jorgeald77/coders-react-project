import logo from '../../logo.svg'
import './MainHeader.css'
import CartWidget from "./CartWidget";
import {Link} from "react-router-dom";

function MainHeader() {
    return (
        <div className='header-main-container'>
            <div className='header-main-slogan'>
                <div className='slogan-logo'>
                    <Link to='/'>
                        <img src={logo} alt="logo react" className='w-28'/>
                        <p>Home</p>
                    </Link>
                </div>
            </div>

            <div className='header-main-mask'>
                <div/>
            </div>

            <div className='header-main-menu-container'>
                <div className='main-links'>
                    <nav>
                        <ul>
                            <li>
                                <Link to='/promociones'>
                                    <div className='flex space-x-2'>
                                        <p>promociones</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                             viewBox="0 0 24 24"
                                             stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                                        </svg>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to='/contacto' className='hidden md:block'>
                                    <div className='flex flex-row text-right gap-x-2'>
                                        <div>
                                            <p>dudas</p>
                                            <p className='subtext'>contacto@empresa.com</p>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                             className="h-10 w-10"
                                             fill="none"
                                             viewBox="0 0 24 24"
                                             stroke="currentColor" strokeWidth="1.5">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
                                        </svg>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <CartWidget/>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className='main-menu'>
                    <nav>
                        <ul>
                            <li>
                                <Link to='/categoria/running'>
                                    <button>running</button>
                                </Link>
                            </li>
                            <li>
                                <Link to='/categoria/senderismo'>
                                    <button>senderismo</button>
                                </Link>
                            </li>

                            <li>
                                <Link to='/categoria/trail'>
                                    <button>trail</button>
                                </Link>
                            </li>
                            <li className='hidden md:inline-block'>
                                <Link to='/conocenos'>
                                    <button>conócenos</button>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default MainHeader