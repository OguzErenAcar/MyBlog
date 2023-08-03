import React, { Component } from 'react'
import ProjectsList from "../Components/ProjectsList"
import ProjectDetails from '../Components/ProjectDetails'

export default class Projects extends Component {
  render() {
    return (
      <div className='row h-75 w-100 '>
        <div className='col-3 bg-white mx-auto'>
        <ProjectsList> </ProjectsList>
        </div>
        <div className='col-8 bg-primary mx-auto'>
          <ProjectDetails></ProjectDetails>
        </div>
      </div>
    )
  }
}
