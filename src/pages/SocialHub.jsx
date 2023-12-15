// SocialHub.js

import React from "react";
import friend1Image from "../assets/joy-2483926_640.jpg";
// import friend2Image from "../assets/friend2.jpg";
// import friend3Image from "../assets/friend3.jpg";

const SocialHub = () => {
  const friendsList = [
    { name: "John Doe", image: friend1Image },
    { name: "Jane Smith", image: friend1Image },
    { name: "Bob Johnson", image: friend1Image },
  ];

  return (
    <div className="container mx-auto my-8 p-8 bg-white rounded-lg shadow-md w-full  flex flex-col gap-7 justify-between">
      <h1 className="text-3xl font-bold mb-6 text-indigo-600 mb-3">
        Social Connection Hub
      </h1>
      <div className="mb-4 grid grid-cols-3 gap-4">
        {friendsList.map((friend, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={friend.image}
              alt={friend.name}
              className="w-20 h-20 object-cover rounded-full mb-2"
            />
            <p className="text-sm text-gray-700">{friend.name}</p>
          </div>
        ))}
      </div>
      <button className="mx-auto bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:border-blue-300">
        Start Video Call
      </button>
    </div>
  );
};

export default SocialHub;
