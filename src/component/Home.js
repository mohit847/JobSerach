import React from "react";
import Navbar from "./navbar";

import Recent_job from "./Recent_job";
import OurService from "./OurService";
import Crusule from "./Crusule";
import Ourpatners from "./Ourpatners";
import Footer from "./Footer";
import Popular from "./Popular";

export default function Home() {

  return (
    <div>
      <Navbar />
      <Crusule/>
     
      <div>
        <div className="flex justify-center gap-4">
          <span className="text-gray-900 font-serif-extralight flex justify-center mt-16 text-4xl">
           <span className="underline decoration-blue-400"> Rec</span>ent job
          </span>

          <span className="text-gray-900 font-serif flex justify-center font-extralight text-4xl">
            Recent Resume
          </span>
        </div>
        {/* <Recent_job />
        <Recent_job />
        <Recent_job />
        <Recent_job /> */}
        <Popular></Popular>
        <button className="p-4 bg-cyan-600 text-sm">Load more</button>
      </div>
      <OurService/>
      <Ourpatners/>
      <Footer/>
     
</div>
  );
}
