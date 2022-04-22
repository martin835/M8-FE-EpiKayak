import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

function Register() {
  const [regData, setRegData] = useState({
    name: "enter name",
    email: "",
    password: "",
    role: "",
  });

  const registerUser = async (e) => {
    e.preventDefault();
    console.log("Register me!");
  };

  return (
    <Container>
      <Row>
        <Col md={6}>
          <h1>Register</h1>
          <Form onSubmit={(e) => registerUser(e)}>
            <Form.Group controlId="firstName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your name"
                value={regData.name}
                onChange={(e) =>
                  setRegData({ ...regData, name: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="user-role">
              <Form.Label>Select your role</Form.Label>
              <Form.Control
                as="select"
                value={regData.role}
                onChange={(e) =>
                  setRegData({ ...regData, role: e.target.value })
                }
              >
                <option>guest</option>
                <option>host</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={regData.email}
                onChange={(e) =>
                  setRegData({ ...regData, email: e.target.value })
                }
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={regData.password}
                onChange={(e) =>
                  setRegData({ ...regData, password: e.target.value })
                }
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
