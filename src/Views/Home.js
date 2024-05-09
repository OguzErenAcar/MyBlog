import React, { Component } from "react";
import { Button } from 'reactstrap';
import AboutMe from '../Components/AboutMe'
import RecentProjects from "../Components/RecentProjects";
import PlacesOfWork from "../Components/PlacesOfWork";
import { useNavigate } from "react-router-dom";

function Home() {
    const linklist=[
      {name:"GitHub",link:"https://github.com/OguzErenAcar"},
      {name:"Instagram",link:"https://www.instagram.com/oguzerna/"}, 
      {name:"Linkedin",link:"https://www.linkedin.com/in/oguz-eren-acar-6440b820b/"}, 
    ]
    const navigate = useNavigate();


    const handleContact=()=>{
      navigate("/Contact");

    }

    return (
      <div class="home ">
        <div class="d-flex h-100   align-items-start">
          <div class="w-100 d-flex flex-column h-100 ">
            <div id="home-col-top" class="container-fluid d-flex " >
              <div class="row  w-100  ">
                <div class="col-6  my-auto"  >
                  <div className="mt-5">
                    <h1 >Oğuz Eren Acar <br/> </h1>
                  </div>
                  <div class="pt-4">
                    <h3>
                    I am a jr.developer dealing with software. Recently, I have been developing frontend projects  
                    </h3>
                  </div>
                  <div class="pt-4">
                  <Button onClick={()=>{handleContact()}} id="FirstButton">Contact {'/>'}</Button>{' '}
                  </div>
                  <div id="home-linklist" class=" d-flex ">
              {linklist.map(item=>(
                <a href={item.link} className="me-5" id="SMLinks">{item.name}</a>
              ))}
            </div>
                </div>
                <div class="col-6 my-auto" >
                  <div class=" container-fluid d-flex  h-100 w-100">
                  <img src='/images/pp.png' class="pp-images mx-auto" alt=""  />
                  </div>
                  <div> 
                  </div>
                </div>
              </div>
            </div>
          
          </div>
        </div>
       <AboutMe></AboutMe>
       {/* <RecentProjects></RecentProjects> */}
       <PlacesOfWork></PlacesOfWork>
      </div>
      
    ); 
  } 

export default Home
