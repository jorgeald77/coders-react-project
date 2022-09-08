import ItemCount from "../item-list-container/ItemCount";

function ItemDetail({item}) {
    return (
        <div className='grid grid-cols-3 gap-x-4 grid-flow-row-dense'>
            <div className='col-span-2 row-span-2'>
                <img src={`${item.pictureUrl}800?random=${item.id}`} alt="" className='h-fit'/>
            </div>
            <div>
                <h3 className='font-semibold text-2xl uppercase'>{item.title}</h3>
                <p className='p-4'>{item.desc}</p>

            </div>
            <div className='w-full'>
                <ItemCount stocks={10} initials={1}/>
            </div>
        </div>
    )
}

export default ItemDetail
