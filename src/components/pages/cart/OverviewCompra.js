import {Link} from "react-router-dom";

export default function OverviewCompra({compra}) {
    return (
        <div>
            <div>
                <p><span className='font-semibold text-xl capitalize'>{compra.buyer.name}</span>, gracias por tu
                    compra. Tu pedido está siendo procesado en nuestro almacén, pronto recibirás una notificación por
                    e-mail para el envío.</p>
            </div>

            <div className='p-2 w-3/4'>
                <p className='my-8'>Estos son los productos registrados en tu pedido con identificado: {compra.id}</p>
                <table className='w-full overflow-scroll'>
                    <thead>
                    <tr>
                        <th className='text-center'>producto</th>
                        <th className='text-right w-20'>cant.</th>
                        <th className='text-right w-24'>total</th>
                    </tr>
                    </thead>
                    <tbody>
                    {compra.items.map(item => (<tr key={item.id} className='border-b text-sm'>
                        <td className='flex px-2 my-3 justify-start items-center whitespace-nowrap space-x-4'>
                            <img className='object-contain h-20 rounded-full shadow' src={`${item.pictureUrl}`}
                                 alt="img"/>
                            <p>{item.title}</p>
                        </td>
                        <td className='text-right'>{item.cant}</td>
                        <td className='text-right'>$ {item.subtotal}</td>
                    </tr>))}
                    </tbody>
                </table>
            </div>

            <Link to='/'>
                <button className='btn-info'>inicio</button>
            </Link>
        </div>
    )
}