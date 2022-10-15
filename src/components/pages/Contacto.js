export default function Contacto() {
    // TODO crear tabla para guardar mensajes
    // Procesar el envio a la DB y mostrar valiación de recibo

    return (
        <div>
            <div className='category-header'>
                <h2 className='category-header--title'>Contáctanos</h2>
                <div className='category-header--border'></div>
            </div>

            <div className='mx-auto mt-10 w-1/2'>
                <form id='form-contacto'>
                    <div className='overflow-hidden shadow rounded'>
                        <div className='px-4 py-5 border-2 border-stone-700 rounded'>
                            <div className='grid grid-cols-6 gap-6'>
                                <div className='col-span-6'>
                                    <label htmlFor="nombre">Nombre</label>
                                    <input type="text" id='nombre' name='nombre' required/>
                                </div>
                                <div className='col-span-6'>
                                    <label htmlFor="correo">E-mail</label>
                                    <input type="email" id='correo' name='correo' required/>
                                </div>
                                <div className='col-span-6'>
                                    <label htmlFor="mensaje">Mensaje</label>
                                    <textarea id='mensaje' name='mensaje' reqired></textarea>
                                </div>
                                <div className='col-span-6'>
                                    <input type="submit" className='btn-info' value='Enviar'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}