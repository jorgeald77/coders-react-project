import React, {useEffect, useState} from "react"
import {list} from "postcss";
import itemDetail from "../components/main-content/item-detail-container/ItemDetail";

export const CartContext = React.createContext();

export const CartProvider = ({children}) => {
    const [lista, setLista] = useState([])
    const [cantidad, setCantidad] = useState(0)
    const [total, setTotal] = useState(0)

    const add = (producto, cant) => {
        let newLista = getCopyList()
        let idx = indexProducto(producto.id)
        if (idx === -1) {
            // Registrar producto nuevo
            newLista.push({
                id: producto.id,
                title: producto.title,
                pictureUrl: producto.pictureUrl,
                price: producto.price,
                cant: cant,
                subtotal: cant * producto.price
            })
        } else {
            // Actualizar Cantidad y Subtotal del Producto existente en lista
            newLista[idx].cant = cant
            newLista[idx].subtotal = cant * newLista[idx].price
        }
        setLista(newLista)
    }


    const remove = (productoId) => {
        let idx = indexProducto(productoId)
        if (idx >= 0) {
            let newLista = getCopyList()
            newLista.splice(idx, 1)
            setLista(newLista)
        }
    }

    // Reiniciar Lista de State a vacia.
    const clean = () => {
        setLista([])
    }

    // Obtener una copia de la lista de State
    function getCopyList() {
        return [...lista]
    }

    /* Devuelve el index del producto en la Lista.
        Con esta posición eliminamos o editamos el registro si existe.
    */
    function indexProducto(productoId) {
        return lista.findIndex(el => el.id === productoId)
    }

    // Se ejecuta para calcular el total y la cantidad de producto, cada vez que lista cambia.
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
