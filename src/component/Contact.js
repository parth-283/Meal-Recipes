import React from "react";
import "../style/contact.css";
import Card from "react-bootstrap/Card";
import contactimg from "../images/Contact.jpg";
import contactbg from "../images/contactbg.webp";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import HeaderImg from "../utils/HeaderImg";

function Contact() {
  const handleConatctForm = (e) => {
    e.preventDefault();
  };
  return (
    <>
      {/* Header IMG */}

      <HeaderImg value={"Contact Us"} img={contactimg} />
      <Container className="my-3">
        <Card className="bg-dark text-white contect-card">
          <Card.Img
            className="contact-card-img"
            src={contactbg}
            alt="Card image"
          />
          <Card.ImgOverlay className="contact-img-overlay">
            <Card.Title className="contact-title">
              <h5>Contact Form</h5>
            </Card.Title>
            <hr />
            <Form onSubmit={(e) => handleConatctForm(e)}>
              <Row className="mb-4 form-row">
                <Form.Group className="Input" as={Col} controlId="formGridName">
                  <Form.Label>Name*</Form.Label>
                  <Form.Control type="text" autoComplete="off" placeholder="Enter Name" />
                </Form.Group>

                <Form.Group
                  className="Input"
                  as={Col}
                  controlId="formGridSurname"
                >
                  <Form.Label>Surname*</Form.Label>
                  <Form.Control type="text" autoComplete="off" placeholder="Enter Surname" />
                </Form.Group>
              </Row>

              <Form.Group className="mb-4 Input" controlId="formGridEmail">
                <Form.Label>Email*</Form.Label>
                <Form.Control type="email" autoComplete="off" placeholder="Enter Email" />
              </Form.Group>

              <Form.Group className="mb-4 Input" controlId="formGridPhone">
                <Form.Label>Phone*</Form.Label>
                <Form.Control type="number" autoComplete="off" placeholder="Enter Phone" />
              </Form.Group>

              <Form.Group
                className="mb-4 Input"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Message*</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  autoComplete="off" placeholder="Enter Message"
                />
              </Form.Group>

              <Button className="contact-btn" variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Card.ImgOverlay>
        </Card>
      </Container>
    </>
  );
}

export default Contact;
