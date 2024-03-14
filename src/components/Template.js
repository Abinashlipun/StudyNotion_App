import React from 'react'
import frameImage from "../assets/frame.png"
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import {FcGoogle} from 'react-icons/fc'


const Template = ({title, desc1, desc2, image, formtype, setIsLoggedIn}) => {

    console.log("ye rha mera form type");
    console.log(formtype)
  return (
    <div className='flex w-11/12 max-w-[1160px] py-12 px-auto gap-x-12 gap-y-0'>

        <div className='w-11/12 max-w-[450px] '>
            <h1
            className='text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]'>{title}</h1>
            <p
            className='text-[1.125rem] leading-[1.625rem] mt-4'>
                <span
                className='text-richblack-100'>{desc1}</span><br/>
                <span
                className='text-richblack-100 italic'>{desc2}</span>
            </p>

            {formtype === "signup" ? 
            (<SignupForm setIsLoggedIn={setIsLoggedIn}/>):
            (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

            <div className='flex w-full items-center my-4 gap-x-2'>
                <div className='w-full h-[1px] bg-richblack-700'></div>
                <p className='text-richblack-700 font-medium leading-[1.375rem]'
                >OR</p>
                <div className='w-full h-[1px] bg-richblack-700'></div>
                
            </div>

            <button className='flex w-full justify-center items-center rounded-[8px] text-richblack-100 font-medium
            border border-richblack-700 px-[12px] py-[10px] gap-x-2 gap-y-6'>
            <FcGoogle/> 
                <p>Sign Up with Google</p>
            </button>

        </div>

        <div className='relative w-11/12 max-w-[450px]'>
            <img src={frameImage}
                alt="Pattern"
                width={558}
                height={504}
                loading="lazy"/>

            <img 
            src={image}
                alt="Students"
                width={558}
                height={490}
                loading="lazy"
                className='absolute -top-4 right-4'
                />    
               
        </div>

    </div>
  )
}

export default Template
