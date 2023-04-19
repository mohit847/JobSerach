import React from "react";
import { FaTag } from "react-icons/fa";

const FilteredTags = () => {
  const tags = [
    "IT",
    "OFFICE",
    "MANAGMENT",
    "ENGINEER",
    "DEVELOPER",
    "ACCOUNT",
    "MEDICAL",
    "NON-MANAGER",
    "MANUFACTURING",
    "JUNIOR",

    "USA",
    "ASSISTANCE",
    "SEATTLE",
    "PHP",
    "OPERATOR",
  ];

  return (
    <div>
      <h2 className="m-4">filtered by tag:</h2>
      <div className="flex flex-wrap">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="bg-blue-500 text-white rounded-md px-3 py-1 flex items-center mr-2 mb-2"
          >
            <FaTag className="mr-2" />
            {tag}
          </div>
        ))}
      </div>

      <div className="flex justify-center flex-wrap gap-14 mt-8 md:flex-nowrap">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-gray-600"
          />
          <span className="ml-2 text-gray-700">Freelace</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-gray-600"
          />
          <span className="ml-2 text-gray-700">Full Time</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-gray-600"
          />
          <span className="ml-2 text-gray-700">Internship</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-gray-600"
          />
          <span className="ml-2 text-gray-700">Part Time</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-gray-600"
          />
          <span className="ml-2 text-gray-700">Temporary</span>
        </label>
      </div>
    </div>
  );
};

export default FilteredTags;
