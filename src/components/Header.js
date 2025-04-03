import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHeart, FaHandsHelping, FaUserFriends, FaHome } from "react-icons/fa";
import image1 from "../images/image1.jpeg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpeg";

const images = [image1, image2, image3, image4];
const content = [
    {
        heading: "Give a Child a Start",
        text: "We worry about what a child will become tomorrow, yet we forget that he is someone today.",
        buttonText: "Start Helping Now",
    },
    {
        heading: "Every Child Deserves Love",
        text: "A child’s life is shaped by love, care, and opportunities to grow.",
        buttonText: "Make a Difference",
    },
    {
        heading: "Be the Change They Need",
        text: "Your kindness today shapes a child's future forever.",
        buttonText: "Join Us Today",
    },
    {
        heading: "Transform Lives with Love",
        text: "A loving home changes everything for a child in need.",
        buttonText: "Become a Foster Parent",
    },
];

const Header = () => {
    const [index, setIndex] = useState(0);
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = images[index];
        img.onload = () => setImageLoaded(true);
    }, [index]);

    useEffect(() => {
        const interval = setInterval(() => {
            setImageLoaded(false);
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full h-screen overflow-hidden">
            {/* Background Image Transition */}
            <motion.div
                key={index}
                initial={{ backgroundPosition: "center -100%" }} // Start with image out of view
                animate={{ backgroundPosition: "center 0%" }}    // Move the image to center
                exit={{ backgroundPosition: "center 100%" }}      // Move out of view to the bottom
                transition={{ duration: 1.5, ease: "easeInOut" }}  // Smooth ease-in-out transition
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{
                    backgroundImage: `url(${images[index]})`,
                    backgroundSize: 'cover', // Ensure the background image covers the area
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-6">
                    <AnimatePresence mode="wait">
                        {imageLoaded && (
                            <>
                                <motion.h1
                                    key={content[index].heading}
                                    initial={{ y: -20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    className="text-white text-4xl md:text-6xl font-bold"
                                >
                                    {content[index].heading}
                                </motion.h1>
                                <motion.p
                                    key={content[index].text}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 1, delay: 0.8 }}
                                    className="text-white text-lg md:text-xl mt-4"
                                >
                                    {content[index].text}
                                </motion.p>
                                <motion.button
                                    key={content[index].buttonText}
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5, delay: 1 }}
                                    className="mt-6 bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-yellow-600"
                                >
                                    {content[index].buttonText}
                                </motion.button>
                            </>
                        )}
                    </AnimatePresence>
                </div>

                {/* Action Buttons */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 grid grid-cols-4 gap-4 w-3/4 md:w-1/2">
                    <div className="p-4 bg-purple-600 text-white rounded-lg flex flex-col items-center">
                        <FaHeart size={24} />
                        <span className="mt-2">Donate</span>
                    </div>
                    <div className="p-4 bg-pink-600 text-white rounded-lg flex flex-col items-center">
                        <FaHandsHelping size={24} />
                        <span className="mt-2">Volunteer</span>
                    </div>
                    <div className="p-4 bg-yellow-500 text-white rounded-lg flex flex-col items-center">
                        <FaUserFriends size={24} />
                        <span className="mt-2">Sponsor</span>
                    </div>
                    <div className="p-4 bg-blue-700 text-white rounded-lg flex flex-col items-center">
                        <FaHome size={24} />
                        <span className="mt-2">Foster</span>
                    </div>
                </div>
            </motion.div>

            {/* Gradient and Blur effect */}
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
        </div>
    );
};

export default Header;
