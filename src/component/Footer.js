import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaChevronRight,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="flex flex-col bg-slate-800">
        <div className="flex flex-col md:flex-row md:mx-20 lg:mx-40 p-10 md:p-20 gap-10">
          <div className="grid col-span-2">
            <h1 className="text-4xl font-bold mb-6 text-white">
              About Jobseek
            </h1>
            <h2 className="text-lg mb-6 text-slate-400 max-w-2xl">
              Jobseek WordPress Theme is a complete solution for recruiting
              agencies and human resources. It’s a perfect website to offer your
              clients career evolving, new projects for freelancers or just
              great chances of employment. Jobseek is loaded with options, both
              for recruiter and for candidates. Recruiters and companies can
              post, edit and manage job offers and company profiles and
              candidates can do the same things with their resumes.
            </h2>
          </div>
          <div className="flex flex-col">
            <h6 className="font-bold text-white text-lg mb-4">Candidate Tools</h6>
            <ul className="mb-16 text-slate-400 text-lg">
              <li><FaChevronRight className="inline-block mr-2" />candidates Dashboard</li>
              <li><FaChevronRight className="inline-block mr-2" />Past Application</li>
              <li><FaChevronRight className="inline-block mr-2" />Job Alerts</li>
              <li><FaChevronRight className="inline-block mr-2" />Bookmarks</li>
            </ul>
            <h6 className="font-bold text-white text-lg mb-4">Employer Tools</h6>
            <ul className="mb-16 text-slate-400 text-lg">
              <li><FaChevronRight className="inline-block mr-2" />Add a job</li>
              <li><FaChevronRight className="inline-block mr-2" />Companies</li>
              <li><FaChevronRight className="inline-block mr-2" />Companies</li>
              <li><FaChevronRight className="inline-block mr-2" />Embed Jobs</li>
              <li><FaChevronRight className="inline-block mr-2" />Bookmarks</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-slate-900 py-10 justify-center items-center text-white gap-5">
        <div className="flex justify-center items-center gap-5 sm:gap-10">
          <FaFacebook
            size={24}
            className="text-white hover:text-blue-500 cursor-pointer mr-2 sm:mr-4 text-cyan-500"
          />
          <FaTwitter
            size={24}
            className="text-white hover:text-blue-500 cursor-pointer mr-2 sm:mr-4 text-cyan-500"
          />
          <FaLinkedin
            size={24}
            className="text-white hover:text-blue-500 cursor-pointer mr-2 sm:mr-4 text-cyan-500"
          />
          <FaYoutube
            size={24}
            className="text-white hover:text-blue-500 cursor-pointer mr-2 sm:mr-4 text-cyan-500"
          />
          <FaInstagram
            size={24}
            className="text-white hover:text-blue-500 cursor-pointer mr-2 sm:mr-4 text-cyan-500"
          />
        </div>
        <p className="text-xs sm:text-base">© 2021 Jobseek - Responsive Job Board WordPress Theme</p>
      </div>

    </>
  );
}

export default Footer;