import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Menu from './components/Menu';
import Router from './routers/router';
import { Col, Container, Row } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Menu />
        </Col>
      </Row>
      <Row>
        <Col>
          <Router />
        </Col>
      </Row>
    </Container>
  //  <>
  //  <Menu />
  //  <Router />
  //  </>
  );
}

export default App;
