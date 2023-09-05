import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import { isUserLogin } from './../utils'

function ColorSchemesExample() {

  // let isUserLogin = isLogin('ali')

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
            {isUserLogin ? 
            <Link style={{
                marginLeft: "10px",
                textDecoration: "none",
                color: "green"
            }} to={'/dashboard'}>dashboard</Link> 
            : 
            <Link style={{
                marginLeft: "10px",
                textDecoration: "none",
                color: "tomato"
            }} to={'/login'}>Login</Link>}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;