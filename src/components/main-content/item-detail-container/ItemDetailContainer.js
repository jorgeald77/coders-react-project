import {db} from '../../../utils/firebase'
import {doc, getDoc} from 'firebase/firestore'
import ItemDetail from "./ItemDetail";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

const ItemDetailContainer = () => {
    const {productoId} = useParams()
    const [item, setItem] = useState({})

    async function getItem() {
        const queryRef = doc(db, 'items', productoId)
        const response = await getDoc(queryRef)
        setItem({
                id: response.id,
                ...response.data()
            }
        )
    }

    useEffect(() => {
        getItem()
    }, [])

    return (<div className='my-10'>
        <section className='section-items'>
            <ItemDetail item={item}/>
        </section>
    </div>)
}

export default ItemDetailContainer