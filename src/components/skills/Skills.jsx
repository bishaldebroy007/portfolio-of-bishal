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

const Skills = () => {
    return (
        <div className='bg-white text-black min-h-[500px] px-30 py-20'>
            <div className='flex justify-center text-5xl font-bold pb-30'>Skills</div>
            <div className='grid grid-cols-5 gap-2 justify-items-center'>
                <div className='hover:scale-110 transition-transform duration-500'>
                    <TiHtml5 size={100} color='orange' />
                    <h6 className='flex justify-center font-medium'>HTML5</h6>
                </div>
                <div className='hover:scale-110 transition-transform duration-500'>
                    <FaCss3 size={100} color='blue' />
                    <h6 className='flex justify-center font-medium'>CSS</h6>
                </div>
                <div className='hover:scale-110 transition-transform duration-500'>
                    <TbBrandTailwind size={100} color='skyBlue' />
                    <h6 className='flex justify-center font-medium'>Tailwind CSS</h6>
                </div>
                <div className='hover:scale-110 transition-transform duration-500'>
                    <SiDaisyui size={100} color='orange' />
                    <h6 className='flex justify-center font-medium pt-1'>Daisy UI</h6>
                </div>

                <div className='hover:scale-110 transition-transform duration-500'>
                    <SiShadcnui size={100} />
                    <h6 className='flex justify-center font-medium pt-1'>ShadCn</h6>
                </div>
                <div className='hover:scale-110 transition-transform duration-500'>
                    <IoLogoJavascript size={100} color='yellow' />
                    <h6 className='flex justify-center font-medium'>JavaScript</h6>
                </div>
                <div className='hover:scale-110 transition-transform duration-500'>
                    <SiTypescript size={100} color='Blue' />
                    <h6 className='flex justify-center font-medium pt-1'>TypeScript</h6>
                </div>
                <div className='hover:scale-110 transition-transform duration-500'>
                    <TbBrandPython size={100} color='' />
                    <h6 className='flex justify-center font-medium'>Python</h6>
                </div>
                <div className='hover:scale-110 transition-transform duration-500'>
                    <IoLogoReact size={100} color='skyBlue' />
                    <h6 className='flex justify-center font-medium'>React JS</h6>
                </div>
                <div className='hover:scale-110 transition-transform duration-500'>
                    <DiNodejs size={100} color='green' />
                    <h6 className='flex justify-center font-medium'>Node JS</h6>
                </div>
                <div className='hover:scale-110 transition-transform duration-500'>
                    <SiMongodb size={100} color='green' />
                    <h6 className='flex justify-center font-medium'>Mongo DB</h6>
                </div>
                <div className='hover:scale-110 transition-transform duration-500'>
                    <SiMysql size={100} color='B' />
                    <h6 className='flex justify-center font-medium'>MySQL</h6>
                </div>

                <div className='hover:scale-110 transition-transform duration-500'>
                    <RiNextjsFill size={100} color='' />
                    <h6 className='flex justify-center font-medium'>Next JS</h6>
                </div>
                <div className='hover:scale-110 transition-transform duration-500'>
                    <DiDjango size={100} color='green' />
                    <h6 className='flex justify-center font-medium'>Django</h6>
                </div>
                <div className='hover:scale-110 transition-transform duration-500'>
                    <SiPostman size={100} color='orange' />
                    <h6 className='flex justify-center font-medium'>Postman</h6>
                </div>
            </div>


        </div>
    )
}

export default Skills

