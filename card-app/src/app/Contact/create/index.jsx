import React, { useState } from "react";
import axios from "axios";
import { MdDoneAll } from "react-icons/md";
import { BiError } from "react-icons/bi";

import "./contact.css"; // Import the CSS file
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function ContactPage() {
  const navigate = useNavigate();

  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [isError, setError] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const date = new Date().getTime();
      const message = { subject, email, content, date };
      if (subject && email && content && date) {
        const res = await axios.post("http://localhost:3001/messages", message);
        const data = await res.data;
        if (data) {
          setIsSent(true);
          setError(false);
          setSubject("");
          setEmail("");
          setContent("");
          toast("Message Created");
          navigate("/contact/messages");
        }

        return data;
      }
    } catch (e) {
      setIsSent(false);
      setError(true);
      console.log(e);
      throw new Error(e);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="subject" className="label">
            Subject
          </label>
          <input
            id="subject"
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="label">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="content" className="label">
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="input"
          />
        </div>
        <div className="flex items-center justify-between">
          <button onClick={() => navigate("/contact")} className="cancel-btn">Cancel</button>
          <button type="submit" className="button">
            Send Message
          </button>
        </div>
        <div>
          {isSent && (
            <div className="success-message">
              <MdDoneAll className="icon" />
              Your Message was sent successfully
            </div>
          )}
          {isError && (
            <div className="error-message">
              <BiError className="icon" />
              An error occurred while sending the message
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export default ContactPage;
