import { hover } from '@testing-library/user-event/dist/hover';
import React, { Component } from 'react'

export default class About extends Component {
  render() {
 
    const links=[ 
      {name:"GitHub",link:"https://github.com/OguzErenAcar"},
      {name:"Instagram",link:"https://www.instagram.com/oguzerna/"}, 
      {name:"Linkedin",link:"https://www.linkedin.com/in/oguz-eren-acar-6440b820b/"}, 
 ]

    return (
      <div class="about">
        <div>
        <h1 id="abouttitle" >About me</h1>
        <p id="aboutcontent">
        Hello, I am Oğuz, I am a jr.developer dealing with software. Recently, I have been developing frontend projects with React.
       <br></br> 
       <br></br> 
I studied computer engineering at Erzurum Technical University and worked on many personal projects. I like to work. I take care to create innovations and high-performance products in software.          <br></br>
        </p>
       </div>
       <div class="subTitleDiv">
        <h2>Social links:</h2>
        <div class="line"></div>
      </div>
      <div class="row">
      <div class="col-5 aboutlinks  mb-5">
        {links.map(item=>(
          <div class="mt-3 mb-3   item">
          <h5 class="d-inline" >{" -> "}</h5>
          <a href={item.link} class="linkitem d-inline" >{item.name}</a>
          </div>
        ))}
      </div>
      <div class="col-7 ">
         <div>
          <h4>Email:</h4>
          <h5 id="email">oguzernacr@gmail.com</h5>
        </div> 
        <div class="mt-4">
          <h4>Phone:</h4>
          <h5 id="phone">+90 537 357 16 25</h5>
        </div> 
      </div>
      </div>
       </div>
       
    );
  };
}
