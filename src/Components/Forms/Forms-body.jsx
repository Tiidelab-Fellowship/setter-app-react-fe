import React from "react";
import "../../Stylesheets/formsBody.css";
import { FaFacebook, FaTwitter, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../Stylesheets/contactUs.css"

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
      <button className="inputButton">
        <Link to="/LoginPage">{text}</Link>
      </button>
    </div>
  );
};

export const BigInput = ({ type, placeholder }) => {
  return (
    <React.Fragment>
      <input type={type} placeholder={placeholder} className="bigInput" />
    </React.Fragment>
  );
};

export const InputFields = () => {
  return (
    <React.Fragment>
      <BigInput type={"text"} placeholder={"Name"} />
      <BigInput type={"email"} placeholder={"Email"} />
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

export const LoginFooter = ({ to }) => {
  return (
    <React.Fragment>
      <div className="Login-footer">
        <h1>
          <input type="checkbox" name="check" id="checked" />
          Remember Me
        </h1>
        <p className="coloredText forgot">
          <Link to="/ForgotPassword"> forgot Password?</Link>
        </p>
      </div>
      <Link to={to}>
        <button class="LogIn-Button">Login</button>
      </Link>
    </React.Fragment>
  );
};

export const VerificationInput = () => {
  return (
    <React.Fragment>
      <div class="NumInpContainer">
        <input type="text" class="NumInp" />
        <input type="text" class="NumInp" />
        <input type="text" class="NumInp" />
        <input type="text" class="NumInp" />
      </div>
      <h6 class="timeCount">00:30</h6>
    </React.Fragment>
  );
};

export const BottomOfButton = () => {
  return (
    <h6 class="bottomOfButton">
      If you didn't receive a code! <span id="colorResend"> Resend </span>
    </h6>
  );
};

export const ContactUsBody = () => {
  return (
    <section className="contactContainer">
      <div className="contactUsHeaderContainer">
        <h1 className="ContactHeader">Contact Us</h1>
        <hr className="smallLine" />
        <p className="belowContactUs">
          Send us a message. Be rest assured that we will respond as soon as possible.
        </p>
      </div>
      <div className="smallContactContainer">
        <input
          type="text"
          placeholder="Enter Your Name"
          className="smallInputContact"
        />
        <input
          type="text"
          placeholder="Enter Your Email*"
          className="smallInputContact Right"
        />
      </div>
      <div className="smallContactContainer">
        <input
          type="text"
          placeholder="Enter Phone Number"
          className="smallInputContact"
        />
        <input
          type="text"
          placeholder="Enter Your Company Name"
          className="smallInputContact Right"
        />
      </div>
      <textarea
        className="inputMessage"
        placeholder="Write Your message here"
        defaultValue={""}
      />
      <div className="bottomOfContactUs">
        <div className="bOCUL">
          <p>
            <input type="checkbox" name="check" id="checks" />
            I have read and accepted the Terms of
            <br />
            <span className="coloredTexts">
              {" "}
              Services &amp; Privacy Policy*
            </span>
          </p>
        </div>
        <button className="inputButtonContact">Send Message</button>
      </div>
    </section>
  );
};
