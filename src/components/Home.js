import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
function Home() {
  const [data, setData] = useState([]);
  const getData = async () => {
    let res = await axios.post(
      "http://localhost:5000/records/getallcredentials",
      {},
      { withCredentials: true }
    );
    console.log(res.data);
    setData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {data.map((rec) => (
        <p>{rec.username}</p>
      ))}
    </div>
  );
}

export default Home;
