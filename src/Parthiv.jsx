import React from "react";
import profileImage from "./img.jpg";

function Parthiv() {
  return (
    <section className="hero" id="home">

      <div className="content">

        <h2>
          Hello, I'm <span>Parthiv</span>
        </h2>

        <h3>Java Full Stack Developer</h3>

        <p>
          Passionate developer with experience in HTML, CSS, Bootstrap,
          JavaScript, React.js, Java, and Web Development.
        </p>

        <div className="buttons">
          <button>Hire Me</button>

          <button>Download CV</button>
        </div>

      </div>

      <div className="profile">
        <img
          src={profileImage}
          alt="Parthiv"
        />
      </div>

    </section>
  );
}

export default Parthiv;