import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFacebook,
  FaInstagram,
  FaWhatsapp
} from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = () => {
  const [message, setMessage] = useState("");
  const [sendStatus, setSendStatus] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const handleSendFeedback = (e) => {
    e.preventDefault();

    const confirmSend = window.confirm(
      "Are you sure you want to send this feedback?"
    );
    if (!confirmSend) return;

    emailjs
      .sendForm(
        "service_wr5ibr1", // Updated service ID
        "template_t4m2e7x", // Updated template ID
        e.target,
        "rY68waKeCsmk0DMYX" // Updated public key
      )
      .then(
        (result) => {
          console.log(result.text);
          showNotificationPopup("Successfully sent!");
        },
        (error) => {
          console.log(error.text);
          showNotificationPopup("Failed to send. Please try again.");
        }
      );
  };

  const showNotificationPopup = (message) => {
    setShowNotification(true);
    setSendStatus(message);

    setTimeout(() => {
      setShowNotification(false);
    }, 5000);
  };

  return (
    <section
      id="contact"
      className="text-white py-16 px-6 sm:px-8 lg:px-16 xl:px-24 relative overflow-hidden"
    >
      <div className="container mx-auto text-center mb-12">
        <h2 className="hover:scale-110 font-poppins text-4xl sm:text-6xl font-bold mb-4 text-[#f3e8ff]">
          Contact Information
        </h2>
        <div className="mb-12 h-2 w-80 sm:w-96 lg:w-120 bg-gradient-to-r from-[#FF0000FF] to-[#4400FFFF] rounded-md shadow-lg mx-auto mb-6"></div>
        <p className="text-sm sm:text-base lg:text-lg text-[#e5e7eb] leading-relaxed mb-6 hover:text-[#E6FF82FF] transition-all duration-100 transform hover:scale-105 font-poppins">
          Get in touch with me through the following contact methods and social
          media.
        </p>
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
          <a
            href="https://www.google.com/maps/dir/6.301967,80.610486/Beralapanathara,+Matara+-+Hakmana+Road/@6.309715,80.5673928,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3ae3e29df098bdef:0x1f156755cd0421b5!2m2!1d80.6043!2d6.32296?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 bg-[#0015FFFF] text-white font-bold py-2 px-4 rounded-md hover:bg-[#FF0000FF] transition duration-300"
          >
            View Location
          </a>
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
          <a
            href="mailto:ishanhatharasinghe222@gmail.com"
            className="bg-[#0015FFFF] text-white font-bold py-2 px-4 rounded-md hover:bg-[#FF0000FF] transition duration-300 mt-2"
          >
            Send an Email
          </a>
        </div>
      </div>

      {/* Social Media Links Section */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-[#f3e8ff] mb-6 text-center">
          Follow Me On
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {/* LinkedIn */}
          <div
            className="flex flex-col items-center p-6 rounded-md shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:shadow-blue-500"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <FaLinkedin className="text-6xl text-[#0A66C2] mb-4 transform transition-transform duration-300 ease-in-out hover:scale-125" />
            <h3 className="text-xl font-bold text-[#f3e8ff] mb-2">LinkedIn</h3>
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
            <h3 className="text-xl font-bold text-[#f3e8ff] mb-2">Facebook</h3>
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
            <h3 className="text-xl font-bold text-[#f3e8ff] mb-2">Instagram</h3>
            <a
              href="https://www.instagram.com/ishan_hatharasinghe/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0015FFFF] text-white font-bold py-2 px-4 rounded-md hover:bg-[#FF0000FF] transition duration-300"
            >
              Visit Instagram
            </a>
          </div>

          {/* WhatsApp */}
          <div
            className="flex flex-col items-center p-6 rounded-md shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:shadow-green-500"
            data-aos="fade-up"
            data-aos-delay="1200"
          >
            <FaWhatsapp className="text-6xl text-[#25D366] mb-4 transform transition-transform duration-300 ease-in-out hover:scale-125" />
            <h3 className="text-xl font-bold text-[#f3e8ff] mb-2">WhatsApp</h3>
            <a
              href="https://wa.me/0703052181"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0015FFFF] text-white font-bold py-2 px-4 rounded-md hover:bg-[#FF0000FF] transition duration-300"
            >
              Send a Message
            </a>
          </div>
        </div>
      </div>

      {/* Feedback Section */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-[#f3e8ff] mb-6 text-center">
          Leave Your Feedback
        </h3>
        <form onSubmit={handleSendFeedback}>
          <textarea
            name="message"
            rows="5"
            placeholder="Write your message here..."
            className="w-full bg-[#20232A] text-white p-4 rounded-md mb-4"
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="bg-[#0015FFFF] text-white font-bold py-2 px-4 rounded-md hover:bg-[#00A74BFF] transition duration-300"
            >
              Send Feedback
            </button>
          </div>
        </form>
        {showNotification && (
          <div className="mt-4 text-center text-xl text-white bg-[#009669FF] p-3 rounded-md shadow-lg animate-pulse">
            {sendStatus}
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
