import React from "react";
import { useLocation } from "react-router-dom";
import { LuBadgeCheck } from "react-icons/lu";
import { FaDollarSign } from "react-icons/fa6";
import { motion } from "framer-motion";
import MainHeader from "../components/MainHeader"

function Project() {
    const location = useLocation();
    const { project } = location.state || {};

    return (
        <>
            <MainHeader Title="OUR PROJECTS" description="Reforestation efforts in the region  Water supply to rural communities. This project involves drilling boreholes, installing" />
            <div className="mx-auto p-4">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="shadow-xl rounded-2xl p-6"
                >
                    <h1 className="text-4xl font-bold mx-auto text-center justify-center mb-2">{project.title}</h1>
                    <div className="flex flex-wrap gap-2 mb-4 items-center justify-center">
                        {project.status && (
                            <div className="badge badge-info gap-2">
                                <LuBadgeCheck className="text-white" />
                            </div>
                        )}
                        {project.needsFunding && (
                            <div className="badge badge-warning gap-2">
                                <FaDollarSign className="text-white" /> Needs Funding
                            </div>
                        )}
                    </div>

                    <div className="mb-6">
                        <p className="text-base text-gray-700 leading-relaxed">
                            {project.fullDescription || project.description}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                        {project.images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Project ${index}`}
                                className="rounded-xl w-full h-56 object-cover"
                            />
                        ))}
                    </div>

                    {project.progress !== undefined && (
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-600 mb-1">
                                Completion Progress
                            </label>
                            <progress
                                className="progress progress-success w-full"
                                value={project.progress}
                                max="100"
                            ></progress>
                            <p className="text-right text-sm text-gray-600 mt-1">{project.progress}% complete</p>
                        </div>
                    )}
                </motion.div>
            </div>
        </>

    );
};

export default Project;
