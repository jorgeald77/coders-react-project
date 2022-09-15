import './ItemDetail.css'
import ItemCount from "../count/ItemCount"

function ItemDetail({item}) {
    return (
        <div className='item-detail-container'>
            <div className='item-detail-container-image'>
                <img src={`${item.pictureUrl}800?random=${item.id}`} alt=""
                     className='item-detail-img'/>
            </div>
            <div>
                <p>{item.desc}</p>
                <p className='item-price'>$ {item.price}</p>
                <ItemCount stocks={item.stock} initials='1'/>
            </div>

        </div>
    )
}

export default ItemDetail
