import React from "react"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export const NavBar = () => {
    return (
        <Navbar expand="lg" variant="dark" bg="dark" className="d-flex justify-content-center">
            <Container className="d-flex justify-content-center">
                <Nav.Link className="text-white" href="/">Search</Nav.Link>
                <Nav.Link className="text-white" href="/movies">My Movies</Nav.Link>
            </Container>
        </Navbar>
    )
}