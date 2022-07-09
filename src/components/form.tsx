import React, {useRef} from 'react'
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
        <form ref={formref} action="#" onSubmit={handleSubmit(onSubmit)} className='pt-8 pb-6 px-6 bg-newwhite rounded-sm w-5/6 left-0 right-0 mx-auto flex items-start justify-start flex-col absolute top-10 z-20 sm:w-3/4 md:w-3/5 lg:w-1/2 lg:pb-8 lg:pb-10  xl:w-2/5' noValidate>
            <input type="text"  id="" {...register('firstname',{required:true})} placeholder='First Name' className='bg-lightgrey w-full h-10 text-newgrey px-4'/>
            <div className='text-newred text-left text-sm ml-2'><>{errors['firstname']?.message} </></div>
            <input type="text"  id="" {...register('lastname',{required:true})} placeholder='Last Name' className='bg-lightgrey w-full h-10 mt-4 text-newgrey px-4'/>
            <><div className='text-newred text-left text-sm ml-2'><>{errors['lastname']?.message} </></div> </>
            <input type="email"  id="" {...register('email',{required:true})} placeholder='Email' className='bg-lightgrey w-full h-10 mt-4 text-newgrey px-4'/>
            <div className='text-newred text-left text-sm ml-2'><>{errors['email']?.message} </></div>
            <input type="number"  id="" {...register('phone',{required:true})} placeholder='Phone Number' className='bg-lightgrey w-full h-10 mt-4 text-newgrey px-4' />
            <div className='text-newred text-left text-sm ml-2'><>{errors['phone']?.message} </></div>
            <input type="text" id="" {...register('company',{required:false})} placeholder='Company Name (Not required)' className='bg-lightgrey w-full h-10 mt-4 text-newgrey px-4'/>
            <div className='text-newred text-left text-sm ml-2'> <>{errors['company']?.message} </></div>
            <input type="number"  id="" {...register('budget',{required:true})} placeholder='Budget ($)' className='bg-lightgrey w-full h-10 mt-4 text-newgrey px-4'/>
            <div className='text-newred text-left text-sm ml-2'><>{errors['budget']?.message} </></div>
            <textarea  id="" {...register('message',{required:true})} placeholder='Message' className='bg-lightgrey w-full h-20 pt-2  mt-4 text-newgrey px-4'/>
            <div className='text-newred text-left text-sm ml-2'><>{errors['message']?.message} </></div>
            <input type="submit" className='bg-neworange rounded-sm text-newwhite h-8 w-24 mt-4' value='send'/>
        </form>
  )
}

export default Form