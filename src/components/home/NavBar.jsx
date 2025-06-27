import React from 'react'

const NavBar = () => {
    return (
        <div className="navbar bg-base-200 shadow-sm">
            <div className="flex-1">
                <h2 className="text-2xl font-bold pl-2 hover:opacity-80 hover:text-green-400 transition-transform duration-500 cursor-pointer">Portfolio</h2>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 gap-x-10 text-lg">
                    <li><a href='#aboutMe'>About Me</a></li>
                    <li><a href='#projects'>Projects</a></li>
                    <li><a href='#skills'>Skills</a></li>
                    <li><a href='#education'>Education</a></li>
                    <li><a href='#foot'>Contact Me</a></li>
                    <li>
                        <details>
                            <summary>Social Media</summary>
                            <ul className="bg-emerald-700 rounded-t-none p-5">
                                <li><a>LinkedIn</a></li>
                                <li><a>Facebook</a></li>
                                <li><a>Instagram</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar
