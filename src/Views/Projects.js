import React, { Component } from 'react'
import ProjectsList from "../Components/ProjectsList"
import ProjectDetails from '../Components/ProjectDetails'

export default class Projects extends Component {
  render() {
    return (
      <div className='row mt-3 mb-3 w-100 '>
        <div className='col-3  bg-white mx-auto'>
        <ProjectsList> </ProjectsList>
        </div>
        <div className='col-8 project-details mx-auto' >
          <ProjectDetails></ProjectDetails>
        </div>
      </div>
    )
  }
}
