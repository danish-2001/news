// src/AboutPage.js
import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";

const About = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title className="text-center">About Us</Card.Title>
              <Row className="align-items-center">
                <Col md={6}>
                  <Image
                    src="https://via.placeholder.com/500x300"
                    alt="Company Image"
                    fluid
                    rounded
                  />
                </Col>
                <Col md={6}>
                  <Card.Text>
                    <h4>Our Mission</h4>
                    <p>
                      At [Your Company Name], we are committed to delivering
                      high-quality products and services that meet the needs of
                      our clients. Our mission is to innovate and excel in our
                      industry.
                    </p>

                    <h4>Our Team</h4>
                    <p>
                      Our team is composed of dedicated professionals with years
                      of experience in their respective fields. We believe in
                      collaboration and continuous improvement.
                    </p>

                    <h4>Our Values</h4>
                    <p>
                      Integrity, customer focus, and excellence are the core
                      values that drive us. We strive to build lasting
                      relationships with our clients based on trust and respect.
                    </p>

                    <h4>Contact Us</h4>
                    <p>
                      For more information about our services or to get in touch
                      with us, please visit our{" "}
                      <a href="/contact">Contact Page</a>.
                    </p>
                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
