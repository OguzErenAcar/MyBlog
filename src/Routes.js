import Home from "./Views/Home" 
import About from "./Views/About"
import Contact from "./Views/Contact"
import Projects from "./Views/Projects"
import ProjectDetails from "./Components/ProjectDetails"
export const routes =[
    {
        path:"/",
        name:"Home",
        exact:true,
        component:Home,
        auth:false 
    },
    {
        path:"/About",
        name:"About",
        exact:true,
        component:About,
        auth:false 
    },
    {
        path:"/Projects",
        name:"Projects",
        exact:true,
        component:Projects,
        auth:false 
    },
    {
        path:"/Projects/:projectName",
        name:"Projects",
        exact:true,
        component:ProjectDetails,
        auth:false 
    },
    {
        path:"/Contact",
        name:"Contact",
        exact:true,
        component:Contact,
        auth:false 
    }
 
]


export const Naviroutes =[
    {
        path:"/",
        name:"Home",
        exact:true,
        component:Home,
        auth:false 
    },
    {
        path:"/About",
        name:"About",
        exact:true,
        component:About,
        auth:false 
    },
    {
        path:"/Projects",
        name:"Projects",
        exact:true,
        component:Projects,
        auth:false 
    },
    {
        path:"/Contact",
        name:"Contact",
        exact:true,
        component:Contact,
        auth:false 
    }
 
]

