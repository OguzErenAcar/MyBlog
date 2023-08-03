import React, { Component, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProjectName , fetchDetails} from "../Redux/Slices/projectDetailsSlice";



const ProjectDetails = () => {
  //state.projectList=>storedaki adı
  const dispatch = useDispatch();

  const [ReadmeContent, setReadmeContent] = useState("");

  const selectedProject = useSelector(
    (state) => state.projectList.selectedProject
  );


 //dispatchler geriye veri döndürmemelidir sadece state güncellemeli

    useEffect(() => {  

      async function getDetails (){
        dispatch(setProjectName(selectedProject[0].name))
        dispatch(fetchDetails())
              .then((content) => {
                setReadmeContent(content.payload)
            })
      } 
      const fetchData = async () => {
          selectedProject ? await getDetails() : setReadmeContent("No project selected.");
      };
  
      fetchData();
  }, [selectedProject, dispatch]);
   
  

  return (
    <div>
      <h1>{ReadmeContent}</h1>
    </div>
  );
};

export default ProjectDetails;


//böyle bir hata aldım 


 