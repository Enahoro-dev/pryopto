import React, {useRef} from 'react'
import {forms} from './formmodel'
//forms imported containing all form info in a model
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import emailjs from 'emailjs-com';

interface Props{
    setFormopen:React.Dispatch<React.SetStateAction<boolean>>,
}

const schema = yup
  .object()
  .shape({
    firstname: yup.string().required('Please enter your firstname'),
    lastname: yup.string().required('Please enter your lastname'),
    email: yup.string().email('Invalid email format').required('Please enter your email'),
    phone:yup.number().required('Please enter your phone number').typeError('Please enter a valid phone number'),
    company:yup.string().notRequired(),
    budget:yup.number().required('Please enter an amount').typeError('Please enter an amount'),
    message:yup.string().required('Please briefly describe your company')
  })
  .required();



const Form:React.FC<Props> = ({ setFormopen}) =>{ 
  const formref = useRef<HTMLFormElement>(null);  
  const{register, handleSubmit,  formState:{errors}}=useForm(
      {
          resolver:yupResolver(schema),
      }
  );

  const onSubmit=(data,e )=> {
      console.log(data);

      emailjs.sendForm('gmail', 'template1', e.target, 'AqEWY2tELT5FdHs4y')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
      setFormopen(false)
  };

  return (
        <form ref={formref} action="#" onSubmit={handleSubmit(onSubmit)} className='pt-8 pb-6 px-6 bg-newwhite rounded-sm w-5/6 left-0 right-0 mx-auto flex items-center justify-center flex-col absolute top-10 z-20 sm:w-3/4 md:w-3/5 lg:w-1/2 lg:pb-8 lg:pb-10  xl:w-2/5' noValidate>    
            {//loop through all the form objects from the imported form model
            forms.map((form)=>(
                <div className="w-full h-10 mb-4">
                    <input type={form.type}  id={form.name} {...register(form.name,{required:true})} placeholder={form.placeholder} className='bg-lightgrey w-full h-10 text-newgrey px-4 text-sm md:text-base'/>
                    <div className='text-newred text-left text-xs ml-2 mb-2'><>{errors[form.name]?.message} </></div>
                </div>     
            ))}
            <textarea  id="" {...register('message',{required:true})} placeholder='Message' className='bg-lightgrey w-full h-20 pt-2  mt-4 text-newgrey px-4 text-sm md:text-base'/>
            <div className='text-newred text-left text-xs ml-2'><>{errors['message']?.message} </></div>
            <input type="submit" className='bg-neworange rounded-sm text-newwhite h-8 w-28 mt-4 md:h-10 md:w-28 md:text-lg' value='Send'/>
        </form>
  )
}

export default Form