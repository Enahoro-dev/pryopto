import React from 'react';
import {FaInstagram} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';

const Footer:React.FC = () => {
  return (
    <div className=' bg-newblack pt-16 text-center text-newwhite pb-20'>
        <div className="flex justify-center items-center mb-4">
            <a className='text-newwhite' href='https://www.instagram.com' target='_blank'><FaInstagram className='text-3xl mr-4'/></a>
            <a className='text-newwhite' href='https://www.twitter.com/pryopto' target='_blank'><FaTwitter className='text-3xl'/></a>
        </div>
        <p className="mb-4">Email: info@pryopto.com</p>
        <p className="mb-4">Telephone: +234 706 722 0619</p>
        <p className="">&copy; pryopto.com</p>
    </div>
  )
}

export default Footer