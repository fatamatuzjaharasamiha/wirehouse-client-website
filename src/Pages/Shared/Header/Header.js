import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';


const Header = () => {
   
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Walton</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="#pricing">Manage Inventory</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link href="/blogs">Blogs</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Sign In
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;