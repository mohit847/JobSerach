import React, { useState } from 'react';

const Form = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className='block text-gray-700 font-bold mb-2 mt-6'>
        Enter some text:
        <input className='appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" value={inputValue} onChange={handleChange} />
      </label>
      <button className='bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 
    duration-500 gap-5 p-4' type="submit">Submit</button>
    </form>
  );
};

export default Form;



import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

import { useState } from "react";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full bg-white shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div className="animate-pulse">
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="javascript:void(0)">
              <h2 className="text-2xl font-bold">LOGO</h2>
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-gray-600 hover:text-blue-600 animate-pulse">
                <Link to="/Home">
                  <a href="javascript:void(0)">Home</a>
                </Link>
              </li>
              <li className="text-gray-600 hover:text-blue-600 animate-pulse">
                <Link to="/Blog">
                  <a href="javascript:void(0)">Blog</a>
                </Link>
              </li>

              <li className="text-gray-600 hover:text-blue-600


slidesToShow: 4,
slidesToScroll: 1,
responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    },
  },
],
};

return (
<div className="grid">
  <div>
    <div className="text-3xl flex justify-center font-bold mt-4">
      Our Partners
    </div>
    <div className="text-lg text-center">
      Most leading recruitment companies already use Jobseek
    </div>
    <div className="flex justify-center py-8">
      <Slider {...sliderSettings}>
        <div>
          <img
            className="w-auto h-24 mx-4"
            src="https://www.freepnglogos.com/uploads/company-logo-png/hyundai-motor-company-logo-png-transparent-0.png"
            alt="Company Logo"
          />
        </div>
        <div>
          <img
            className="w-auto h-24 mx-4"
            src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-marilyn-scott-0.png"
            alt="Company Logo"
          />
        </div>
        <div>
          <img
            className="w-auto h-24 mx-4"
            src="https://www.freepnglogos.com/uploads/company-logo-png/company-logo-ford-logos-download-22.png"
            alt="Company Logo"
          />
        </div>
        <div>
          <img
            className="w-auto h-24 mx-4"
            src="https://www.freepnglogos.com/uploads/company-logo-png/brandlogo-logos-our-brand-32.png"
            alt="Company Logo"
          />
        </div>
        <div>
          <img
            className="w-auto h-24 mx-4"
            src="https://www.freepnglogos.com/uploads/company-logo-png/brand-tibco-logo-palo-alto-company-png-34.png"
            alt="Company Logo"
          />
        </div>
      </Slider>
    </div>
  </div>

  {/* text searching for employ */}

  <div className="bg-cyan-500 flex justify-center items-center">
    <div className=" text-white py-8 flex  gap-52 ">
      <div className="flex flex-col ">
        <h6 className="text-2xl font-bold">Searching for an employee?</h6>
        <p className




const jobimage = {
  backgroundImage: `url("${job}")`,
  backgroundSize: "cover",
};

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};