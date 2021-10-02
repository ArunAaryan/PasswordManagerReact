import React from "react";
import { useFormik } from "formik";
import axios from "axios";
function Signup() {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirm_password: "",
    },
    onSubmit: (values) => {
      alert("hello");
      console.log(values);
    },
  });
  const error = { message: [] };
  const postData = async (body) => {
    let data = await axios.post("http://localhost:5000/auth/signup", body, {
      withCredentials: true,
    });
    console.log(data);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, confirm_password, username } = formik.values;
    if (email === "" || password === "" || confirm_password === "") {
      error.message.push("email, password, confirm password cannot be empty");
    }
    if (password !== confirm_password) {
      error.message.push("email, password, confirm password cannot be empty");
    }
    if (error.message.length === 0) {
      console.log("working");
    }
    postData({ email, password, confirm_password, username });
  };
  return (
    <div className="flex flex-col border-2 shadow-xl rounded-md font-mono items-center text-lg gap-8 p-10">
      <form>
        <div className="font-black text-2xl text-gray-700">signup</div>

        <div>
          <input
            className="border-2 rounded-sm"
            placeholder="username"
            id="username"
            name="username"
            onChange={formik.handleChange}
            value={formik.values.username}
          />
          <input
            className="border-2 rounded-sm"
            placeholder="email"
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
          id="confirm_password"
          name="confirm_password"
          onChange={formik.handleChange}
          value={formik.values.confirm_password}
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
