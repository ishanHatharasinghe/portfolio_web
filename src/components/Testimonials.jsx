import { useState, useEffect } from "react";
import { User, Briefcase, Send } from "lucide-react";
import bg from "./../assets/Testimonials/bg.jpg";
import { db, ref, onValue, push } from "././firebase";
import "./../index.css";
import "./button.css";

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Occupation: "",
    Post: "",
    Institution: "",
    Comment: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");

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
    const testimonialsRef = ref(db, "testimonials");
    onValue(testimonialsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const result = Object.values(data).reverse();
        setTestimonials(result);
      }
      setIsLoading(false);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.Name ||
      !formData.Email ||
      !formData.Occupation ||
      formData.Occupation === "Select an occupation" ||
      !formData.Post ||
      !formData.Institution ||
      !formData.Comment
    ) {
      setError("All fields are required.");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      await push(ref(db, "testimonials"), {
        name: formData.Name,
        email: formData.Email,
        Occupation: formData.Occupation,
        post: formData.Post,
        institution: formData.Institution,
        Comment: formData.Comment,
        dateAndTime: new Date().toLocaleString()
      });
      setSuccessMessage("Thank you for your testimonial!");
      setFormData({
        Name: "",
        Email: "",
        Occupation: "",
        Post: "",
        Institution: "",
        Comment: ""
      });
    } catch (err) {
      console.error(err);
      setError("Something went wrong!");
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

  const latestTestimonials = testimonials.slice(0, 6);

  return (
    <div className="min-h-screen w-full relative">
      <div className="absolute inset-0">
        <img
          src={bg}
          alt="background"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/40 to-black opacity-80" />
      </div>

      <div className="relative min-h-screen flex flex-col justify-between items-center px-6 py-16">
        <div className="rounded-[70px] w-full h-full p-6 border border-2 mb-4 border-gray-700/30 backdrop-blur-sm bg-black/30">
          <div className="max-w-7xl mx-auto">
            <div>
              <span className="font-italiana flex flex-col items-center justify-center text-center text-white/90 text-[20px]">
                <h2 className="font-italiana text-5xl md:text-[160px] text-white tracking-wide">
                  Testimonials
                </h2>
              </span>
              <p className="mb-12 text-[16px] text-gray-300 leading-relaxed mt-3 text-center">
                Comments from our customers
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                      value={formData.Name}
                      onChange={(e) =>
                        setFormData({ ...formData, Name: e.target.value })
                      }
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.Email}
                      onChange={(e) =>
                        setFormData({ ...formData, Email: e.target.value })
                      }
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Occupation
                    </label>
                    <select
                      value={formData.Occupation}
                      onChange={(e) =>
                        setFormData({ ...formData, Occupation: e.target.value })
                      }
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white"
                      required
                    >
                      {occupations.map((occ, i) => (
                        <option key={i} value={occ}>
                          {occ}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Post
                    </label>
                    <input
                      type="text"
                      value={formData.Post}
                      onChange={(e) =>
                        setFormData({ ...formData, Post: e.target.value })
                      }
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Institution
                    </label>
                    <input
                      type="text"
                      value={formData.Institution}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          Institution: e.target.value
                        })
                      }
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Comment
                    </label>
                    <textarea
                      rows="3"
                      value={formData.Comment}
                      onChange={(e) =>
                        setFormData({ ...formData, Comment: e.target.value })
                      }
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white"
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

              <div>
                <h2 className="text-xl font-semibold text-white mb-4">
                  Recent Testimonials
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {latestTestimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className="bg-gray-800/60 rounded-lg p-4 shadow-lg h-full flex flex-col backdrop-blur-sm"
                    >
                      <div className="flex items-center mb-3">
                        <div className="h-8 w-8 rounded-full bg-purple-600 p-0.5 flex-shrink-0">
                          <div className="h-full w-full rounded-full bg-gray-900 flex items-center justify-center">
                            <User className="h-4 w-4 text-white" />
                          </div>
                        </div>
                        <div className="ml-2 overflow-hidden">
                          <h3 className="text-base font-semibold text-white truncate">
                            {testimonial.name}
                          </h3>
                          {testimonial.Occupation && (
                            <div className="flex items-center text-xs text-gray-400">
                              <Briefcase className="h-3 w-3 mr-1" />
                              <span className="truncate">
                                {testimonial.Occupation}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {testimonial.Comment}
                      </p>
                      {testimonial.post && (
                        <p className="text-xs text-purple-300 mt-2">
                          Post: {testimonial.post}
                        </p>
                      )}
                      {testimonial.institution && (
                        <p className="text-xs text-purple-300">
                          Institution: {testimonial.institution}
                        </p>
                      )}
                      <span className="mt-3 text-xs text-gray-400 font-medium">
                        {testimonial.dateAndTime}
                      </span>
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
