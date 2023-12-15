// ActivityTracker.js

import React, { useState } from "react";
import walkingImage from "../assets/joy-2483926_640.jpg";
import exercisingImage from "../assets/joy-2483926_640.jpg";
import yogaImage from "../assets/joy-2483926_640.jpg";

const ActivityTracker = () => {
  const [activityType, setActivityType] = useState("walking");
  const [activityValue, setActivityValue] = useState(0);
  const [dailyStepsGoal, setDailyStepsGoal] = useState(5000);
  const [exerciseMinutesGoal, setExerciseMinutesGoal] = useState(30);

  const handleActivityTypeChange = (type) => {
    setActivityType(type);
  };

  const handleActivityValueChange = (e) => {
    setActivityValue(e.target.value);
  };

  const handleDailyStepsGoalChange = (e) => {
    setDailyStepsGoal(e.target.value);
  };

  const handleExerciseMinutesGoalChange = (e) => {
    setExerciseMinutesGoal(e.target.value);
  };

  const handleSave = () => {
    // Add functionality to save activity data
    console.log(
      `Saved ${activityValue} ${activityType} and goals: ${dailyStepsGoal} steps, ${exerciseMinutesGoal} minutes.`,
    );
  };

  return (
    <div className="container mx-auto my-8 p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-indigo-600">
        Activity Tracker
      </h1>
      <div className="mb-4 grid grid-cols-3 gap-4">
        <button
          onClick={() => handleActivityTypeChange("walking")}
          className={`${
            activityType === "walking"
              ? "bg-indigo-600 text-white"
              : "bg-gray-200 text-gray-700"
          } px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300`}
        >
          Walking
        </button>
        <button
          onClick={() => handleActivityTypeChange("exercising")}
          className={`${
            activityType === "exercising"
              ? "bg-indigo-600 text-white"
              : "bg-gray-200 text-gray-700"
          } px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300`}
        >
          Exercising
        </button>
        <button
          onClick={() => handleActivityTypeChange("yoga")}
          className={`${
            activityType === "yoga"
              ? "bg-indigo-600 text-white"
              : "bg-gray-200 text-gray-700"
          } px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300`}
        >
          Yoga
        </button>
      </div>
      <div className="mb-4">
        <img
          src={
            activityType === "walking"
              ? walkingImage
              : activityType === "exercising"
                ? exercisingImage
                : yogaImage
          }
          alt={activityType}
          className="w-full h-40 object-cover rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="activityValue" className="text-sm text-gray-600 block">
          {`Enter ${activityType === "yoga" ? "duration (minutes)" : "steps"}`}
        </label>
        <input
          type="number"
          id="activityValue"
          value={activityValue}
          onChange={handleActivityValueChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="dailyStepsGoal" className="text-sm text-gray-600 block">
          Set Daily Steps Goal:
        </label>
        <input
          type="number"
          id="dailyStepsGoal"
          value={dailyStepsGoal}
          onChange={handleDailyStepsGoalChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="exerciseMinutesGoal"
          className="text-sm text-gray-600 block"
        >
          Set Exercise Minutes Goal:
        </label>
        <input
          type="number"
          id="exerciseMinutesGoal"
          value={exerciseMinutesGoal}
          onChange={handleExerciseMinutesGoalChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <button
        onClick={handleSave}
        className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:border-blue-300"
      >
        Save
      </button>
      <p className="text-sm text-gray-700 mt-4">
        You have recorded {activityValue} {activityType} today!
      </p>
      <p className="text-sm text-gray-700 mt-2">
        Daily Goals: {dailyStepsGoal} steps and {exerciseMinutesGoal} minutes of
        exercise.
      </p>
    </div>
  );
};

export default ActivityTracker;
