import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Container>
      <Row>
        <Col md={6}>
          <Link to="/login">
            <h2>Login</h2>
          </Link>
          <br></br>
          <Link to="/register">
            <h2>Register</h2>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
