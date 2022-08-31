import './ItemListContainer.css'
import ItemCount from "./ItemCount";

function ItemListContainer({greeting}) {
    return (
        <div className='h-full'>
            <div className='category-header'>
                <h2 className='category-header--title'>Título de la {greeting} elegida</h2>
                <div className='category-header--border'></div>
            </div>

            <section className='section-items'>
                <ItemCount stock='10' initial='1'/>
            </section>
        </div>
    )
}

export default ItemListContainer