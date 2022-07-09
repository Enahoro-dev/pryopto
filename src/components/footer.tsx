import React from 'react';
import {FaInstagram} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';

const Footer:React.FC = () => {
  return (
    <div className=' bg-newblack pt-16 text-center text-newwhite pb-20'>
        <div className="flex justify-center items-center mb-4">
            <FaInstagram className='text-3xl mr-4'/>
            <FaTwitter className='text-3xl'/>
        </div>
        <p className="mb-4">Email: info@pryopto.com</p>
        <p className="mb-4">Telephone: +234 706 722 0619</p>
        <p className="">&copy; pryopto.com</p>
    </div>
  )
}

export default Footer