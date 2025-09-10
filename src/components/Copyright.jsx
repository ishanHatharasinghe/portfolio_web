import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import "./button.css";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ChevronUp,
  ExternalLink,
  Shield,
  Clock,
  HelpCircle,
  Download
} from "lucide-react";
import emailjs from "emailjs-com";
import dp from "./../assets/myimage.png";

const XoraProfessionalFooter = ({
  companyName = "Ishan Hatharasinghe",
  contactEmail = "ishanhatharasinghe222@gmail.com",
  githubUrl = "https://github.com/ishanHatharasinghe",
  linkedinUrl = "https://linkedin.com/in/ishan-hatharasinghe",
  twitterUrl = "https://twitter.com/ishan_h"
}) => {
  const currentYear = new Date().getFullYear();
  const [subscribeEmail, setSubscribeEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Handle Subscribe Button Click - preserving original email functionality
  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!subscribeEmail) {
      alert("Please enter your email.");
      return;
    }

    setIsSubmitting(true);

    const templateParams = {
      to_email: contactEmail, // Receiving email address
      from_email: subscribeEmail, // Email entered by the subscriber
      message: `Subscription request from ${subscribeEmail}.`
    };

    emailjs
      .send(
        "service_wr5ibr1", // Provided Service ID
        "template_t4m2e7x", // Replace with your EmailJS Template ID
        templateParams,
        "rY68waKeCsmk0DMYX" // Replace with your EmailJS User ID
      )
      .then(
        (result) => {
          console.log("Email sent successfully!", result.text);
          alert(
            `Thank you for subscribing with ${subscribeEmail}! I'll get back to you soon.`
          );
          setSubscribeEmail("");
          setSubmitStatus("success");
          setIsSubmitting(false);
        },
        (error) => {
          console.error("Failed to send email.", error.text);
          alert("Oops! Something went wrong. Please try again later.");
          setSubmitStatus("error");
          setIsSubmitting(false);
        }
      );
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <footer className="relative overflow-hidden bg-black text-white">
      {/* Subtle black glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-1/4 w-112 h-112 bg-gray-500/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-white/3 rounded-full blur-[80px]"></div>

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8 relative z-10">
        {/* Main Content Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Column 1: About Me - Increased width */}
          <motion.div variants={itemVariants} className="md:col-span-4">
            <div className="flex items-center mb-6">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center text-white font-bold text-xs">
                <img src={dp} alt="profile" className=" rounded-full" />
              </div>
              <span className="ml-3 text-2xl font-bold tracking-wide text-white">
                {companyName}
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              A passionate developer and designer focused on creating impactful
              solutions through technology and creativity. I specialize in
              building user-centered experiences that blend aesthetics with
              functionality.
            </p>
          </motion.div>

          {/* Column 2: My Expertise */}
          <motion.div variants={itemVariants} className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-6 text-white">
              My Expertise
            </h3>
            <ul className="space-y-4">
              <FooterLink href="#automation" label="Electronics Engineering" />
              <FooterLink href="#web-development" label="Web Development" />
              <FooterLink href="#ui-ux-design" label="UI/UX Design" />
              <FooterLink href="#graphic-design" label="Graphic Design" />
            </ul>
          </motion.div>

          {/* Column 3: Resources */}
          <motion.div variants={itemVariants} className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-6 text-white">
              Quick Links
            </h3>
            <ul className="space-y-4">
              <FooterLink href="home" label="Home" />
              <FooterLink href="#projects" label="Projects" />
              <FooterLink href="#contact" label="Contact" />
            </ul>
          </motion.div>

          {/* Column 4: Contact - Improved styling */}
          <motion.div variants={itemVariants} className="md:col-span-4">
            <h3 className="text-lg font-semibold mb-6 text-white">
              Get in Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-400 hover:text-white transition-colors group">
                <div className="mr-2 p-2 bg-gray-900 rounded-full group-hover:bg-gray-800 transition-colors">
                  <Mail size={16} />
                </div>
                <a
                  href={`mailto:${contactEmail}`}
                  className="hover:text-white transition-colors"
                >
                  {contactEmail}
                </a>
              </li>
              <li className="flex items-center text-gray-400 hover:text-white transition-colors group">
                <div className="mr-2 p-2 bg-gray-900 rounded-full group-hover:bg-gray-800 transition-colors">
                  <ExternalLink size={16} />
                </div>
                <a
                  href={"https://www.linkedin.com/in/ishan-nilaksha-686461308/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn Profile
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Newsletter Subscription - Black theme */}
        <motion.div
          variants={itemVariants}
          className="mt-16 pt-8 border-t border-gray-800 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          <div>
            <h3 className="text-xl font-semibold mb-3 text-white">
              Stay Updated
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Subscribe to my newsletter for updates on projects, blog posts,
              and more. Never miss out on new developments and insights.
            </p>
          </div>
          <div className="flex flex-row gap-2 relative">
            <input
              type="email"
              value={subscribeEmail}
              onChange={(e) => setSubscribeEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full bg-gray-900 border border-gray-700 px-4 py-3 pr-32 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-gray-500 transition-all"
            />
            <button
              className="button"
              onClick={handleSubscribe}
              disabled={isSubmitting}
              style={{
                background: "linear-gradient(45deg, #333, #555)",
                border: "1px solid #666",
                color: "white"
              }}
            >
              {isSubmitting ? (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  ></path>
                </svg>
              ) : (
                "Subscribe"
              )}
            </button>
          </div>
        </motion.div>

        {/* Features - Black theme with subtle backgrounds */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-16 pt-8 border-t border-gray-800 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
        >
          <FeatureCard
            icon={<Clock className="text-white" />}
            title="Always Available"
            description="Reach out anytime for collaborations or inquiries. Quick response guaranteed."
          />
          <FeatureCard
            icon={<Shield className="text-white" />}
            title="Secure Projects"
            description="Your data and projects are safe with industry-standard security practices."
          />
          <FeatureCard
            icon={<HelpCircle className="text-white" />}
            title="Support"
            description="Dedicated support for all projects, even after completion."
          />
          <FeatureCard
            icon={<Download className="text-white" />}
            title="Portfolio"
            description="Access my work instantly or download for offline viewing."
          />
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Ishan Hatharasinghe. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

// Enhanced Feature Card Component - Black theme
const FeatureCard = ({ icon, title, description }) => (
  <motion.div
    className="text-center p-6 rounded-xl bg-gray-900/50 hover:bg-gray-800 border border-gray-700/50 transition-all duration-300"
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    }}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
  >
    <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-black/20">
      <div>{icon}</div>
    </div>
    <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-2">
      {title}
    </h4>
    <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
  </motion.div>
);

// Enhanced Footer Link Component - Black theme
const FooterLink = ({ href, label }) => (
  <li>
    <a
      href={href}
      className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group"
    >
      <span className="inline-block transition-transform group-hover:translate-x-1">
        {label}
      </span>
    </a>
  </li>
);

// Enhanced Social Link Component - Black theme
const SocialLink = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-gray-900 hover:bg-gray-700 p-2.5 rounded-full transition-all duration-200 shadow-md hover:shadow-gray-600/20"
  >
    {icon}
  </a>
);

XoraProfessionalFooter.propTypes = {
  companyName: PropTypes.string,
  contactEmail: PropTypes.string,
  githubUrl: PropTypes.string,
  linkedinUrl: PropTypes.string,
  twitterUrl: PropTypes.string
};

export default XoraProfessionalFooter;
