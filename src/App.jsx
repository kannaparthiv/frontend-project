import React from "react";
import "./App.css";

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
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* ================= HOME ================= */}

      <section id="home" className="hero">

        <div className="hero-content">

          <h1 className="hero-title">
            Hello, I'm <span>parthiv</span>
          </h1>

          <h2>Java Full Stack Developer</h2>

          <p>
            I am a Java Full Stack Developer with knowledge of
            Java, React JS, HTML, CSS, JavaScript, Spring Boot
            and SQL.
          </p>

          <div className="buttons">

            <button>
              Hire Me
            </button>

            <button>
              Download CV
            </button>

          </div>

        </div>

        <div className="hero-image">

          <img
           src="img.jpg" alt="Profile" 
          />

        </div>

      </section>

      {/* ================= ABOUT ================= */}

      <section id="about" className="section">

        <h1>About Me</h1>

        <p>
          I am a Java Full Stack Developer skilled in HTML,
          CSS, Bootstrap, JavaScript, React JS, Java, SQL
          and Spring Boot. I enjoy building responsive and
          user-friendly web applications.
        </p>

      </section>

      {/* ================= SKILLS ================= */}

      <section id="skills" className="section">

        <h1>Skills</h1>

        <div className="skills-grid">

          <div className="card">
            HTML
          </div>

          <div className="card">
            CSS
          </div>

          <div className="card">
            Bootstrap
          </div>

          <div className="card">
            JavaScript
          </div>

          <div className="card">
            React JS
          </div>

          <div className="card">
            Java
          </div>

          <div className="card">
            Spring Boot
          </div>

          <div className="card">
            SQL
          </div>

        </div>

      </section>

      {/* ================= PROJECTS ================= */}

      <section id="projects" className="section">

        <h1>Projects</h1>

        <div className="project-grid">

          <div className="project-card">

            <h3>
              Mango Business
            </h3>

            <p>
              Developed a responsive Mango Business website
              using HTML, CSS, Bootstrap and JavaScript.
            </p>

          </div>

          <div className="project-card">

            <h3>
              Portfolio Website
            </h3>

            <p>
              Developed a responsive personal portfolio
              website using React JS.
            </p>

          </div>

          <div className="project-card">

            <h3>
              E-Commerce Website
            </h3>

            <p>
              Developed an E-Commerce application using
              React JS and Spring Boot.
            </p>

          </div>

        </div>

      </section>

      {/* ================= CONTACT ================= */}

      <section id="contact" className="section">

        <h1>
          Contact Me
        </h1>

        <form className="contact-form">

          <input
            type="text"
            placeholder="Enter Name"
          />

          <input
            type="email"
            placeholder="Enter Email"
          />

          <textarea
            rows="5"
            placeholder="Enter Message"
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </section>

      {/* ================= FOOTER ================= */}

      <footer>

        © 2026 parthiv | All Rights Reserved

      </footer>

    </>
  );
}

export default App;