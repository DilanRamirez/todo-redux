import React from "react";
import { Nav } from "react-bootstrap";

import "./style/navBar.css";

export const MyNavbar = () => {
  return (
    <div className="navBar">
      <Nav defaultActiveKey="/home" className="navbar-collapse" as="ul">
        <Nav.Item as="li">
          <Nav.Link eventKey="link-1" className="nav-title">
            To Do{" "}
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-2" className="nav-opts">
            Add todo
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};
