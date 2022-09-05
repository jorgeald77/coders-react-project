import mock from './mock_items'
import './ItemList.css'
import {useEffect, useState} from "react";
import Item from "./Item";

const ItemList = () => {
    const [items, setItems] = useState([])

    function getData() {
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(mock)
            }, 2000)
        }).then(result => {
            setItems(result)
        })
    }

    useEffect(() => {
        getData()
    }, [])

    return (<div className='item-list'>

        {items.length > 0 ? items.map((item) => {
            return (<Item
                key={item.id}
                title={item.title}
                description={item.description}
                price={item.price}
                pictureUrl={item.pictureUrl}
            />)
        }) : <p>Cargando</p>}
    </div>)
}

export default ItemList