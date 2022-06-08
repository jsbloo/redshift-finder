import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import About from './About';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";


const Navigation = () => {

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">RedShift</Navbar.Brand>
                    <img
                        alt="Company Logo"
                        src= {require("./CompanyLogo.PNG")}
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                    />
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/Features">Features</Nav.Link>
                        <Nav.Link href="/About"> About</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            {/* <BrowserRouter>
            <Routes>      
                <Route path="/About" element={<About />} />
            </Routes>
            </BrowserRouter> */}
        </>
    )
}

export default Navigation;