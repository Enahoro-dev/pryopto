import React from 'react'

const About:React.FC = () => {
  return (
    <div className='bg-about bg-contain h-96 w-full ' id='vision'>
        <div className="overlay h-full text-newwhite text-center flex items-center justify-center flex-col pt-6 pb-6">
            <h2 className='text-3xl font-semibold mb-4 lg:text-5xl lg:mb-8'>Our Vision</h2>
            <p className='text-sm w-5/6 mx-auto sm:w-4/5 sm:text-base lg:w-3/5 lg:text-xl'>As an agency committed to driving mass mainstream adoption of Blockchain, we help Crypto projects (including NFTs, iGaming, DeFi, exchanges, and Web3) to get massive visibility and drive their visibility to mainstream finance. We realize that many projects have the budget to push their project to the next level, but they are often tangled in the web of proper marketing and planning. Our agency will help you plan your marketing budget for proper user acquisition.</p>
        </div>
    </div>
  )
}

export default About