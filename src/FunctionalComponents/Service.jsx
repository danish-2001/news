// src/Services.js
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const servicesData = [
  {
    title: "Advertising Opportunities",
    description:
      "Reach a broad audience with targeted advertising options on our platform. We offer various ad placements including banner ads, sponsored content, and more.",
    imgSrc: "https://via.placeholder.com/500x300",
  },
  {
    title: "Subscription Plans",
    description:
      "Access premium content and exclusive features with our subscription plans. Choose from monthly, quarterly, or annual subscriptions to suit your needs.",
    imgSrc: "https://via.placeholder.com/500x300",
  },
  {
    title: "Editorial Services",
    description:
      "We offer professional editorial services including writing, editing, and content strategy. Enhance your content with our experienced editorial team.",
    imgSrc: "https://via.placeholder.com/500x300",
  },
  {
    title: "Custom Content Solutions",
    description:
      "Partner with us for custom content solutions tailored to your brand’s needs. From article writing to multimedia content, we provide comprehensive services.",
    imgSrc: "https://via.placeholder.com/500x300",
  },
];

const Service = () => {
  return (
    <Container className="my-5">
      <Row className="text-center mb-4">
        <Col>
          <h1>Our Services</h1>
          <p>
            Explore the various services we offer to enhance your media
            experience.
          </p>
        </Col>
      </Row>
      <Row>
        {servicesData.map((service, index) => (
          <Col md={6} lg={3} key={index} className="mb-4">
            <Card>
              <Card.Img variant="top" src={service.imgSrc} />
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Service;
