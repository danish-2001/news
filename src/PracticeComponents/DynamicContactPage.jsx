// src/DynamicContactPage.js
import React, { useState } from "react";

const DynamicContactPage = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleSubjectChange = (e) => setSubject(e.target.value);
  const handleBodyChange = (e) => setBody(e.target.value);

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return (
    <div>
      <h1>Contact Us</h1>
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={handleEmailChange}
      />
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={handleSubjectChange}
      />
      <textarea placeholder="Body" value={body} onChange={handleBodyChange} />
      <p>
        <a href={mailtoLink}>Send Email</a>
      </p>
    </div>
  );
};

export default DynamicContactPage;
