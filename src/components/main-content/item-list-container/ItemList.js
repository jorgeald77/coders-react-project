import mock from '../../../data/mock_items'
import {db} from '../../../utils/firebase'
import {collection as dbCollection, query, where, docs, getDocs, doc} from 'firebase/firestore'

import './ItemList.css'
import {useEffect, useState} from "react";
import Item from "./Item";

const ItemList = ({collection}) => {
    const [items, setItems] = useState([])

    async function getData() {
        const q = query(dbCollection(db, 'items'), where('collection', '==', collection))
        const response = (await getDocs(q)).docs.map(el => {
            return {
                id: el.id,
                ...el.data()
            }
        })
        setItems(response)
    }

    useEffect(() => {
        getData()
    }, [])

    return (<div className='item-list'>
        {items.length > 0 ? items.map((item) => {
            return (<Item
                key={item.id}
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