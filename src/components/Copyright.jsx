import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Home,
  ArrowUp,
  Phone,
  MapPin,
  Calendar,
  ExternalLink
} from "lucide-react";

const ProfessionalFooter = ({
  designerName,
  contactHref,
  homeHref,
  githubUrl,
  linkedinUrl,
  email,
  phone,
  location,
  companyName,
  services
}) => {
  const currentYear = new Date().getFullYear();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#010017] to-[#020024] text-white">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#0084FFFF] to-transparent opacity-50" />
      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        {/* Desktop Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-bold text-[#0084FFFF] mb-6">
              {companyName || designerName}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transforming ideas into innovative solutions through cutting-edge
              technology and creative design.
            </p>
            <div className="flex space-x-4 pt-4">
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0084FFFF] transition-colors duration-300"
                >
                  <Github className="w-5 h-5" />
                </a>
              )}
              {linkedinUrl && (
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0084FFFF] transition-colors duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
            </div>
          </motion.div>
          {/* Services */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-bold text-[#0084FFFF] mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              {services?.map((service, index) => (
                <li
                  key={index}
                  className="flex items-center text-gray-400 hover:text-[#0084FFFF] transition-colors duration-300"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-bold text-[#0084FFFF] mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={homeHref}
                  className="flex items-center text-gray-400 hover:text-[#0084FFFF] transition-colors duration-300"
                >
                  <Home className="w-4 h-4 mr-2" />
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a
                  href={contactHref}
                  className="flex items-center text-gray-400 hover:text-[#0084FFFF] transition-colors duration-300"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </motion.div>
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-bold text-[#0084FFFF] mb-6">Contact</h3>
            <ul className="space-y-3">
              {email && (
                <li className="flex items-center text-gray-400">
                  <Mail className="w-4 h-4 mr-2" />
                  <a
                    href={`mailto:${email}`}
                    className="hover:text-[#0084FFFF] transition-colors duration-300"
                  >
                    {email}
                  </a>
                </li>
              )}
              {phone && (
                <li className="flex items-center text-gray-400">
                  <Phone className="w-4 h-4 mr-2" />
                  <a
                    href={`tel:${phone}`}
                    className="hover:text-[#0084FFFF] transition-colors duration-300"
                  >
                    {phone}
                  </a>
                </li>
              )}
              {location && (
                <li className="flex items-start text-gray-400">
                  <MapPin className="w-4 h-4 mr-2 mt-1" />
                  <span>{location}</span>
                </li>
              )}
              <li className="flex items-center text-gray-400">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Available: Mon - Fri</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Mobile Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="md:hidden flex flex-col space-y-8 mb-16"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-bold text-[#0084FFFF] mb-6">
              {companyName || designerName}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transforming ideas into innovative solutions through cutting-edge
              technology and creative design.
            </p>
            <div className="flex space-x-4 pt-4">
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0084FFFF] transition-colors duration-300"
                >
                  <Github className="w-5 h-5" />
                </a>
              )}
              {linkedinUrl && (
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0084FFFF] transition-colors duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
            </div>
          </motion.div>
          {/* Services */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-bold text-[#0084FFFF] mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              {services?.map((service, index) => (
                <li
                  key={index}
                  className="flex items-center text-gray-400 hover:text-[#0084FFFF] transition-colors duration-300"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-bold text-[#0084FFFF] mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={homeHref}
                  className="flex items-center text-gray-400 hover:text-[#0084FFFF] transition-colors duration-300"
                >
                  <Home className="w-4 h-4 mr-2" />
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a
                  href={contactHref}
                  className="flex items-center text-gray-400 hover:text-[#0084FFFF] transition-colors duration-300"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </motion.div>
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-bold text-[#0084FFFF] mb-6">Contact</h3>
            <ul className="space-y-3">
              {email && (
                <li className="flex items-center text-gray-400">
                  <Mail className="w-4 h-4 mr-2" />
                  <a
                    href={`mailto:${email}`}
                    className="hover:text-[#0084FFFF] transition-colors duration-300"
                  >
                    {email}
                  </a>
                </li>
              )}
              {phone && (
                <li className="flex items-center text-gray-400">
                  <Phone className="w-4 h-4 mr-2" />
                  <a
                    href={`tel:${phone}`}
                    className="hover:text-[#0084FFFF] transition-colors duration-300"
                  >
                    {phone}
                  </a>
                </li>
              )}
              {location && (
                <li className="flex items-start text-gray-400">
                  <MapPin className="w-4 h-4 mr-2 mt-1" />
                  <span>{location}</span>
                </li>
              )}
              <li className="flex items-center text-gray-400">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Available: Mon - Fri</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 text-center md:text-left">
              &copy; {currentYear} {companyName || designerName}. All Rights
              Reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={scrollToTop}
                className="bg-[#0084FFFF] hover:bg-white hover:text-[#0084FFFF] text-white rounded-full p-2 transition-colors duration-300"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

ProfessionalFooter.defaultProps = {
  designerName: "Ishan Hatharasinghe",
  contactHref: "#contact",
  homeHref: "#home",
  githubUrl: "",
  linkedinUrl: "",
  email: "",
  phone: "",
  location: "",
  companyName: "",
  services: [
    "Electronics Engineering",
    "Web Development",
    "Graphic Design",
    "UI/UX Design"
  ]
};

ProfessionalFooter.propTypes = {
  designerName: PropTypes.string,
  contactHref: PropTypes.string,
  homeHref: PropTypes.string,
  githubUrl: PropTypes.string,
  linkedinUrl: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  location: PropTypes.string,
  companyName: PropTypes.string,
  services: PropTypes.arrayOf(PropTypes.string)
};

export default ProfessionalFooter;
