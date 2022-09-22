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
            <div>
                <p>{item.desc}</p>
                <p className='item-price'>$ {item.price}</p>
                {
                    comprar > 0 ?
                        <Link to={'/cart'}>
                            <button className='button-agregar'>Finalizar compra</button>
                        </Link>
                        :
                        <ItemCount stocks={item.stock} initials='1' agregarCarrito={agregarCarrito}/>
                }
            </div>
        </div>
    )
}

export default ItemDetail
