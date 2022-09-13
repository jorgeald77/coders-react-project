import ItemList from "../item-list-container/ItemList";
import ItemDetail from "./ItemDetail";
import {useEffect, useState} from "react";
import mock from "../../../data/mock_items";
import {useParams} from "react-router-dom";

const ItemDetailContainer = () => {
    const {productoId} = useParams()
    const [item, setItem] = useState({})

    function getItem(id) {
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(mock)
            }, 2000)
        }).then(result => {
            setItem(result.find(item => item.id === parseInt(id)))
        })
    }

    useEffect(() => {
        getItem(productoId)
    }, [])

    return (<div>
        <div className='category-header'>
            <h2 className='category-header--title'>{item.title}</h2>
            <div className='category-header--border'></div>
        </div>

        <section className='section-items'>
            <ItemDetail item={item}/>
        </section>
    </div>)
}

export default ItemDetailContainer