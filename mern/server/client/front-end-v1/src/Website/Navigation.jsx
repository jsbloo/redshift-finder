import { Navbar, Container, Nav } from "react-bootstrap";

const Navigation = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">RedShift</Navbar.Brand>
                    <img
                        alt="Company Logo"
                        src={require("./CompanyLogo.PNG")}
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                    />
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/Friends">Friends</Nav.Link>
                        <Nav.Link href="/About"> About</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;
