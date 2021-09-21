import React from "react";

function Login() {
  return (
    <div className="flex flex-col border-2 shadow-xl rounded-md font-mono items-center text-lg gap-8 p-10">
      <div className="font-black text-2xl text-gray-700">Login</div>

      <div>
        <input className="border-2 rounded-sm" placeholder="username" />
      </div>
      <input className="border-2 rounded-sm" placeholder="password" />

      <div>
        <input type="button" value="login" className="p-2 rounded-sm" />
      </div>
    </div>
  );
}

export default Login;
