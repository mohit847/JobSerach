import React from "react";
import job from "../assets/job.jfif";

export default function Ourpatners() {
  const jobimage = {
    backgroundImage: `url("${job}")`,
    backgroundSize: "cover",
  };
  return (
    <div className="grid grid-cols-1 ">
      <div className="py-8 px-4 sm:px-8">
        <div className="text-3xl flex justify-center font-bold mb-4">
          Our Partners
        </div>
        <div className="text-lg text-center mb-8">
          Most leading recruitment companies already use Jobseek
        </div>
        <div className="flex justify-center flex-wrap gap-4 sm:gap-8">
          <img
            className="w-auto h-24"
            src="https://www.freepnglogos.com/uploads/company-logo-png/hyundai-motor-company-logo-png-transparent-0.png"
            alt="Company Logo"
          />
          <img
            className="w-auto h-24"
            src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-marilyn-scott-0.png"
            alt="Company Logo"
          />
          <img
            className="w-auto h-24"
            src="https://www.freepnglogos.com/uploads/company-logo-png/company-logo-ford-logos-download-22.png"
            alt="Company Logo"
          />
          <img
            className="w-auto h-24"
            src="https://www.freepnglogos.com/uploads/company-logo-png/brandlogo-logos-our-brand-32.png"
            alt="Company Logo"
          />
          <img
            className="w-auto h-24"
            src="https://www.freepnglogos.com/uploads/company-logo-png/brand-tibco-logo-palo-alto-company-png-34.png"
            alt="Company Logo"
          />
        </div>
      </div>

      <div className="bg-cyan-500 py-8 px-4 sm:px-8 flex justify-start items-center">
        <div className=" text-white flex gap-20">
          <div className="flex flex-col">
            <div className="text-2xl font-bold">Searching for an employee?</div>
            <div className="text-lg">
              Browse hundreds of job offers and find the best suitable position.
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
            <button className="w-full sm:w-sm p-4 bg-cyan-500 text-white border-2 rounded-md border-white hover:bg-cyan-600 transition-colors">
              Search Resume
            </button>
            <button className="w-full sm:w-sm p-4 bg-cyan-500 text-white border-2 rounded-md border-white hover:bg-cyan-600 transition-colors">
              Search job
            </button>
          </div>

        </div>
      </div>

      <div className="bg-slate-700 text-black py-8 px-4 sm:px-8" style={jobimage}>
        <div className="max-w-xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Newsletter</h1>
          <p className="text-lg mb-8">
            Sign up to our weekly newsletter and get latest update straight to
            your inbox
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
            <input
              placeholder="Name"
              className="p-4 px-10 rounded-md mb-4 sm:mb-0"
            />
            <input
              placeholder="Email"
              className="p-4 px-10 rounded-md mb-4 sm:mb-0"
            />
            <button className="p-4 px-8 bg-cyan-600 text-sm text-white rounded-md">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}






