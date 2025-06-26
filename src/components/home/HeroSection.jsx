import React from 'react'

const HeroSection = () => {
    return (
        <div>
            {/* NavBar will be here */}
            <div className="hero bg-base-200 min-h-[750px]">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <img src="https://avatars.githubusercontent.com/u/100646626?v=4" alt="Bishal Deb Roy" className="rounded-full w-48 h-48 mx-auto mb-6" />
                        <h1 className="text-5xl font-bold">Bishal Deb Roy</h1>
                        <button className="btn bg-green-700 hover:bg-green-500 hover:text-black text-shadow-white rounded-xl mt-15 font-normal text-2xl">Resume</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
