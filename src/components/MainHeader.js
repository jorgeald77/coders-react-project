import logo from './../logo.svg'
import './MainHeader.css'

function MainHeader() {
    return (
        <div className='flex flex-row overflow-hidden h-28 bg-stone-900 text-stone-300 border-b shadow'>
            <div className='relative w-1/3'>
                <div className='main-slogan'>
                    <div className='logslog'>
                        <img src={logo} alt="logo react" className='w-28'/>
                    </div>
                </div>
            </div>

            <div className='flex-1 flex flex-col'>
                <div className='flex-1'>
                    <ul className='flex justify-around items-center h-full text-sm'>
                        <li className='inline-flex gap-x-3'>
                            <p>nuevos productos</p>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>
                            </svg>
                        </li>
                        <li className='inline-flex gap-x-3'>
                            <p>contacto</p>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
                            </svg>
                        </li>
                        <li className='inline-flex gap-x-3'>
                            <p>mis compras</p>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                            </svg>
                        </li>
                    </ul>
                </div>
                <div className='h-12 bg-stone-700'>
                    <nav className='h-full'>
                        <ul className='flex justify-center items-center gap-x-10 h-full'>
                            <li><a href='/'>inicio</a></li>
                            <li><a href='#'>conócenos</a></li>
                            <li><a href='#'>tienda</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default MainHeader