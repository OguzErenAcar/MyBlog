import React, { Component } from 'react'
import ProjectsList from "../Components/ProjectsList"
import ProjectDetails from '../Components/ProjectDetails'

export default class Projects extends Component {
  render() {
    return (
        <div class="Projects">
          <label id="projectsTittle">My Projects</label> 
            <ProjectsList></ProjectsList>
            {/* <div id="projectItem1">
            <div style={{height:500,width:500,backgroundColor:'red'}}></div>
            <h2>Project Name</h2>
            </div>
            <div id="projectItem2">
            <div style={{height:500,width:500,backgroundColor:'red'}}></div>
            <h2>Project Name</h2>
            </div>
            <div id="projectItem3">
            <div style={{height:500,width:500,backgroundColor:'red'}}></div>
            <h2>Project Name</h2>
            </div>
            <div id="projectItem4">
            <div style={{height:500,width:500,backgroundColor:'red'}}></div>
            <h2>Project Name</h2>
            </div> */} 
        </div>

      // <div className='row mt-3 mb-3 w-100 '>
      //   <div className='col-3  bg-white mx-auto'>
      //   <ProjectsList> </ProjectsList>
      //   </div>
      //   <div className='col-8  bg-white  mx-auto' >
      //     <ProjectDetails></ProjectDetails>
      //   </div>
      // </div>
    )
  }
}
