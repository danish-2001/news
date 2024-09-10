// import React from "react";

// function Footer() {
//   return (
//     <>
//       <div className="div bg-dark text-light text-center p-3">
//         Copyright &copy; 2024 Syed Danish Rahman. All rights reserved.
//       </div>
//     </>
//   );
// port React from "react";

// export default Footer;

// src/Footer.js
import React from "react";
import { Link } from "react-router-dom";
//import "./Footer.css"; // Optional: For additional custom styling

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>
              Our news website offers comprehensive coverage across diverse
              topics, including education, politics, crime, sports, and more. It
              provides users with up-to-date and insightful news articles,
              ensuring a well-rounded perspective on current events and trends.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to={"/About"} className="text-white">
                  About
                </Link>
              </li>
              <li>
                <Link to={"/Service"} className="text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link to={"/ContactUs"} className="text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to={"/Privacy"} className="text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to={"/TermAndConditons"} className="text-white">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact Info</h5>
            <p>40 Feet Road Shaheen Bagh, New Delhi, Delhi, 110025</p>
            <p>
              Email:{" "}
              <a
                href="mailto:danishrahman841226@gmail.com"
                className="text-white"
              >
                danishrahman841226@gmail.com
              </a>
            </p>
            <p>
              Follow us on:
              <a
                href="https://www.facebook.com/abpnews/"
                className="text-white mx-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                href="https://x.com/ABPNews?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                className="text-white mx-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              <a
                href="https://www.instagram.com/abpnewstv/?hl=en"
                className="text-white mx-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </p>
          </div>
        </div>
        <div className="text-center mt-3">
          <p>
            &copy; {new Date().getFullYear()} Syed Danish Rahman. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// import React from "react";
// import { Container, Row, Col, Nav } from "react-bootstrap";

// const Footer = () => {
//   return (
//     <footer className="bg-light text-dark py-4">
//       <Container>
//         <Row>
//           <Col md={4}>
//             <h5>About Us</h5>
//             <p>
//               We are a company dedicated to delivering high-quality products and
//               exceptional service. Our mission is to provide innovative
//               solutions and value to our customers.
//             </p>
//           </Col>
//           <Col md={4}>
//             <h5>Quick Links</h5>
//             <Nav className="flex-column">
//               <Nav.Link href="#home">Home</Nav.Link>
//               <Nav.Link href="#services">Services</Nav.Link>
//               <Nav.Link href="#about">About</Nav.Link>
//               <Nav.Link href="#contact">Contact</Nav.Link>
//             </Nav>
//           </Col>
//           <Col md={4}>
//             <h5>Contact Us</h5>
//             <p>Email: info@example.com</p>
//             <p>Phone: +123 456 7890</p>
//           </Col>
//         </Row>
//         <Row>
//           <Col className="text-center mt-3">
//             <p>
//               &copy; {new Date().getFullYear()} Your Company. All rights
//               reserved.
//             </p>
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   );
// };

// export default Footer;
