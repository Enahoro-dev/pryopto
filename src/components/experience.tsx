import React from 'react'
import {companies} from './companies'

const Experience:React.FC = () => {
  return (
    <div id='experience' className='flex text-center bg-lightgrey w-full flex-col pb-12'>
        <h2 className='text-newblack text-3xl font-bold mt-12 mb-2 lg:text-4xl'>Trust Our Experience</h2>
        <p className='w-3/5 mx-auto text-sm mb-4'>We have worked with top brands, and we have the reach you need.</p>
        <div className='flex flex-wrap justify-center items-center w-3/5 mx-auto'>
            {companies.map((company)=>(
                <div key={company.id} className='w-24  mr-2 md:w-28 lg:w-32 mb-4'><img className='object-contain' src={company.logo} alt="logo" /></div> 
            ))}
        </div>
        
    </div> 
  )
}

export default Experience
//grid grid-cols-2 justify-items-center w-3/4 mx-auto mt-16 mb-12 sm:grid-cols-3 w-