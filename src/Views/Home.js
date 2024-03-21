import React, { Component } from "react";
import { Button } from 'reactstrap';
import AboutMe from '../Components/AboutMe'
import RecentProjects from "../Components/RecentProjects";
import PlacesOfWork from "../Components/PlacesOfWork";
export default class Home extends Component {

  
  render() {
    const linklist=[
      "Behance",
      "Dribbble",
      "GitHub",
      "Facebook",
      "Instagram"]

    return (
      <div class="home ">
        <div class="d-flex h-100   align-items-start">
          <div class="w-100 d-flex flex-column h-100 ">
            <div id="home-col-top" class="container-fluid d-flex " >
              <div class="row  w-100 mx-auto  ">
                <div class="col-6 my-auto "  >
                  <div>
                    <h1>Bring your brand to life with our <br/> help</h1>
                  </div>
                  <div class="pt-4">
                    <h3>
                      In your role as a professional web developer, you’re up
                      for just about any website-building challenge.
                    </h3>
                  </div>
                  <div class="pt-4">
                  <Button class="home-button">Contact {'/>'}</Button>{' '}
                  </div>
                </div>
                <div class="col-6 my-auto" >
                  <div class=" container-fluid d-flex  h-100 w-100">
                  <img src='/images/pp.png' class="pp-images mx-auto" alt=""  />
                  </div>
                  <div> 
                  </div>
                </div>
              </div>
            </div>
            <div id="home-col-bottom" class="link-list d-flex col-5 align-items-center justify-content-between ">
              {linklist.map(item=>(
                <h5>{item}</h5>
              ))}
            </div>
          </div>
        </div>
       <AboutMe></AboutMe>
       <RecentProjects></RecentProjects>
       <PlacesOfWork></PlacesOfWork>
      </div>
      
    );
    /* <div class="home text-bg-light">
<div class="container-fluid h-100  ">
<div class="container-fluid d-flex h-100  ">
    <div class="row align-self-center w-100">
        <div class="col-6 mx-auto">
            <div class="jumbotron">
                <h1 class="display-4 text-truncate">Jumbotron</h1>
                <p class="lead">This is a simple hero unit.</p>
                <p class="lead">
                    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                </p>
            </div>
        </div>
    </div> 
</div>
<div>asdasd</div>
</div>
</div> */

    // <div class="home  container-fluid text-white d-flex   ">
    //   <div>
    //     <div class="container-fluid h-75 w-100   ">
    //       <div class="row  w-100 mx-auto  ">
    //         <div class="col-6 my-auto">
    //           <div>
    //             <h1>Bring your brand to life with our help</h1>
    //           </div>
    //           <div>
    //             <h3>
    //               In your role as a professional web developer, you’re up for
    //               just about any website-building challenge.
    //             </h3>
    //           </div>
    //           <div>
    //             <button>button</button>
    //           </div>
    //         </div>
    //         <div class="col-6 my-auto">
    //           <div> resim</div>
    //         </div>
    //       </div>
    //     </div>
    //     <div class="container-fluid  w-100 ">asdas</div>
    //   </div>
    // </div>;
  }
}
