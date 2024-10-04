import React from "react";
import { useFormik } from "formik";
import { signupSchema } from "../schema";
import { useNavigate } from "react-router-dom";
import { signUpRoute } from "../utils/APIRoutes";
import axios from "axios";

function SignupForm({ setIsFocused }) {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: signupSchema,
    onSubmit: async (values, actions) => {
      try {
        const result = await axios.post(signUpRoute, {
          name: values.name,
          email: values.email,
          password: values.password,
          confirmPassword: values.confirmPassword,
        });

        console.log(result);
        if (result.data.message === "User registered successfully") {
          localStorage.setItem("name", result.data.user.name);
          localStorage.setItem("email", result.data.user.email);
          const today = new Date();
          const pastDate = new Date(today);
          pastDate.setDate(today.getDate() - 2);
          localStorage.setItem('challengeDate', pastDate);
          navigate("/home");
        }
      } catch (err) {
        alert(err);
      }
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit} // Make sure this uses formik's handleSubmit
      autoComplete="off"
      className="flex flex-col justify-center align-center w-[50%] m-4"
    >
      <div className="my-1">
        <input
          id="name"
          type="text"
          placeholder="Enter Your Name"
          value={formik.values.name} // Use formik's values
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`border p-2 rounded-lg w-full focus:outline-none focus:border-orgblue hover:border-orgblue shadow-sm transition duration-300 ${
            formik.errors.name && formik.touched.name
              ? ""
              : "border-[#bfbfbf]"
          }`}
        />
        {formik.errors.name && formik.touched.name && (
          <p className="text-xs text-[#ff4545]">{formik.errors.name}</p>
        )}
      </div>

      <div className="my-1">
        <input
          value={formik.values.email} // Use formik's values
          onChange={formik.handleChange}
          id="email"
          type="email"
          placeholder="Enter your email"
          onBlur={(e) => {
            formik.handleBlur(e);
            setIsFocused(false);
          }}
          onFocus={() => setIsFocused(true)}
          className={`border p-2 rounded-lg w-full focus:outline-none focus:border-dark hover:border-dark shadow-sm transition duration-300 bg-wh ${
            formik.errors.email && formik.touched.email
              ? ""
              : "border-[#bfbfbf]"
          }`}
        />
        {formik.errors.email && formik.touched.email && (
          <p className="text-xs text-[#ff4545]">{formik.errors.email}</p>
        )}
      </div>

      <div className="my-1">
        <input
          value={formik.values.password} // Use formik's values
          onChange={formik.handleChange}
          id="password"
          type="password"
          placeholder="Enter your password"
          onBlur={(e) => {
            formik.handleBlur(e);
            setIsFocused(false);
          }}
          onFocus={() => setIsFocused(true)}
          className={`border p-2 rounded-lg w-full focus:outline-none focus:border-dark hover:border-dark shadow-sm transition duration-300 bg-wh ${
            formik.errors.password && formik.touched.password
              ? ""
              : "border-[#bfbfbf]"
          }`}
        />
        {formik.errors.password && formik.touched.password && (
          <p className="text-xs text-[#ff4545]">{formik.errors.password}</p>
        )}
      </div>

      <div className="my-1">
        <input
          id="confirmPassword"
          type="password"
          placeholder="Confirm password"
          value={formik.values.confirmPassword} // Use formik's values
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`border p-2 rounded-lg w-full focus:outline-none focus:border-orgblue hover:border-orgblue shadow-sm transition duration-300 ${
            formik.errors.confirmPassword && formik.touched.confirmPassword
              ? ""
              : "border-[#bfbfbf]"
          }`}
        />
        {formik.errors.confirmPassword && formik.touched.confirmPassword && (
          <p className="text-xs text-[#ff4545]">{formik.errors.confirmPassword}</p>
        )}
      </div>

      <button
        disabled={formik.isSubmitting}
        type="submit"
        className="text-dark font-semibold border border-dark bg-yellow p-2 mt-5 rounded-md hover:bg-white hover:text-dark transition duration-300"
      >
        Sign-up
      </button>
    </form>
  );
}

export default SignupForm;
