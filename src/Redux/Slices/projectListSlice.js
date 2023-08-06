import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Octokit } from "octokit";

const initialState = {
  projects: [],
  selectedProject: null,
  loading: false,
  error: null,
};


//api istegi burdan
export const getProjectsList = createAsyncThunk(
  "projectsList/getAllProjects",
  async () => {
    try {
      const octokit = new Octokit({
        auth: process.env.TOKEN,
      });
      const result = await octokit.request("GET /users/{username}/repos", {
        username: "OguzErenAcar",
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      });
      return result.data
    } catch (error) {
      console.log(error)    
      }
  }
);

const projectsListSlice = createSlice({
  name: "projectsList",
  initialState, //state
  reducers: {
    //actionlar
    setSelected: (state, action) => {
      console.log("selected")
      state.selectedProject = action.payload; 
    },
  },
  extraReducers: {
    [getProjectsList.fulfilled]: (state, action) => {
      state.loading = true;
      state.error = null;
      state.projects = action.payload;
    },
  },
});
//actionlari yayinla
export const { setSelected } = projectsListSlice.actions;

//slice yayinla
export default projectsListSlice.reducer;
