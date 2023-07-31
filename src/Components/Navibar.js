import React, { useState } from "react";
import { routes } from "../Routes";
import { Link } from "react-router-dom";

import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

function Navibar(args) {
  return (
    <div>
      <Navbar className="  bg-dark " style={{height:80}}>
        <div className="row  w-100">
          <div className="col-3">
            <NavbarBrand href="/">MySite</NavbarBrand>
          </div>
          <div className="col-6">
            <Nav className="m-auto  w-100 d-flex justify-content-between ">
              {routes.map((route) => (
                <NavItem className="">
                  <NavLink>
                    <Link to={route.path}>{route.name}</Link>
                  </NavLink>
                </NavItem>
              ))}
            </Nav>
          </div>
        </div>
      </Navbar>
    </div>
  );
}

export default Navibar;
