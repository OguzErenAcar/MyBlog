import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import React, { Component } from "react";
import {useMemo ,memo } from 'react';

import {
  getProjectsList,
  setSelected,
  clear,
  fetchDetails 
} from "../Redux/Slices/projectListSlice";

const ProjectsList = () => {
  const dispatch = useDispatch(); 
  const [todo, settodo] = useState([]);
  const [list, setlist] = useState([]);

  useEffect(() => {  
    dispatch(getProjectsList()).then((res) => { 
      const array = res.payload.map(item=>{return {name:item.name}})
      settodo(array)
    });
  }, []);
  
  useEffect(()=>{ 
    var updatelist=[]
    todo.forEach((element,i) => { 
      dispatch(fetchDetails(element.name)).then((item,i)=>{ 
        const image=getImg(item.payload.Readme)
       const obj={
          name:item.payload.name,
          Readme:item.payload.Readme,
          image
        }
        setlist(prevlist=>prevlist.concat(obj))
      });
    }); 
  },[todo])

useEffect(()=>{
  console.log(list)
},[list]) 

  const getImg = (Readme) => {
    try {
      const regex = /\(([^)]+)\)/;
      const str = Readme.split("![")[1];
      const matches = str.match(regex);
      if (matches) {
        const mytext = matches[1];
        return mytext;
      }
    } catch (e) {
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
          id={"projeItem" + { index }}
        >
          {project.image !== "" ? (
            <img alt="" src={project.image} className="projectImg"></img>
          ) : (
            <img
              alt=""
              src="https://png.pngtree.com/png-vector/20190701/ourmid/pngtree-planning-icon-for-your-project-png-image_1532803.jpg"
              className="projectImg"
            ></img>
          )}
          <a href={"Projects/" + project.name}>{project.name}</a>
        </div>
      ))}
    </div>
  );
};

export default ProjectsList;
