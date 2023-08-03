import { Octokit } from "octokit";
import fs from "fs"

import fetch from 'node-fetch';
 
const octokit = new Octokit({
  auth: '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'
})


// const result=await octokit.request('GET /users/{username}/repos', {
//   username: 'OguzErenAcar',
//   headers: {
//     'X-GitHub-Api-Version': '2022-11-28'
//   }
// }).then((response)=>{
//  // console.log(response.data)
//  // return response.data.map(project=>project.name)
// // return response.data.filter(project=>project.name==="AdsApp")
// })

const result=await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
  owner: 'OguzErenAcar',
  repo: 'Sport-WebPage',
  path: 'README.md',
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
}).then(async (response)=>{
   const url= response.data.download_url
   const data = await fetch(url).then((res)=>res.text())
   return data
})

//const data =JSON.stringify(result)
console.log(result)
const data = await fetch(result).then((res)=>res.text())

fs.writeFile("veri.txt", data, (err) => {
  if (err) {
    console.error("Dosyaya yazarken bir hata oluştu:", err);
  } else {
    console.log("Veriler başarıyla dosyaya yazıldı.");
  }
});