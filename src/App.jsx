import React from "react";
import "./Kanna.css";
import Parthiv from "./Parthiv";

function App() {
  return (
    <>
      {/* ================= NAVBAR ================= */}

      <nav className="navbar">

        <h1 className="logo">Portfolio</h1>

        <ul className="nav-links">

          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#skills">Skills</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>

          <li>
            <a href="#resume">Resume</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>

        </ul>

      </nav>


      {/* ================= HOME ================= */}

      <Parthiv />


      {/* ================= ABOUT ================= */}

      <section className="section" id="about">

        <h1>About Me</h1>

        <p className="about-text">

          I am a passionate Java Full Stack Developer with knowledge
          of HTML, CSS, JavaScript, React.js, Java, Spring Boot and MySQL.
          I enjoy building responsive, user-friendly and efficient
          web applications.

        </p>

      </section>


      {/* ================= SKILLS ================= */}

      <section className="section" id="skills">

        <h1>My Skills</h1>

        <div className="skills-grid">

          <div className="card">
            HTML
          </div>

          <div className="card">
            CSS
          </div>

          <div className="card">
            JavaScript
          </div>

          <div className="card">
            React.js
          </div>

          <div className="card">
            Java
          </div>

          <div className="card">
            Spring Boot
          </div>

          <div className="card">
            MySQL
          </div>

          <div className="card">
            Git & GitHub
          </div>

        </div>

      </section>


      {/* ================= PROJECTS ================= */}

      <section className="section" id="projects">

        <h1>My Projects</h1>

        <div className="project-grid">


          {/* Food Delivery */}

          <div className="project-card">

            <h3>
              Food Delivery Application
            </h3>

            <p>
              A responsive food delivery application where users
              can browse food items, manage their cart and place
              orders.
            </p>

            <p className="tech">
              React.js • JavaScript • CSS • REST API
            </p>

            <div className="project-buttons">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="project-button"
              >
                GitHub
              </a>

              <a
                href="#"
                className="project-button"
              >
                Live Demo
              </a>

            </div>

          </div>


          {/* Online Code Editor */}

          <div className="project-card">

            <h3>
              Online Code Editor
            </h3>

            <p>
              A web-based code editor that allows users to write
              and execute code in an interactive environment.
            </p>

            <p className="tech">
              HTML • CSS • JavaScript • React.js
            </p>

            <div className="project-buttons">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="project-button"
              >
                GitHub
              </a>

              <a
                href="#"
                className="project-button"
              >
                Live Demo
              </a>

            </div>

          </div>


          {/* Weather Application */}

          <div className="project-card">

            <h3>
              Weather Application
            </h3>

            <p>
              A weather application that retrieves weather
              information using a REST API and displays
              current weather conditions.
            </p>

            <p className="tech">
              React.js • JavaScript • REST API • CSS
            </p>

            <div className="project-buttons">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="project-button"
              >
                GitHub
              </a>

              <a
                href="#"
                className="project-button"
              >
                Live Demo
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* ================= RESUME ================= */}

      <section
        className="section resume-section"
        id="resume"
      >

        <h1>My Resume</h1>

        <p>

          Download my resume to learn more about my
          education, technical skills, projects and achievements.

        </p>

        <a
          href="/resume.pdf"
          download
          className="resume-button"
        >
          Download Resume
        </a>

      </section>


      {/* ================= CONTACT ================= */}

      <section className="section" id="contact">

        <h1>Contact Me</h1>

        <p className="contact-description">

          Feel free to contact me for opportunities,
          collaborations or any questions.

        </p>


        <form className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            required
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>


        {/* Social Links */}

        <div className="social-links">

          <a
            href="https://github.com/kannaparthiv"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer>

        <p>
          © 2026 Parthiv. All Rights Reserved.
        </p>

      </footer>

    </>
  );
}

export default App;