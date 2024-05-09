import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import React, { Component } from "react";
import { getProjectsList, setSelected,  fetchDetails,  clearReadme, } from "../Redux/Slices/projectListSlice";  

const ProjectsList = () => {
  const dispatch = useDispatch();

  const projects = useSelector((state) => state.projectList);
  const [list, setList] = useState([]);
   
    useEffect(() => {  
      dispatch(getProjectsList());
  }, []);

  useEffect(() => {  
    if (!projects.projects.loading) { 
      projects.projects.Content.forEach((element) => {
        dispatch(fetchDetails(element.name));
      });
    }
  }, [projects.projects.Content]);


  useEffect(()=>{
      if(projects.projectsReadme.Content.length>=projects.projects.Content.length){ 
        projects.projectsReadme.Content.forEach((item,i)=>{ 
          const obj={
             ...item,
            image:getImg(item.Readme) 
          }
          setList(prevUsers => prevUsers.concat(obj));

        })
        
      }
  },[projects.projectsReadme.Content])



  // useEffect(()=>{
  //   console.log(list)
  // },[list])


  const getImg = (Readme) => {
    try{

      const regex = /\(([^)]+)\)/;
      const str = Readme.split("![")[1]; 
      const matches = str.match(regex);
      if (matches) {
        const mytext = matches[1];
        return mytext;
      }
    }catch(e){

      return "";
    }
  };

  const selectProject = (id) => {
    dispatch(setSelected(list.filter((item) => item.id === id)));
    console.log("item selected.");
  };

  return (
    <div class="projectsGrid"> 
      {list.map((project, index) => (
        <div
          onClick={() => selectProject(project.id)}
          id={"projeItem" + { index }}  >
            {project.image!==""?(
          <img alt="" src={project.image} className="projectImg"></img>
            ):(
          <img alt="" src="https://png.pngtree.com/png-vector/20190701/ourmid/pngtree-planning-icon-for-your-project-png-image_1532803.jpg" className="projectImg"></img>
            )}
          <a href={"Projects/" + project.name}>{project.name}</a>
        </div>
      ))}
    </div>
  );
};

export default ProjectsList;
 