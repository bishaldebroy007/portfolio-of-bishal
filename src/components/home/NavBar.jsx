import React from 'react'

const NavBar = () => {
    return (
        <div className="navbar bg-base-200 shadow-sm animate__animated animate__fadeInDownBig">
            <div className="absolute inset-y-0 left-0 w-48 bg-white transform -skew-x-12 origin-top-left -ml-16 shadow-xl flex items-center justify-center z-0">
                {/*
    The GitHub button.
    - transform skew-x-12: This counteracts the parent's -skew-x-12, making the button appear straight.
  */}
                <a
                    href="https://github.com"
                    target="_blank"
                    className="p-2 ml-15 rounded-full bg-base-100 hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition ease-in-out duration-300 transform skew-x-12"
                    rel="noopener noreferrer" // Added for security when using target="_blank"
                >
                    {/* GitHub Icon (SVG) - standard GitHub logo path */}
                    <svg
                        className="w-6 h-6 text-white"
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
            <div className="flex-1">
                <h2 className="text-2xl font-bold pl-35 hover:opacity-80 hover:text-green-400 transition-transform duration-500 cursor-pointer">Portfolio</h2>
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
