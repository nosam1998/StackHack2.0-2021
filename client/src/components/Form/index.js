import React, { useState } from "react";
import { Form, Col, Button, Container } from "react-bootstrap";

function SubmitForm() {
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    orgName: "",
    employeeID: "",
    mobile: "",
    email: "",
    photo: "",
  });

  function handleChange(e) {
    e.preventDefault();
    const { id, value } = e.target;

    console.log(id, value);
    setEmployee({
      ...employee,
      [id]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("hi", employee);
  }

  function handlePreview(e) {
    e.preventDefault();
    console.log("bye");
  }

  console.log(employee);

  return (
    <div>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control placeholder="Jane" onChange={handleChange} />
            </Form.Group>

            <Form.Group as={Col} controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control placeholder="Doe" onChange={handleChange} />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="orgName">
            <Form.Label>Organization Name</Form.Label>
            <Form.Control placeholder="Google" onChange={handleChange} />
          </Form.Group>

          <Form.Group controlId="employeeID">
            <Form.Label>Employee ID no.</Form.Label>
            <Form.Control placeholder="123456" onChange={handleChange} />
          </Form.Group>

          <Form.Group controlId="mobile">
            <Form.Label>Mobile no.</Form.Label>
            <Form.Control placeholder="(123)456-7890" onChange={handleChange} />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="photo">
            <Form.Label>Upload ID Card</Form.Label>
            <Form.Control
              placeholder="Formats: png, jpeg"
              onChange={handleChange}
            />
          </Form.Group>

          <Button variant="secondary" onClick={handlePreview}>
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

export default SubmitForm;
