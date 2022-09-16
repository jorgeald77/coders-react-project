import {useContext} from "react";
import {CartContext} from "../../context/CartContext";

export default function Cart() {
    console.log(useContext(CartContext))

    return (
        <>
            <h3>Página para finalizar la compra y validar productos</h3>
        </>
    )
}