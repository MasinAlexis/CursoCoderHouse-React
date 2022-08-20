import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';

export default function NavBar() {
  return (
    <Navbar sticky="top" bg="light" expand="lg">
        <Container fluid>
            <CartWidget/>
            <Navbar.Brand href="#">MMSports</Navbar.Brand>
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="justify-content-end flex-grow-1 my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll>
                <NavDropdown title="Indumentaria" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Remeras</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Musculosas</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Shorts</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Pantalones</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Buzos y Camperas</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
)}
