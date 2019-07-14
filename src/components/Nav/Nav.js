import React from "react";
import NavMessage from "../NavMessage";
import "./Nav.css";

// Component for the Navbar

const Nav = props => (
  <nav className="jumbotron">

    <div className="row">
    <NavMessage score={props.score} topScore={props.topScore} />
    </div>
     
    <div className="row">
      <div className="alert alert-primary">
      Score: {props.score}
      </div >
      <div className="alert alert-danger">
      Top Score: {props.topScore}
      </div>
    </div>

        

  </nav>
);

export default Nav;
