import React from "react"; 

function AboutMe(args) {
 

const handleLinkClick=()=>{ 
  window.location.href = 'https://www.linkedin.com/in/oguz-eren-acar-6440b820b/';


}


  return (
 
    <div>
      <div class="subTitleDiv">
        <h2>About Me</h2>
        <div class="line"></div>
      </div>
      <div id="aboutme">
        <div class="left-col">
          <p id="content1" class="aboutmeContent">
          I have dealt with software areas such as data analysis with Python, game development with Unity, Android development, and in recent years I have been doing Frontend projects.
          </p>
        </div>
        <div class="right-col">
          <p id="content2" class="aboutmeContent">
          I studied computer engineering at Erzurum Technical University and worked on many personal projects. I like to work. I take care to create innovations and high-performance products in software.
          </p>
          <button onClick={()=>{handleLinkClick()}} id="aboutmeButton" >Linkedin Profil /{'>'}</button>
        </div>
      </div>
    </div>
  );
}
export default AboutMe;
