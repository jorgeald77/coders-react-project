import {db} from '../../../utils/firebase'
import {collection as dbCollection, query, where, getDocs} from 'firebase/firestore'
import './ItemList.css'
import {useEffect, useState} from "react";
import Item from "./Item";

const ItemList = ({collection}) => {
    const [items, setItems] = useState([])

    useEffect(() => {
        async function getData() {
            const queryRef = query(dbCollection(db, 'items'), where('collection', '==', collection))
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