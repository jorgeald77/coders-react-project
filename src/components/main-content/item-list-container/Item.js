import {Link} from "react-router-dom";

const Item = (props) => {
    return (
        <div className='w-60 shadow rounded'>
            <img src={`${props.pictureUrl}300?random=${props.id}`} className='bg-gray-300 rounded border'/>
            <div className='flex flex-col text-xs py-4 px-2'>
                <p className='text-base font-semibold'>{props.title}</p>
                <p>{props.description}</p>
                <p className='mt-4'>$ {props.price}</p>
                <Link to={`/producto/${props.id}`}>
                    <button className='w-full border py-1 mt-4 lowercase font-semibold'>Ver detalle</button>
                </Link>
            </div>
        </div>
    )
}

export default Item