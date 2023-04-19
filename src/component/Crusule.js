import React from "react";
import job_bg from "../assets/job_bg.jpg";

export default function Crusule() {
  const bgimage = {
    backgroundImage: `url("${job_bg}")`,
    backgroundSize: "cover",
    height: "100%",
  };

  
  return (
    <div>
      <div className="bg-slate-700 text-white px-8 py-48" style={bgimage}>
        <div className="max-w-xl grid grid-cols-1 gap-8 mb-8 ">
         
          <div>
            <h1 className="text-5xl  uppercase font-bold">
              Your career start's here!
            </h1>
            <p className="text-xl">
              A complete solution for recuting agencies and human resource
              companies
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 text-black">
            <div className="flex gap-8 ">
              <input className="rounded-md p-4" placeholder="Keyboard"></input>

              <input className="rounded-md p-4" placeholder="Search" />
              <button className=" rounded-md p-4 px-9 bg-cyan-600 text-sm text-white">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
