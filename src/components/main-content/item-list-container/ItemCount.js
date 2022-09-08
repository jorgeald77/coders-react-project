import {useEffect, useState} from "react";

const ItemCount = ({stocks, initials}) => {
    const [stock, setStock] = useState(parseInt(stocks))
    const [initial, setInitial] = useState(parseInt(initials))

    const up = () => {
        if (initial < stock) {
            setInitial(initial + 1)
        }
    }
    const down = () => {
        if (initial > 1) {
            setInitial(initial - 1)
        }
    }

    return (
        <div className='p-2 w-full'>
            <div className='my-4 flex flex-col items-center'>
                <div className='mb-10 w-full'>
                    <p className='mb-4 text-xs text-stone-500 lowercase read-only:'>stock: {stock}</p>
                </div>

                {stock > 0 ? (
                    <div className='place-self-start relative h-10 w-24 mt-1 rounded-md shadow-sm'>
                        <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2'>
                            <span className='text-stone-400 text-sm'>Cant:</span>
                        </div>
                        <input readOnly={true} type="text" className='block h-full w-full rounded-md pl-10 pr-5 text-center
                        border-0 focus:ring-0'
                               value={initial}/>
                        <div className='absolute inset-y-0 right-0 h-full flex'>
                            <div className='h-full w-5 flex flex-col justify-between'>
                                <button type='button' onClick={up}
                                        className='h-full bg-stone-400 text-stone-700 rounded-tr-md'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth="2" stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M4.5 15.75l7.5-7.5 7.5 7.5"/>
                                    </svg>
                                </button>

                                <button type='button' onClick={down}
                                        className='h-full bg-stone-400 text-stone-700 rounded-br-md'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth="2" stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p className='text-red-500 font-semibold tracking-widest uppercase'>
                        Agotado
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             strokeWidth="1.5"
                             stroke="currentColor" className="w-6 h-6 ml-2 inline-block">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"/>
                        </svg>
                    </p>
                )}
            </div>

            <button className='py-2 px-3 w-full rounded bg-stone-500 text-stone-200 text-sm tracking-wide uppercase'>
                agregar al carrito
            </button>
        </div>
    )
}

export default ItemCount