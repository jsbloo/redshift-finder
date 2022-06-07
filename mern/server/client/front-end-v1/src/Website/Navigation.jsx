import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';




const Navigation = () => {

    return (
        <>



            <br />
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
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
                        <Nav.Link href="#pricing">About</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>


        </>
    )
}

export default Navigation;