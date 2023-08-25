import './App.css';
import { Container, Row, Image, Col } from 'react-bootstrap'
import Menu from './components/Menus';
import Cards from './components/Cards';


function App() {
  return (
    <Container fluid >
      <Row>
        <Menu/>
      </Row>
      <Row>
        <Image src='./banner.jpg' thumbnail rounded style={{
          border: "none",
          margin: "0",
          padding: "0"
          }}></Image>
      </Row>
      <Row>
        <Col style={{
          marginTop: "30px",
          margin: "30px 180px"
        }}>
          <Cards/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
