import React, { useState } from "react";
import { Naviroutes } from "../Routes";
import { Link } from "react-router-dom";

import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

function Navibar(args) {
  return (
    <div>
      <Navbar class="navibar " style={{ marginTop:30,height:120}}>
        <div class="h-100 w-100 align-items-center">
        <div class="row   ">
          <div class="col-3">
            {/* <NavbarBrand href="/">MySite</NavbarBrand> */}
            <div class="text-white d-flex ">
            <img src="/images/logo.png" class="logo" alt=""></img>
             <h3 class="my-auto ms-2 custom-font"> Oğuz Eren</h3>
            </div>
          </div>
          <div class="col-5 ms-auto">
            <Nav class="d-flex justify-content-between align-items-center h-100 w-100" >
              {Naviroutes.map((route,index) => (
                <NavItem key={index}>
                  <Link  to={route.path} class="nav-link text-decoration-none text-white  " >
                   <h5> {route.name}</h5>
                   {/* <Link to={route.path}>{route.name}</Link> */}
                  </Link>
                </NavItem>
              ))}
            </Nav> 
          </div>
        </div>
        </div>
      </Navbar>
    </div>
  );
}

export default Navibar;
