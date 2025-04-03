import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import image1 from "../images/image1.jpeg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpeg";

const images = [
    { src: image1, category: "Nature" },
    { src: image2, category: "City" },
    { src: image3, category: "Abstract" },
    { src: image4, category: "Nature" },
    { src: image1, category: "Nature" },
    { src: image2, category: "City" },
    { src: image3, category: "Abstract" },
    { src: image4, category: "Nature" },
];

const categories = ["All", "Nature", "City", "Abstract"];

export default function Gallery() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const filteredImages = images.filter(
        (img) => selectedCategory === "All" || img.category === selectedCategory
    );

    const openImage = (index) => {
        setCurrentIndex(index);
        setSelectedImage(filteredImages[index].src);
    };

    const closeImage = () => {
        setSelectedImage(null);
    };

    const prevImage = () => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : filteredImages.length - 1));
        setSelectedImage(filteredImages[(currentIndex - 1 + filteredImages.length) % filteredImages.length].src);
    };

    const nextImage = () => {
        setCurrentIndex((prev) => (prev < filteredImages.length - 1 ? prev + 1 : 0));
        setSelectedImage(filteredImages[(currentIndex + 1) % filteredImages.length].src);
    };

    return (
        <div className="items-center pt-20 justify-center mx-auto text-center">
            <div className="mx-auto items-center justify-center flex gap-4 mb-6">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`px-4 py-2 border rounded-lg ${selectedCategory === category ? "bg-gray-800 text-white" : "bg-white text-gray-800"}`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <motion.div
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 items-center text-center justify-center mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {filteredImages.map((image, index) => (
                    <motion.img
                        key={image.src}
                        src={image.src}
                        alt="Gallery"
                        className="w-full h-48 object-cover cursor-pointer shadow-md hover:shadow-xl"
                        whileHover={{ scale: 1.05 }}
                        onClick={() => openImage(index)}
                    />
                ))}
            </motion.div>

            {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center mx-auto text-center">
                    <div className="relative p-4 max-w-3xl mx-auto items-center justify-center text-center">
                        <button
                            className="absolute -top-2 right-1 p-4 text-slate-50 hover:text-red-800 text-6xl"
                            onClick={closeImage}
                        >
                            <FaTimes className="lg:w-8 lg:h-8 w-3 h-3" />
                        </button>
                        <div className="flex items-center justify-between mx-auto text-center">
                            <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300" onClick={prevImage}>
                                <FaChevronLeft className="lg:w-8 lg:h-8 w-3 h-3" />
                            </button>
                            <img
                                src={selectedImage}
                                alt="Full View"
                                className="lg:max-h-[80vh] max-h-64 object-contain"
                            />
                            <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300" onClick={nextImage}>
                                <FaChevronRight className="lg:w-8 lg:h-8 w-3 h-3" />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
