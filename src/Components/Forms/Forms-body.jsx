import React from "react";
import "../../Stylesheets/formsBody.css";
import { FaFacebook, FaTwitter, FaGoogle } from "react-icons/fa";

export const FormTextHeader = ({ text1, text2 }) => {
  return (
    <>
      <h1 className="formHeader">{text1}</h1>
      <div className="signUpMethodsContainer">
        <button className="signUpMethods" id="facebookButton">
          <FaFacebook />
          Facebook
        </button>
        <button className="signUpMethods" id="twitterButton">
          <FaTwitter />
          Twitter
        </button>
        <button className="signUpMethods" id="googleButton">
          <FaGoogle />
          Google
        </button>
      </div>
      <div className="regMail">
        <hr className="hr" />
        <p>{text2}</p>
        <hr className="hr" />
      </div>
    </>
  );
};

export const SmallPasswordInput = () => {
  return (
    <div className="smallInputContainer">
      <input type="password" placeholder="Password" className="smallInput" />
      <input
        type="password"
        placeholder="Repeat password*"
        className="smallInput"
      />
    </div>
  );
};

export const FormFooter = ({ text }) => {
  return (
    <div className="bottomOfContainer">
      <div className="bOCL">
        <p>
          <input type="checkbox" name="check" id="check" />
          I have read and accepted the Terms
          <br />
          of
          <span className="coloredText"> Services & Privacy Policy*</span>
        </p>
      </div>
      <button className="inputButton">{text}</button>
    </div>
  );
};

export const BigInput = () => {
  return (
    <React.Fragment>
      <input type="text" placeholder="Name" className="bigInput" />
      <input type="text" placeholder="Email" className="bigInput" />
    </React.Fragment>
  );
};

export const InputFields = () => {
  return (
    <React.Fragment>
      <BigInput />
      <SmallPasswordInput />
    </React.Fragment>
  );
};

export const PictureText = ({ smallText, textarea }) => {
  return (
    <div className="pictureText">
      <h1>{smallText}</h1>
      <p>{textarea}</p>
    </div>
  );
};
