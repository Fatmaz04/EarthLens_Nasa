import * as yup from "yup";

const passwordRules = /^(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// Password must be at least 5 characters, with 1 uppercase and 1 lowercase letter.

export const signupSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  password: yup
    .string()
    .matches(passwordRules, {
      message: "Password must be at least 5 characters long and include 1 uppercase letter and 1 lowercase letter.",
    })
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Required"),
  name: yup.string().required("Required"),
});

export const signinSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  password: yup.string().required("Required"),
});
