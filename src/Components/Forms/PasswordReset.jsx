import React from "react";
import { Link } from "react-router-dom";

export const Headline = ({headline}) =>{
  return <h1>{headline}</h1>
};

export const Paragraph = ({paragraph}) =>{
  return <p>{paragraph}</p>
};

export const Label = ({label}) =>{
  return <label for="Email">{label}</label>

};

export const InputText = ({placeholder}) =>{
  return <input type="text" className="mailInput" placeholder={placeholder} />
};
export const ForgotButton = ({action, to }) =>{
  return <button className="continurButton"><Link to={to}>{action}</Link></button>
};


