import React from "react"

export const CartContext = React.createContext()

export const CartProvider = ({children}) => {
    let productosEnCarrito = []

    function add(producto, cant) {
        //
    }

    function remove(producto) {
        //
    }

    function clean() {
        //
    }

    function findItem(producto) {
        //
    }

    return (
        <CartContext.Provider value={{productosEnCarrito}}>
            {children}
        </CartContext.Provider>
    )
}

/*

Propiedades de Carrito
    productos   | Array de Objetos
    total       | Total de la compra

Métodos del carrito
    count   | contarProductos()
    -----
    list    | listarProducto()
    show    | mostrarProductos() -> ir Al producto
    add     | agregarProducto()
    delete  | eliminarProducto()
    -----
 */