import React from 'react'
import FilteredTags from './FilteredTags'
import Recent_job from './Recent_job'
import Footer from './Footer'

function SearchJob() {
  return (<>
    <div className=' bg-zinc-300   m-20 ml-32 p-10'>
        <div className=' justify-center gap-6 flex flex-wrap md:flex-nowrap '>
            <input  className='rounded-sm p-2 border-stone-600 border ' placeholder='Keyword'></input>
            <input className='rounded-sm p-2 border-stone-600 border ' placeholder='location'></input>
            <input className='rounded-sm p-2 border-stone-600 border ' placeholder='Browse Category'></input>
        </div>
        <div className='mt-10'>
            
            <FilteredTags/>
        </div>
    </div>
            <Recent_job/>
            <Footer/>

    </>
  )
}

export default SearchJob