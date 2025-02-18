import React from "react";
import profilePic from "./../assets/myimage2.jpg"; // Replace with the actual path to your profile picture
import logo from "./../assets/Home Section/aw.png"; // Replace with the actual path to your logo
import bg from "./../assets/Home Section/bg.jpg";

const HeroSection = () => {
  return (
    <div className="h-full bg-black text-white p-8 relative">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 ">
        <img
          src={bg}
          alt="background"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-red-500/20 via-transparent to-transparent" />
      </div>
      <div className="rounded-[70px] w-full h-full p-6 border border-2 mb-4 border-gray-700/30 relative z-10">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Desktop Layout */}
          <div className="hidden md:flex flex-col md:flex-row justify-between items-center w-full">
            {/* Left Side */}
            <div className="md:w-1/2">
              {/* Quote */}
              <h1 className="font-italiana text-[102px] mb-8 leading-tight">
                The best way to predict the future is to invent it.
              </h1>
              {/* Team Section */}
              <div className="mt-8 p-8 border border-white/10 bg-black/40 backdrop-blur-md rounded-[2rem] transition-transform duration-500 hover:scale-[1.05]">
                <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                  {/* Left Side */}
                  <div className="flex items-center">
                    <img src={logo} alt="Logo" className="w-12 h-12 mr-4" />
                    <div>
                      <p className="font-bold">Team</p>
                      <p className="font-italiana text-2xl">ALPHAWIZZARDS</p>
                    </div>
                  </div>
                  {/* Right Side - Button */}
                  <a
                    href="https://thealphawizards.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button"
                  >
                    Connect with Us
                  </a>
                </div>
                {/* Description */}
                <p className="text-sm mt-4">
                  We are a dynamic team of seven aspiring tech enthusiasts
                  studying at the University of Moratuwa. With diverse talents
                  and shared ambitions, we are united by a passion for
                  innovation, problem-solving, and creating impactful solutions
                  in the field of software development.
                </p>
              </div>
            </div>
            {/* Right Side */}
            <div className="md:w-1/2 mt-8 md:mt-0">
              {/* Profile Picture */}
              <div className="relative">
                <img
                  src={profilePic}
                  alt="Profile Picture"
                  className="w-[400px] max-w-md mx-auto mb-8 rounded-3xl transition-transform duration-500 hover:scale-[1.05]"
                />
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-orange-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              {/* About Me Text */}
              <p className="p-10 text-sm">
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

          {/* Mobile Layout */}
          <div className="md:hidden flex flex-col items-center justify-center w-full">
            {/* Titles */}
            <h1 className="font-italiana text-4xl text-center mb-8 leading-tight">
              The best way to predict the future is to invent it.
            </h1>
            {/* Profile Picture */}
            <div className="relative w-full mb-8">
              <img
                src={profilePic}
                alt="Profile Picture"
                className="w-full h-auto rounded-3xl transition-transform duration-500 hover:scale-[1.05]"
              />
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-orange-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            {/* Team Card */}
            <div className="w-full p-6 border border-white/10 bg-black/40 backdrop-blur-md rounded-[2rem] transition-transform duration-500 hover:scale-[1.05] mb-8">
              <div className="flex flex-col items-center justify-center mb-4">
                {/* Logo and Team Name */}
                <div className="flex items-center">
                  <img src={logo} alt="Logo" className="w-12 h-12 mr-4" />
                  <div>
                    <p className="font-bold">Team</p>
                    <p className="font-italiana text-2xl">ALPHAWIZZARDS</p>
                  </div>
                </div>
                {/* Button */}
                <a
                  href="https://thealphawizards.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button mt-4"
                >
                  Connect with Us
                </a>
              </div>
              {/* Description */}
              <p className="text-sm mt-4 text-center">
                We are a dynamic team of seven aspiring tech enthusiasts
                studying at the University of Moratuwa. With diverse talents and
                shared ambitions, we are united by a passion for innovation,
                problem-solving, and creating impactful solutions in the field
                of software development.
              </p>
            </div>
            {/* About Me Text */}
            <p className="text-sm text-center px-4">
              I am an undergraduate pursuing a Higher National Diploma in
              Electrical and Electronic Engineering at the Sri Lanka Advanced
              Technology Institute, Galle. I successfully combine practical
              knowledge with theoretical concepts in the field of Electrical and
              Electronic Engineering. Additionally, I am an undergraduate at
              BIT, University of Moratuwa. I am well-versed in Adobe Photoshop
              and Adobe Illustrator, capable of designing posts, banners, cover
              designs, and much more. I am an energetic, hardworking, and
              enthusiastic individual who enjoys challenges and is committed to
              achieving personal goals while ready to tackle any challenges in
              my career path.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
