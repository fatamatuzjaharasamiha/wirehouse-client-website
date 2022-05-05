import { signOut } from 'firebase/auth';
import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';


const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth)
    }


    return (
        <div className='text-center'>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand className='fw-bold' as={Link} to="/">WALTON</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to='home'>Home</Nav.Link>


                            {/* <Nav.Link as={Link} to='manageInventory'>Manage Inventory</Nav.Link> */}

                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to='blogs'>Blogs</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>

                            {
                                    user &&
                                <>
                                    <Nav.Link as={Link} to='manageInventory'>Manage Inventory</Nav.Link>
                                    <Nav.Link as={Link} to="addItem">Add Item</Nav.Link>
                                    <Nav.Link as={Link} to="MyItem">My items</Nav.Link>
                                </>
                            }
                            
                            {user ?
                                <button onClick={handleSignOut} className='fw-bold btn btn-dark text-white'>Sign Out</button>
                                :
                                <Nav.Link as={Link} to='signIn'>
                                    Sign In
                                </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;