import './Item.css'
import {Link} from "react-router-dom";

const Item = (props) => {
    return (
        <div className='card-item'>
            <div className='wrap-img'>
                <Link to={`/producto/${props.id}`}>
                    <img src={`${props.pictureUrl}`} alt='image' className='img-card' loading='lazy'/>
                </Link>
            </div>

            <div className='card-item--info'>
                <div className='subtitle'>
                    <h1>{props.title}<span/></h1>
                </div>

                <p>{props.description}</p>

                <div className='mt-4 flex items-center'>
                    <p>$ {props.price}</p>
                    {parseInt(props.stock) === 0 && <p className='text-red-500'>NO DISPONIBLE</p>}
                </div>

                <Link to={`/producto/${props.id}`}>
                    <button className='btn-info mt-4'>Ver detalle</button>
                </Link>
            </div>
        </div>
    )
}

export default Item