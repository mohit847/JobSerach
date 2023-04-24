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
      <Crusule />

      <div>

        {/* <Recent_job />
        <Recent_job />
        <Recent_job />
        <Recent_job /> */}
        <Popular></Popular>

      </div>
      <OurService />
      <Ourpatners />
      <Footer />

    </div>
  );
}
