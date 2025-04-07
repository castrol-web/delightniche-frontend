import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GrPrevious, GrNext } from "react-icons/gr";
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { TiMessages } from "react-icons/ti";
import image1 from "../images/image1.jpeg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpeg";

const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : text;
};

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Kahe",
            description:
                "Water supply to rural communities. This project involves drilling boreholes, installing water tanks, and educating locals on water conservation.Water supply to rural communities. This project involves drilling boreholes, installing water tanks, and educating locals on water conservation.",
            images: [image1, image2, image3, image4],
            status: "Ongoing",
            progress: 65,
            needsFunding: false,
        },
        {
            id: 2,
            title: "Tree Planting",
            description:
                "Reforestation efforts in the region to Water supply to rural communities. This project involves drilling boreholes, installing water tanks, and educating locals on water conservation. restore degraded land and improve biodiversity. Over 10,000 trees have been planted.",
            images: [image2, image3, image1, image4],
            status: "Needs Funding",
            progress: 40,
            needsFunding: true,
        },
        {
            id: 5,
            title: "Tree Planting",
            description:
                "Reforestation efforts in Water supply to rural communities. This project involves drilling boreholes, installing water tanks, and educating locals on water conservation. the region to restore degraded land and improve biodiversity. Over 10,000 trees have been planted.",
            images: [image2, image3, image1, image4],
            status: "Ongoing",
            progress: 40,
            needsFunding: true,
        },
        {
            id: 3,
            title: "Poultry farming",
            description:
                "Reforestation efforts in the region to Water supply to rural communities. This project involves drilling boreholes, installing water tanks, and educating locals on water conservation. restore degraded land and improve biodiversity. Over 10,000 trees have been planted.",
            images: [image2, image3, image1, image4],
            status: "Completed",
            progress: 100,
            needsFunding: false,
        },
        {
            id: 4,
            title: "Tree Planting",
            description:
                "Reforestation efforts in the region  Water supply to rural communities. This project involves drilling boreholes, installing water tanks, and educating locals on water conservation. to restore degraded land and improve biodiversity. Over 10,000 trees have been planted.",
            images: [image2, image3, image1, image4],
            status: "Needs Funding",
            progress: 50,
            needsFunding: true,
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerSlide = 3;
    const maxIndex = Math.ceil(projects.length / itemsPerSlide) - 1;

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
    };

    const visibleProjects = projects.slice(
        currentIndex * itemsPerSlide,
        currentIndex * itemsPerSlide + itemsPerSlide
    );

    return (
        <div className="text-center mx-auto mt-4">
            <motion.h4 className="text-sm text-orange-700 font-semibold mb-1">
                Open Your Heart To Support
            </motion.h4>
            <motion.h1 className="text-3xl text-blue-800 font-extrabold mb-6">
                Projects News
            </motion.h1>

            <div className="relative">
                <div className="flex justify-between mb-4 px-4">
                    <button className="btn btn-sm btn-outline" onClick={prevSlide}>
                        <GrPrevious />
                    </button>
                    <button className="btn btn-sm btn-outline" onClick={nextSlide}>
                        <GrNext />
                    </button>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ x: 300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -300, opacity: 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4"
                    >
                        {visibleProjects.map((item) => (
                            <div key={item.id} className="card shadow-md bg-gray-100">
                                <figure className="px-6 pt-6">
                                    <img
                                        src={item.images[0]}
                                        alt={item.title}
                                        className="rounded-xl object-cover h-48 w-full"
                                    />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{item.title}</h2>
                                    <p className="text-sm text-gray-500">
                                        {truncateText(item.description, 20)}
                                    </p>
                                    <div className="mt-2 flex gap-1"><p className="text-gray-500">Status:</p> <span className="text-semibold text-green-300">{item.status}</span></div>
                                    <div className="card-actions justify-between mt-4 w-full">
                                        <Link
                                            to={`/project/${item.id}`}
                                            state={{ project: item }}
                                            className="text-blue-600 hover:underline"
                                        >
                                            Read More
                                        </Link>
                                        <div className="flex gap-2">
                                            <CiHeart className="text-xl" />
                                            <TiMessages className="text-xl" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Projects;
