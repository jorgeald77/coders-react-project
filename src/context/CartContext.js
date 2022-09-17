import React, {useEffect, useState} from "react"
import {list} from "postcss";

export const CartContext = React.createContext();

export const CartProvider = ({children}) => {
    const [lista, setLista] = useState([])
    const [cantidad, setCantidad] = useState(0)
    const [total, setTotal] = useState(0)

    const add = (producto, cant) => {
        const newLista = [...lista]
        newLista.push({
            id: producto.id,
            title: producto.title,
            pictureUrl: producto.pictureUrl,
            price: producto.price,
            cant: cant,
            subtotal: cant * producto.price
        })
        setLista(newLista)
    }

    const remove = (productoId) => {
        let pos = lista.findIndex(el =>
            el.id === productoId
        )
        let newLista = [...lista]
        newLista.splice(pos, 1)
        setLista(newLista)
    }

    function clean() {
        setLista([])
    }

    function findItem(producto) {
        //
    }

    useEffect(() => {
        setCantidad(lista.length)
        setTotal(lista.reduce((acc, item) => {
            return acc + item.subtotal
        }, 0))
    }, [lista])

    return (
        <CartContext.Provider value={{lista, cantidad, total, add, remove, clean}}>
            {children}
        </CartContext.Provider>
    )
}
