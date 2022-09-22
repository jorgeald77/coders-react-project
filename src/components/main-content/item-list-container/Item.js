import './Item.css'
import {Link} from "react-router-dom";

const Item = (props) => {
    return (
        <div className='w-60 shadow rounded'>
            <img src={`${props.pictureUrl}300?random=${props.id}`} alt='img' className='img-card'/>
            <div className='flex flex-col text-xs py-4 px-2'>
                <p className='text-base font-semibold'>{props.title}</p>
                <p>{props.description}</p>
                <div className='mt-4 flex justify-between items-center'>
                    <p>$ {props.price}</p>
                    {parseInt(props.stock) === 0 && <p className='text-red-500'>NO DISPONIBLE</p>}
                </div>
                <Link to={`/producto/${props.id}`}>
                    <button className='btn-verdetalle mt-4'>Ver detalle</button>
                </Link>
            </div>
        </div>
    )
}

export default Item