import React from 'react'

const NavBar = () => {
    return (
        <div className="navbar bg-base-200 shadow-sm animate__animated animate__fadeInDownBig">
            {/* GitHub Button Container */}
            <div className="absolute inset-y-0 left-0 w-16 sm:w-24 md:w-32 lg:w-48 bg-white transform -skew-x-12 origin-top-left -ml-8 sm:-ml-12 md:-ml-16 shadow-xl flex items-center justify-center z-0">
                <a
                    href="https://github.com/bishaldebroy007"
                    target="_blank"
                    className="p-1 sm:p-2 ml-8 sm:ml-12 md:ml-15 rounded-full bg-base-100 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-800 focus:ring-opacity-50 transition ease-in-out duration-300 transform skew-x-12 scale-110"
                    rel="noopener noreferrer"
                >
                    <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017 2 16.292 4.84 19.88 8.875 21.05 9.375 21.157 9.545 20.842 9.545 20.505v-1.127c-3.327.724-4.026-1.611-4.026-1.611-.546-1.387-1.334-1.758-1.334-1.758-1.09-.745.083-.73 0-.73.992.072 1.513 1.026 1.513 1.026.885 1.51 2.313 1.074 2.87.82.091-.637.345-1.074.634-1.32-.26-.295-.572-.656-.572-1.258 0-1.047.8-1.897 1.785-2.115-.084-.294-.167-.585-.167-.88 0-.623.237-1.123.633-1.51-1.464-.157-3.003-.49-3.003-3.292 0-.88.315-1.606.83-2.176-.083-.29-.364-1.37.08-2.85 0 0 .676-.217 2.21.82.64-.178 1.32-.266 2.007-.294.686.028 1.368.116 2.007.294 1.533-1.037 2.208-.82 2.208-.82.446 1.48.165 2.56.083 2.85.515.57.828 1.296.828 2.176 0 2.802-1.54 3.135-3.004 3.292.23.197.437.587.437 1.182 0 .86-.008 1.956-.008 2.22 0 .33.17.65.666.54C19.16 19.873 22 16.286 22 12.017 22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                        />
                    </svg>
                </a>
            </div>

            {/* Portfolio Title */}
            <div className="flex-1">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold pl-12 sm:pl-20 md:pl-28 lg:pl-35 hover:opacity-80 hover:text-green-400 transition-transform duration-500 cursor-pointer">Portfolio</h2>
            </div>

            {/* Navigation Links */}
            <div className="flex-none">
                {/* Mobile Menu Button (Hamburger) */}
                <div className="dropdown dropdown-end md:hidden">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52">
                        <li><a href='#aboutMe'>About Me</a></li>
                        <li><a href='#projects'>Projects</a></li>
                        <li><a href='#skills'>Skills</a></li>
                        <li><a href='#education'>Education</a></li>
                        <li><a href='#foot'>Contact Me</a></li>
                        <li>
                            <details>
                                <summary>Social Media</summary>
                                <ul className="bg-emerald-700 rounded-t-none p-2">
                                    <li><a
                                        href="https://www.linkedin.com/in/bishal-deb-roy-0b31241a0/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block hover:scale-125 duration-300"
                                        aria-label="Visit my LinkedIn profile"
                                    >LinkedIn</a></li>
                                    <li><a
                                        href="https://www.facebook.com/bishal.deb.roy.raj/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block hover:scale-125 duration-300"
                                        aria-label="Visit my Facebook profile"
                                    >Facebook</a></li>
                                    <li><a
                                        href="https://www.instagram.com/raj.roy.__/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block hover:scale-125 duration-300"
                                        aria-label="Visit my Instagram profile"
                                    >Instagram</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex menu menu-horizontal px-1 gap-x-4 lg:gap-x-6 xl:gap-x-10 text-sm sm:text-base md:text-lg">
                    <li><a href='#aboutMe'>About Me</a></li>
                    <li><a href='#projects'>Projects</a></li>
                    <li><a href='#skills'>Skills</a></li>
                    <li><a href='#education'>Education</a></li>
                    <li><a href='#foot'>Contact Me</a></li>
                    <li>
                        <details>
                            <summary>Social Media</summary>
                            <ul className="bg-emerald-700 rounded-t-none p-2">
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