import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const NavbarPanel = () => {
    const cartProducts = useSelector(state => state.cart)
    return (
        <>
            <div>
                <Navbar bg="light" expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="#">Redux Toolkit</Navbar.Brand>
                        
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link to="/" as={Link}>Products</Nav.Link>
                                
                            </Nav>
                        <Navbar.Toggle />
                        <Navbar.Collapse className='justify-content-end'>
                            <Nav.Link to="/cart" as={Link}> <Navbar.Text>Cart {cartProducts.length}</Navbar.Text></Nav.Link>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    )
}

export default NavbarPanel