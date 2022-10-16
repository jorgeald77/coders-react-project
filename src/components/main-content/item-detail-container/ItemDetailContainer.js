import {db} from '../../../utils/firebase'
import {doc, getDoc} from 'firebase/firestore'
import ItemDetail from "./ItemDetail";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

const ItemDetailContainer = () => {
    const {productoId} = useParams()
    const [item, setItem] = useState({})

    useEffect(() => {
        async function getItem() {
            const queryRef = doc(db, 'items', productoId)
            const response = await getDoc(queryRef)
            setItem({
                    id: response.id,
                    ...response.data()
                }
            )
        }

        getItem()
    }, [productoId])

    return (<div className='my-10'>
        <section className='section-items'>
            {
                item.hasOwnProperty('id')
                    ?
                    <ItemDetail item={item}/>
                    :
                    "Cargando..."
            }
        </section>
    </div>)
}

export default ItemDetailContainer