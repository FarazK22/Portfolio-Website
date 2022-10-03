import React from 'react'
import Image from "next/image";

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#121641]'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-600'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, magni. Rerum, ut! Molestiae, deleniti autem aliquam corporis atque repellat quis ut, repudiandae, itaque maiores aperiam libero eaque sequi eius eligendi!</p>
                <p className='py-2 text-gray-600'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, magni. Rerum, ut! Molestiae, deleniti autem aliquam corporis atque repellat quis ut, repudiandae, itaque maiores aperiam libero eaque sequi eius eligendi!</p>
                <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects.</p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image className='rounded-xl' src="/../public/assets/me.png" width='450' height='450' alt="/" />
            </div>
        </div>
    </div>
  )
}

export default About