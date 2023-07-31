export function getProjects(){
    return function(dispatch){
        //let url="http://localhost:3000/projects";
        return  dispatch({ type: "GET_PROJECTS_SUCCESS", payload: [2000] }) 
    }
}