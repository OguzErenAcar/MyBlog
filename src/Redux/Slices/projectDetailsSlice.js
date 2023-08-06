import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Octokit } from "octokit";

const initialState = { 
    data:"",
    projectName:"",
    loading: false,
    error: null,
};

const octokit = new Octokit({
    auth: process.env.TOKEN
  })
  
  const fetchReadme = async (projectName) => {
    const result=await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
        owner: 'OguzErenAcar',
        repo: projectName,
        path: 'README.md',
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      }).then(async (response)=>{
         const url= response.data.download_url
         const data = await fetch(url).then((res)=>res.text())
         return data
      })
     return result  
 }
 

 //createAsyncThunk bir plain obj döndürür o yüzden func içine alma
 //fetchDetails(parametre) girince çalışıyor :O
 export const fetchDetails=createAsyncThunk(
  "projectDetails/getDetails",
  async (_, thunkAPI) => {
    const projectName = thunkAPI.getState().projectDetails.projectName;
    const result = await fetchReadme(projectName);

    return result; // fetch işleminden dönen değeri eylem fonksiyonu sonucu olarak döndürüyoruz
}
);
  

const ProjectDetailsSlice = createSlice({
  name: "projectDetails",
  initialState, //state
  reducers: {
    setProjectName:(state,action)=>{
        state.projectName=action.payload   
    }
   
  },
  extraReducers: {
    //eğer api ile initialstate güncellemek istersek 

  //   [fetchDetails.pending]: (state) => {
  //     state.loading = true;
  //     state.error = null;
  //     state.data = null; // Fetch işlemi başlamadan önce data alanını sıfırlayalım
  // },
  // [fetchDetails.fulfilled]: (state, action) => {
  //     state.loading = false;
  //     state.error = null;
  //     state.data = action.payload; // Fetch işlemi başarılı olduğunda fetch işleminden dönen değeri state.data alanına atayalım
  // },
  // [fetchDetails.rejected]: (state, action) => {
  //     state.loading = false;
  //     state.error = action.error.message;
  //     state.data = null; // Fetch işlemi başarısız olduğunda data alanını sıfırlayalım
  // },
  },
});
//actionlari yayinla
export const {setProjectName} = ProjectDetailsSlice.actions;

//slice yayinla
export default ProjectDetailsSlice.reducer;
