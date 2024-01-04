import React from "react";
import Button from "@mui/material/Button";

import "./home.css";
import { useNavigate } from "react-router-dom";

const index = () => {
    const navigate = useNavigate()

  return (
    <div className="home-container">
      <div className="top-page">
        <h1>Welcome to My Portfolio</h1>
        <Button onClick={() => navigate("/flashcards")} variant="contained">Go To Cards Page</Button>
        <Button onClick={() => navigate("/contact")} variant="contained">Go To Contact Page</Button>
      </div>

      <section className="intro-section">
        <p>
          Hello, I'm Farhan Hasanli, 19 years old. I'm a third-year student at
          ADA University in BSIT.
        </p>
      </section>

      <section className="projects-section">
        <h2>My Projects:</h2>

        <div className="project">
          <p>
            <strong>1. Bookstore Management Application</strong>
            <br />
            This Java console application functions as a system for managing a
            bookstore, enabling users to execute various operations related to
            books, authors, customers, and orders. The application interfaces
            with a PostgreSQL database for storing and retrieving information.
          </p>
          <a
            href="https://github.com/Hfarxan/dbAssignment2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link to GitHub
          </a>
        </div>

        <div className="project">
          <p>
            <strong>2. Personal Website and Digital Card</strong>
            <br />A personal website and digital card.
          </p>
          <a
            href="https://github.com/Hfarxan/Web-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link to GitHub
          </a>
        </div>

        <div className="project">
          <p>
            <strong>3. Product List Web Application</strong>
            <br />
            This web application displays a list of products, allows users to
            search for products by keyword, filter by category, and view product
            details. The application fetches product data from a dummy API and
            dynamically renders the product list and details.
          </p>
          <a
            href="https://github.com/Hfarxan/wb1-assignment2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link to GitHub
          </a>
        </div>

        <div className="project">
          <p>
            <strong>4. Flashcard App</strong>
            <br />A flashcard application.
          </p>
          <a
            href="https://github.com/Hfarxan/flashcardappwm1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link to GitHub
          </a>
        </div>
      </section>
    </div>
  );
};

export default index;
