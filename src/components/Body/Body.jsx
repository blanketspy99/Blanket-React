import React from "react";
// import 'bootstrap/dist/css/bootstrap.css';
import "./Body.css";
import { NavLink } from 'react-router-dom';

export default function Body(){
    return (
<div className="bgimg">
  <div className="middle">
    <h1>COMING SOON</h1>
    <hr></hr>
    <div>
    <p>Resume page is active... check it out <NavLink to="experience"> here</NavLink></p></div>
  </div>

</div>
    );
};