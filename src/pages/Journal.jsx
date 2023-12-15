// Journal.js

import React, { useState } from "react";
import journalImage from "../assets/journal.jpg";

const Journal = () => {
  var a =
    "journals are scholarly publications that focus on a specific discipline or field of study. They are intended for an academic or technical audience, not general readers.  Journal articles usually have the following sections: Abstract, Introduction, Methods, Results, Discussion.   Here are some websites that can help you find research papers:   Google Scholar, Microsoft Academic, Pubmed Central, Science.gov, Worldcat, Refseek.   Here are some free online journal and research databases:   CORE  ScienceOpen  Directory of Open Access Journals  Education Resources Information Center  arXiv e-Print Archive  Social Science Research Network  Public Library of Science  OpenDOAR";
  const [entry, setEntry] = useState("");
  const [journal, setJournal] = useState([a]);

  const handleEntryChange = (e) => {
    setEntry(e.target.value);
  };

  const handleSave = () => {
    // Add functionality to save journal entry data
    console.log(`Saved journal entry: ${entry}`);
    setJournal([entry, ...journal]);
    setEntry("");
  };

  return (
    <>
      <div className="container mx-auto my-8 p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-indigo-600">
          Well-being Journal
        </h1>
        <div className="mb-4">
          <img
            src={journalImage}
            alt="Journal"
            className="w-full h-[350px] object-cover rounded-md"
          />
        </div>
        <div className="my-4 mt-7 flex flex-col items-center gap-3">
          <label htmlFor="journalEntry" className="text-sm text-gray-600 block">
            Today's Journal Entry:
          </label>
          <textarea
            id="journalEntry"
            value={entry}
            onChange={handleEntryChange}
            rows={4}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 py-10"
            placeholder="write about your thoughts, feelings, and experiences.Include prompts or mindfulness exercises for reflection."
          />
          <button
            onClick={handleSave}
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:border-blue-300"
          >
            Save
          </button>
        </div>
      </div>
      {/* journals */}
      <div className="w-[90%] mx-auto px-10 pb-10  rounded-lg shadow-md my-10 shadow-gray-300">
        <h2 className="text-center text-2xl font-bold mb-6 text-indigo-600 my-5 mb-10 pt-5">
          Journals
        </h2>
        <div className="w-full flex flex-col gap-10 justify-center">
          {journal.map((entry, index) => (
            <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
              <h5 class="mb-4 text-2xl font-medium text-gray-600 dark:text-gray-400">
                journal {index + 1}
              </h5>
              <p class="mb-4 text-[16px] font-medium text-gray-500 dark:text-gray-400">
                {entry}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Journal;
