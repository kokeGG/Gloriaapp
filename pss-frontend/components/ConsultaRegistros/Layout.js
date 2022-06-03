import React, { useEffect, useState } from 'react';
import Registrados from './Registrados/registados';
import Aceptados from './Aceptados/aceptados';
import Enproceso from './EnProceso/enproceso';
import Finalizados from './Finalizados/finalizados';


const LayoutConsultaRegistros = () => {

    const [view, setView] = useState(0)
    const [print, setPrint] = useState(<Registrados />)

    useEffect(() => {
        if (view === 0) {
            setPrint(<Registrados />)
        } else if (view === 1) {
            setPrint(<Aceptados />)
        } else if (view === 2) {
            setPrint(<Enproceso />)
        } else if (view === 3) {
            setPrint(<Finalizados />)
        }
    }, [view])


    return (
        <>
            <div className='containerStyles'>
                <div className='titleSesionPre'>
                    <h1>Consulta de Registros</h1>
                </div>
                <div className='orderList'>
                    <ul className='list'>
                        <li>
                            <button onClick={() => setView(0)} className='btn colorbtn'>Pre-Registrados</button>
                        </li>
                        <li>
                            <button onClick={() => setView(1)} className='btn colorbtn'>Aceptados</button>
                        </li>
                        <li>
                            <button onClick={() => setView(2)} className='btn colorbtn'>En Proceso</button>
                        </li>
                        <li>
                            <button onClick={() => setView(3)} className='btn colorbtn'>Finalizados</button>
                        </li>
                    </ul>
                </div>
                <div className='layoutProcess'>
                    {print}
                </div>
            </div>
        </>
    );
}

export default LayoutConsultaRegistros;