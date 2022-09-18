import React, {useEffect, useState} from "react"

export const CartContext = React.createContext();

export const CartProvider = ({children}) => {
    const [lista, setLista] = useState([])
    const [cantidad, setCantidad] = useState(0)
    const [total, setTotal] = useState(0)

    // Agregar o actualizar un item al State List
    const add = (producto, cant) => {
        let newLista = getCopyList()
        let idx = indexProducto(producto.id)
        if (idx === -1) {
            // Agregar Item
            newLista.push({
                id: producto.id,
                title: producto.title,
                pictureUrl: producto.pictureUrl,
                price: producto.price,
                cant: cant,
                subtotal: cant * producto.price
            })
        } else {
            // Actualizar Item
            newLista[idx].cant = cant
            newLista[idx].subtotal = cant * newLista[idx].price
        }
        setLista(newLista)
    }

    // Eliminar un item del State Lista.
    const remove = (productoId) => {
        let idx = indexProducto(productoId)
        if (idx >= 0) {
            let newLista = getCopyList()
            newLista.splice(idx, 1)
            setLista(newLista)
        }
    }

    // Reiniciar el State Lista.
    const clean = () => {
        setLista([])
    }

    // Obtener una copia del State Lista.
    function getCopyList() {
        return [...lista]
    }

    /* Devuelve el index del producto en el State Lista.
        Con esta posición eliminamos o editamos el registro si existe.
    */
    function indexProducto(productoId) {
        return lista.findIndex(el => el.id === productoId)
    }

    // Se ejecuta para calcular el total y la cantidad de producto, cada vez que State Lista cambia.
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
