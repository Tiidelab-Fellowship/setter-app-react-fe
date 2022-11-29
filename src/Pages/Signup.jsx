import React from "react";
import pics from "../SetterApp-Assets/Register-Img.png";
import { FormHeaderWithHeader } from "../Components/Forms/formheader"
import { FormTextHeader, BigInput, FormFooter, PictureText } from "../Components/Forms/Forms-body";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import axios from "axios";
import { SignupSchema } from "../Utils/Validation/validationSchema";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


 export const SignUpBody = () => {


  const text1 = "Create Your Account"
  const text2 =" Or register with email"
  const text =  "Register"
  const smallText = "Be ominipresent on all your social accounts"
  const textarea = "You don't need to stress your self when trying to put yourself out there we are here for you to optimize the use of your social media"

  const navigate = useNavigate();
  const [token, setToken] = useState(false);
  const userToken = JSON.parse(localStorage.getItem("EachUser"));
  useEffect(() => {
    if (userToken) {
      setToken(true);
    }
  }, [userToken]);

  return(
    <section className="totalContainer">
      <Formik 
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          cpassword: ""
        }}
        validationSchema={SignupSchema}
        onSubmit={async (values, { setSubmitting }) => {
          const { firstName, lastName, password, email } = values;
          setSubmitting(true);
          // console.log(values);
          try {
          let response = await axios.post(
            "https://setter-app-cohort4.herokuapp.com/v1/auth/register",
            {
              firstName,
              lastName,
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
            toast.success("Registration Successful", {
              position: "top-center",
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              });   
            if (token) {
              navigate("/SocialDashboard");
            }
          }catch (error) {
            toast.error('Registration Unsuccessful', {
              position: "top-center",
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              });
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
            <BigInput type={"text"} placeholder={"First Name"} sogo={values.firstName}  handleChange={handleChange}  handleBlur ={ handleBlur} name={"firstName"} />
            {errors.firstName && touched.firstName && errors.firstName}

            <BigInput type={"text"} placeholder={"Last name"} sogo={values.lastName}  handleChange={handleChange}  handleBlur ={ handleBlur} name={"lastName"}/>
            {errors.lastName && touched.lastName && errors.lastName}

           <BigInput type={"email"} placeholder={'Enter email'} sogo={values.email}  handleChange={handleChange}  handleBlur ={ handleBlur} name={"email"}/>
           {errors.email && touched.email && errors.email}

           <div className="smallInputContainer">

           <BigInput type={"password"} placeholder={'Enter password'} sogo={values.password}  handleChange={handleChange}  handleBlur ={ handleBlur} name={"password"}/>
           {errors.password && touched.password && errors.password}

           <BigInput  type={"password"} placeholder={'Confirm password'} sogo={values.cpassword}  handleChange={handleChange}  handleBlur ={ handleBlur} name={"cpassword"}/>
           {errors.cpassword && touched.cpassword && errors.cpassword}

           </div>

           <FormFooter text={text}  handleSubmit={handleSubmit}  isSubmitting={isSubmitting} />
         </form>
       )}
      
      </Formik>
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
     <ToastContainer />
     <FormHeaderWithHeader />
     <SignUpBody />
    </>
   );
}
export default SignUpPage

