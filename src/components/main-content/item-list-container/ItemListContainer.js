import './ItemListContainer.css'
import ItemList from "./ItemList";
import {useParams} from "react-router-dom";

function ItemListContainer() {
    const {coleccion} = useParams()

    return (
        <div className='h-full'>
            <div className='category-header'>
                <h2 className='category-header--title'>{coleccion}</h2>
                <div className='category-header--border'></div>
            </div>

            <section className='section-items'>
                <ItemList collection={coleccion}/>
            </section>
        </div>
    )
}

export default ItemListContainer