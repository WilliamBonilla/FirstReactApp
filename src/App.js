import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';


export default function App() {
  return (
    <div className="App">
    <Container>
    <Row>
    <Col lg={{ span: 6, offset: 3 }}>
    <Form>
    <br></br>
    <Form.Group as={Row} controlId="formHorizontalEmail">
      <Form.Label column sm={2}>
        Email
      </Form.Label>
      <Col sm={10}>
        <Form.Control type="email" placeholder="Email" />
      </Col>
    </Form.Group>
    <br></br>
    <Form.Group as={Row} controlId="formHorizontalPassword">
      <Form.Label column sm={2}>
        Password
      </Form.Label>
      <Col sm={10}>
        <Form.Control type="password" placeholder="Password" />
      </Col>
    </Form.Group>
    <br></br>
    <Form.Group as={Row}>
      <Col sm={{ span: 10, offset: 2 }}>
        <Button type="submit">Sign in</Button>
      </Col>
    </Form.Group>
  </Form>
  </Col>
  </Row>
  </Container>
    </div>
  );
}
