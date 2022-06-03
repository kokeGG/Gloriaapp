import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Link from 'next/link';

const IsNotGloria = () => {
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
            </div>
        </>
     );
}
 
export default IsNotGloria;