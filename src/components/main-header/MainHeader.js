import logo from '../../logo.svg'
import './MainHeader.css'
import CartWidget from "./CartWidget";

function MainHeader() {
    return (
        <div className='header-main-container'>
            <div className='header-main-slogan'>
                <div className='slogan-logo'>
                    <img src={logo} alt="logo react" className='w-28'/>
                </div>
            </div>

            <div className='header-main-mask'>
                <div className='h-12 w-full bg-stone-700'/>
            </div>

            <div className='header-main-menu-container'>
                <div className='main-links flex-1'>
                    <nav className='h-full'>
                        <ul className='flex justify-around items-center h-full'>
                            <li>
                                <p>promociones</p>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                     viewBox="0 0 24 24"
                                     stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                                </svg>
                            </li>
                            <li>
                                <div className='block text-right'>
                                    <p>dudas</p>
                                    <p className='text-xs text-stone-500 lowercase'>
                                        contacto@empresa.com
                                    </p>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                     viewBox="0 0 24 24"
                                     stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
                                </svg>
                            </li>
                            <li>
                                <CartWidget/>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className='main-menu h-12 bg-stone-700'>
                    <nav className='h-full'>
                        <ul className='flex justify-center items-center gap-x-20 h-full'>
                            <li>
                                <button>inicio</button>
                            </li>
                            <li>
                                <button>conócenos</button>
                            </li>
                            <li>
                                <button>tienda</button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default MainHeader