import React from "react";
import { Link } from "react-router-dom";

function AllCards({ user }) {
  console.log(user);
  return (
    <div>
      <Link to={{ pathname: "/card", record: { id: user._id } }}>
        <div className="flex flex-row gap-8 border-2  justify-between p-2 m-1 rounded-xl text-xl w-full">
          <p>{user.username}</p>
          <span className="text-gray-500 inline-block align-baseline text-sm">
            {user.url}
          </span>
        </div>
      </Link>
    </div>
  );
}

export default AllCards;
