import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Octokit } from "octokit";

const initialState = {
  readme: null,
  repo: null,
  projectName: null,
  loading: false,
  error: null,
};

const octokit = new Octokit({
  auth: process.env.REACT_APP_GITHUB_TOKEN,
});

export const fetchDetails = createAsyncThunk(
  "projectDetails/getDetails",
  async (projectName) => {
    const repoRes = await octokit.request("GET /repos/{owner}/{repo}", {
      owner: "OguzErenAcar",
      repo: projectName,
      headers: { "X-GitHub-Api-Version": "2022-11-28" },
    });

    let readme = null;
    try {
      const readmeRes = await octokit.request(
        "GET /repos/{owner}/{repo}/contents/{path}",
        {
          owner: "OguzErenAcar",
          repo: projectName,
          path: "README.md",
          headers: { "X-GitHub-Api-Version": "2022-11-28" },
        }
      );
      const url = readmeRes.data.download_url;
      readme = await fetch(url).then((res) => res.text());
    } catch (e) {
      readme = null;
    }

    const repo = repoRes.data;
    return {
      readme,
      repo: {
        name: repo.name,
        description: repo.description,
        language: repo.language,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        html_url: repo.html_url,
        topics: repo.topics || [],
        updated_at: repo.updated_at,
      },
    };
  }
);

const ProjectDetailsSlice = createSlice({
  name: "projectDetails",
  initialState,
  reducers: {
    setProjectName: (state, action) => {
      state.projectName = action.payload;
    },
  },
});

export const { setProjectName } = ProjectDetailsSlice.actions;
export default ProjectDetailsSlice.reducer;
