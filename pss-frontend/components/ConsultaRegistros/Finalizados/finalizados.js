import React from 'react';
import { Table } from 'react-bootstrap';

const Finalizados = () => {

    
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const format = `${day}/${month}/${year}`


    return ( 
        <>
             <Table striped bordered hover className='tableTop'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Fecha</th>
                        <th>Tipo de Servicio</th>
                        <th>Institución Educativa</th>
                        <th>PDF</th>
                        <th>Documentos</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Lupita</td>
                        <td>{format}</td>
                        <td>Servicio Social</td>
                        <td>UPIICSA</td>
                        <td>None</td>
                        <td>None</td>
                    </tr>
                </tbody>
            </Table>
        </>
     );
}
 
export default Finalizados;