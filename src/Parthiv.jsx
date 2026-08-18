import React from "react";
import profileImage from "./assets/img.jpg";

function Parthiv() {

  return (

    <section className="hero" id="home">

      {/* ================= HERO CONTENT ================= */}

      <div className="content">

        <p className="hello">
          Welcome to my portfolio
        </p>

        <h2>

          Hello, I'm{" "}

          <span>
            Parthiv
          </span>

        </h2>


        <h3>
          Java Full Stack Developer
        </h3>


        <p>

          Passionate developer with knowledge of
          HTML, CSS, JavaScript, React.js, Java,
          Spring Boot and MySQL.

          I enjoy building responsive and
          user-friendly web applications.

        </p>


        {/* Buttons */}

        <div className="buttons">

          <a
            href="#contact"
            className="hero-button"
          >
            Hire Me
          </a>


          <a
            href="/resume.pdf"
            download
            className="hero-button"
          >
            Download CV
          </a>

        </div>


        {/* Social Links */}

        <div className="social-links hero-social">

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

      </div>


      {/* ================= PROFILE IMAGE ================= */}

      <div className="profile">

        <img
          src={profileImage}
          alt="Parthiv"
          loading="lazy"
        />

      </div>

    </section>

  );
}

export default Parthiv;