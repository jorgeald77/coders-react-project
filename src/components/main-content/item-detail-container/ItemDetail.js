import './ItemDetail.css'
import ItemCount from "../count/ItemCount"
import {useContext, useEffect, useState} from "react";
import {CartContext} from "../../../context/CartContext";

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
                <ItemCount stocks={item.stock} initials='1' agregarCarrito={agregarCarrito}/>
                {comprar > 0 && <p>Felicidades vas a adquirir: {comprar}</p>}
            </div>
        </div>
    )
}

export default ItemDetail
