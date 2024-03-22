import { hover } from '@testing-library/user-event/dist/hover';
import React, { Component } from 'react'

export default class About extends Component {
  render() {
 
    const links=[
    "Twitter",
    "Instagram",
    "Behance",
    "GitHub",
    "Facebook",
    "Dribbble"]

    return (
      <div class="about">
        <div>
        <h1 id="abouttitle" >About me</h1>
        <p id="aboutcontent">I’m Jhon Doe, a 24y/o developer freshly graduated from the Interactive Design department of Gobelins. Alongside my studies, I had the chance to work at Amazon, IKEA, Les Poupées Russes and Sparkk.<br></br>
       <br></br> As a developer, I try to trigger emotions through digital interfaces using code. I also like making ambient music and abstract painting.</p>
       </div>
       <div class="subTitleDiv">
        <h2>Social links:</h2>
        <div class="line"></div>
      </div>
      <div class="row">
      <div class="col-5 aboutlinks  mb-5">
        {links.map(item=>(
          <div class="mb-3 w-25 item">
          <h5 class="d-inline" >{"->"}</h5>
          <h5 class="linkitem d-inline" >{item}</h5>
          </div>
        ))}
      </div>
      <div class="col-7 ">
         <div>
          <h4>Email:</h4>
          <h5 id="email">demo@demolink.org</h5>
        </div> 
        <div class="mt-4">
          <h4>Phone:</h4>
          <h5 id="phone">+1 800 256 78 23</h5>
        </div> 
      </div>
      </div>
       </div>
       
    );
  };
}
