import { Footer } from "../Components/Footer/Footer"
import { FormHeaderWithHeader } from "../Components/Forms/formheader"
import { Headline, Paragraph, ForgotButton  } from "../Components/Forms/PasswordReset";
import verify from "../SetterApp-Assets/VerifyImage.png";

const Successful = () =>{
  const headline = "Succesful";
  const paragraph =
    "Your password has been reset successfully";
  const action = "Procced to Login";
  const to = "/LoginPage"

  return (
    <>
     <FormHeaderWithHeader />
     <section className="PasswordResetContainer">
        <img src={verify} alt="verified-Logo"/>
        <Headline headline={headline} />
        <Paragraph paragraph={paragraph} />
        <ForgotButton action={action} to={to}/>
      </section>
     <Footer />
    </>
   );
}
export default Successful