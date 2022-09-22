import {useContext} from "react";
import {CartContext} from "../../context/CartContext";
import {Link} from "react-router-dom";

export default function Cart() {
    const {lista, remove, clean, total} = useContext(CartContext)

    return (
        <div className='h-full'>
            <div className='category-header'>
                <h2 className='category-header--title'>carrito de compras</h2>
                <div className='category-header--border'></div>
            </div>
            <div>
                {lista.length == 0
                    ?
                    <div>
                        <p className='my-6'>"Tu carrito está vacío...."</p>
                        <Link to='/'>
                            <button className='font-semibold underline mt-1.5'>Ver productos</button>
                        </Link>
                    </div>
                    :
                    <div className='flex flex-col space-y-2 md:flex-row md:space-x-10 md:space-y-0'>
                        <div className='p-2 md:w-2/3'>
                            <table className='table-fixed w-full'>
                                <thead>
                                <tr>
                                    <th className='text-center'>producto</th>
                                    <th className='text-right w-24'>precio</th>
                                    <th className='text-right w-20'>cantidad</th>
                                    <th className='text-right w-24'>total</th>
                                </tr>
                                </thead>
                                <tbody>
                                {lista.map(item => (
                                    <tr className='border-b'>
                                        <td className='flex px-2 my-3 justify-start items-center space-x-4'>
                                            <button onClick={() => remove(item.id)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                     fill="currentColor" className="w-5 h-5">
                                                    <path fill-rule="evenodd"
                                                          d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                                                          clip-rule="evenodd"/>
                                                </svg>
                                            </button>
                                            <img src={`${item.pictureUrl}70?random=${item.id}`} alt="img"
                                                 height='20px'/>
                                            <p>{item.title}</p>
                                        </td>
                                        <td className='text-right'>$ {item.price}</td>
                                        <td className='text-right'>{item.cant}</td>
                                        <td className='text-right'>$ {item.subtotal}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                            <div className='text-right mt-4'>
                                <button className='text-red-500' onClick={() => clean()}>vaciar carrito</button>
                            </div>
                        </div>
                        <div className='p-2 md:w-1/3'>
                            <div>
                                <p className='category-header--subtitle'>resumen de pedido</p>
                                <ol className='my-8 divide-y divide-stone-400'>
                                    <li className='flex h-8 justify-between'>
                                        <p>subtotal</p>
                                        <p>$ {parseInt(total) - (parseInt(total) * 0.16)}</p>
                                    </li>
                                    <li className='flex h-8 justify-between'>
                                        <p>16% iva</p>
                                        <p>$ {(parseInt(total) * 0.16)}</p>
                                    </li>
                                    <li className='flex h-8 justify-between'>
                                        <p>total</p>
                                        <p>$ {parseInt(total)}</p>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}