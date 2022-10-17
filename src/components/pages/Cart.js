import './Cart.css'
import {useContext, useState} from "react"
import {CartContext} from "../../context/CartContext"
import {Link} from "react-router-dom"
import {db} from '../../utils/firebase'
import {addDoc, collection} from "firebase/firestore"
import OverviewCompra from "./cart/OverviewCompra";

export default function Cart() {
    const {lista, remove, clean, total} = useContext(CartContext)
    const [pedido, setPedido] = useState({})
    const comprarProductos = (event) => {
        event.preventDefault()
        const data = {
            buyer: {
                name: event.target.nombre.value, phone: event.target.telefono.value, email: event.target.correo.value,
            }, items: lista, fechaCompra: new Date(), compraTotal: total,
        }

        addDoc(collection(db, 'orders'), data)
            .then((response) => {
                setPedido({
                    id: response.id, ...data,
                })
                clean()
            })
    }

    return (
        <div className='h-full'>
            <div className='header-title'>
                <h1>carrito de compras<span/></h1>
            </div>

            <div>
                {
                    pedido.hasOwnProperty('id') && pedido.id !== ''
                        ?
                        <OverviewCompra compra={pedido}></OverviewCompra>
                        :
                        lista.length === 0
                            ?
                            <div>
                                <p className='my-6'>"Tu carrito está vacío...."</p>
                                <Link to='/'>
                                    <button className='font-semibold underline mt-1.5'>Ver productos</button>
                                </Link>
                            </div>
                            :
                            <div className='cart-wrap w-full'>
                                <div className='cart-table'>
                                    <table>
                                        <thead>
                                        <tr>
                                            <th className='text-center'>producto</th>
                                            <th className='text-right w-24'>precio</th>
                                            <th className='text-right w-20'>cant.</th>
                                            <th className='text-right w-24'>total</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            lista.map(item => (
                                                <tr key={item.id}>
                                                    <td className='cart-wrap-image'>
                                                        <button onClick={() => remove(item.id)}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                                 fill="currentColor" className="w-5 h-5">
                                                                <path fillRule="evenodd"
                                                                      d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                                                                      clipRule="evenodd"/>
                                                            </svg>
                                                        </button>
                                                        <img src={`${item.pictureUrl}`} alt="img"/>
                                                        <p>{item.title}</p>
                                                    </td>
                                                    <td>$ {item.price}</td>
                                                    <td>{item.cant}</td>
                                                    <td>$ {item.subtotal}</td>
                                                </tr>
                                            ))
                                        }
                                        </tbody>
                                    </table>
                                    <div className='text-right mt-4'>
                                        <button className='btn-empty' onClick={() => clean()}>vaciar carrito</button>
                                    </div>
                                </div>

                                <div className='cart-overview'>
                                    <div className='container-overview'>
                                        <p className='header-subtitle'>resumen de pedido</p>
                                        <ol>
                                            <li>
                                                <p>subtotal</p>
                                                <p>$ {(parseInt(total) - (parseInt(total) * 0.16)).toFixed(2)}</p>
                                            </li>
                                            <li>
                                                <p>16% iva</p>
                                                <p>$ {(parseInt(total) * 0.16).toFixed(2)}</p>
                                            </li>
                                            <li>
                                                <p>total</p>
                                                <p>$ {parseInt(total).toFixed(2)}</p>
                                            </li>
                                        </ol>
                                        <form onSubmit={comprarProductos}>
                                            <div className='container-overview-form'>
                                                <div>
                                                    <label htmlFor="nombe" className='text-sm'>Nombre</label>
                                                    <input type="text" id='nombre' name='nombre' minLength='6'
                                                           maxLength='64' placeholder='Escribe tu nombre' required/>
                                                </div>
                                                <div>
                                                    <label htmlFor="telefono" className='text-sm'>Teléfono</label>
                                                    <input type="phone" id='telefono' name='telefono' minLength='10'
                                                           maxLength='10' pattern='[0-9]{10}'
                                                           title="NNNNNNNNNN, Debe contener 10 dígitos sin espacios ni otros carácteres."
                                                           placeholder='Escribe tu número celular' required/>
                                                </div>
                                                <div>
                                                    <label htmlFor="correo" className='text-sm'>Correo
                                                        electrónico</label>
                                                    <input type="email" id='correo' name='correo'
                                                           placeholder='Escribe tu correo electrónico' required/>
                                                </div>
                                            </div>
                                            <button type='submit' className='btn-compra mt-10'>Comprar</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                }
            </div>
        </div>
    )
}