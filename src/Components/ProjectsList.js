import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { getProjectsList,setSelected } from "../Redux/Slices/projectListSlice";//api istegi


const ProjectsList = () => {
  //action cagirmak icin dispatch
  const dispatch = useDispatch();

  //api den gelen list state i 
  const [list, setList] = useState([]);

  //compdidmount
  useEffect(() => {
    dispatch(getProjectsList()).then((response) => {
      setList(response.payload);
    });
  },[]);

  const selectProject=(id)=>{
      dispatch(setSelected(list.filter(item =>item.id===id)))
  }

  return (
    <div>
      LİST
      <ListGroup>
        {list.map((project,index)=><ListGroupItem 
        onClick={()=>selectProject(project.id)} key ={index}>
          {project.name}</ListGroupItem>)}
      </ListGroup>
    </div>
  );
};

export default ProjectsList;

// function mapStateToProps(state){
//     return{
//       projectList:state.projectList.value
//     }
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: {
//       getProjects: bindActionCreators(projectListAction.getProjects, dispatch),
//     },
//   };
// }
// export default connect(mapStateToProps,mapDispatchToProps)(ProjectsList);
