import React from "react";
import { Form, Col, Button, Container } from "react-bootstrap";

function FormRes() {
  return (
    <div>
      <Container>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control placeholder="Jane" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control placeholder="Doe" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridOrgName">
            <Form.Label>Organization Name</Form.Label>
            <Form.Control placeholder="Google" />
          </Form.Group>

          <Form.Group controlId="formGridEmployeeID">
            <Form.Label>Employee ID no.</Form.Label>
            <Form.Control placeholder="123456" />
          </Form.Group>

          <Form.Group controlId="formGridMobile">
            <Form.Label>Mobile no.</Form.Label>
            <Form.Control placeholder="(123)456-7890" />
          </Form.Group>

          <Form.Group controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formGroupPhoto">
            <Form.Label>Upload ID Card</Form.Label>
            <Form.Control placeholder="Formats: png, jpeg" />
          </Form.Group>

          <Button variant="secondary" type="submit">
            Preview
          </Button>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default FormRes;
