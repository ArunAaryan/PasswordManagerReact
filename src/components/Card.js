import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router";
function Card(props) {
  useEffect(() => {
    getData();
  }, []);
  const location = useLocation();
  const [cardData, setCardData] = useState(null);
  const getData = () => {
    axios
      .post(
        "records/decryptcredentials",
        { recordId: location.record.id },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(location.record);
        setCardData(res.data);
        console.log(cardData);
      });
  };
  if (!cardData) {
    return <p className="text-2xl">decrypting...</p>;
  } else {
    return (
      <div className="flex flex-col gap-4  text-xl border-2 p-5 rounded-xl w-screen md:max-w-xl m-2">
        <div className="flex justify-between">
          <span className="text-gray-400 font-extrabold">Username</span>{" "}
          <span className="font-bold text-gray-700">{cardData.username}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400 font-extrabold">Url </span>{" "}
          <span className="font-bold text-gray-700">{cardData.url}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400 font-extrabold">Password </span>{" "}
          <span className="font-bold text-gray-700">{cardData.password}</span>
        </div>
      </div>
    );
  }
}

export default Card;
