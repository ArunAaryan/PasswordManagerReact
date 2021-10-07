import "./App.css";
// const Login = require("./components/Login");
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import RouterHelper from "./components/RouterHelper";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    setAuthenticated();
  }, []);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const setAuthenticated = () => {
    axios
      .get("auth/check_auth", { withCredentials: true })
      .then((res) => {
        if (res.status === 200) {
          setIsAuthenticated(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleLogout = (e) => {
    e.preventDefault();
    console.log("called handle logout");
    axios
      .get("/auth/logout", { withCredentials: true })
      .then((res) => {
        console.log("cookies cleared");
        setIsAuthenticated(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container flex flex-wrap mx-auto content-center justify-center ">
      <RouterHelper
        isAuthenticated={isAuthenticated}
        setAuthenticated={setAuthenticated}
        handleLogout={handleLogout}
      />
    </div>
  );
}

export default App;
