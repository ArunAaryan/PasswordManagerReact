import React from "react";
import axios from "axios";
const { useFormik } = require("formik");
function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert("hello");
      console.log(values);
    },
  });
  const postLogin = async (body) => {
    let data = await axios.post("http://localhost:5000/auth/login", body, {
      withCredentials: true,
    });
    console.log(data);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = formik.values;
    postLogin({ email, password });
  };
  return (
    <div className="flex flex-col border-2 shadow-xl rounded-md font-mono items-center text-lg gap-8 p-10">
      <div className="font-black text-2xl text-gray-700">Login</div>

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

      <div>
        <button className="p-2 rounded-sm" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
