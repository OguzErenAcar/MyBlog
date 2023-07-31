import { get } from "react-hook-form";
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as projectListAction from "../Redux/Actions/projectListAction";

import React, { Component } from "react";

class ProjectsList extends Component {
    
   componentDidMount() { 
    this.props.actions.getProjects()
  } 
  render() {
    const list = this.props.projectList
    console.log(list)//neden initalState döndü ????
    return <div>{
      //this.props.actions.getProjects().then(list=>(list.payload.map(project=>project.toString())))
    }</div>;
  }
}
 
function mapStateToProps(state){
    return{
      projectList:state.projectList.value
    }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProjects: bindActionCreators(projectListAction.getProjects, dispatch),
    },
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(ProjectsList);
