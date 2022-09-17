import React, {useEffect, useState} from "react"

export const CartContext = React.createContext();

export const CartProvider = ({children}) => {
    const [lista, setLista] = useState([])
    const [cantidad, setCantidad] = useState(0)
    const [total, setTotal] = useState(0)

    const add = (producto, cant) => {
        const newProduct = {
            ...producto,
            cant
        }
        const newLista = [...lista]
        newLista.push(newProduct)
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
        // Todo Calcular total reduce
    }, [lista])

    return (
        <CartContext.Provider value={{lista, cantidad, total, add, remove, clean}}>
            {children}
        </CartContext.Provider>
    )
}
