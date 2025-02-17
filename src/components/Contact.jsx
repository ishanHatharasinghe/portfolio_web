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
  FaWhatsapp,
  FaGithub,
  FaBehance
} from "react-icons/fa";
import { SiFiverr } from "react-icons/si"; // Fiverr icon from react-icons/si
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import bg from "./../assets/Contact/bg.jpg";

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
        "service_wr5ibr1", // Service ID
        "template_t4m2e7x", // Template ID
        e.target,
        "rY68waKeCsmk0DMYX" // Public Key
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
    setSendStatus(message);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 5000);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full flex items-center justify-center text-white overflow-hidden py-16"
    >
      {/* Background with gradient overlay and blur */}
      <div className="absolute inset-0">
        {/* Background Image with Blur */}
        <img
          src={bg}
          alt="background"
          className="w-full h-full object-cover backdrop-blur-lg opacity-80"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/30 backdrop-blur-sm"></div>
      </div>
      {/* Content Container */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 relative z-10 flex flex-col items-center justify-center gap-8 sm:gap-10 lg:gap-12"
      >
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-italiana text-5xl md:text-[160px] text-white tracking-wide text-center">
            Get in Touch
          </h2>
          <p className="text-[16px] text-gray-300 leading-relaxed text-center mb-7">
            Get in touch with me through the following contact methods and
            social media.
          </p>
        </div>
        {/* Social Media */}
        <div className="mt-12 text-center">
          <div className="flex flex-wrap justify-center gap-6">
            <SocialCard
              icon={<FaLinkedin />}
              color="#0A66C2"
              link="https://www.linkedin.com/in/ishan-nilaksha-686461308/"
            />
            <SocialCard
              icon={<FaFacebook />}
              color="#1877F2"
              link="https://www.facebook.com"
            />
            <SocialCard
              icon={<FaInstagram />}
              color="#E4405F"
              link="https://www.instagram.com/ishan_hatharasinghe/"
            />
            <SocialCard
              icon={<FaWhatsapp />}
              color="#25D366"
              link="https://wa.me/0703052181"
            />
            <SocialCard
              icon={<FaGithub />}
              color="#333"
              link="https://github.com/ishanHatharasinghe"
            />
            <SocialCard
              icon={<FaBehance />}
              color="#1769FF"
              link="https://www.behance.net/ishannilaksha"
            />
            <SocialCard
              icon={<SiFiverr />}
              color="#1DBF73"
              link="https://www.fiverr.com/sellers/vector_ix/"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const ContactCard = ({ icon, title, details, link }) => (
  <div
    className="flex flex-col items-center p-6 rounded-md shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300"
    data-aos="fade-up"
  >
    <div className="text-4xl text-white mb-2">{icon}</div>
    <h3 className="text-2xl font-bold text-[#f3e8ff] mb-2">{title}</h3>
    <p className="text-lg text-gray-300 text-center">{details}</p>
  </div>
);

const SocialCard = ({ icon, color, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className={`group w-20 h-20 flex items-center justify-center rounded-lg bg-black text-white text-4xl transition-all transform hover:scale-110`}
    style={{ transition: "background-color 0.3s" }}
    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = color)}
    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#000")}
  >
    {icon}
  </a>
);

export default Contact;
