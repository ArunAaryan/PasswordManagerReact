import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const { useFormik } = require("formik");
function Login({ setAuthenticated }) {
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const formik = useFormik({
    initialValues: {
      email: "arun981@gmail.com",
      password: "arun981",
    },
    onSubmit: (values) => {
      alert("hello");
      console.log(values);
    },
  });
  const postLogin = async (body) => {
    let res = await axios.post("auth/login", body, {
      withCredentials: true,
    });
    if (res.data) {
      setAuthenticated();
      setMessage(res.data.message);
    } else {
      setError(res.error);
    }
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = formik.values;
    postLogin({ email, password });
  };
  return (
    <div className="flex flex-col border-2 shadow-xl rounded-md font-mono items-center text-lg gap-4 p-10">
      <div className="font-black text-2xl text-gray-700">Login</div>
      <div>
        <input
          className="customInput"
          placeholder="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </div>
      <input
        type="password"
        className="customInput"
        placeholder="password"
        id="password"
        name="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <div>
        {error && <p>{error}</p>}
        {message && <p>{message}</p>}
      </div>
      <div className="flex w-full">
        <button className="customButton" onClick={handleLogin}>
          Login
        </button>
      </div>
      <div>
        Not a User? <Link to="/signup">SignUp</Link>
      </div>
    </div>
  );
}

export default Login;
