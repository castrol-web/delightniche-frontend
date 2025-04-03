import React, { useState } from 'react';
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import image4 from "../images/image4.jpeg";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        comment: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission logic
        console.log("Form submitted:", formData);
    };
    return (
        <>
            {/* Header Section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative w-full h-[500px] bg-cover bg-center bg-fixed"
                style={{ backgroundImage: `url(${image4})` }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <motion.h1
                        initial={{ y: -50 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-white text-4xl md:text-6xl font-bold text-center"
                    >
                        Contact Us
                    </motion.h1>
                </div>
            </motion.div>
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                    >
                        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
                            We'd Love to Hear from You
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-6 md:w-full lg:w-2/4 mx-auto">
                            <div className="grid grid-cols-1 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-800"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-800"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
                                    Your Message
                                </label>
                                <textarea
                                    id="comment"
                                    name="comment"
                                    value={formData.comment}
                                    onChange={handleChange}
                                    required
                                    rows="6"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-800"
                                />
                            </div>
                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium shadow-md transition duration-300"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </section>
            <div className="mx-auto px-4 text-center items-center mb-9">
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
                        <FaMapMarkerAlt size={30} className="text-blue-500" />
                        <h3 className="text-xl font-semibold text-gray-800">Address</h3>
                        <p className="text-gray-600">123 Example St, City, Country</p>
                    </motion.div>
                </div>
            </div>
        </>

    )
}

export default Contact