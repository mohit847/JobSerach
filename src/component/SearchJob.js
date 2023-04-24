import React, { useState } from 'react';
import FilteredTags from './FilteredTags';
import Footer from './Footer';

function SearchJob() {
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');
  const [filteredJobs, setFilteredJobs] = useState([]);

  const handleKeywordChange = (event) => {
    setKeyword(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSearch = async () => {
    const response = await fetch('../data/dummy.json');
    const jobs = await response.json();
    const filteredJobs = filterJobs(jobs, keyword, location);
    setFilteredJobs(filteredJobs);
  };

  const filterJobs = (jobs, keyword, location) => {
    if (!Array.isArray(jobs)) {
      return [];
    }

    return jobs.filter((job) => {
      const { title, location: jobLocation, description } = job;

      return (
        title.toLowerCase().includes(keyword.toLowerCase()) &&
        jobLocation.toLowerCase().includes(location.toLowerCase())
      );
    });
  };

  return (
    <>
      <div className=' bg-zinc-300   m-20 ml-32 p-10'>
        <div className=' justify-center gap-6 flex flex-wrap md:flex-nowrap '>
          <input className='rounded-sm p-2 border-stone-600 border ' placeholder='Keyword' value={keyword} onChange={handleKeywordChange}></input>
          <input className='rounded-sm p-2 border-stone-600 border ' placeholder='location' value={location} onChange={handleLocationChange}></input>
          <button className='rounded-sm p-2 bg-gray-500 text-white' onClick={handleSearch}>Search</button>

        </div>
        <div className='mt-10'>
          <FilteredTags />
        </div>
      </div>
      {filteredJobs.length > 0 ? (
        <ul>
          {filteredJobs.map((job) => (
            <li key={job.id}>
              <h3>{job.title}</h3>
              <p>{job.location}</p>
              <p>{job.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}

      <Footer />
    </>
  );
}

export default SearchJob;
