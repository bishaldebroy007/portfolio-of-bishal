import React from 'react'

const HeroSection = () => {
    return (
        <div>
            {/* NavBar will be here */}
            <div className="hero bg-base-200 min-h-[400px] sm:min-h-[550px] md:min-h-[650px] lg:min-h-[750px]">
                <div className="hero-content text-center">
                    <div className="max-w-md px-4 sm:px-6">
                        <img
                            src="/Graduation photo.jpg"
                            alt="Bishal Deb Roy"
                            className="rounded-full w-48 h-58 sm:w-64 sm:h-74 md:w-72 md:h-82 lg:w-76 lg:h-86 mx-auto mb-4 sm:mb-6 border-4 border-white hover:border-green-500 hover:scale-110 duration-500 animate__animated animate__wobble animate__delay-1s"
                        />
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Bishal Deb Roy</h1>
                        <a
                            href="/Resume_Bishal.pdf"
                            download="Bishal Deb Roy_Resume.pdf"
                            className="btn bg-green-700 hover:scale-105 duration-300 hover:bg-green-500 hover:text-black text-white rounded-2xl mt-3 sm:mt-4 hover:outline-2 font-normal text-lg sm:text-xl md:text-2xl animate__animated animate__flip animate__delay-1.5s"
                        >
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection