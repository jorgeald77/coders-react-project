import './ItemDetail.css'
import ItemCount from "../count/ItemCount"
import {useState} from "react";
import {Link} from "react-router-dom";

function ItemDetail({item}) {
    const [comprarCantidad, setComprarCantidad] = useState(0)

    const agregarCarrito = (data) => {
        setComprarCantidad(parseInt(data))
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
                    comprarCantidad == 0 ? (
                        <ItemCount stocks={item.stock} initials='1' agregarCarrito={agregarCarrito}/>
                    ) : (
                        <Link to={'/cart'}>
                            <button>Finalizar compra</button>
                        </Link>
                    )
                }
            </div>
        </div>
    )
}

export default ItemDetail
