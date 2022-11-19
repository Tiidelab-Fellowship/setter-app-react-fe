import React from "react";
import pics from "../SetterApp-Assets/Login-Img.png";
import { Footer } from "../Components/Footer/Footer"
import { FormHeaderWithHeader } from "../Components/Forms/formheader"
import { FormTextHeader,  PictureText, LoginFooter, BigInput } from "../Components/Forms/Forms-body";
import { Formik } from 'formik';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginSchema } from "../Utils/Validation/validationSchema";
import axiosInstance from "../helpers/axiosConfig/axiosConfig";
const Swal = require('sweetalert2')



export const LoginBody = () => {
  const text1 = "Login to Your Account"
  const text2 =" Or Login with Mail"
  const smallText = "Enjoy the best of social media management"
  const textarea = "You don't need to stress your self when trying to put yourself out there we are here for you to optimize the use of your social media"
  const navigate = useNavigate();
  const [token, setToken] = useState(false)
  const userToken = JSON.parse(localStorage.getItem("EachUser"));
  useEffect(() => {
    if (userToken) {
      setToken(true);
    }
  }, [userToken]);
  return(
    <section className="totalContainer">
       <Formik
       initialValues={{ email: '', password: '' }}
       validationSchema={LoginSchema}
       onSubmit={async(values, {setSubmitting}) => {
        const {password, email } = values;
              setSubmitting(true);
              try {
                let response = await axiosInstance.post("/auth/login",
                  {
                    password,
                    email,
                  }
                );
                const { access, refresh } = response.data.tokens;
                const tokens = [];
                tokens.push({
                  access: access.token,
                });
                tokens.push({
                  refresh: refresh.token,
                });
                console.log(tokens);
                localStorage.setItem("EachUser", JSON.stringify(tokens));
                Swal.fire({
                  title: 'Welcome back',
                  icon: 'success',
                  confirmButtonText: 'Continue'
                })
                if (token) {
                  navigate("/SocialDashboard");
                }
              } catch (error) {
                Swal.fire({
                  icon: 'error',
                  title: 'Login Failed',
                  text: 'User not found.',
                  confirmButtonText: 'Retry'
                })
              }
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form  className="formSide">
          <FormTextHeader text1={text1} text2={text2} />
            <BigInput type={"email"} placeholder={"Enter your Email"} sogo={values.email}  handleChange={handleChange}  handleBlur ={ handleBlur} name={"email"}/>
           {errors.email && touched.email && errors.email}

           <BigInput type={"password"} placeholder={'Enter password'} sogo={values.password}  handleChange={handleChange}  handleBlur ={ handleBlur} name={"password"}/>
           {errors.password && touched.password && errors.password}
           
           < LoginFooter handleSubmit={handleSubmit}  isSubmitting={isSubmitting} />
         </form>
       )}
     </Formik>
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