// src/ContactUs.js
import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add form submission logic, e.g., sending data to a server or API.
    
    setShowAlert(true); // Show a success message
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };
   
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h1 className="text-center mb-4">Contact Us</h1>
          {showAlert && (
            <Alert variant="success">
              Your message has been sent successfully!
            </Alert>
          )}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formSubject">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                placeholder="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Your message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;

// import React, { useState } from "react";

// const ContactUs = () => {
//   const [email, setEmail] = useState("");
//   const [subject, setSubject] = useState("");
//   const [body, setBody] = useState("");

//   const handleEmailChange = (e) => setEmail(e.target.value);
//   const handleSubjectChange = (e) => setSubject(e.target.value);
//   const handleBodyChange = (e) => setBody(e.target.value);

//   const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
//     subject
//   )}&body=${encodeURIComponent(body)}`;

//   return (
//     <div>
//       <h1>Contact Us</h1>
//       <input
//         type="email"
//         placeholder="Enter email"
//         value={email}
//         onChange={handleEmailChange}
//       />
//       <input
//         type="text"
//         placeholder="Subject"
//         value={subject}
//         onChange={handleSubjectChange}
//       />
//       <textarea placeholder="Body" value={body} onChange={handleBodyChange} />
//       <p>
//         <a href={mailtoLink}>Send Email</a>
//       </p>
//     </div>
//   );
// };

// export default ContactUs;
