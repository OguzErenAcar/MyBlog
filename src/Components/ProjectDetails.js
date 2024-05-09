import React, { Component, useEffect, useState } from "react";
import {  useDispatch } from "react-redux";
import { setProjectName, fetchDetails} from "../Redux/Slices/projectDetailsSlice";
import {useParams} from "react-router-dom";
 

const ProjectDetails = () => {
 
  const {projectName} = useParams();

  const dispatch = useDispatch();
  const [ReadmeContent, setReadmeContent] = useState(true);
   //state.projectList=>storedaki adı
  


 //dispatchler geriye veri döndürmemelidir sadece state güncellemeli

    useEffect(() => {    
       async function getDetails (){  
        dispatch(setProjectName(projectName))
        dispatch(fetchDetails())
              .then((content) => {
                console.log(content.payload)
                setReadmeContent(content.payload.data)
            })
      } 
      
      const fetchData = async () => {
        ReadmeContent ? await getDetails() : setReadmeContent("No project selected.");
      };
  
      fetchData();
   }, [ReadmeContent, dispatch, projectName]);
   
  

  return (
    
    <div className="text-white"> 
      <div style={{fontSize:40,marginTop:20,marginBottom:20}}>
        {projectName}
      </div>
      <div class="d-flex  justify-content-center mt-4 mb-4" style={{height:1200}}>
      <pre class="w-75">{ReadmeContent}</pre>
      </div>
    </div>
  );
};

export default ProjectDetails;


//böyle bir hata aldım 


 