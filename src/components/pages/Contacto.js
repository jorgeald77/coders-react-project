import {useState} from "react";
import {addDoc, collection} from "firebase/firestore";
import {db} from "../../utils/firebase";

export default function Contacto() {
    const [folio, setFolio] = useState('')
    const handlerSubmit = (event) => {
        event.preventDefault();
        let duda = {
            'nombre': event.target.nombre.value,
            'email': event.target.correo.value,
            'mensaje': event.target.mensaje.value
        }
        addDoc(collection(db, 'dudas'), duda)
            .then(({id}) => setFolio(id))
    }

    return (
        <div>
            <div className='header-title'>
                <h1>Contáctanos<span/></h1>
            </div>

            <div className='mx-auto mt-10 w-1/2'>
                <form id='form-contacto' onSubmit={handlerSubmit}>
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
                                    <textarea id='mensaje' name='mensaje' required></textarea>
                                </div>

                                {
                                    folio === ""
                                        ?
                                        <div className='col-span-6'>
                                            <button type="submit" className='btn-info'>Enviar</button>
                                        </div>
                                        :
                                        <div className='col-span-6 font-semibold'>
                                            Hemos recibido su duda, pronto nos contactaremos a su correo.
                                            <br/> {folio}
                                        </div>
                                }
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}