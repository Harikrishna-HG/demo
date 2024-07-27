import React, { useState } from "react";
import image from "./assets/vehicle.png"; // Adjust the path according to your project structure
import "@fortawesome/fontawesome-free/css/all.min.css";
// import BusTicketForm from "./Components/BusTicketForm";
import "./index.css";
import BookNow from "./Components/BookNow";
import Footer from "./Components/Footer";
import MapIframe from "./Components/MapIframe";
import Carousel from './Components/Carousel';

const Page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={
        isDarkMode ? "bg-purple-700 text-white" : "bg-white text-purple-700"
      }
    >
      <header
        className={`fixed top-0 left-0 right-0 z-50 p-5 shadow-lg ${
          isDarkMode ? "bg-purple-700" : "bg-white"
        } transition-colors duration-300`}
      >
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div className="flex items-center flex-shrink-0">
            <img src={image} alt="YataYat Logo" className="h-8 w-8 mr-2" />
            <span className="font-semibold text-xl tracking-tight">
              YataYat
            </span>
          </div>

          <div
            className={`w-full md:flex md:items-center md:w-auto ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <nav className="text-center md:flex-grow md:flex md:justify-center">
              <a
                href="#home"
                className="block mt-4 md:inline-block md:mt-0 hover:text-gray-800 mx-2"
              >
                Home
              </a>
              <a
                href="#about"
                className="block mt-4 md:inline-block md:mt-0 hover:text-gray-800 mx-2"
              >
                About
              </a>
              <a
                href="#services"
                className="block mt-4 md:inline-block md:mt-0 hover:text-gray-800 mx-2"
              >
                Services
              </a>
              <a
                href="#contact"
                className="block mt-4 md:inline-block md:mt-0 hover:text-gray-800 mx-2"
              >
                Contact
              </a>
              <a
                href="#enquiry"
                className="block mt-4 md:inline-block md:mt-0 hover:text-gray-800 mx-2"
              >
                Enquiry
              </a>
              <a
                href="#faqs"
                className="block mt-4 md:inline-block md:mt-0 hover:text-gray-800 mx-2"
              >
                FAQs
              </a>
            </nav>
          </div>
          <div className=" md:flex items-center">
            <input
              type="text"
              placeholder="Search"
              className="input rounded p-1 input-bordered w-16 md:w-24 border"
            />

            <button
              onClick={toggleDarkMode}
              className="ml-4 p-2 rounded hover:bg-gray-200"
            >
              <i className={`fas ${isDarkMode ? "fa-sun" : "fa-moon"}`}></i>
            </button>
            <button className="ml-4 px-4 py-2 bg-purple-700 shadow-sm text-white rounded hover:bg-slate-100 hover:text-purple-700 hidden md:block ">
              Login
            </button>
          </div>

          <div className="block md:hidden">
  <button
    onClick={toggleMenu}
    className="flex items-center px-3 py-2 border rounded text-white border-white"
  >
    <svg
      className={`h-3 w-3 ${isDarkMode ? 'fill-white bg-purple-700' : 'fill-purple-700 bg-white border-spacing-2 '}`}
      viewBox="0 0 20 20"
    >
      <path d="M0 3h20v2H0zm0 6h20v2H0zm0 6h20v2H0z" />
    </svg>
  </button>
</div>

        </div>
      </header>
      {/* <BusTicketForm /> */}
      <BookNow />
      <MapIframe height="350px" /> {/* Adjust height as needed */}
      {/* <Carousel /> */}
      <Footer  isDarkMode={isDarkMode} />
    </div>
  );
};

export default Page;
