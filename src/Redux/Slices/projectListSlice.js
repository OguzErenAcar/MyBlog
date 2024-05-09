import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import { Octokit } from "octokit";

const initialState = {
  projects: {
    Content: [],
    loading: false,
    error: null,
  },
  projectsReadme: {
    Content: [],
    loading: false,
    error: null,
  },
  selectedProject: null,
};

const octokit = new Octokit({
  auth: "",
});

export const getProjectsList = createAsyncThunk(
  "projectsList/getAllProjects",
  async () => {
    try {
      const result = await octokit.request("GET /users/{username}/repos", {
        username: "OguzErenAcar",
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      });
      return result.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const fetchDetails = createAsyncThunk(
  "projectsList/getDetails",
  async (projectName) => {
    try {
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
          const res = {
            name: projectName,
            Readme: data 
          }; 
          return res;
        });

      return await result;
    } catch (error) {
      console.log(error);
    }
  }
);

const projectsListSlice = createSlice({
  name: "projectsList",
  initialState,
  reducers: {
    setSelected: (state, action) => {
      state.selectedProject = action.payload;
    },
    a: (state, action) => {
      getProjectsList()
    }
  },
  extraReducers: {
    [getProjectsList.pending]: (state, action) => {
      state.projects.loading = true;
      state.projects.error = null;
    },

    [getProjectsList.fulfilled]: (state, action) => { 
      var list=[]
      action.payload.forEach((element) => {
        const item = {
          name: element.name,
        };
        list= [...list, item];
      });
      state.projects.Content=list
      state.projects.loading = false;
      state.projects.error = null;
    }, 
   
    [fetchDetails.fulfilled]: (state, action) => { 
     // console.log(action.payload);  
      state.projectsReadme.Content = [...state.projectsReadme.Content, action.payload];
    },
  },
});
export const { setSelected,a ,clearReadme} = projectsListSlice.actions;
export default projectsListSlice.reducer;
