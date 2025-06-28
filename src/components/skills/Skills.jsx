import React from 'react'
import { TiHtml5 } from "react-icons/ti";
import { FaCss3 } from "react-icons/fa";
import { TbBrandTailwind } from "react-icons/tb";
import { SiDaisyui } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { DiNodejs } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandPython } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { DiDjango } from "react-icons/di";
import { SiPostman } from "react-icons/si";
import { FaGit } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { FcLinux } from "react-icons/fc";
import { SiNumpy } from "react-icons/si";
import { SiPandas } from "react-icons/si";

const Skills = () => {
    return (
        <div id='skills' className='bg-white text-black min-h-[500px] px-4 sm:px-6 md:px-8 lg:px-30 py-10 sm:py-16 md:py-20'>
            <div className='flex justify-center text-3xl sm:text-4xl md:text-5xl font-bold pb-10 sm:pb-20 md:pb-30'>Skills</div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 justify-items-center'>
                <div className='hover:scale-110 transition-transform duration-500 flex flex-col items-center'>
                    <TiHtml5 className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-25 lg:h-25' color='orange' />
                    <h6 className='text-sm sm:text-base md:text-lg font-medium mt-2'>HTML5</h6>
                </div>
                <div className='hover:scale-110 transition-transform duration-500 flex flex-col items-center'>
                    <FaCss3 className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-25 lg:h-25' color='blue' />
                    <h6 className='text-sm sm:text-base md:text-lg font-medium mt-2'>CSS</h6>
                </div>
                <div className='hover:scale-110 transition-transform duration-500 flex flex-col items-center'>
                    <TbBrandTailwind className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-25 lg:h-25' color='skyBlue' />
                    <h6 className='text-sm sm:text-base md:text-lg font-medium mt-2'>Tailwind CSS</h6>
                </div>
                <div className='hover:scale-110 transition-transform duration-500 flex flex-col items-center'>
                    <SiDaisyui className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-25 lg:h-25' color='orange' />
                    <h6 className='text-sm sm:text-base md:text-lg font-medium mt-2'>Daisy UI</h6>
                </div>
                <div className='hover:scale-110 transition-transform duration-500 flex flex-col items-center'>
                    <SiShadcnui className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-25 lg:h-25' />
                    <h6 className='text-sm sm:text-base md:text-lg font-medium mt-2'>ShadCn</h6>
                </div>
                <div className='hover:scale-110 transition-transform duration-500 flex flex-col items-center'>
                    <IoLogoJavascript className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-25 lg:h-25' color='yellow' />
                    <h6 className='text-sm sm:text-base md:text-lg font-medium mt-2'>JavaScript</h6>
                </div>
                <div className='hover:scale-110 transition-transform duration-500 flex flex-col items-center'>
                    <SiTypescript className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-25 lg:h-25' color='Blue' />
                    <h6 className='text-sm sm:text-base md:text-lg font-medium mt-2'>TypeScript</h6>
                </div>
                <div className='hover:scale-110 transition-transform duration-500 flex flex-col items-center'>
                    <TbBrandPython className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-25 lg:h-25' color='' />
                    <h6 className='text-sm sm:text-base md:text-lg font-medium mt-2'>Python</h6>
                </div>
                <div className='hover:scale-110 transition-transform duration-500 flex flex-col items-center'>
                    <IoLogoReact className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-25 lg:h-25' color='skyBlue' />
                    <h6 className='text-sm sm:text-base md:text-lg font-medium mt-2'>React JS</h6>
                </div>
                <div className='hover:scale-110 transition-transform duration-500 flex flex-col items-center'>
                    <DiNodejs className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-25 lg:h-25' color='green' />
                    <h6 className='text-sm sm:text-base md:text-lg font-medium mt-2'>Node JS</h6>
                </div>
                <div className='hover:scale-110 transition-transform duration-500 flex flex-col items-center'>
                    <SiMongodb className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-25 lg:h-25' color='green' />
                    <h6 className='text-sm sm:text-base md:text-lg font-medium mt-2'>Mongo DB</h6>
                </div>
                <div className='hover:scale-110 transition-transform duration-500 flex flex-col items-center'>
                    <SiMysql className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-25 lg:h-25' color='B' />
                    <h6 className='text-sm sm:text-base md:text-lg font-medium mt-2'>MySQL</h6>
                </div>
                <div className='hover:scale-110 transition-transform duration-500 flex flex-col items-center'>
                    <SiExpress className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-25 lg:h-25' color='black' />
                    <h6 className='text-sm sm:text-base md:text-lg font-medium mt-2'>Express JS</h6>
                </div>
                <div className='hover:scale-110 transition-transform duration-500 flex flex-col items-center'>
                    <RiNextjsFill className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-25 lg:h-25' color='' />
                    <h6 className='text-sm sm:text-base md:text-lg font-medium mt-2'>Next JS</h6>
                </div>
                <div className='hover:scale-110 transition-transform duration-500 flex flex-col items-center'>
                    <DiDjango className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-25 lg:h-25' color='green' />
                    <h6 className='text-sm sm:text-base md:text-lg font-medium mt-2'>Django</h6>
                </div>
                <div className='hover:scale-110 transition-transform duration-500 flex flex-col items-center'>
                    <SiPostman className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-25 lg:h-25' color='orange' />
                    <h6 className='text-sm sm:text-base md:text-lg font-medium mt-2'>Postman</h6>
                </div>
                <div className='hover:scale-110 transition-transform duration-500 flex flex-col items-center'>
                    <FaGit className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-25 lg:h-25' color='darkRed' />
                    <h6 className='text-sm sm:text-base md:text-lg font-medium mt-2'>Git & GitHub</h6>
                </div>
                <div className='hover:scale-110 transition-transform duration-500 flex flex-col items-center'>
                    <SiNumpy className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-25 lg:h-25' color='skyBlue' />
                    <h6 className='text-sm sm:text-base md:text-lg font-medium mt-2'>NumPy</h6>
                </div>
                <div className='hover:scale-110 transition-transform duration-500 flex flex-col items-center'>
                    <SiPandas className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-25 lg:h-25' color='darkBlue' />
                    <h6 className='text-sm sm:text-base md:text-lg font-medium mt-2'>Pandas</h6>
                </div>
                <div className='hover:scale-110 transition-transform duration-500 flex flex-col items-center'>
                    <FcLinux className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-25 lg:h-25' />
                    <h6 className='text-sm sm:text-base md:text-lg font-medium mt-2'>Linux</h6>
                </div>
            </div>
        </div>
    )
}

export default Skills