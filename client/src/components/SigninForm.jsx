import React from "react"; // Import useState
import { useFormik } from "formik";
import { signinSchema } from "../schema";
import { useNavigate } from "react-router-dom";
import { signInRoute } from "../utils/APIRoutes";
import axios from "axios";

function SigninForm({setIsFocused}) {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    try {
      const userData = await axios.post(signInRoute, {email: values.email, password: values.password});
      localStorage.setItem('email', userData.data.user.email);
      localStorage.setItem('name', userData.data.user.name);
      localStorage.setItem('challengeDate', userData.data.user.challengeDate)
      navigate('/home')
    } catch (error) {
     console.log(error);
    }
  };

  const { values, errors, touched, isSubmitting, handleBlur, handleChange } =
    useFormik({
      initialValues: {
        // username:"",
        email: "",
        password: "",
      },
      validationSchema: signinSchema,
      handleSubmit,
    });

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      className="flex flex-col justify-center align-center w-[50%]"
    >
      <div className="my-1">
        <input
          value={values.email}
          onChange={handleChange}
          id="email"
          type="email"
          placeholder="Enter your email"
          onBlur={(e) => {
            handleBlur(e);
            setIsFocused(false);
          }}
          onFocus={() => setIsFocused(true)}
          className={`border p-2 rounded-lg w-full focus:outline-none focus:border-dark hover:border-dark shadow-sm transition duration-300 bg-wh ${
            errors.email && touched.email ? "" : "border-[#bfbfbf]"
          }`}
        />

        {errors.email && touched.email && (
          <p className="text-xs text-[#ff4545]">{errors.email}</p>
        )}
      </div>

      <div className="my-1">
        <input
          value={values.password}
          onChange={handleChange}
          id="password"
          type="password"
          placeholder="Enter your password"
          onBlur={(e) => {
            handleBlur(e);
            setIsFocused(false);
          }}
          onFocus={() => setIsFocused(true)}
          className={`border p-2 rounded-lg w-full focus:outline-none focus:border-dark hover:border-dark shadow-sm transition duration-300 bg-wh ${
            errors.password && touched.password ? "" : "border-[#bfbfbf]"
          }`}
        />

        {errors.password && touched.password && (
          <p className="text-xs text-[#ff4545]">{errors.password}</p>
        )}
      </div>

      <button
        disabled={isSubmitting}
        type="submit"
        className="text-dark font-semibold border border-dark bg-yellow p-2 mt-5 rounded-md hover:bg-white hover:text-dark transition duration-300"
      >
        Sign-in
      </button>
    </form>
  );
}

export default SigninForm;
