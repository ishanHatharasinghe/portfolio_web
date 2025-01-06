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
      className="text-white py-16 px-6 sm:px-8 lg:px-16 xl:px-24 relative overflow-hidden"
    >
      {/* Header */}
      <div className="container mx-auto text-center mb-12">
        <h2 className="hover:scale-110 font-poppins text-4xl sm:text-6xl font-bold mb-4 text-[#f3e8ff]">
          Contact Information
        </h2>
        <div className="h-2 w-80 sm:w-96 lg:w-120 bg-gradient-to-r from-[#FF0000FF] to-[#4400FFFF] rounded-md shadow-lg mx-auto mb-6"></div>
        <p className="text-sm sm:text-base lg:text-lg text-[#e5e7eb] leading-relaxed mb-6 font-poppins">
          Get in touch with me through the following contact methods and social
          media.
        </p>
      </div>

      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ContactCard
          icon={<FaMapMarkerAlt />}
          title="Address"
          details="533, Samagi Mawatha, Beralapanathara"
          link="https://www.google.com/maps"
        />
        <ContactCard
          icon={<FaPhoneAlt />}
          title="Contact No."
          details="0703052181"
        />
        <ContactCard
          icon={<FaEnvelope />}
          title="E-mail"
          details="ishanhatharasinghe222@gmail.com"
          link="mailto:ishanhatharasinghe222@gmail.com"
        />
      </div>

      {/* Social Media */}
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-bold text-[#f3e8ff] mb-6">Follow Me On</h3>
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

      {/* Feedback Form */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-[#f3e8ff] mb-6 text-center">
          Leave Your Feedback
        </h3>
        <form onSubmit={handleSendFeedback}>
          <textarea
            name="message"
            rows="5"
            placeholder="Write your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-4 rounded-md border-2 border-gray-500 bg-[#010010FF] text-white focus:outline-none focus:border-[#FFFFFFFF] mb-4"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-[#0015FFFF] text-white font-bold py-2 px-4 rounded-md hover:bg-[#FF0000FF] transition duration-300"
          >
            Send Feedback
          </button>
        </form>
        {showNotification && (
          <div className="mt-4 text-center font-semibold text-[#FF0000FF]">
            {sendStatus}
          </div>
        )}
      </div>
    </section>
  );
};

const ContactCard = ({ icon, title, details, link }) => (
  <div
    className="flex flex-col items-center p-6 rounded-md shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300"
    data-aos="fade-up"
  >
    <div className="text-6xl text-white mb-2">{icon}</div>
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
