import ItemList from "../item-list-container/ItemList";
import ItemDetail from "./ItemDetail";
import {useEffect, useState} from "react";
import mock from "../../../data/mock_items";

const ItemDetailContainer = ({greeting}) => {
    const [item, setItem] = useState({})

    function getItem() {
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(mock)
            }, 2000)
        }).then(result => {
            let numberRandom = Math.floor(Math.random() * (7 - 0)) + 0
            let resultFilter = result[numberRandom]
            setItem(resultFilter)
        })
    }

    useEffect(() => {
        getItem()
    }, [])

    return (<div>
        <div className='category-header'>
            <h2 className='category-header--title'>Item Detail Container</h2>
            <div className='category-header--border'></div>
        </div>

        <section className='section-items'>
            <ItemDetail item={item}/>
        </section>
    </div>)
}

export default ItemDetailContainer