import React from "react";
import "./Kanna.css";
import Parthiv from "./Parthiv";

function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <h1>Portfolio</h1>

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
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Hero */}
      <Parthiv />

      {/* About */}
      <section className="section" id="about">
        <h1>About Me</h1>

        <p>
          I am a passionate Java Full Stack developer and trainer interested
          in building responsive and user-friendly web applications.
        </p>
      </section>

      {/* Skills */}
      <section className="section" id="skills">
        <h1>My Skills</h1>

        <div className="skills-grid">
          <div className="card">HTML</div>
          <div className="card">CSS</div>
          <div className="card">JavaScript</div>
          <div className="card">React.js</div>
          <div className="card">Java</div>
          <div className="card">Spring Boot</div>
          <div className="card">MySQL</div>
          <div className="card">Git & GitHub</div>
        </div>
      </section>

      {/* Projects */}
      <section className="section" id="projects">
        <h1>My Projects</h1>

        <div className="project-grid">

          <div className="project-card">
            <h3>Food Delivery Application</h3>
            <p>
              A web application for browsing food items, managing a cart,
              and placing orders.
            </p>
          </div>

          <div className="project-card">
            <h3>Online Code Editor</h3>
            <p>
              A web-based code editor that allows users to write and execute
              code in an interactive environment.
            </p>
          </div>

          <div className="project-card">
            <h3>Weather Application</h3>
            <p>
              A weather application that retrieves weather information using
              a REST API.
            </p>
          </div>

        </div>
      </section>

      {/* Contact */}
      <section className="section" id="contact">
        <h1>Contact Me</h1>

        <form className="contact-form">
          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
          ></textarea>

          <button type="submit">
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Parthiv. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default App;