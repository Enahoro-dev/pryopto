import React,{useRef, useEffect} from 'react'


interface Props{
    setFormopen:React.Dispatch<React.SetStateAction<boolean>>,
    formref:React.RefObject<HTMLDivElement>,
}

const Hero:React.FC<Props> = ({ setFormopen, formref}) => {

    const buttonref= useRef<HTMLButtonElement>(null)
    useEffect(() => {
        // when screen is clicked close form except click event target is take action button (to open form) or the form itself
        document.body.addEventListener('click', ({target}: MouseEvent) =>{
            if (formref.current?.contains(target as Node)){
              return;
            }else if(buttonref.current?.contains(target as Node)){
                setFormopen(true)
                return;
             }else{setFormopen(false)}   
            
        });
    }, [formref,setFormopen]);
    

    
  

  return (
    <div className='bg-newwhite'>
        <div className=' items-center justify-center pb-8 pt-8 bg-newwhite sm:flex sm:w-11/12 sm:ml-auto sm:mr-0 sm:pt-16' >
        <div className='left text-center w-4/5 mr-auto ml-auto sm:w-1/2 sm:text-start lg:w-2/5 '>
            <h1 className='text-newgrey text-3xl mb-6 mt-6 font-semibold lg:text-5xl lg:mb-6'>Push your <span className='text-neworange'>Identity</span></h1>
            <p className='text-newblack mb-4 lg:mb-6 lg:text-2xl'>Pryopto is a digital marketing and PR agency passionate about promoting cryptocurrency brands and creating identities for blockchain startups.</p>
            <button id='btn' ref={buttonref}  className=' bg-newgrey w-48 h-10 rounded-sm lg:h-14 lg:w-56'><p className='text-newwhite text-base lg:text-lg'>Take Action</p></button>
        </div>
        <div className='right sm:w-1/2'>
            <div className='bg-hero-pattern bg-cover mt-10 h-72 flex items-center justify-center sm:mt-0 lg:h-96'>
                <img className='w-52 h-64 lg:w-60 lg:h-72' src={require("../assets/founder.png")} alt="pryopto logo" />
            </div>
        </div>
    </div>
    </div>  
  )
}

export default Hero