// MedicationReminder.js

import React, { useState } from "react";
import medicationImage from "../assets/joy-2483926_640.jpg";

const MedicationReminder = () => {
  const [medication, setMedication] = useState("");
  const [schedule, setSchedule] = useState("");

  const handleMedicationChange = (e) => {
    setMedication(e.target.value);
  };

  const handleScheduleChange = (e) => {
    setSchedule(e.target.value);
  };

  const handleSave = () => {
    // Add functionality to save medication reminder data
    console.log(`Saved medication: ${medication}, schedule: ${schedule}`);
  };

  return (
    <div className="container mx-auto my-8 p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-indigo-600">
        Medication Reminder
      </h1>
      <div className="mb-4">
        {/* <img
          src={medicationImage}
          alt="Medication"
          className="w-full h-40 object-cover rounded-md"
        /> */}
      </div>
      <div className="mb-4">
        <label htmlFor="medication" className="text-sm text-gray-600 block">
          Medication:
        </label>
        <input
          type="text"
          id="medication"
          value={medication}
          onChange={handleMedicationChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="schedule" className="text-sm text-gray-600 block">
          Schedule:
        </label>
        <input
          type="datetime-local"
          id="schedule"
          value={schedule}
          onChange={handleScheduleChange}
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
        Remember to take {medication} at {schedule}.
      </p>
    </div>
  );
};

export default MedicationReminder;
