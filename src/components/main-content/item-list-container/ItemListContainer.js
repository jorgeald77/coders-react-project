import './ItemListContainer.css'
import ItemList from "./ItemList";

function ItemListContainer({greeting}) {
    return (
        <div className='h-full'>
            <div className='category-header'>
                <h2 className='category-header--title'>Título de la {greeting} elegida</h2>
                <div className='category-header--border'></div>
            </div>

            <section className='section-items'>
                <ItemList/>
            </section>
        </div>
    )
}

export default ItemListContainer