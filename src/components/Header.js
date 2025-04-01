import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import image1 from "../images/image1.jpeg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpeg";

const content = [
    {
        heading: "Give a Child a Start",
        text: "We worry about what a child will become tomorrow, yet we forget that he is someone today.",
        buttonText: "Start Helping Now"
    },
    {
        heading: "Every Child Deserves Love",
        text: "A child’s life is shaped by love, care, and opportunities to grow.",
        buttonText: "Make a Difference"
    },
    {
        heading: "Be the Change They Need",
        text: "Your kindness today shapes a child's future forever.",
        buttonText: "Join Us Today"
    },
    {
        heading: "Transform Lives with Love",
        text: "A loving home changes everything for a child in need.",
        buttonText: "Become a Foster Parent"
    }
];

function Header() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [image1, image2, image3, image4];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="opacity-90">
            <motion.div
                className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
                style={{ backgroundImage: `url(${images[currentIndex]})` }}
                animate={{ opacity: [0, 1] }}
            >
                <div className="h-full w-full bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-4">
                    <AnimatePresence mode="wait">
                        <motion.h1
                            key={content[currentIndex].heading}
                            className="text-4xl md:text-6xl font-bold"
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            {content[currentIndex].heading}
                        </motion.h1>
                    </AnimatePresence>
                    <AnimatePresence mode="wait">
                        <motion.p
                            key={content[currentIndex].text}
                            className="text-lg md:text-xl mt-4 max-w-2xl"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            {content[currentIndex].text}
                        </motion.p>
                    </AnimatePresence>

                    <AnimatePresence mode="wait">
                        <motion.button
                            key={content[currentIndex].buttonText}
                            className="mt-6 bg-blue-700 text-white px-6 py-3 rounded-full text-lg"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 1 }}
                        >
                            {content[currentIndex].buttonText}
                        </motion.button>
                    </AnimatePresence>

                </div>
                <div
                    className="absolute inset-x-0 top-[calc(100%-13rem)] transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#e5cfd8] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
            </motion.div>

        </div>

    );
}

export default Header;
