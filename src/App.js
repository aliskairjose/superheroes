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
        <Router></Router>
    </Row>
    </Container>
  );
}

export default App;
