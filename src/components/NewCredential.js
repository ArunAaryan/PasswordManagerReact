import axios from "axios";
import React, { useState } from "react";
const { useFormik } = require("formik");
function NewCredential() {
  const [response, setResponse] = useState();
  const formik = useFormik({
    initialValues: {
      username_e: "arun981@gmail.com",
      password_e: "somepassword",
      url_e: "gorilla.com",
    },
    onSubmit: (values) => {
      alert("hello");
      console.log(values);
    },
  });
  const postData = (body) => {
    axios
      .post("/records/new", body, { withCredentials: true })
      .then((res) => {
        if (res.status === 200) {
          setResponse(res.data.message);
        } else {
          setResponse(res.error);
        }
      })
      .catch((err) => {
        setResponse(err.message);
      });
  };
  const handleNewCredential = (e) => {
    e.preventDefault();
    const body = formik.values;
    postData(body);
  };
  return (
    <div className="flex-col">
      <div className="flex flex-col border-2 shadow-xl rounded-md font-mono items-center text-lg gap-4 p-10">
        <div className="font-black text-2xl text-gray-700">New Credential</div>

        {response && <p>{response}</p>}
        <div>
          <input
            className="customInput"
            placeholder="username_e"
            id="username_e"
            name="username_e"
            onChange={formik.handleChange}
            value={formik.values.username_e}
          />
        </div>
        <input
          type="password_e"
          className="customInput"
          placeholder="password_e"
          id="password_e"
          name="password_e"
          onChange={formik.handleChange}
          value={formik.values.password_e}
        />
        <input
          type="url_e"
          className="customInput"
          placeholder="url_e"
          id="url_e"
          name="url_e"
          onChange={formik.handleChange}
          value={formik.values.url_e}
        />

        <div className="flex w-full">
          <button className="customButton" onClick={handleNewCredential}>
            Push
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewCredential;
