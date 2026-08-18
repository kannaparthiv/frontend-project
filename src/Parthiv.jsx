import React from "react";
import "./Kanna.css";

function App() {
  return (
    <>
      <nav className="navbar">
        <h1>Portfolio</h1>
      </nav>

      <div className="hero">
        <div className="content">
          <h2>
            Hello, I'm <span>A Parthiv</span>
          </h2>
          <h3>Java Full Stack Trainer</h3>
          <p>
            Passionate trainer with experience in Html,css,booststrap,, Reactjs,
            , and Web Development.
          </p>
          <button>Hire Me</button>
          <button>Download CV</button>
        </div>
        <div className="profile">
          <img src="src/assets/img.jpg" alt="" />
        </div>
      </div>
    </>
  );
}

export default App;