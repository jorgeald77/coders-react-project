import mock from './mock_items'
import './ItemList.css'
import {useEffect, useState} from "react";
import Item from "./Item";

const ItemList = () => {
    const [items, setItems] = useState([])

    const getData = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(mock)
        }, 2000)
    })

    useEffect(() => {
        getData.then(result => {
            setItems(result)
        })
    }, [])

    return (
        <div className='item-list'>

            {
                items.length > 0
                    ?
                    items.map((item) => {
                        return (
                            <Item key={item.id} title={item.title}/>
                        )
                    })
                    :
                    <p>Cargando</p>
            }
        </div>
    )
}

export default ItemList