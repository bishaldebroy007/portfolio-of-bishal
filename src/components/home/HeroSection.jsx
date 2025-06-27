import React from 'react'

const HeroSection = () => {
    return (
        <div>
            {/* NavBar will be here */}
            <div className="hero bg-base-200 min-h-[750px]">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <img src="public/Graduation photo.jpg" alt="Bishal Deb Roy" className="rounded-full w-76 h-85 mx-auto mb-6 border-4 border-white hover:border-green-500 hover:scale-110  duration-500" />
                        <h1 className="text-5xl font-bold">Bishal Deb Roy</h1>
                        <a
                            href="/path/to/your/resume.pdf" // Replace with actual path
                            download="YourName_Resume.pdf" // Suggested filename for download
                            className="btn bg-green-700 hover:scale-105 duration-300 hover:bg-green-500 hover:text-black text-white rounded-xl mt-4 font-normal text-2xl"
                        >
                            Resume
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
