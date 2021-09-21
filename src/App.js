import "./App.css";
// const Login = require("./components/Login");
import Login from "./components/Login";
import Signup from "./components/Signup";
function App() {
  return (
    <div className="container flex flex-wrap mx-auto content-center justify-center ">
      {/* <Login /> */}
      <Signup />
    </div>
  );
}

export default App;
