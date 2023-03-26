import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
const RegisterPage = () => {
  const [validated, setValidated] = useState(false);

  const onChange = () => {
    const password = document.querySelector("input[name=password]")
    const confirm = document.querySelector("input[name=confirmPassword]")

    if (confirm.value === password.value) {
      confirm.setCustomValidity("")
    } else {
      confirm.setCustomValidity("Passwords do not match")
    }
  }

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <Container>
      <Row className="mt-5 justify-content-md-center">
        <Col md={6}>
          <h1>Register</h1>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="validationCustom01">
              <Form.Label>Your first name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter your first name"
                name="name"
              />
              <Form.Control.Feedback type="invalid">Please enter your first name</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formmBasicLastName">
              <Form.Label>Your Last Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter your last name"
                name="lastName"
              />
              <Form.Control.Feedback type="invalid">Please enter your last name</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                name="email"
                required
                type="email"
                placeholder="Enter your email"
              />
              <Form.Control.Feedback type="invalid">Please enter a valid email address</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="validationFormik05">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                name="phone"
                required
                type="text"
                placeholder="Enter your number"
              />
              <Form.Control.Feedback type="invalid">Please enter your phone number</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Username</Form.Label>
              <Form.Control
                name="name"
                required
                type="text"
                placeholder="Enter a username"
              />
              <Form.Control.Feedback type="invalid">Please enter a username</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                required
                type="password"
                placeholder="Password"
                minLength={6}
                onChange={onChange}
              />
              <Form.Control.Feedback type="invalid">Please enter a valid password</Form.Control.Feedback>
              <Form.Text className="text-muted">Password should have atleast 6 characters</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPasswordRepeat">
              <Form.Label>Repeat Password</Form.Label>
              <Form.Control
                name="confirmPassword"
                required
                type="password"
                placeholder="Repeat Password"
                minLength={6}
                onChange={onChange}
              />
              <Form.Control.Feedback type="invalid">Both passwords should match</Form.Control.Feedback>
            </Form.Group>

            <Row className="pb-2">
              <Col>
                Do you have an account??
                <Link to="/login"> Login </Link>
              </Col>
            </Row>


            <Button type="submit">
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              Submit
            </Button>

            <Alert show={true} variant="danger">
              User with that email already exists
            </Alert>

            <Alert show={true} variant="info">
              User created
            </Alert>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterPage;
