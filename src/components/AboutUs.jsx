import React, { useState, useEffect } from "react";
import profilePic from "./../assets/About/myimage2.jpg";
import logo from "./../assets/Home Section/aw.png";
import codecoveLogo from "./../assets/About/logo.jpg";
import bg from "./../assets/Home Section/bg.jpg";
import member1 from "./../assets/About/1.jpg";
import member2 from "./../assets/About/2.jpg";
import member3 from "./../assets/About/3.jpg";
import member4 from "./../assets/About/4.jpg";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Animation trigger
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Mouse tracking for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Team member images array
  const teamMembers1 = [member1, member2, member4];
  const teamMembers2 = [member1, member2, member3];

  // Modern overlapping member circles with enhanced effects
  const MemberCircles = ({ members }) => (
    <div className="flex items-center -space-x-3 group">
      {members.map((member, index) => (
        <div
          key={index}
          className="relative w-10 h-10 rounded-full border-2 border-white/20 overflow-hidden bg-gradient-to-br from-gray-700 to-gray-900 transition-all duration-500 hover:scale-125 hover:z-20 hover:border-white/60 hover:shadow-lg hover:shadow-white/20 cursor-pointer"
          style={{
            zIndex: members.length - index,
            transform: `translateY(${index * -2}px)`
          }}
        >
          <img
            src={member}
            alt={`Team member ${index + 1}`}
            className="w-full h-full object-cover transition-all duration-500 hover:brightness-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
        </div>
      ))}
      <div className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse" />
      </div>
    </div>
  );

  // Modern team card component
  const TeamCard = ({
    logo: teamLogo,
    teamName,
    members,
    link,
    description,
    delay = 0
  }) => (
    <div
      className={`mt-6 p-8 border border-white/10 bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl rounded-[2rem] transition-all duration-700 hover:scale-[1.02] hover:border-white/20 hover:shadow-2xl hover:shadow-white/5 group relative overflow-hidden ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Subtle animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

      <div className="flex flex-col md:flex-row justify-between items-center mb-4 relative z-10">
        <div className="flex items-center">
          <div className="relative">
            <img
              src={teamLogo}
              alt={`${teamName} Logo`}
              className="w-14 h-14 mr-4 rounded-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          <div className="flex items-center gap-6">
            <div>
              <p className="font-bold text-white/80 text-sm tracking-wider uppercase">
                Team
              </p>
              <p className="font-italiana text-3xl bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                {teamName}
              </p>
            </div>
            <MemberCircles members={members} />
          </div>
        </div>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="button relative overflow-hidden group/btn mt-4 md:mt-0"
        >
          <span className="relative z-10">Connect with Us</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-500" />
        </a>
      </div>

      <p className="text-sm mt-6 text-white/70 leading-relaxed relative z-10">
        {description}
      </p>
    </div>
  );

  return (
    <div className="h-full bg-black text-white p-8 relative overflow-hidden">
      {/* Enhanced background with parallax effect */}
      <div className="absolute inset-0">
        <img
          src={bg}
          alt="background"
          className="w-full h-full object-cover opacity-100 transition-transform duration-100"
          style={{
            transform: `translate(${(mousePosition.x - 50) * 0.02}px, ${
              (mousePosition.y - 50) * 0.02
            }px) scale(1.05)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-red-800/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-purple-900/10" />
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="rounded-[70px] w-full h-full p-6 border-2 border-gray-700/30 relative z-10 backdrop-blur-sm">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Desktop Layout */}
          <div className="hidden md:flex flex-col md:flex-row justify-between items-center w-full">
            {/* Left Side */}
            <div className="md:w-1/2">
              {/* Enhanced Quote with gradient text */}
              <h1
                className={`font-italiana text-[102px] mb-8 leading-tight bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
              >
                The best way to predict the future is to invent it.
              </h1>

              {/* Team Cards */}
              <TeamCard
                logo={logo}
                teamName="ALPHAWIZZARDS"
                members={teamMembers1}
                link="https://thealphawizards.netlify.app/"
                description="We are a dynamic team of seven aspiring tech enthusiasts studying at the University of Moratuwa. With diverse talents and shared ambitions, we are united by a passion for innovation, problem-solving, and creating impactful solutions in the field of software development."
                delay={200}
              />

              <TeamCard
                logo={codecoveLogo}
                teamName="CodeCove"
                members={teamMembers2}
                link="#"
                description="CodeCove is an innovative development team focused on creating cutting-edge web applications and digital solutions. Our expertise spans across modern web technologies, delivering exceptional user experiences and robust backend systems."
                delay={400}
              />
            </div>

            {/* Right Side */}
            <div className="md:w-1/2 mt-8 md:mt-0">
              {/* Enhanced Profile Picture */}
              <div
                className={`relative group transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-8"
                }`}
              >
                <img
                  src={profilePic}
                  alt="Profile Picture"
                  className="w-[400px] max-w-md mx-auto mb-8 rounded-3xl transition-all duration-700 group-hover:scale-[1.02] group-hover:rotate-1 shadow-2xl shadow-black/50"
                />
                {/* Enhanced glow effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-purple-500/10 to-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Enhanced About Me Text */}
              <div
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-md border border-white/10 transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "600ms" }}
              >
                <p className="p-10 text-sm text-white/80 leading-relaxed">
                  I am an undergraduate pursuing a Higher National Diploma in
                  Electrical and Electronic Engineering at the Sri Lanka
                  Advanced Technology Institute, Galle. I successfully combine
                  practical knowledge with theoretical concepts in the field of
                  Electrical and Electronic Engineering. Additionally, I am an
                  undergraduate at BIT, University of Moratuwa. I am well-versed
                  in Adobe Photoshop and Adobe Illustrator, capable of designing
                  posts, banners, cover designs, and much more. I am an
                  energetic, hardworking, and enthusiastic individual who enjoys
                  challenges and is committed to achieving personal goals while
                  ready to tackle any challenges in my career path.
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden flex flex-col items-center justify-center w-full">
            {/* Mobile Title */}
            <h1
              className={`font-italiana text-4xl text-center mb-8 leading-tight bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              The best way to predict the future is to invent it.
            </h1>

            {/* Mobile Profile Picture */}
            <div
              className={`relative w-full mb-8 group transition-all duration-1000 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <img
                src={profilePic}
                alt="Profile Picture"
                className="w-full h-auto rounded-3xl transition-all duration-700 group-hover:scale-[1.02] shadow-2xl shadow-black/50"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-purple-500/10 to-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10" />
            </div>

            {/* Mobile Team Cards */}
            <div
              className={`w-full p-6 border border-white/10 bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl rounded-[2rem] transition-all duration-700 hover:scale-[1.02] hover:border-white/20 mb-6 group relative overflow-hidden ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

              <div className="flex flex-col items-center justify-center mb-4 relative z-10">
                <div className="flex items-center mb-3">
                  <img
                    src={logo}
                    alt="Logo"
                    className="w-12 h-12 mr-4 rounded-xl transition-all duration-500 group-hover:scale-110"
                  />
                  <div>
                    <p className="font-bold text-white/80 text-sm tracking-wider uppercase">
                      Team
                    </p>
                    <p className="font-italiana text-2xl bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                      ALPHAWIZZARDS
                    </p>
                  </div>
                </div>
                <MemberCircles members={teamMembers1} />
                <a
                  href="https://thealphawizards.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button mt-4 relative overflow-hidden group/btn"
                >
                  <span className="relative z-10">Connect with Us</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-500" />
                </a>
              </div>
              <p className="text-sm mt-4 text-center text-white/70 leading-relaxed relative z-10">
                We are a dynamic team of seven aspiring tech enthusiasts
                studying at the University of Moratuwa. With diverse talents and
                shared ambitions, we are united by a passion for innovation,
                problem-solving, and creating impactful solutions in the field
                of software development.
              </p>
            </div>

            {/* Second Mobile Team Card */}
            <div
              className={`w-full p-6 border border-white/10 bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl rounded-[2rem] transition-all duration-700 hover:scale-[1.02] hover:border-white/20 mb-8 group relative overflow-hidden ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

              <div className="flex flex-col items-center justify-center mb-4 relative z-10">
                <div className="flex items-center mb-3">
                  <img
                    src={codecoveLogo}
                    alt="CodeCove Logo"
                    className="w-12 h-12 mr-4 rounded-xl transition-all duration-500 group-hover:scale-110"
                  />
                  <div>
                    <p className="font-bold text-white/80 text-sm tracking-wider uppercase">
                      Team
                    </p>
                    <p className="font-italiana text-2xl bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                      CodeCove
                    </p>
                  </div>
                </div>
                <MemberCircles members={teamMembers2} />
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button mt-4 relative overflow-hidden group/btn"
                >
                  <span className="relative z-10">Connect with Us</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-500" />
                </a>
              </div>
              <p className="text-sm mt-4 text-center text-white/70 leading-relaxed relative z-10">
                CodeCove is an innovative development team focused on creating
                cutting-edge web applications and digital solutions. Our
                expertise spans across modern web technologies, delivering
                exceptional user experiences and robust backend systems.
              </p>
            </div>

            {/* Mobile About Me Text */}
            <div
              className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-md border border-white/10 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "800ms" }}
            >
              <p className="text-sm text-center px-6 py-8 text-white/80 leading-relaxed">
                I am an undergraduate pursuing a Higher National Diploma in
                Electrical and Electronic Engineering at the Sri Lanka Advanced
                Technology Institute, Galle. I successfully combine practical
                knowledge with theoretical concepts in the field of Electrical
                and Electronic Engineering. Additionally, I am an undergraduate
                at BIT, University of Moratuwa. I am well-versed in Adobe
                Photoshop and Adobe Illustrator, capable of designing posts,
                banners, cover designs, and much more. I am an energetic,
                hardworking, and enthusiastic individual who enjoys challenges
                and is committed to achieving personal goals while ready to
                tackle any challenges in my career path.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
