import "./App.css";
// const Login = require("./components/Login");
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
function App() {
  return (
    <div className="container flex flex-wrap mx-auto content-center justify-center ">
      {/* <Login /> */}
      {/* <Signup /> */}
      <Home />
    </div>
  );
}

export default App;
