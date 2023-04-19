import React from "react";
import {
  FaStar,
  FaHeart,
  FaComment,
  FaEnvelope,
  FaCamera,
  FaMusic,
  FaBook,
  FaFilm,
} from "react-icons/fa";

export default function OurService() {
  const iconData = [
    {
      icon: <FaStar />,
      heading: "Applications",
      subheading:
        "Allow candidates to apply to jobs using form & employers to view and manage the applications from their job dashboard.",
    },
    {
      icon: <FaHeart />,
      heading: "WooCommerce Paid Listings",
      subheading:
        "Create custom job packages which can be purchased or redeemed during job submission. Requires the WooCommerce plugin.",
    },
    {
      icon: <FaComment />,
      heading: "Resume Manager",
      subheading:
        "Plugin which adds a resume submission form to your site and resume listings, all manageable from WordPress admin.",
    },
    {
      icon: <FaEnvelope />,
      heading: "Bookmarks",
      subheading:
        "Allow logged in candidates and employers to bookmark jobs and resumes along with an added note.",
    },
    {
      icon: <FaCamera />,
      heading: "Job Alerts",
      subheading:
        "Allow registered users to save their job searches and create alerts which send new jobs via email daily, weekly or fortnightly.",
    },
    {
      icon: <FaMusic />,
      heading: "Application Deadlines",
      subheading:
        "Allow job listers to set a closing date via a new field on the job submission form.",
    },
  ];
  return (
    <div>
      <div className="bg-gray-200 py-8 px-4 md:px-8 ">
        <h1 className="text-4xl flex justify-center">
          Our <span className="underline decoration-blue-400">Serv</span>ices
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-10 sm:m-4">
          {iconData.map(({ icon, heading, subheading }, index) => (
            <div
              key={index}
              className="text-center flex flex-col justify-center items-center m-6"
            >
              <div className="text-4xl flex justify-center my-2 items-center text-sky-400 m-4">
                {icon}
              </div>
              <div className="font-bold text-center">{heading}</div>
              <div className="my-2 text-center">{subheading}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
