import React from "react";
import { Formik, useFormik } from "formik";
import values from "postcss-modules-values";

function Signup() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      alert("hello");
      console.log(values);
    },
  });
  const error = { message: [] };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = formik.values;
    if (email == "" || password == "" || confirmPassword == "") {
      error.message.push("email, password, confirmPassword cannot be empty");
    }
    if (password !== confirmPassword) {
      error.message.push("email, password, confirmPassword cannot be empty");
    }
    if (error.message.length === 0) {
      console.log("working");
    }
  };
  return (
    <div className="flex flex-col border-2 shadow-xl rounded-md font-mono items-center text-lg gap-8 p-10">
      <form>
        <div className="font-black text-2xl text-gray-700">signup</div>

        <div>
          <input
            className="border-2 rounded-sm"
            placeholder="username"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
        <input
          className="border-2 rounded-sm"
          placeholder="password"
          id="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />

        <input
          className="border-2 rounded-sm"
          placeholder="confirm password"
          id="confirmPassword"
          name="confirmPassword"
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
        />
        <div>
          <button className="p-2 rounded-sm" onClick={handleSubmit}>
            signup
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
