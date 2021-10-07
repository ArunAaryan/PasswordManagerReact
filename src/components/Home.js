import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AllCards from "./AllCards";
function Home({ handleLogout }) {
  const location = useLocation();
  const [data, setData] = useState([]);

  const getData = async () => {
    let res = await axios.post(
      "records/getallcredentials",
      {},
      { withCredentials: true }
    );
    setData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="flex flex-col min-h-full w-screen md:max-w-3xl px-3 justify-around">
      <div className="flex  justify-between">
        <p className="p-3  rounded-2xl">
          {location.pathname.substr(1, location.pathname.length).toUpperCase()}
        </p>
        <button
          className="px-3 bg-red-600 text-white rounded-2xl"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
      <div className="flex flex-col max-h-screen   mt-2">
        {data.map((rec) => (
          <AllCards key={rec._id} user={rec} />
        ))}
      </div>
      <Link to="/new">
        <button className="customButton">New Credential</button>
      </Link>
    </div>
  );
}

export default Home;
