// Home.js

import React from "react";
import { Link } from "react-router-dom";
import homeImage from "../assets/joy-2483926_640.jpg"; // Import your image

const Home = () => {
  const activity = {
    walking: 500,
    yoga: 15,
    exercising: 30,
  };
  var journal = [
    "journals are scholarly publications that focus on a specific discipline or field of study. They are intended for an academic or technical audience, not general readers.  Journal articles usually have the following sections: Abstract, Introduction, Methods, Results, Discussion.   Here are some websites that can help you find research papers:   Google Scholar, Microsoft Academic, Pubmed Central, Science.gov, Worldcat, Refseek.   Here are some free online journal and research databases:   CORE  ScienceOpen  Directory of Open Access Journals  Education Resources Information Center  arXiv e-Print Archive  Social Science Research Network  Public Library of Science  OpenDOAR",
  ];
  return (
    <>
      <div className="w-full h-[80%] md:px-40 flex flex-col justify-center">
        <h1 className="text-3xl font-bold mb-6 text-indigo-600">
          Elderly Wellness Tracker
        </h1>
        <p className="text-sm text-gray-700 mb-4">
          Welcome to the Elderly Wellness Tracker, designed to promote the
          health and well-being of individuals like Sunita Sharma. Explore the
          various features to support physical activity, mental well-being, and
          social connections.
        </p>
        <h2 className="text-1xl font-bold mb-6 text-indigo-600">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link
            to="/activity"
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:border-blue-300 block"
          >
            Activity Tracker
          </Link>
          <Link
            to="/journal"
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:border-blue-300 block"
          >
            Well-being Journal
          </Link>
          <Link
            to="/medication"
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:border-blue-300 block"
          >
            Medication Reminder
          </Link>
          <Link
            to="/social"
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:border-blue-300 block"
          >
            Social Connection Hub
          </Link>
          <Link
            to="/health-tips"
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:border-blue-300 block"
          >
            Health Tips and Resources
          </Link>
        </div>
      </div>
      {/* activity tracker */}
      <div className="w-[90%] mx-auto px-10 pb-10   my-10">
        <h2 className="text-center text-2xl font-bold mb-6 text-indigo-600 my-5 mb-10 pt-5">
          Activities
        </h2>
        <div className="flex flex-wrap gap-10 justify-center">
          <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
              Walking
            </h5>
            <div class="flex items-baseline text-gray-900 dark:text-white  mb-5">
              <span class="text-3xl font-semibold">🏃</span>
              <span class="text-5xl font-extrabold tracking-tight">
                {activity.walking}
              </span>
              <span class="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                Steps
              </span>
            </div>
            <button
              type="button"
              class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
            >
              You can Do it.
            </button>
          </div>
          <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
              Exercising
            </h5>
            <div class="flex items-baseline text-gray-900 dark:text-white mb-5">
              <span class="text-3xl font-semibold">🏃</span>
              <span class="text-5xl font-extrabold tracking-tight">
                {activity.exercising}
              </span>
              <span class="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                minutes
              </span>
            </div>
            <button
              type="button"
              class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center "
            >
              You can Do it.
            </button>
          </div>
          <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
              Yoga
            </h5>
            <div class="flex items-baseline text-gray-900 dark:text-white  mb-5">
              <span class="text-3xl font-semibold">🏃</span>
              <span class="text-5xl font-extrabold tracking-tight">
                {activity.yoga}
              </span>
              <span class="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                minutes
              </span>
            </div>
            <button
              type="button"
              class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
            >
              You can Do it.
            </button>
          </div>
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

export default Home;
