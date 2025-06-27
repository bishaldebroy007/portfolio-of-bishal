import React from 'react'
import { GiGraduateCap } from "react-icons/gi";
import { FaSchool } from "react-icons/fa";
import { LuSchool } from "react-icons/lu";

const Education = () => {
    return (
        <div>
            <div className='py-30'>
                <h1 className='flex justify-center text-5xl font-bold text-white'>Education</h1>
            </div>
            <div className='pb-30'>
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                    <li>
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="timeline-start mb-10 md:text-end pr-5">
                            <time className="text-xl font-mono italic">2024</time>
                            <GiGraduateCap className='pb-1' size={40} />
                            <div className="text-xl font-bold">BRAC University. <span className='text-md font-normal'> Dhaka, Bangladesh</span></div>
                            <div className='flex gap-5'>
                                <div className='text-lg font-normal text-white'>B.Sc</div>
                                <div className='text-lg font-normal text-white'>Computer Science</div>
                            </div>
                        </div>
                        <hr className='bg-green-700' />
                    </li>
                    <li>
                        <hr className='bg-green-700' />
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="timeline-end md:mb-10 pl-5">
                            <time className="text-xl font-mono italic">2019</time>
                            <FaSchool className='my-2' size={25} />
                            <div className="text-lg font-bold">Higher Secondary (HSC). <span className='text-md font-normal'> Sylhet, Bangladesh</span></div>
                            <div className='flex gap-5'>
                                <div className='text-lg font-normal text-white'>Science</div>
                                <div className='text-lg font-normal text-white'>GPA: 4.17</div>
                            </div>
                        </div>
                        <hr className='bg-green-700' />
                    </li>
                    <li>
                        <hr className='bg-green-700' />
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="timeline-start mb-10 md:text-end pr-5">
                            <time className="text-xl font-mono italic">2017</time>
                            <LuSchool className='my-2' size={25} />
                            <div className="text-lg font-bold">Secondary School (HSC). <span className='text-md font-normal'> Sylhet, Bangladesh</span></div>
                            <div className='flex gap-5'>
                                <div className='text-lg font-normal text-white'>Science</div>
                                <div className='text-lg font-normal text-white'>GPA: 5.00</div>
                            </div>
                        </div>
                        <hr className='bg-green-700' />
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Education
