import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MyNav() {
    return (
        <>
        <Navbar bg="light" data-bs-theme="light">
        <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Link className="navbar-brand" to="/shop">shop</Link>
            <Link className="navbar-brand" to="/">home</Link>
          </Nav>
        </Container>
      </Navbar>

        </>
    );
}

export default MyNav;