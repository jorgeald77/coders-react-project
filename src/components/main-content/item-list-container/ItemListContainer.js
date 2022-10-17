import ItemList from "./ItemList";
import {useParams} from "react-router-dom";

function ItemListContainer() {
    const {coleccion} = useParams()

    return (
        <div className='h-full'>
            <div className='header-title'>
                <h1>{typeof coleccion !== 'undefined' ? coleccion : 'promociones'}<span/></h1>
            </div>

            <section className='p-10'>
                <ItemList collection={coleccion}/>
            </section>
        </div>
    )
}

export default ItemListContainer