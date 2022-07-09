import React,{useRef, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import { Link } from 'react-scroll';
import '../App.css';

interface Props{
    active:boolean,
    setActive:React.Dispatch<React.SetStateAction<boolean>>,
    
}


const Header:React.FC<Props> = ({active,setActive}) => {
const barRef = useRef<HTMLButtonElement>(null) 

useEffect(() => {
    document.body.addEventListener('click', ({target}: MouseEvent) =>{
        if (barRef.current?.contains(target as Node)){
          return;
        }
        setActive(false)  
        
    });
}, [barRef,setActive]);

const toggleNav = () =>{
    setActive(!active)
}

    return(
        <div className='flex items-center bg-newwhite sticky top-0 shadow-md h-20'>
            <div className='md:mr-auto'><img className='w-32 md:w-40 ml-4 md:ml-8' src={require("../assets/pryoptologo.png")} alt="pryopto logo" /></div>
            <button ref={barRef} className='ml-auto mr-8 text-2xl md:hidden' onClick={toggleNav}><FaBars className='text-lg'/></button>
            <div className={`nav_section md:block ${active ? 'block':'hidden'}`}>
                <nav className='text-center bg-newwhite z-10  p-4 w-40 text-lg absolute shadow-xl md:shadow-none right-8 top-8 md:static md:w-auto'>
		            <ul className=' md:flex md:flex-row md:items-center md:text-xl font-medium  md:font-semibold'>
                        <li className='cursor-pointer md:mr-10'>
                            <Link activeClass="active" onClick={toggleNav} spy={true} smooth={true} offset={-100} duration={500} to="vision">
                            Our Vision
                            </Link>
                        </li>
                        <li className='cursor-pointer md:mr-10'>
                            <Link activeClass="active" onClick={toggleNav} spy={true} smooth={true} offset={-100} duration={500} to="services">
                            Services
                            </Link>
                        </li>
                        <li className='cursor-pointer md:mr-10'>
                            <Link activeClass="active" onClick={toggleNav} spy={true} smooth={true} offset={-100} duration={500} to="experience">
                            Experience
                            </Link>
                        </li>
		            </ul>
	            </nav>
            </div>
        </div>
    )
}

export default Header
//Header