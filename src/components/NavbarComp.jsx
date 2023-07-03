import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const NavbarComp = () => {
    return (

        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className={"nav-link"} to="/">Books</NavLink>
                    </Nav>
                    <Nav>
                        <NavLink className={"nav-link"} to="/favorites">Favorites</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>


    )
}

export default NavbarComp