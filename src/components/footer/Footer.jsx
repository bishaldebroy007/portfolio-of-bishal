import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-green-900 text-base-content rounded p-10">
            <nav className="grid grid-flow-col gap-4">
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>

            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a>
                        <FaLinkedin className='hover:scale-130 duration-300 cursor-pointer' size={35} />
                    </a>
                    <a>
                        <FaSquareGithub className='hover:scale-130 duration-300 cursor-pointer' size={35} />
                    </a>
                    <a>
                        <FaFacebook className='hover:scale-130 duration-300 cursor-pointer' size={35} />
                    </a>
                    <a>
                        <FaFacebook className='hover:scale-130 duration-300 cursor-pointer' size={35} />
                    </a>
                </div>
            </nav>
            <aside>
                <p>Copyright © {new Date().getFullYear()} - Bishal Deb Roy</p>
            </aside>
        </footer>
    )
}

export default Footer
