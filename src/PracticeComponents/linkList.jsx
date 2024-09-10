import React, { useState } from "react";

const LinkList = () => {
  // State to keep track of the active link
  const [activeLink, setActiveLink] = useState(null);

  // Function to handle link click
  const handleClick = (linkId) => {
    setActiveLink(linkId);
  };

  // Link data
  const links = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Contact" },
    { id: 3, text: "Contact" },
    { id: 3, text: "Contact" },
    { id: 3, text: "Contact" },
    { id: 3, text: "Contact" },
    { id: 3, text: "Contact" },
    { id: 3, text: "Contact" },
    { id: 3, text: "Contact" },
    { id: 3, text: "Contact" },
    { id: 3, text: "Contact" },
    { id: 3, text: "Contact" },
    { id: 3, text: "Contact" },
  ];

  return (
    <div>
      <h1>Navigation</h1>
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <a
              href="#"
              onClick={() => handleClick(link.id)}
              style={{
                color: activeLink === link.id ? "blue" : "black",
                textDecoration: "none",
                padding: "8px",
                fontWeight: activeLink === link.id ? "bold" : "normal",
              }}
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LinkList;

// import React, { useState } from "react";
// import { Nav } from "react-bootstrap";

// const LinkList = () => {
//   // State to keep track of the active link
//   const [activeLink, setActiveLink] = useState(null);

//   // Function to handle link click
//   const handleClick = (linkId) => {
//     setActiveLink(linkId);
//   };

//   // Link data
//   const links = [
//     { id: 1, text: "Home" },
//     { id: 2, text: "About" },
//     { id: 3, text: "Contact" },
//   ];

//   return (
//     <Nav>
//       {links.map((link) => (
//         <Nav.Link
//           key={link.id}
//           href="#"
//           onClick={() => handleClick(link.id)}
//           style={{
//             color: activeLink === link.id ? "blue" : "black",
//             fontWeight: activeLink === link.id ? "bold" : "normal",
//           }}
//         >
//           {link.text}
//         </Nav.Link>
//       ))}
//     </Nav>
//   );
// };

// export default LinkList;

// import React, { useState } from "react";
// import { Container, Row, Col, Nav } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is imported

// const Footer = () => {
//   // State to keep track of the active link
//   const [activeLink, setActiveLink] = useState(null);

//   // Function to handle link click
//   const handleClick = (linkId) => {
//     setActiveLink(linkId);
//   };

//   // Links data
//   const links = [
//     { id: 1, text: "Home", href: "#home" },
//     { id: 2, text: "Services", href: "#services" },
//     { id: 3, text: "About", href: "#about" },
//     { id: 4, text: "Contact", href: "#contact" },
//   ];

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
//               {links.map((link) => (
//                 <Nav.Link
//                   key={link.id}
//                   href={link.href}
//                   onClick={() => handleClick(link.id)}
//                   style={{
//                     color: activeLink === link.id ? "blue" : "black",
//                     fontWeight: activeLink === link.id ? "bold" : "normal",
//                   }}
//                 >
//                   {link.text}
//                 </Nav.Link>
//               ))}
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

// export default LinkList;
