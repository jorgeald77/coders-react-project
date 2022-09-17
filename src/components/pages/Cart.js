import {useContext} from "react";
import {CartContext} from "../../context/CartContext";

export default function Cart() {
    const {lista, remove, clean} = useContext(CartContext)

    return (<>
        <h3>Página para finalizar la compra y validar productos</h3>
        <button onClick={() => clean()}>Vaciar carrito</button>

        <ol>
            {
                lista.map(item => (
                    <li key={item.id} className='flex justify-around w-1/2'>
                        <p>"{item.title}"</p>
                        <p>{item.cant}</p>
                        <button className='self-end' onClick={() => remove(item.id)}>Borrar {item.id}</button>
                    </li>
                ))
            }
        </ol>
    </>)
}