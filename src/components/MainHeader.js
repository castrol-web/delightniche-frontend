import React from 'react';
import { motion } from 'framer-motion';

function MainHeader({ Title, description }) {
    return (
        <div className="bg-gradient-to-r from-blue-500 to-orange-400 min-h-[300px] text-white flex items-center justify-center">
            {/* Background Pattern with Opacity */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/triangle.png')] bg-opacity-30"></div>

            <motion.div
                className="relative z-10 w-full max-w-3xl p-6 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                {/* Header Title */}
                <h1 className="text-4xl font-extrabold text-white mb-4">
                    {Title}
                </h1>

                {/* Description */}
                <p className="text-gray-200 mb-6 px-4 text-xs">
                    {description}
                </p>
            </motion.div>
        </div>
    );
}

export default MainHeader;
