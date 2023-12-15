// Journal.js

import React, { useState } from "react";
import journalImage from "../assets/joy-2483926_640.jpg";

const Journal = () => {
  const [entry, setEntry] = useState("");

  const handleEntryChange = (e) => {
    setEntry(e.target.value);
  };

  const handleSave = () => {
    // Add functionality to save journal entry data
    console.log(`Saved journal entry: ${entry}`);
  };

  return (
    <div className="container mx-auto my-8 p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-indigo-600">
        Well-being Journal
      </h1>
      <div className="mb-4">
        <img
          src={journalImage}
          alt="Journal"
          className="w-full h-40 object-cover rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="journalEntry" className="text-sm text-gray-600 block">
          Today's Journal Entry:
        </label>
        <textarea
          id="journalEntry"
          value={entry}
          onChange={handleEntryChange}
          rows={5}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          placeholder="write about your thoughts, feelings, and experiences.
          Include prompts or mindfulness exercises for reflection."
        />
      </div>
      <button
        onClick={handleSave}
        className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:border-blue-300"
      >
        Save
      </button>
      <p className="text-sm text-gray-700 mt-4">Your entry: {entry}</p>
    </div>
  );
};

export default Journal;
