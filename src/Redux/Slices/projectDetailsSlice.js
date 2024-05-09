import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Octokit } from "octokit";

const initialState = {
  data: "",
  projectName: null,
  loading: false,
  error: null,
};

const octokit = new Octokit({
  auth: "",
});

const fetchReadme = async (projectName) => {
  const result = await octokit
    .request("GET /repos/{owner}/{repo}/contents/{path}", {
      owner: "OguzErenAcar",
      repo: projectName,
      path: "README.md",
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    })
    .then(async (response) => {
      const url = response.data.download_url;
      const data = await fetch(url).then((res) => res.text()); 
      return {data};
    });
  return result;
};

//createAsyncThunk bir plain obj döndürür o yüzden func içine alma
//fetchDetails(parametre) girince çalışıyor :O
export const fetchDetails = createAsyncThunk(
  "projectDetails/getDetails",
  async (_, thunkAPI) => {
    const projectName = thunkAPI.getState().projectDetails.projectName;
    const result = await fetchReadme(projectName); 
    return result;  
  }
);



const ProjectDetailsSlice = createSlice({
  name: "projectDetails",
  initialState, //state
  reducers: {
    setProjectName: (state, action) => {
      console.log(action.payload);
      state.projectName = action.payload;
    },
  },
});
//actionlari yayinla
export const { setProjectName } = ProjectDetailsSlice.actions;

//slice yayinla
export default ProjectDetailsSlice.reducer;
