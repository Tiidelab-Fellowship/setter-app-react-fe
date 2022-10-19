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
import { Footer } from "../Components/Footer/Footer";
import { FormHeaderWithHeader } from "../Components/Forms/formheader";

const CreateNewPasswordPage = () => {
  const headline = "New Password";
  const paragraph =
    "Set the new password for your account so you can login and access all features.";
  const action = "Update Password";
  return (
    <React.Fragment>
      <FormHeaderWithHeader />
      <section className="PasswordResetContainer">
        <img src={logo} alt="SetterApp-Logo" />
        <Headline headline={headline} />
        <Paragraph paragraph={paragraph} />
        <Label label={"Enter New Password"} />
        <InputText placeholder={"It must be less 8 characters"} />
        <Label label={"Confirm Password"} />
        <InputText placeholder={"It must be at least 8 characters"} />
        <ForgotButton action={action}  />
      </section>
      <Footer />
    </React.Fragment>
  );
};
export default CreateNewPasswordPage;
