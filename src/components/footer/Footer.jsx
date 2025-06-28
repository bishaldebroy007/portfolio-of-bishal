import React, { useState } from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
    const [showAlert, setShowAlert] = useState(false);
    const emailAddress = 'rajroybishal@duck.com';

    const copyEmailToClipboard = () => {
        navigator.clipboard.writeText(emailAddress)
            .then(() => {
                setShowAlert(true);
                setTimeout(() => setShowAlert(false), 3000); // Hide alert after 3 seconds
            })
            .catch(err => {
                console.error('Failed to copy email: ', err);
                // You could add an error alert here if you want
            });

    };
    return (
        <footer id='foot' className="footer footer-horizontal footer-center bg-green-900 text-base-content rounded p-10">
            <nav className="text-white text-2xl font-semibold items-center">
                <h2>Contact Me</h2>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4 relative">
                    <a
                        href="https://www.linkedin.com/in/bishal-deb-roy-0b31241a0/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block hover:scale-125 duration-300"
                        aria-label="Visit my LinkedIn profile"
                    >
                        <FaLinkedin className='hover:scale-130 duration-300 cursor-pointer' size={35} />
                    </a>
                    <a
                        href="https://github.com/bishaldebroy007"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block hover:scale-125 duration-300"
                        aria-label="Visit my GitGub profile"
                    >
                        <FaSquareGithub className='hover:scale-130 duration-300 cursor-pointer' size={35} />
                    </a>
                    <a
                        href="https://www.facebook.com/bishal.deb.roy.raj/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block hover:scale-125 duration-300"
                        aria-label="Visit my Facebook profile"
                    >
                        <FaFacebook className='hover:scale-130 duration-300 cursor-pointer' size={35} />
                    </a>
                    <button
                        onClick={copyEmailToClipboard}
                        className="hover:scale-125 duration-300 cursor-pointer"
                        aria-label="Copy email the address"
                    >
                        <SiGmail className='hover:scale-110 duration-300 cursor-pointer' size={34} />
                    </button>
                    {/* DaisyUI Alert (shown conditionally) */}
                    {showAlert && (
                        <div className="fixed top-4 right-4 z-50 w-max">
                            <div role="alert" className="alert alert-success">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 shrink-0 stroke-current"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                <span>Email address copied to clipboard!</span>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
            <aside>
                <p>Copyright © {new Date().getFullYear()} - Bishal Deb Roy</p>
            </aside>
        </footer>
    )
}

export default Footer
