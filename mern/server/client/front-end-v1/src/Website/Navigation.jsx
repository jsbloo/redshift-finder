import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import About from './About';



const Navigation = () => {

    return (
        <>



            <br />
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">RedShift</Navbar.Brand>
                    <img
                        alt="Company Logo"
                        src= {require("./CompanyLogo.PNG")}
                        width="80"
                        height="80"
                        className="d-inline-block align-top"
                    />
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="./About.jsx">About</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>


        </>
    )
}

export default Navigation;