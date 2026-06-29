import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import React from "react";

import {
  getProjectsList,
  setSelected,
  fetchDetails
} from "../Redux/Slices/projectListSlice";

const ProjectImgWithSkeleton = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      {!loaded && <div className="skeleton skeleton-project-img"></div>}
      <img
        alt={alt}
        src={src}
        className="projectImg"
        onLoad={() => setLoaded(true)}
        style={loaded ? {} : { display: 'none' }}
      />
    </>
  );
};

const SkeletonGrid = ({ count }) => (
  <>
    {Array.from({ length: count }).map((_, i) => (
      <div key={i} className="skeleton-project-card">
        <div className="skeleton skeleton-project-img"></div>
        <div className="skeleton skeleton-text skeleton-project-name"></div>
      </div>
    ))}
  </>
);

const ProjectsList = () => {
  const dispatch = useDispatch();
  const [todo, settodo] = useState([]);
  const [list, setlist] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getProjectsList()).then((res) => {
      const array = res.payload.map(item=>{return {name:item.name}})
      settodo(array)
    });
  }, []);

  useEffect(()=>{
    if (todo.length === 0) return;
    let completed = 0;
    todo.forEach((element) => {
      dispatch(fetchDetails(element.name)).then((item)=>{
        if (!item.payload) { completed++; if (completed === todo.length) setLoading(false); return; }
        const image=getImg(item.payload.Readme)
        const obj={
          name:item.payload.name,
          Readme:item.payload.Readme,
          image
        }
        setlist(prevlist=>prevlist.concat(obj))
        completed++;
        if (completed === todo.length) setLoading(false);
      });
    });
  },[todo])

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
  };

  return (
    <div className="projectsGrid">
      {loading && <SkeletonGrid count={6} />}
      {list.map((project, index) => (
        <div
          key={project.name}
          onClick={() => selectProject(project.id)}
          className="skeleton-project-card"
        >
          <ProjectImgWithSkeleton
            src={project.image || "/images/defaultproject.jpg"}
            alt={project.name}
          />
          <a href={"Projects/" + project.name}>{project.name}</a>
        </div>
      ))}
    </div>
  );
};

export default ProjectsList;
