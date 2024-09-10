// src/PrivacyPolicy.js
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Privacy = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title className="text-center">Privacy Policy</Card.Title>
              <Card.Text>
                <h4>Introduction</h4>
                <p>
                  We are committed to protecting your privacy. This privacy
                  policy explains how we collect, use, and safeguard your
                  information.
                </p>

                <h4>Information We Collect</h4>
                <p>
                  We collect various types of information, including personal
                  data and usage data. Personal data may include your name,
                  email address, and contact information.
                </p>

                <h4>How We Use Your Information</h4>
                <p>
                  Your information is used to provide, maintain, and improve our
                  services. We may also use your information to communicate with
                  you about updates or offers.
                </p>

                <h4>Data Security</h4>
                <p>
                  We implement appropriate technical and organizational measures
                  to protect your data against unauthorized access, alteration,
                  or destruction.
                </p>

                <h4>Your Rights</h4>
                <p>
                  You have the right to access, correct, or delete your personal
                  data. Please contact us if you wish to exercise these rights.
                </p>

                <h4>Changes to This Privacy Policy</h4>
                <p>
                  We may update this privacy policy from time to time. Any
                  changes will be posted on this page with an updated effective
                  date.
                </p>

                <h4>Contact Us</h4>
                <p>
                  If you have any questions about this privacy policy, please
                  contact us at{" "}
                  <a href="mailto:support@example.com">support@example.com</a>.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Privacy;
