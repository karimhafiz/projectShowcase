import React from "react";

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtnLink,
  NavBtn,
} from "./Navbar.elements";

export default function Navbar() {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>logo</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/explore" activeStyle>
            Explore
          </NavLink>
          <NavLink to="/forum" activeStyle>
            Forum
          </NavLink>
          <NavLink to="/comments" activeStyle>
            comments
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/comments"> Add comments</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
}
