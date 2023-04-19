import React from 'react';
import Navbar from './navbar';
import job5 from '../assets/blog5.jpg';
import SearchJob from './SearchJob';
export default function FindJob() {

 

  return (
    <>
        <Navbar/>
        <div className='bg-slate-200'>
          <h1 className='text-4xl font-bold flex justify-center p-8'>Find a job</h1>
        </div>
        <SearchJob/>

       


  
 
    
  </>
  )
}
