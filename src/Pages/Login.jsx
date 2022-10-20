import React from "react";
import pics from "../SetterApp-Assets/Login-Img.png";
import { Footer } from "../Components/Footer/Footer"
import { FormHeaderWithHeader } from "../Components/Forms/formheader"
import { FormTextHeader,  PictureText, LoginFooter, BigInput } from "../Components/Forms/Forms-body";


export const LoginBody = () => {
  const text1 = "Login to Your Account"
  const text2 =" Or Login with Mail"
  const smallText = "Enjoy the best of social media management"
  const textarea = "You don't need to stress your self when trying to put yourself out there we are here for you to optimize the use of your social media"
  return(
    <section className="totalContainer">
      <div className="formSide">
        <FormTextHeader text1={text1} text2={text2} />
        <BigInput type={"email"} placeholder={"Enter your Email"}/>
        <BigInput type={'password'} placeholder={'Enter password'}/>
        < LoginFooter to= {"/SocialDashboard"}/>
       
      </div>
      <div className="pictureSide">
        <PictureText smallText={smallText} textarea = {textarea}/>
        <img className="regImage" src={pics} alt="regPhoto" />
      </div>
    </section>

  
  );
};

const LoginPage = () =>{
  return (
    <>
     <FormHeaderWithHeader />
     <LoginBody />
     <Footer />
    </>
   );
}
export default LoginPage