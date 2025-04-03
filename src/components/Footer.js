import React from "react";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaSnapchat } from "react-icons/fa";

function Footer() {
  //fetching full year dynamically
  const year = new Date().getFullYear();
  return (
    <div className="mx-auto relative bottom-0 pb-4 bg-blue-950 items-center justify-center">
      <footer className="text-white">
        <div className="mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Navigation */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Navigation</h2>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-gray-300">Home</a></li>
              <li><a href="/about" className="hover:text-gray-300">About Us</a></li>
              <li><a href="/gallery" className="hover:text-gray-300">Gallery</a></li>
              <li><a href="/contact" className="hover:text-gray-300">Contact Us</a></li>
              <li><a href="/donation" className="hover:text-gray-300">Donate Now</a></li>
            </ul>
          </div>

          {/* Fundraising */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Fundraising</h2>
            <ul className="space-y-2">
              <li><a href="/foster-care" className="hover:text-gray-300">Foster Care</a></li>
              <li><a href="/donation" className="hover:text-gray-300">Donate</a></li>
              <li><a href="/videos" className="hover:text-gray-300">Videos</a></li>
              <li><a href="/giving" className="hover:text-gray-300">Giving</a></li>
              <li><a href="/events" className="hover:text-gray-300">Events</a></li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Socials</h2>
            <ul className="space-y-2">
              <li><a href="/facebook" className="hover:text-gray-300">Facebook</a></li>
              <li><a href="/twitter" className="hover:text-gray-300">Twitter</a></li>
              <li><a href="/youtube" className="hover:text-gray-300">YouTube</a></li>
              <li><a href="/instagram" className="hover:text-gray-300">Instagram</a></li>
              <li><a href="/snapchat" className="hover:text-gray-300">Snapchat</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Children Charity</h2>
            <p>0000 Moshi, Kilimanjaro, Soweto Moshi, Tanzania</p>
            <p className="mt-2">Phone: +255 658 640 538</p>
            <p>Email: <a href="mailto:delightniche@example.com" className="text-blue-400">delightniche@example.com</a></p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-6 pt-4 flex flex-col sm:flex-row justify-between items-center px-6 md:px-12">
          <p className="text-sm text-center sm:text-left">Privacy Policy / DelightNiche © {year} / All Rights Reserved</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <FaFacebook className="text-xl hover:text-gray-400 cursor-pointer" />
            <FaTwitter className="text-xl hover:text-gray-400 cursor-pointer" />
            <FaYoutube className="text-xl hover:text-gray-400 cursor-pointer" />
            <FaInstagram className="text-xl hover:text-gray-400 cursor-pointer" />
            <FaSnapchat className="text-xl hover:text-gray-400 cursor-pointer" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
