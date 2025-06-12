import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <>
            <Navbar className="navbar-overlay">
                <Container>
                    <Navbar.Brand data-text="Giampiero Barbaro" className="title" as={Link} to="/">Giampiero Barbaro</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;