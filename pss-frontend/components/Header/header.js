import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Button  } from 'react-bootstrap';
import { UserContext } from '../Context/UserContext';
import Link from 'next/link';

const Header = () => {

    const { user, isShow } = useContext(UserContext);

    const refreshSesion = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }

    return ( 
        <div className='fijo'>
            <Navbar bg="light" expand="lg" className='navBar'>
               <Container>
                   <div>
                       { user ?
                       <Link href="/controlSS">
                       <img src='./img/logo.svg' />         
                        </Link>
                        : <Link href="/">
                        <img src='./img/logo.svg' />         
                        </Link>}
                   </div>
                   { user && isShow ? 
                    <div className='userAndButton'>
                        <div className='userName'>
                            <p className='textUser'>Bienvenida {user}</p>
                        </div> 
                        <div className='buttonLogout'>
                            <Link href="/">
                                <Button variant="outline-danger" onClick={() => refreshSesion}>Cerrar Sesión</Button>
                            </Link>
                        </div>
                   </div> : null }
               </Container>
            </Navbar>
        </div>
     );
}
 
export default Header;