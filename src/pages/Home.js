import React, { useEffect } from 'react';
import Header from '../components/Header';
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import Projects from '../components/Projects';

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
        <div className='mx-auto justify-center'>
            <Header />
            {/* project news section */}
            <Projects />
            {/* Contact Information Section */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-8">Our Contact Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="bg-gray-50 p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300"
                        >
                            <FaPhoneAlt size={30} className="text-blue-500 mb-4" />
                            <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
                            <p className="text-gray-600">+1 800-123-4567</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.75, duration: 1 }}
                            className="bg-gray-50 p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300"
                        >
                            <FaEnvelope size={30} className="text-blue-500 mb-4" />
                            <h3 className="text-xl font-semibold text-gray-800">Email</h3>
                            <p className="text-gray-600">info@example.com</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 1 }}
                            className="bg-gray-50 p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300"
                        >
                            <FaMapMarkerAlt size={30} className="text-blue-500 mb-4" />
                            <h3 className="text-xl font-semibold text-gray-800">Address</h3>
                            <p className="text-gray-600">123 Example St, City, Country</p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
