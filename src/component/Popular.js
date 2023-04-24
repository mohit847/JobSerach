import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dummy from "../data/dummy.json";

const JobCard = ({ job, onJobClick }) => {
  return (
    <div
      className="box bg-white flex shadow relative m-15"
      onClick={() => onJobClick(job.id)}
    >
      <div className="images relative h-150">
        <img
          src={job.cover}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="category category1 absolute bottom-0 right-0 mr-3 mb-3 text-xs text-white uppercase font-bold p-2 bg-red-600">
          <span>{job.category}</span>
        </div>
      </div>
      <div className="text flex flex-col p-4">
        <h1 className="title text-xl font-bold leading-tight mb-0">
          {job.jobTitle}
        </h1>
        <div className="date mt-4">
          <i className="fas fa-calendar-days mr-2"></i>
          <span>{job.datePosted}</span>
        </div>
        <div className="comment mt-1">
          <i className="fas fa-comments mr-2"></i>
          <span>{job.requirements.length} requirements</span>
        </div>
        <div className="description mt-4">{job.description}</div>
        <div className="mt-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={(e) => {
              e.stopPropagation();
              onJobClick(job.id);
            }}
          >
            See Details
          </button>
        </div>
      </div>
    </div>
  );
};

const JobDetails = ({ job, onPreviousClick }) => {
  return (
    <div className="box bg-white flex shadow relative m-15">
      <div className="images relative h-150">
        <img src={job.cover} alt="" className="w-full h-full object-cover" />
        <div className="category category1 absolute bottom-0 right-0 mr-3 mb-3 text-xs text-white uppercase font-bold p-2 bg-red-600">
          <span>{job.category}</span>
        </div>
      </div>
      <div className="text flex flex-col p-4">
        <h1 className="title text-xl font-bold leading-tight mb-0">
          {job.jobTitle}
        </h1>
        <div className="date mt-4">
          <i className="fas fa-calendar-days mr-2"></i>
          <span>{job.datePosted}</span>
        </div>
        <div className="comment mt-1">
          <i className="fas fa-comments mr-2"></i>
          <span>{job.requirements.length} requirements</span>
        </div>
        <div className="description mt-4">{job.jobDescription}</div>
        <div className="requirements mt-4">
          <h2 className="font-bold">Requirements:</h2>
          <ul className="list-disc list-inside">
            {job.requirements.map((req) => (
              <li key={req}>{req}</li>
            ))}
          </ul>
        </div>
        <div className="company mt-4">
          <h2 className="font-bold">Company:</h2>
          <p>{job.company}</p>
        </div>
        <div className="location mt-4">
          <h2 className="font-bold">Location:</h2>
          <p>{job.location}</p>
        </div>
        <div className="salary mt-4">
          <h2 className="font-bold">Salary:</h2>
          <p>{job.salary}</p>
        </div>
        <div className="mt-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={onPreviousClick}
          >
            Previous
          </button>
        </div>
      </div>
    </div>
  );
};

const Jobs = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  const handleJobClick = (jobId) => {
    const job = dummy.find((job) => job.id === jobId);
    setSelectedJob(job);
  };

  return (
    <div className="container mx-auto my-10">
      <h1 className="text-center font-bold text-3xl my-8">
        Latest Job Openings
      </h1>
      <div className="job-list">
        {selectedJob ? (
          <JobDetails
            job={selectedJob}
            onPreviousClick={() => setSelectedJob(null)}
          />
        ) : (
          <Slider {...settings}>
            {dummy.map((job) => (
              <div key={job.id}>
                <JobCard job={job} onJobClick={handleJobClick} />
              </div>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default Jobs;