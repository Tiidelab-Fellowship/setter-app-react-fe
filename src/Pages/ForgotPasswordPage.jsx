import React from "react";
import {
  ForgotButton,
  Headline,
  InputText,
  Label,
  Paragraph,
} from "../Components/Forms/PasswordReset";
import logo from "../SetterApp-Assets/SetterApp-Logo.png";
import "../Stylesheets/PasswordReset.css";
import { FormHeaderWithHeader } from "../Components/Forms/formheader";

const ForgotPasswordPage = () => {
  const headline = "Forgot Password";
  const paragraph =
    "Enter your email for the verification proccess, we will send 4 digits code to your email.";
  const action = "Continue";
  const to = "/CreateNewPassword"
  return (
    <React.Fragment>
      <FormHeaderWithHeader />
      <section className="PasswordResetContainer">
        <img src={logo} alt="SetterApp-Logo" />
        <Headline headline={headline} />
        <Paragraph paragraph={paragraph} />
        <Label label={"Email"} />
        <InputText placeholder={"Enter email"} />
        <ForgotButton action={action} to={to}/>
      </section>
    </React.Fragment>
  );
};
export default ForgotPasswordPage;
