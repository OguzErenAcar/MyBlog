import React from "react";

function AboutMe(args) {
  return (
    //      <div class="wrapper">
    //   <div class="box1 box">box1</div>
    //   <div class="box2 box">box2</div>
    //   <div class="box3 box">box3</div>

    // </div>
    <div>
      <div class="subTitleDiv">
        <h2>About Me</h2>
        <div class="line"></div>
      </div>
      <div id="aboutme">
        <div class="left-col">
          <p id="content1" class="aboutmeContent">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div class="right-col">
          <p id="content2" class="aboutmeContent">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button id="aboutmeButton" >Linkedin Profil /{'>'}</button>
        </div>
      </div>
    </div>
  );
}
export default AboutMe;
