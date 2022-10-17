import './Home.css'
import running from '../../img/running.jpeg'
import senderismo from '../../img/senderismo.jpeg'
import trail from '../../img/trail.jpeg'
import {Link} from "react-router-dom";

export default function Home() {
    return (
        <>
            <div className='home-header-container'>
                <div className='home-header-bg'/>
                <div className='home-header-title'>
                    <p>CONECTA CON LA NATURALEZA</p>
                </div>
            </div>

            <div className='my-8 text-center w-full'>
                <div className='home-categoria-container'>
                    <div className='home-categoria'>
                        <img className='home-categoria-img' src={running} alt="running"/>
                        <p className='mt-2'>Running</p>
                        <Link to='/categoria/running'>
                            <button className='text-xs font-semibold underline mt-1.5'>Ver los productos</button>
                        </Link>
                    </div>
                    <div className='home-categoria'>
                        <img className='home-categoria-img' src={senderismo} alt="senderismo"/>
                        <p className='mt-2'>Senderismo</p>
                        <Link to='/categoria/senderismo'>
                            <button className='text-xs font-semibold underline mt-1.5'>Ver los productos</button>
                        </Link>
                    </div>
                    <div className='home-categoria'>
                        <img className='home-categoria-img' src={trail} alt="trail"/>
                        <p className='mt-2'>Trail</p>
                        <Link to='/categoria/trail'>
                            <button className='text-xs font-semibold underline mt-1.5'>Ver los productos</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}