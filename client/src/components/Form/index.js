import React, { useState } from "react";
import { Form, Col, Button, Container } from "react-bootstrap";
import PreviewModal from "../PreviewModal";
import API from "../../utils/API";

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

  function handlePhoto(e) {
    e.preventDefault();

    const { id } = e.target;
    let src = URL.createObjectURL(e.target.files[0]);
    console.log(id, src);
    setEmployee({
      ...employee,
      [id]: src,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    API.saveEmployee(employee)
      .then((res) => {
        alert("Your info is set to the backend");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                placeholder="Jane"
                onChange={handleChange}
                // required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                placeholder="Doe"
                onChange={handleChange}
                // required
              />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="orgName">
            <Form.Label>Organization Name</Form.Label>
            <Form.Control
              placeholder="Google"
              onChange={handleChange}
              // required
            />
          </Form.Group>

          <Form.Group controlId="employeeID">
            <Form.Label>Employee ID no.</Form.Label>
            <Form.Control
              placeholder="123456"
              onChange={handleChange}
              // required
              // type="number"
              // min="0"
            />
          </Form.Group>

          <Form.Group controlId="mobile">
            <Form.Label>Mobile no.</Form.Label>
            <Form.Control
              placeholder="123-456-7890"
              onChange={handleChange}
              // required
              // type="tel"
              // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={handleChange}
              // required
            />
          </Form.Group>

          <Form.Group controlId="photo">
            <Form.Label>Upload ID Card</Form.Label>
            <Form.Control
              placeholder="Formats: png, jpeg"
              onChange={handlePhoto}
              type="file"
              accept="image/png, image/jpeg"
              // required
            />
          </Form.Group>

          <Button variant="secondary">
            <PreviewModal info={employee} />
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
