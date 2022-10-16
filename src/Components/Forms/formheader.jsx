import React from "react";
import logo from "../../SetterApp-Assets/SetterApp-Logo.png";
import { FaWrench } from "react-icons/fa";
import "../../Stylesheets/form-header.css"

export const FormHeaderWithHeader = () => {
  return (
      <header>
    <h2 className="leftHeader"> <img src={logo} alt = "SetterApp-Logo" /><span> SetterApp </span></h2>
    <div className="rightHeader">
      <div className="logReg">
        <a href="www.google.com" className="login">LOGIN</a>
        <a href="www.google.com" className="register">REGISTER</a>
      </div>
      <div className="vl">|</div>
      <FaWrench /> 
    </div>
  </header>

  );
}

export const FormHeader = () => {
  return (
      <header>
    <h2 className="leftHeader"> <img src={logo} alt = "SetterApp-Logo" /><span> SetterApp </span></h2>
    <div className="rightHeader">
      <div className="logReg">
        <h6 className="login">LOGIN</h6>
        {/* <h6 className="register">REGISTER</h6> */}
      </div>
      <div className="vl">|</div>
      <FaWrench /> 
    </div>
  </header>

  );
}