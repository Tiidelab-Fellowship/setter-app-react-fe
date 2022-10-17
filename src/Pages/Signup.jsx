import React from "react";
import pics from "../SetterApp-Assets/Register-Img.png";
import { Footer } from "../Components/Footer/Footer"
import { FormHeaderWithHeader } from "../Components/Forms/formheader"
import { FormTextHeader, InputFields, FormFooter, PictureText } from "../Components/Forms/Forms-body";


 export const SignUpBody = () => {
  const text1 = "Create Your Account"
  const text2 =" Or register with email"
  const text =  "Register"
  const smallText = "Be ominipresent on all your social accounts"
  const textarea = "You don't need to stress your self when trying to put yourself out there we are here for you to optimize the use of your social media"
  return(
    <section className="totalContainer">
      <div className="formSide">
        <FormTextHeader text1={text1} text2={text2} />
        <InputFields />
        <FormFooter text={text} />
      </div>
      <div className="pictureSide">
        <PictureText smallText={smallText} textarea = {textarea}/>
        <img className="regImage" src={pics} alt="regPhoto"/>
      </div>
    </section>

  
  );
};

const SignUpPage = () =>{
  return (
    <>
     <FormHeaderWithHeader />
     <SignUpBody />
     <Footer />
    </>
   );
}
export default SignUpPage

