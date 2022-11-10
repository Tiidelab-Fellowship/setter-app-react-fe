import * as yup from "yup";

export const SignupSchema = yup.object().shape({
  firstName: yup.string().required("Input your first name"),
  lastName: yup.string().required("Input your last name"),
  email: yup
    .string()
    .email()
    .required()
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "Invalid email address"
    ),
  password: yup
    .string()
    .min(8)
    .required("Password must contain at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      "Password must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  cpassword: yup
    .string()
    .min(8)
    .required("Confirm Password must contain at least 8 characters")
    .oneOf([yup.ref("password"), null], "Passwords does not match"),
});


export const LoginSchema = yup.object().shape({
  email: yup
  .string()
  .email()
  .required()
  .matches(
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    "Invalid email address"
  ),
  password: yup
    .string()
    .min(8)
    .required("Password must contain at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      "Password must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  
});