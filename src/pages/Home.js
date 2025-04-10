import React, { useEffect } from 'react';
import Header from '../components/Header';
import Projects from '../components/Projects';
import Contact from './Contact';
import About from './About';

function Home() {
    useEffect(() => {
        const hash = window.location.hash;
        if (hash === "#projects") {
            const projectsSection = document.getElementById("projects");
            if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, []);

    return (
        <>
            <Header />
            <About />
            {/* project news section */}
            <Projects />
            <Contact />
        </>
    );
}

export default Home;
