import AboutMe from './components/about/AboutMe';
import Education from './components/education/Education';
import Footer from './components/footer/Footer';
import HeroSection from './components/home/HeroSection';
import NavBar from './components/home/NavBar';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import React, { useState, useEffect } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="grid bg-green-100 grid-rows-1 items-center justify-center h-screen w-full">
          <span className="loading loading-dots text-black loading-xl"></span>
        </div>
      ) : (
        <>
          <NavBar />
          <HeroSection />
          <AboutMe />
          <Projects />
          <Skills />
          <Education />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;