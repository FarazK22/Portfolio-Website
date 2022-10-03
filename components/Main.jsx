import React from 'react'
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import {FaLinkedinIn , FaGithub} from 'react-icons/fa';
import {BsPersonLinesFill} from 'react-icons/bs';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase tracking-widest text-gray-600'>LET'S BUILD SOMETHING TOGETHER</p>
                <h1 className='py-4 text-gray-700'>Hi, I'm <span className='text-[#121641]'>Faraz</span></h1>
                <h2 className='py-4 text-gray-700'>A Computer Science Student</h2>
                <p className='py-4 text-gray-500 max-w-[70%] m-auto'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sequi eligendi praesentium sunt, beatae saepe ad est et perferendis numquam ab aut assumenda itaque vel rem aperiam aliquam? A, dolorem!
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaLinkedinIn/>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaGithub/>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineMail/>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <BsPersonLinesFill/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main