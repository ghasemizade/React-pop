import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link style={{
                marginLeft: "10px",
                textDecoration: "none",
                color: "#ccc"
            }} to={'/'}>Home</Link>
            <Link style={{
                marginLeft: "10px",
                textDecoration: "none",
                color: "#ccc"
            }} to={'/product'}>Product</Link>
            <Link style={{
                marginLeft: "10px",
                textDecoration: "none",
                color: "#ccc"
            }} to={'/contact'}>Contact</Link>
            <Link style={{
                marginLeft: "10px",
                textDecoration: "none",
                color: "#ccc"
            }} to={'/about'}>About</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;