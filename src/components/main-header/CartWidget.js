function CartWidget() {
    return (
        <div className={'contents'}>
            <div className='block text-right'>
                <p>mis compras</p>
                <p className='text-xs text-stone-500 lowercase'>
                    (0 productos)
                </p>
                <p className='text-red-700'> $ 0.00</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
            </svg>
        </div>
    )
}

export default CartWidget