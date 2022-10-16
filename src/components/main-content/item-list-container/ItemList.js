import {db} from '../../../utils/firebase'
import {collection as dbCollection, query, where, limit, getDocs} from 'firebase/firestore'
import './ItemList.css'
import {useEffect, useState} from "react";
import Item from "./Item";

const ItemList = ({collection}) => {
    const [items, setItems] = useState([])

    useEffect(() => {
        async function getData() {
            let queryRef;
            if (typeof collection !== 'undefined') {
                queryRef = query(dbCollection(db, 'items'), where('collection', '==', collection))
            } else {
                queryRef = query(dbCollection(db, 'items'), limit(Math.trunc(Math.ceil(Math.random() * 10))))
            }

            const response = await getDocs(queryRef);
            const data = response.docs.map(el => {
                return {
                    id: el.id,
                    ...el.data()
                }
            })
            setItems(data)
        }

        getData()
    }, [collection])

    return (
        <div className='item-list'>
            {items.length > 0 ? items.map((item) => {
                return (
                    <Item
                        key={item.sku}
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        stock={item.stock}
                        pictureUrl={item.pictureUrl}
                    />
                )
            }) : <p>Cargando</p>}
        </div>
    )
}

export default ItemList