import React from 'react'
import useReveal from '../Components/useReveal';

export default function About() {
    const links=[
      {name:"GitHub",link:"https://github.com/OguzErenAcar"},
      {name:"Instagram",link:"https://www.instagram.com/oguzerna/"},
      {name:"Linkedin",link:"https://www.linkedin.com/in/oguz-eren-acar-6440b820b/"},
    ]
    const revealRef = useReveal();

    return (
      <div className="about" ref={revealRef}>
        <div>
        <h1 id="abouttitle" >About me</h1>
        <p id="aboutcontent">
        Hello, I am Oğuz, I am a jr.developer dealing with software. Recently, I have been developing frontend projects with React.
       <br></br>
       <br></br>
I studied computer engineering at Erzurum Technical University and worked on many personal projects. I like to work. I take care to create innovations and high-performance products in software.          <br></br>
        </p>
       </div>
       <div className="subTitleDiv reveal">
        <h2>Social links:</h2>
        <div className="line"></div>
      </div>
      <div className="row reveal">
      <div className="col-5 aboutlinks mb-5">
        {links.map((item, i) => (
          <div key={i} className="mt-3 mb-3 item">
          <h5 className="d-inline" >{" -> "}</h5>
          <a href={item.link} className="linkitem d-inline" >{item.name}</a>
          </div>
        ))}
      </div>
      <div className="col-7">
         <div>
          <h4>Email:</h4>
          <h5 id="email">oguzernacr@gmail.com</h5>
        </div>
        <div className="mt-4">
          <h4>Phone:</h4>
          <h5 id="phone">+90 537 357 16 25</h5>
        </div>
        <div className="cv-card mt-4">
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
