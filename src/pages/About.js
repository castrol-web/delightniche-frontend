import React from 'react';
import { motion } from "framer-motion";
import { FaHandsHelping, FaBookOpen, FaHeartbeat,FaQuestionCircle } from "react-icons/fa";

function About() {
    return (
        <section className="py-20 bg-gradient-to-br from-white to-gray-100" id='about'>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-center mb-12"
            >
                <div className="inline-flex items-center justify-center bg-blue-100 text-blue-600 rounded-full w-16 h-16 mb-4 shadow-md">
                    <FaQuestionCircle size={28} />
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-2">
                    Who Are We?
                </h2>
                <p className="text-xs text-gray-600 max-w-xl mx-auto">
                    Delight Niche is more than an NGO—we're a movement dedicated to empowering lives through education,donations etc. Here's our story.
                </p>
            </motion.div>
            <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left - About Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="bg-white p-10 rounded-3xl shadow-xl"
                    >
                        <h2 className="text-4xl font-bold text-blue-900 mb-6 leading-tight">
                            About <span className="text-orange-500">Delight Niche</span> Foundation
                        </h2>
                        <p className="text-gray-700 text-lg mb-6">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point
                            <p className="text-gray-700 text-lg mb-6">
                                of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                        </p>
                        <button className="mt-4 px-6 py-3 border-2 border-blue-500 text-blue-500 font-semibold rounded-md hover:bg-red-500 hover:text-white transition duration-300">
                            Know More
                        </button>
                    </motion.div>

                    {/* Right - Features */}
                    <div className="space-y-10">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            viewport={{ once: true }}
                            className="flex items-start space-x-4"
                        >
                            <FaBookOpen size={30} className="text-red-400 mt-1" />
                            <div>
                                <h4 className="text-xl font-semibold text-blue-900 mb-1">Free Bootcamps</h4>
                                <p className="text-gray-600 text-base">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            viewport={{ once: true }}
                            className="flex items-start space-x-4"
                        >
                            <FaHandsHelping size={30} className="text-red-400 mt-1" />
                            <div>
                                <h4 className="text-xl font-semibold text-blue-900 mb-1">Volunteering</h4>
                                <p className="text-gray-600 text-base">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            viewport={{ once: true }}
                            className="flex items-start space-x-4"
                        >
                            <FaHeartbeat size={30} className="text-red-400 mt-1" />
                            <div>
                                <h4 className="text-xl font-semibold text-blue-900 mb-1">Charity Donations</h4>
                                <p className="text-gray-600 text-base">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
