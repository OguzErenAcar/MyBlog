import React from "react";

function AboutMe() {

  const handleLinkClick = () => {
    window.location.href = 'https://www.linkedin.com/in/oguz-eren-acar-6440b820b/';
  }

  return (
    <div>
      <div className="subTitleDiv">
        <h2>About Me</h2>
        <div className="line"></div>
      </div>
      <div id="aboutme">
        <div className="left-col">
          <p id="content1" className="aboutmeContent">
            I have dealt with software areas such as data analysis with Python, game development with Unity, Android development, and in recent years I have been doing Frontend projects.
          </p>
        </div>
        <div className="right-col">
          <p id="content2" className="aboutmeContent">
            I studied computer engineering at Erzurum Technical University and worked on many personal projects. I like to work. I take care to create innovations and high-performance products in software.
          </p>
          <button onClick={() => { handleLinkClick() }} id="aboutmeButton">Linkedin Profil /{'>'}</button>

          <div className="cv-card">
            <div className="cv-card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#34ffa9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
              </svg>
            </div>
            <div className="cv-card-text">
              <span className="cv-card-title">My Resume</span>
              <span className="cv-card-sub">View & download my CV</span>
            </div>
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="cv-card-btn">
              Open CV →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutMe;
