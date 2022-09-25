import mock from '../../../data/mock_items'
import './ItemList.css'
import {useEffect, useState} from "react";
import Item from "./Item";

const ItemList = ({collection}) => {
    const [items, setItems] = useState([])

    function getData() {
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(mock)
            }, 2000)
        }).then(result => {
            setItems(result.filter( item =>  item.collection === collection))
        })
    }

    useEffect(() => {
        getData()
    }, [])

    return (<div className='item-list'>
        {items.length > 0 ? items.map((item) => {
            return (<Item
                key={item.sku}
                id={item.id}
                title={item.title}
                price={item.price}
                stock={item.stock}
                pictureUrl={item.pictureUrl}
            />)
        }) : <p>Cargando</p>}
    </div>)
}

export default ItemList