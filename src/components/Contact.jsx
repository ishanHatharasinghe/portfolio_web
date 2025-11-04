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
import { SiFiverr } from "react-icons/si";

const Contact = ({ currentTheme }) => {
  const [mouse, setMouse] = useState({ x: "50%", y: "50%" });

  // Form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: [],
    message: ""
  });
  const [touched, setTouched] = useState({});
  const [sending, setSending] = useState(false);
  const maxMessage = 600;

  const subjectOptions = [
    "Job Opportunity",
    "Freelance Project",
    "Collaboration",
    "Speaking Engagement",
    "Mentorship",
    "Technical Consultation",
    "General Inquiry",
    "Other"
  ];

  // Form validation
  const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

  const errors = {
    name: !form.name.trim() ? "Please enter your name" : "",
    email: !form.email.trim()
      ? "Please enter your email"
      : !isValidEmail(form.email)
      ? "Enter a valid email"
      : "",
    subject:
      form.subject.length === 0 ? "Please select at least one subject" : "",
    message: !form.message.trim()
      ? "Please add a message"
      : form.message.length > maxMessage
      ? `Message is too long (max ${maxMessage} chars)`
      : ""
  };

  const isFormValid =
    !errors.name && !errors.email && !errors.subject && !errors.message;

  const setField = (key, val) => {
    setForm((f) => ({ ...f, [key]: val }));
  };

  // Handle multi-select for subjects
  const toggleSubjectOption = (option) => {
    setForm((f) => ({
      ...f,
      subject: f.subject.includes(option)
        ? f.subject.filter((item) => item !== option)
        : [...f.subject, option]
    }));
  };

  const clearAllSubjects = () => {
    setForm((f) => ({ ...f, subject: [] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, subject: true, message: true });
    if (!isFormValid) return;

    try {
      setSending(true);
      const to = "94703052181";
      const subjectList = form.subject.join(", ");
      const text = [
        "New contact via personal portfolio:",
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Subject: ${subjectList}`,
        "",
        "Message:",
        form.message
      ].join("\n");
      const url = `https://wa.me/${to}?text=${encodeURIComponent(text)}`;

      const win = window.open(url, "_blank", "noopener,noreferrer");
      if (!win) window.location.href = url;
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen text-white p-8 relative">
      {/* Cursor spotlight effect */}
      <div
        className="pointer-events-none absolute inset-0 mix-blend-screen transition-opacity duration-700"
        style={{
          background: `radial-gradient(600px circle at ${mouse.x} ${mouse.y}, rgba(147, 51, 234, 0.15), transparent 55%)`
        }}
      />

      <div className="flex flex-col items-center justify-center rounded-[20px] lg:rounded-[70px] w-full min-h-screen p-6 border-2 mb-4 border-white/10 bg-black/20 backdrop-blur-sm relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="font-italiana text-5xl md:text-[120px] lg:text-[160px] text-white tracking-wide">
            Get in Touch
          </h2>
          <p className="text-[16px] text-gray-300 leading-relaxed mt-4 max-w-2xl mx-auto">
            Let's connect! Whether you have a job opportunity, project
            collaboration, or just want to say hello, I'd love to hear from you.
          </p>
        </div>

        {/* Contact Form */}
        <div className="w-full max-w-3xl mb-12">
          <div className="rounded-2xl p-6 md:p-8 bg-white/[0.08] backdrop-blur-xl ring-1 ring-white/10 shadow-[0_20px_70px_-20px_rgba(0,0,0,0.6)]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {/* Name */}
              <div>
                <label className="block text-sm mb-2 text-gray-300">
                  Your Name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setField("name", e.target.value)}
                  onBlur={() => setTouched((t) => ({ ...t, name: true }))}
                  placeholder="Enter your name"
                  className={`w-full rounded-xl bg-black/40 ring-1 ${
                    touched.name && errors.name
                      ? "ring-red-500/60"
                      : "ring-white/10"
                  } px-4 py-3 outline-none text-white placeholder:text-gray-500 focus:ring-purple-500/40 transition-all`}
                  required
                />
                {touched.name && errors.name && (
                  <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm mb-2 text-gray-300">
                  Email Address
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setField("email", e.target.value)}
                  onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                  placeholder="you@example.com"
                  className={`w-full rounded-xl bg-black/40 ring-1 ${
                    touched.email && errors.email
                      ? "ring-red-500/60"
                      : "ring-white/10"
                  } px-4 py-3 outline-none text-white placeholder:text-gray-500 focus:ring-purple-500/40 transition-all`}
                  required
                />
                {touched.email && errors.email && (
                  <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Subject - Multi-select */}
            <div className="mt-6">
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm text-gray-300">
                  Subject{" "}
                  {form.subject.length > 0 && (
                    <span className="text-purple-400">
                      ({form.subject.length} selected)
                    </span>
                  )}
                </label>
                {form.subject.length > 0 && (
                  <button
                    type="button"
                    onClick={clearAllSubjects}
                    className="text-xs text-gray-400 hover:text-purple-400 underline"
                  >
                    Clear all
                  </button>
                )}
              </div>

              <div className="flex flex-wrap gap-2">
                {subjectOptions.map((opt) => {
                  const isSelected = form.subject.includes(opt);
                  return (
                    <button
                      type="button"
                      key={opt}
                      onClick={() => toggleSubjectOption(opt)}
                      className={`px-3 py-1.5 rounded-full text-xs ring-1 transition-all duration-300 ${
                        isSelected
                          ? "bg-purple-600 text-white ring-transparent scale-105 shadow-lg shadow-purple-500/30"
                          : "bg-white/5 text-gray-300 ring-white/10 hover:bg-white/10 hover:ring-purple-500/30"
                      }`}
                    >
                      {opt}
                      {isSelected && <span className="ml-1">✓</span>}
                    </button>
                  );
                })}
              </div>

              {/* Selected items summary */}
              {form.subject.length > 0 && (
                <div className="mt-3 p-3 rounded-xl bg-purple-500/10 ring-1 ring-purple-500/20">
                  <p className="text-xs text-gray-300 mb-1">
                    Selected subjects:
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {form.subject.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-purple-500/20 text-xs text-white"
                      >
                        {item}
                        <button
                          type="button"
                          onClick={() => toggleSubjectOption(item)}
                          className="hover:text-red-400 ml-1"
                          aria-label={`Remove ${item}`}
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {touched.subject && errors.subject && (
                <p className="mt-1.5 text-xs text-red-400">{errors.subject}</p>
              )}
            </div>

            {/* Message */}
            <div className="mt-6">
              <label className="block text-sm mb-2 text-gray-300">
                Your Message
              </label>
              <textarea
                value={form.message}
                onChange={(e) =>
                  setField("message", e.target.value.slice(0, maxMessage))
                }
                onBlur={() => setTouched((t) => ({ ...t, message: true }))}
                placeholder="Tell me about your opportunity, project, or inquiry..."
                rows={6}
                className={`w-full rounded-xl bg-black/40 ring-1 ${
                  touched.message && errors.message
                    ? "ring-red-500/60"
                    : "ring-white/10"
                } px-4 py-3 outline-none text-white placeholder:text-gray-500 focus:ring-purple-500/40 transition-all`}
                required
              />
              <div className="mt-1.5 flex items-center justify-between">
                {touched.message && errors.message ? (
                  <p className="text-xs text-red-400">{errors.message}</p>
                ) : (
                  <span className="text-xs text-gray-400">
                    Share any details that would help me understand your needs.
                  </span>
                )}
                <span className="text-xs text-gray-400">
                  {form.message.length}/{maxMessage}
                </span>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-6 flex flex-col gap-3">
              <button
                type="button"
                onClick={handleSubmit}
                disabled={!isFormValid || sending}
                className={`group relative inline-flex items-center justify-center px-6 py-3 rounded-full overflow-hidden transition-all duration-300 ${
                  !isFormValid || sending
                    ? "opacity-60 cursor-not-allowed bg-purple-600"
                    : "hover:scale-105 bg-gradient-to-r from-purple-600 to-pink-600"
                } shadow-lg shadow-purple-500/30`}
              >
                <span className="relative z-10 text-sm font-medium flex items-center gap-2">
                  <FaWhatsapp className="w-4 h-4" />
                  {sending ? "Opening WhatsApp..." : "Send via WhatsApp"}
                </span>
                {!(!isFormValid || sending) && (
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                )}
              </button>

              <span className="text-xs text-gray-400 text-center">
                This opens WhatsApp with your message prefilled to +94 70 305
                2181
              </span>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mt-8 text-center w-full max-w-3xl">
          <p className="text-gray-300 mb-6">
            Or connect with me on social media
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <SocialCard
              icon={<FaLinkedin />}
              color="#0A66C2"
              link="https://www.linkedin.com/in/ishan-nilaksha-686461308/"
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

        {/* Contact Info */}
        <div className="mt-8 text-sm text-gray-400 text-center">
          Prefer email or phone?{" "}
          <a
            className="underline hover:text-purple-400 transition-colors"
            href="mailto:ishanhatharasinghe222@gmail.com"
          >
            ishanhatharasinghe222@gmail.com
          </a>
          {" | "}
          <a
            className="underline hover:text-purple-400 transition-colors"
            href="tel:+94703052181"
          >
            +94 70 305 2181
          </a>
        </div>
      </div>
    </div>
  );
};

const SocialCard = ({ icon, color, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="group w-16 h-16 flex items-center justify-center rounded-lg bg-black/40 backdrop-blur-sm text-white text-3xl transition-all transform hover:scale-110 ring-1 ring-white/10"
    style={{ transition: "background-color 0.3s, box-shadow 0.3s" }}
    onMouseEnter={(e) => {
      e.currentTarget.style.backgroundColor = color;
      e.currentTarget.style.boxShadow = `0 8px 24px ${color}40`;
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.4)";
      e.currentTarget.style.boxShadow = "none";
    }}
  >
    {icon}
  </a>
);

export default Contact;
