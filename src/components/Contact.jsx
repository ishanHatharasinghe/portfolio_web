import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFacebook,
  FaInstagram
} from "react-icons/fa";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <section
      id="contact"
      className="text-white py-16 px-6 sm:px-8 lg:px-16 xl:px-24 relative overflow-hidden"
    >
      <div className="container mx-auto max-w-screen-xl px-8 sm:px-12 lg:px-16 xl:px-24 rounded-xl shadow-2xl bg-opacity-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="hover:scale-110 font-poppins text-4xl sm:text-6xl font-bold mb-4 text-[#f3e8ff]">
            Contact Information
          </h2>
          <div className="h-2 w-80 sm:w-96 lg:w-120 bg-gradient-to-r from-[#FF0000FF] to-[#4400FFFF] rounded-md shadow-lg mx-auto"></div>
        </div>

        {/* Contact Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Address */}
          <div
            className="flex flex-col items-center p-6 rounded-md shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:shadow-red-500"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            <FaMapMarkerAlt className="text-6xl text-[#FF0000FF] mb-4 transform transition-transform duration-300 ease-in-out hover:scale-125" />
            <h3 className="text-2xl font-bold text-[#f3e8ff] mb-2">Address</h3>
            <p className="text-lg text-gray-300 text-center">
              533, Samagi Mawatha, <br /> Beralapanathara
            </p>
          </div>

          {/* Telephone */}
          <div
            className="flex flex-col items-center p-6 rounded-md shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:shadow-red-500"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <FaPhoneAlt className="text-6xl text-[#00FF00FF] mb-4 transform transition-transform duration-300 ease-in-out hover:scale-125" />
            <h3 className="text-2xl font-bold text-[#f3e8ff] mb-2">
              Contact No.
            </h3>
            <p className="text-lg text-gray-300">0703052181</p>
          </div>

          {/* Email */}
          <div
            className="flex flex-col items-center p-6 rounded-md shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:shadow-red-500"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <FaEnvelope className="text-6xl text-[#FFFF00FF] mb-4 transform transition-transform duration-300 ease-in-out hover:scale-125" />
            <h3 className="text-2xl font-bold text-[#f3e8ff] mb-2">E-mail</h3>
            <p className="text-lg text-gray-300 text-center">
              ishanhatharasinghe222@gmail.com
            </p>
          </div>
        </div>

        {/* Social Media Links Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-[#f3e8ff] mb-6 text-center">
            Follow Me On
          </h3>
          <div className="flex justify-center gap-8">
            {/* LinkedIn */}
            <div
              className="flex flex-col items-center p-6 rounded-md shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:shadow-blue-500"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <FaLinkedin className="text-6xl text-[#0A66C2] mb-4 transform transition-transform duration-300 ease-in-out hover:scale-125" />
              <h3 className="text-xl font-bold text-[#f3e8ff] mb-2">
                LinkedIn
              </h3>
              <a
                href="https://www.linkedin.com/in/ishan-nilaksha-686461308/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0015FFFF] text-white font-bold py-2 px-4 rounded-md hover:bg-[#FF0000FF] transition duration-300"
              >
                Visit LinkedIn
              </a>
            </div>

            {/* Facebook */}
            <div
              className="flex flex-col items-center p-6 rounded-md shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:shadow-blue-500"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <FaFacebook className="text-6xl text-[#1877F2] mb-4 transform transition-transform duration-300 ease-in-out hover:scale-125" />
              <h3 className="text-xl font-bold text-[#f3e8ff] mb-2">
                Facebook
              </h3>
              <a
                href="https://www.facebook.com/share/1QPksjDfsK/?mibextid=qi2Omg"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0015FFFF] text-white font-bold py-2 px-4 rounded-md hover:bg-[#FF0000FF] transition duration-300"
              >
                Visit Facebook
              </a>
            </div>

            {/* Instagram */}
            <div
              className="flex flex-col items-center p-6 rounded-md shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:shadow-pink-500"
              data-aos="fade-up"
              data-aos-delay="1000"
            >
              <FaInstagram className="text-6xl text-[#E4405F] mb-4 transform transition-transform duration-300 ease-in-out hover:scale-125" />
              <h3 className="text-xl font-bold text-[#f3e8ff] mb-2">
                Instagram
              </h3>
              <a
                href="https://www.instagram.com/.i_s_h_a_n._?igsh=MWd6bG9rN3VyZW83cQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0015FFFF] text-white font-bold py-2 px-4 rounded-md hover:bg-[#FF0000FF] transition duration-300"
              >
                Visit Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
