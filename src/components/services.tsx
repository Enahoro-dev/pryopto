import React from 'react'
import {services} from './servicesmodel'

const Services:React.FC = () => {
  return (
    <div className='services bg-newwhite pt-10' id='services' >
        <div className=' w-5/6 mx-auto'>
        <h2 className='text-4xl font-bold text-center text-newblack mb-10 lg:text-5xl'>Services</h2>
        {services.map((service) =>(
            <div className='service flex justify-center items-center flex-col md:hidden' key={service.id}>
                <h3 className='text-xl font-extrabold mb-2 text-center'>{service.heading}</h3>
                <p className='w-4/5 text-center text-sm mb-4'>{service.body}</p>
                <img className='w-28 mb-16' src={service.logo} alt="icon" />
            </div>
        ))}
        {// map the services array with alternate syles in every service to form a ziz zag pattern
        services.map(function(service,index) {
            if(index % 2 === 0 ){
                return(
                    <div className='hidden service justify-center items-center w-11/12 mx-auto mb-16 md:flex lg:w-4/6' key={service.id}>
                        <div className='w-2/5'>
                            <img className='max-w-[180px]' src={service.logo} alt="icon" />
                        </div>
                        <div className='w-3/5  text-end'>
                            <h3 className='text-3xl font-extrabold mb-2'>{service.heading}</h3>
                            <p className=' text-lg font-semibold '>{service.body}</p>
                        </div>   
                    </div>
                )
            }
            return(
                <div className='hidden service justify-center items-center w-11/12 mx-auto mb-16 md:flex lg:w-4/6' key={service.id}>
                        <div className='w-3/5  text-start mr-24'>
                            <h3 className='text-3xl font-extrabold mb-2'>{service.heading}</h3>
                            <p className=' text-lg font-semibold'>{service.body}</p>
                        </div>   
                        <div className='w-2/5 pl-24'>
                            <img className='max-w-[180px]' src={service.logo} alt="icon" />
                        </div>
                    </div>
            )
        })}
        </div>
        
    </div>
  )
}

export default Services