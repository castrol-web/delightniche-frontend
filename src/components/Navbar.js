import React from 'react';
import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import logo from "../images/logo.PNG";
import { Link } from 'react-router-dom';


function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    //listening scroll event
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <div className="relative w-full z-50">
            <nav
                className={`fixed top-0 w-full transition-all duration-300 z-50 flex justify-between items-center px-6 py-4 ${scrolled ? "shadow-lg py-2 bg-blue-950" : "bg-transparent py-6"
                    }`}
            >
                <div className="text-white font-bold text-xl">
                    <img src={logo} alt='delight niche logo' className='h-10 rounded-full'/>
                </div>
                <div className="hidden md:flex space-x-6 text-white">
                    <Link to="/" className="hover:text-gray-300">Home</Link>
                    <Link to="/about" className="hover:text-gray-300">About Us</Link>
                    <Link to="/contact" className="hover:text-gray-300">Contact</Link>
                    <Link to="/gallery" className="hover:text-gray-300">Gallery</Link>
                    <Link to="/#projects" className="hover:text-gray-300">Projects</Link>
                </div>
                <button className="hidden md:block bg-blue-700 text-white px-4 py-2 rounded-full">
                    Donate Now!
                </button>
                <button className="md:hidden text-white text-2xl" onClick={() => { setMenuOpen(!menuOpen); console.log(menuOpen); }}>
                    <FaBars />
                </button>


            </nav>

            {menuOpen && (
                <div className="fixed top-0 pt-20 left-0 w-full bg-blue-950 text-white flex flex-col items-center py-4 md:hidden opacity-90">
                    <Link href="/" className="py-2">Home</Link>
                    <Link to="/about" className="py-2">About Us</Link>
                    <Link to="/contact" className="py-2">Contact</Link>
                    <Link to="/gallery" className="py-2">Gallery</Link>
                    <Link to="/#projects" className="py-2">Projects</Link>
                    <button className="bg-blue-700 text-white px-4 py-2 rounded-full mt-2">
                        Donate Now!
                    </button>
                </div>
            )}

        </div>
    )
}

export default Navbar