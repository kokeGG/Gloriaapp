import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Link from 'next/link';

const IsGloria = () => {
    return ( 
        <>
        <div className='layoutss'>
                <Card style={{ width: '25rem' }}>
                    <Card.Img src="img/periferico.png" />
                    <Card.Body>
                        <Card.Text className='cardText'>
                        PRE-REGISTRO
                        </Card.Text>
                        <div className='centerButton'>
                            <Link href="/preregistro">
                                <Button className='buttonIngresar'>INGRESAR</Button>
                            </Link>
                        </div>
                    </Card.Body>
                </Card>
                <Card style={{ width: '25rem' }}>
                    <Card.Img src="img/canal2.jpg" />
                    <Card.Body>
                        <Card.Text className='cardText'>
                        CONSULTA DE REGISTROS
                        </Card.Text>
                        <div className='centerButton'>
                            <Link href="/consulta-registros">
                                <Button className='buttonIngresar'>CONSULTA DE REGISTROS</Button>
                            </Link>
                        </div>
                    </Card.Body>
                </Card>
                <Card style={{ width: '25rem' }}>
                    <Card.Img src="img/cantera.jpg" />
                    <Card.Body>
                        <Card.Text className='cardText'>
                        REPORTES
                        </Card.Text>
                        <div className='centerButton'>
                            <Button className='buttonIngresar'>INGRESAR</Button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </>
     );
}
 
export default IsGloria;