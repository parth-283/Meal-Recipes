import React from "react";
import "../style/contact.css";
import Card from "react-bootstrap/Card";
import aboutus1 from "../images/aboutus1.jpg";
import contact from "../images/contact.webp";
import contactbg from "../images/contactbg.webp";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

function Contact() {
  return (
    <>
      {/* Header IMG */}
      <Card className="bg-dark text-white main-header mx-1">
        <Card.Img src={aboutus1} alt="Card image" />
        <Card.ImgOverlay className="text-content">
          <Card.Title>
            <h2 className="main-img-header">Contact Us</h2>
          </Card.Title>
        </Card.ImgOverlay>
      </Card>

      <Container className="my-3">
        <Card className="bg-dark text-white contect-card">
          <Card.Img src={contactbg} alt="Card image" />
          <Card.ImgOverlay className="contact-img-overlay">
          <Card.Title className="contact-title"><h5>Contact Form</h5></Card.Title>
        <hr/>
            <Form>
              <Row className="mb-5 ">
                <Form.Group as={Col} controlId="formGridName">
                  <Form.Label>Name*</Form.Label>
                  <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridSurname">
                  <Form.Label>Surname*</Form.Label>
                  <Form.Control type="text" placeholder="Enter Surname" />
                </Form.Group>
              </Row>

              <Form.Group className="mb-5" controlId="formGridEmail">
                <Form.Label>Email*</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" />
              </Form.Group>

              <Form.Group className="mb-5" controlId="formGridPhone">
                <Form.Label>Phone*</Form.Label>
                <Form.Control type="number" placeholder="Enter Phone" />
              </Form.Group>

              <Form.Group
                className="mb-5"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Message*</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter Message"
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
