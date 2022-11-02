import { Footer } from "../Components/Footer/Footer"
import { FormHeaderWithHeader } from "../Components/Forms/formheader"
import { BottomOfButton, VerificationInput } from "../Components/Forms/Forms-body";
import { Headline, Paragraph, ForgotButton  } from "../Components/Forms/PasswordReset";
import logo from "../SetterApp-Assets/SetterApp-Logo.png";

const Verification = () =>{
  const headline = "Verification";
  const paragraph =
    "Enter your 4 digits code that you received on your email.";
  const action = "Continue";
  const to = "/CreateNewPassword"
  return (
    <>
     <FormHeaderWithHeader />
     <section className="PasswordResetContainer">
        <img src={logo} alt="SetterApp-Logo" />
        <Headline headline={headline} />
        <Paragraph paragraph={paragraph} />
        <VerificationInput />
        <ForgotButton action={action} to={to}/>
        <BottomOfButton />
      </section>
     <Footer />
    </>
   );
}
export default Verification