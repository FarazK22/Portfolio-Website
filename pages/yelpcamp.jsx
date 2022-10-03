import React from 'react';
import Image from 'next/image';
import campfireImg from '../public/assets/projects/campfire.jpg'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link';

const yelpcamp = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'/>
                <Image className='absolute z-1' layout='fill' objectFit='cover' src={campfireImg} alt='/'/>
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>YelpCamp</h2>
                    <h3>Express / HTML / CSS / MongoDB</h3>
                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quidem eos temporibus perferendis iste, dicta ad sit. Architecto quisquam libero cum officiis vitae? Ab earum illum corrupti dicta est ratione!</p>
                    <button className='px-8 py-2 mt-4 mr-8'>Github</button>
                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='p-2'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                        <div className='grid grid-cols-3 md:grid-cols-1'>
                            <div>
                                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>
                                Express
                                </p>
                                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>
                                HTML
                                </p>
                                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>
                                CSS
                                </p>
                                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>
                                MongoDB
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                    <Link href='/'>
                        <p className='underline cursor-pointer'>Back</p>
                    </Link>
            </div>
        </div>
  )
}

export default yelpcamp