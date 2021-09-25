import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export const NavBar = (props) => {
    return (
        <Navbar expand="lg" variant="dark" bg="dark">
        <Container>
            <Navbar.Brand href="/">Movie Log</Navbar.Brand>
            <Nav.Link className="nav_link" href="/movies">My Movies</Nav.Link>
        </Container>
        </Navbar>
    )
}