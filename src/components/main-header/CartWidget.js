import './CartWidget.css'
import {Link} from "react-router-dom";

function CartWidget() {
    return (
        <div className='cart-container'>
            <div className='text-right'>
                <p>mis compras</p>
                <p className='text-xs text-stone-500 lowercase'>
                    0 productos
                </p>
                <p className='text-moneda font-bold text-red-700'>
                    0.00
                </p>
            </div>

            <Link to='/cart'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                </svg>
            </Link>
        </div>
    )
}

export default CartWidget