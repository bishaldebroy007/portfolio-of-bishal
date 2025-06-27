import React from 'react'

const AboutMe = () => {
    return (
        <div id='aboutMe' className='bg-white text-black min-h-[500px] px-30 py-40'>
            <div className='flex justify-center text-5xl font-semibold py-3'>
                <h1>About Me</h1>
            </div>
            <div className="mockup-code w-full rounded-4xl text-xl mt-5">
                <pre data-prefix="$"><code>yarn add bishal</code></pre>
                <pre data-prefix=">" className="text-warning"><code>installing...</code></pre>
                <pre data-prefix=">" className="text-purple-400"><code>Passionate about Front-End Development (HTML, CSS, JS) and expanding into full-stack with React,</code></pre>
                <pre data-prefix=">" className="text-purple-400"><code>I also explore Python, Data Science, and Machine Learning, along with frameworks like Django.</code></pre>
                <pre data-prefix=">" className="text-purple-400"><code>With a research background in Human-Computer Interaction (HCI), I focus on enhancing user experiences through innovation.</code></pre>
                <pre data-prefix=">" className="text-purple-400"><code>A lifelong learner and collaborative leader, I thrive in dynamic environments, driving projects with creativity and a growth mindset.</code></pre>
                <pre data-prefix=">" className="text-purple-400"><code>Let's shape the future of tech together!</code></pre>
                <pre data-prefix=">" className="text-success"><code>Done in 0s 64ms</code></pre>
            </div>
        </div>
    )
}

export default AboutMe
