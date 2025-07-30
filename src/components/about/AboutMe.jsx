import React from 'react'

const AboutMe = () => {
    return (
        <div className="hero bg-green-900 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src="Raj image.jpg"
                    className="max-h-xs max-w-3xs md:max-h-sm md:max-w-sm rounded-2xl shadow-2xl outline-2"
                />
                <div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">About Me</h1>
                    <p className="py-6 pr-2 md:pr-5 text-base md:text-lg lg:text-xl text-wrap">
                        Passionate about Front-End Development (HTML, CSS, JS, TS) and expanding into full-stack with React & NEXT JS, I also explore Python, Data Science, and Machine Learning, along with frameworks like, Django. With a research background in Human-Computer Interaction (HCI), I focus on enhancing user experiences through innovation. A lifelong learner and collaborative leader, I thrive in dynamic environments, driving projects with creativity and a growth mindset. Let's shape the future of tech together!
                    </p>
                    <a href="https://www.linkedin.com/in/bishal-deb-roy-0b31241a0/" target="_blank" >
                        <button className="btn btn-lg mt-3 rounded-xl text-white hover:outline-2 duration-300">Learn More
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

// Passionate about Front-End Development (HTML, CSS, JS) and expanding into full-stack with React, I also explore Python, Data Science, and Machine Learning, along with frameworks like, NEXT JS & Django. With a research background in Human-Computer Interaction (HCI), I focus on enhancing user experiences through innovation. A lifelong learner and collaborative leader, I thrive in dynamic environments, driving projects with creativity and a growth mindset. Let's shape the future of tech together!

export default AboutMe
