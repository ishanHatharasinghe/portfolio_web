import { useState, useEffect } from "react";
import {
  User,
  Calendar,
  MessageSquare,
  Star,
  Send,
  Briefcase
} from "lucide-react";
import bg from "./../assets/Testimonials/bg.jpg";

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    Name: "",
    Comment: "",
    Occupation: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");

  // List of common occupations for the dropdown
  const occupations = [
    "Select an occupation",
    "Accountant",
    "Actor/Actress",
    "Architect",
    "Artist",
    "Attorney/Lawyer",
    "Baker",
    "Chef",
    "Consultant",
    "Dentist",
    "Designer",
    "Doctor/Physician",
    "Driver",
    "Engineer",
    "Entrepreneur",
    "Farmer",
    "Firefighter",
    "Flight Attendant",
    "Healthcare Worker",
    "Journalist",
    "Librarian",
    "Manager",
    "Mechanic",
    "Musician",
    "Nurse",
    "Photographer",
    "Pilot",
    "Police Officer",
    "Professor",
    "Programmer/Developer",
    "Real Estate Agent",
    "Researcher",
    "Salesperson",
    "Scientist",
    "Student",
    "Teacher",
    "Technician",
    "Veterinarian",
    "Writer",
    "Other"
  ];

  useEffect(() => {
    fetch(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vQMtTuoOoyofIm1xUeNA9T8_oUPJaFhhxRCYhE6VwPNrrVraEjCvXWXgQ7-adH2juPFi7AOe3cnFdKd/pub?gid=0&single=true&output=csv"
    )
      .then((response) => response.text())
      .then((csvData) => {
        const rows = csvData.split("\n");
        const result = rows.slice(1).map((row) => {
          // Split the row by commas and handle quoted fields
          const columns = row.split(/,(?=(?:[^"]*"[^"]*")*[^"]*$)/);
          const [name, dateAndTime, Comment, Occupation] = columns.map(
            (field) => field.trim().replace(/^"|"$/g, "")
          );
          return { name, dateAndTime, Comment, Occupation };
        });
        setTestimonials(result);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching CSV data:", error);
        setIsLoading(false);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.Name ||
      !formData.Comment ||
      !formData.Occupation ||
      formData.Occupation === "Select an occupation"
    ) {
      setError("Name, Comment, and Occupation are required.");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwgmEnoPZmXPXZJmwklFhOZSONadozihLPk_QXZiEOlRk8OdBh1m9OIiazwRPXFqt7a6g/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        }
      );

      setSuccessMessage("Thank you for your testimonial!");
      setFormData({ Name: "", Comment: "", Occupation: "" });
    } catch (error) {
      console.error("Error submitting testimonial:", error);
      setError("Failed to submit testimonial. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900/40">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  // Get the latest 5 testimonials
  const latestTestimonials = testimonials.slice(0, 6);

  return (
    <div className="min-h-screen w-full relative">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        <img
          src={bg}
          alt="background"
          className="w-full h-full object-cover opacity-60"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black opacity-80" />
      </div>

      <div className="relative min-h-screen flex flex-col justify-between items-center px-6 py-16">
        {/* Header Section */}
        <div className="rounded-[70px] w-full h-full p-6 border border-2 mb-4 border-gray-700/30 backdrop-blur-sm bg-black/30">
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div>
              <span className="font-italiana flex flex-col items-center justify-center text-center text-white/90 text-[20px]">
                <h2 className="font-italiana text-5xl md:text-[160px] text-white tracking-wide">
                  Testimonials
                </h2>
              </span>
              <p className="mb-12 text-[16px] text-gray-300 leading-relaxed mt-3 items-center text-center">
                Comments from our customers
              </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Form Section - Left Side */}
              <div className="bg-gray-900/40 p-6 rounded-lg shadow-lg backdrop-blur-sm">
                <h2 className="text-xl font-semibold text-white mb-4">
                  Share Your Experience
                </h2>

                {successMessage && (
                  <div className="bg-green-900/50 text-green-300 p-3 mb-4 rounded-lg border border-green-500/20">
                    {successMessage}
                  </div>
                )}

                {error && (
                  <div className="bg-red-900/50 text-red-300 p-3 mb-4 rounded-lg border border-red-500/20">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      name="Name"
                      value={formData.Name}
                      onChange={(e) =>
                        setFormData({ ...formData, Name: e.target.value })
                      }
                      className="w-full px-3 py-2 bg-gray-900/40 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600/40 focus:border-transparent text-white placeholder-gray-400"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Occupation
                    </label>
                    <select
                      name="Occupation"
                      value={formData.Occupation}
                      onChange={(e) =>
                        setFormData({ ...formData, Occupation: e.target.value })
                      }
                      className="w-full px-3 py-2 bg-gray-900/40 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600/40 focus:border-transparent text-white placeholder-gray-400"
                      required
                    >
                      {occupations.map((occupation, index) => (
                        <option key={index} value={occupation}>
                          {occupation}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Comment
                    </label>
                    <textarea
                      name="Comment"
                      value={formData.Comment}
                      onChange={(e) =>
                        setFormData({ ...formData, Comment: e.target.value })
                      }
                      className="w-full px-3 py-2 bg-gray-900/40 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600/40 focus:border-transparent text-white placeholder-gray-400"
                      rows="3"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="button w-full flex flex-row items-center justify-center text-center gap-3 font-bold"
                  >
                    {isSubmitting ? (
                      <span>Submitting...</span>
                    ) : (
                      <>
                        <span>Share Your Story</span>
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Latest Testimonials - Right Side with 2-column grid */}
              <div>
                <h2 className="text-xl font-semibold text-white mb-4">
                  Recent Testimonials
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {latestTestimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className="bg-gray-900/40 rounded-lg p-4 shadow-lg h-full flex flex-col backdrop-blur-sm"
                    >
                      <div className="flex items-center mb-3">
                        <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 p-0.5 flex-shrink-0">
                          <div className="h-full w-full rounded-full bg-gray-900/40 flex items-center justify-center">
                            <User className="h-4 w-4 text-purple-300" />
                          </div>
                        </div>
                        <div className="ml-2 overflow-hidden">
                          <h3 className="text-base font-semibold text-white truncate">
                            {testimonial.name}
                          </h3>
                          {testimonial.Occupation && (
                            <div className="flex items-center text-xs text-gray-400">
                              <Briefcase className="h-3 w-3 mr-1 flex-shrink-0" />
                              <span className="truncate">
                                {testimonial.Occupation}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex-grow">
                        <p className="text-gray-300 text-sm leading-relaxed line-clamp-4">
                          {testimonial.Comment}
                        </p>
                      </div>

                      <div className="mt-3 pt-2 border-t border-gray-700/50">
                        <div className="flex items-center justify-between">
                          <div className="flex space-x-1"></div>
                          <span className="text-xs text-purple-400 font-medium">
                            #{String(index + 1).padStart(2, "0")}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
