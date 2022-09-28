import './ItemDetail.css'
import ItemCount from "../count/ItemCount"
import {useContext, useState} from "react";
import {CartContext} from "../../../context/CartContext";
import {Link} from "react-router-dom";

function ItemDetail({item}) {
    const value = useContext(CartContext)
    const [comprar, setComprar] = useState(0)

    const agregarCarrito = (data) => {
        setComprar(parseInt(data))
        value.add(item, data)
    }

    return (
        <div className='item-detail-container'>
            <div className='item-detail-container-image'>
                <img src={`${item.pictureUrl}800?random=${item.id}`} alt=""
                     className='item-detail-img'/>
            </div>

            <div className='category-header'>
                <h2 className='category-header--title'>{item.title}</h2>
                <div className='category-header--border'></div>

                <p className='text-sm mt-6'>{item.description}</p>
                <p className='item-price mt-4'>$ {item.price}</p>
                {comprar > 0 ? <Link to={'/cart'}>
                    <button className='button-agregar'>Ver carrito</button>
                </Link> : <ItemCount stocks={item.stock} initials='1' agregarCarrito={agregarCarrito}/>}

                <div>
                    <details className="border-t-2 duration-300">
                        <summary className="bg-inherit px-5 py-3 text-lg cursor-pointer">
                            Politica de garantía limitada.
                        </summary>
                        <div className="px-5 py-3 border border-gray-300 text-xs font-light">
                            <p><strong>Periodo de Garantía.</strong></p>
                            <p>El Periodo de Garantía para todos los productos es de 6 meses contados a partir del día
                                en que el cliente final compro el producto.El Periodo de Garantía no se prorrogará, ni
                                se renovará, ni quedará afectado como consecuencia de una reventa, reparación o
                                sustitución posterior del Producto.</p><br/>
                            <p>Sin embargo, la(s) parte(s) reparada(s) o el(los) producto(s) sustituidos durante el
                                periodo de garantía, quedarán garantizados únicamente por el periodo de garantía
                                original que reste; siempre y cuando dicha sustitución o reparación haya sido realizada
                                por el fabricante.</p>
                        </div>
                    </details>
                    <details className="border-t-2 duration-300">
                        <summary className="bg-inherit px-5 py-3 text-lg cursor-pointer">Devoluciones.</summary>
                        <div className="px-5 py-3 border border-gray-300 text-xs font-light">
                            <p><strong>En productos con descuento no hay devoluciones y cambios sujetos a
                                disponibilidad. Cambios aplican en producto de igual o mayor precio; de ser menor precio
                                no se podría reembolsar la diferencia.</strong></p><br/>
                            <p>¡Si compras un producto en en línea, el primer cambio es gratuito!</p>
                            <ul>
                                <li>
                                    <p>El cliente tendrá 15 días naturales a partir de la recepción del producto para
                                        realizar la devolución y que el producto llegue a las instalaciones del
                                        fabricante.</p>
                                </li>
                                <li>
                                    <p>El primer cambio por compra realizada es gratuito. Para realizar más de 1 cambio,
                                        el cliente cubrirá los gastos relacionados a partir de este.</p>
                                </li>

                                <li>
                                    <p>El cambio está sujeto a disponibilidad de tallas, en caso de no contar con la
                                        talla solicitada se podrá solicitar otro modelo de igual o mayor precio al monto
                                        original de tu compra (si es de mayor precio les enviaremos un link de pago para
                                        complementar su compra.)</p>
                                </li>
                            </ul>
                        </div>
                    </details>
                    <details className="border-t-2 duration-300">
                        <summary className="bg-inherit px-5 py-3 text-lg cursor-pointer">Pagos y envíos.</summary>
                        <div className="px-5 py-3 border border-gray-300 text-xs font-light">
                            <p>Puedes pagar con tarjeta de crédito o débito. En el momento que confirmes tu pedido, se
                                cobrara el monto reflejado en el recibo de compra, mostrado en la página web.</p>
                        </div>
                    </details>
                </div>
                <p className='text-xs'>sku: {item.sku}</p>
            </div>
        </div>)
}

export default ItemDetail
