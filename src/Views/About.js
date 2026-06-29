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
      </div>
      </div>
       </div>
    );
}
