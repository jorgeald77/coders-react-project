import {useContext, useState} from "react";
import {CartContext} from "../../context/CartContext";
import {Link} from "react-router-dom";
import {db} from '../../utils/firebase'
import {addDoc, collection} from "firebase/firestore";

export default function Cart() {
    const {lista, remove, clean, total} = useContext(CartContext)
    const [orderId, setOrderId] = useState('')

    const comprarProductos = (event) => {
        event.preventDefault()
        const pedido = {
            buyer: {
                name: event.target.nombre.value,
                phone: event.target.telefono.value,
                email: event.target.correo.value,
            },
            items: lista,
            fechaCompra: new Date(),
            compraTotal: total,
        }

        addDoc(collection(db, 'orders'), pedido)
            .then(response => {
                setOrderId(response.id)
            })
    }

    return (
        <div className='h-full'>
            <div className='category-header'>
                <h2 className='category-header--title'>carrito de compras</h2>
                <div className='category-header--border'></div>
            </div>
            <div>
                {lista.length === 0 ? <div>
                    <p className='my-6'>"Tu carrito está vacío...."</p>
                    <Link to='/'>
                        <button className='font-semibold underline mt-1.5'>Ver productos</button>
                    </Link>
                </div> : <div className='flex flex-col space-y-2 md:flex-row md:space-x-10 md:space-y-0'>
                    <div className='p-2 md:w-2/3'>
                        <table className='w-full overflow-scroll'>
                            <thead>
                            <tr>
                                <th className='text-center'>producto</th>
                                <th className='text-right w-24'>precio</th>
                                <th className='text-right w-20'>cant.</th>
                                <th className='text-right w-24'>total</th>
                            </tr>
                            </thead>
                            <tbody>
                            {lista.map(item => (<tr className='border-b text-sm'>
                                <td className='flex px-2 my-3 justify-start items-center whitespace-nowrap space-x-4'>
                                    <button onClick={() => remove(item.id)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                             fill="currentColor" className="w-5 h-5">
                                            <path fillRule="evenodd"
                                                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                    </button>
                                    <img className='object-contain h-20 rounded-full shadow'
                                         src={`${item.pictureUrl}70?random=${item.id}`} alt="img"/>
                                    <p>{item.title}</p>
                                </td>
                                <td className='text-right'>$ {item.price}</td>
                                <td className='text-right'>{item.cant}</td>
                                <td className='text-right'>$ {item.subtotal}</td>
                            </tr>))}
                            </tbody>
                        </table>
                        <div className='text-right mt-4'>
                            <button className='text-red-500' onClick={() => clean()}>vaciar carrito</button>
                        </div>
                    </div>

                    <div className='p-2 md:w-1/3'>
                        <div className='p-4 border-2 rounded shadow-md border-red-900'>
                            <p className='category-header--subtitle'>resumen de pedido</p>
                            <ol className='my-8 divide-y divide-stone-400'>
                                <li className='flex h-8 justify-between'>
                                    <p>subtotal</p>
                                    <p>$ {(parseInt(total) - (parseInt(total) * 0.16)).toFixed(2)}</p>
                                </li>
                                <li className='flex h-8 justify-between'>
                                    <p>16% iva</p>
                                    <p>$ {(parseInt(total) * 0.16).toFixed(2)}</p>
                                </li>
                                <li className='flex h-8 justify-between'>
                                    <p>total</p>
                                    <p>$ {parseInt(total).toFixed(2)}</p>
                                </li>
                            </ol>
                            <form onSubmit={comprarProductos}>
                                <div className='flex flex-col space-y-2 px-4'>
                                    <div>
                                        <label htmlFor="nombe" className='text-sm'>Nombre</label>
                                        <input type="text" id='nombre' name='nombre' minLength='6' maxLength='64'
                                               className='block w-full text-sm p-1.5' placeholder='Escribe tu nombre'
                                               required/>
                                    </div>
                                    <div>
                                        <label htmlFor="telefono" className='text-sm'>Teléfono</label>
                                        <input type="phone" id='telefono' name='telefono' minLength='10' maxLength='10'
                                               pattern='[0-9]{10}' className='block w-full text-sm p-1.5'
                                               title="NNNNNNNNNN, Debe contener 10 dígitos sin espacios ni otros carácteres."
                                               placeholder='Escribe tu número celular' required/>
                                    </div>
                                    <div>
                                        <label htmlFor="correo" className='text-sm'>Correo electrónico</label>
                                        <input type="email" id='correo' name='correo'
                                               className='block w-full text-sm p-1.5'
                                               placeholder='Escribe tu correo electrónico' required/>
                                    </div>
                                </div>
                                <button type='submit'
                                        className='mt-10 py-1.5 w-full bg-red-900 text-stone-300 font-bold hover:bg-red-700'>Comprar
                                </button>
                            </form>

                        </div>
                    </div>
                </div>}
            </div>
        </div>)
}