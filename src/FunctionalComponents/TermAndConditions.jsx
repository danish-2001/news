import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const TermAndConditions = () => {
  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={8}>
          <Card>
            <Card.Header className="bg-danger text-white">
              Terms and Conditions
            </Card.Header>
            <Card.Body>
              <h5>Introduction</h5>
              <p>
                Welcome to our Terms and Conditions. By using this site, you
                agree to comply with and be bound by the following terms and
                conditions.
              </p>

              <h5>Use of Site</h5>
              <p>
                You agree to use this site only for lawful purposes and in a
                manner that does not infringe on the rights of or restrict or
                inhibit anyone else's use and enjoyment of the site.
              </p>

              <h5>Intellectual Property</h5>
              <p>
                The content, layout, design, data, and graphics on this site are
                protected by intellectual property laws and are the property of
                our company or our licensors.
              </p>

              <h5>Limitation of Liability</h5>
              <p>
                In no event shall we be liable for any direct, indirect,
                incidental, or consequential damages arising out of or in any
                way connected with the use of the site.
              </p>

              <h5>Changes to Terms</h5>
              <p>
                We reserve the right to modify these terms and conditions at any
                time. Your continued use of the site following any changes
                indicates your acceptance of the new terms.
              </p>
            </Card.Body>
            <Card.Footer className="text-center">
              <Button variant="primary" href="/accept">
                Accept
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TermAndConditions;
