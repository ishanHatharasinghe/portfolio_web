import { useState, useEffect } from "react";
import {
  User,
  Briefcase,
  Send,
  Edit,
  Trash2,
  LogIn,
  LogOut
} from "lucide-react";
import bg from "./../assets/Testimonials/bg.webp";
import {
  db,
  ref,
  onValue,
  push,
  remove,
  update,
  auth,
  provider,
  signInWithPopup,
  signOut
} from "./firebase";
import { useAuth } from "./AuthContext";
import "./../index.css";
import "./button.css";

const TestimonialsSection = () => {
  const { currentUser, isAdmin } = useAuth();
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
  const [editingId, setEditingId] = useState(null);

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

  const getProfilePictureUrl = (email) => {
    if (!email) return null;
    const normalizedEmail = email.toLowerCase().trim();
    const hash = normalizedEmail.split("").reduce((acc, char) => {
      const code = char.charCodeAt(0);
      return (acc << 5) - acc + code;
    }, 0);
    return `https://www.gravatar.com/avatar/${Math.abs(hash)}?s=200&d=mp&r=pg`;
  };

  useEffect(() => {
    const testimonialsRef = ref(db, "testimonials");
    onValue(testimonialsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const result = Object.entries(data)
          .map(([id, value]) => ({ id, ...value }))
          .reverse();
        setTestimonials(result);
      }
      setIsLoading(false);
    });
  }, []);

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider).catch((error) => {
        if (
          error.code === "auth/popup-closed-by-user" ||
          error.code === "auth/cancelled-popup-request"
        ) {
          // Fallback to redirect if popup fails
          window.location.href = `https://personal-portfolio-37a0a.firebaseapp.com/__/auth/handler?apiKey=${firebaseConfig.apiKey}&authType=signInWithPopup&provider=google.com`;
        } else {
          setError(error.message);
        }
      });
    } catch (error) {
      setError(error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setEditingId(null);
    } catch (error) {
      setError(error.message);
    }
  };

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
      const testimonialData = {
        name: formData.Name,
        email: formData.Email,
        Occupation: formData.Occupation,
        post: formData.Post,
        institution: formData.Institution,
        Comment: formData.Comment,
        dateAndTime: new Date().toLocaleString(),
        profilePictureUrl: getProfilePictureUrl(formData.Email),
        userId: currentUser.uid
      };

      if (editingId) {
        await update(ref(db, `testimonials/${editingId}`), testimonialData);
        setSuccessMessage("Testimonial updated successfully!");
      } else {
        await push(ref(db, "testimonials"), testimonialData);
        setSuccessMessage("Thank you for your testimonial!");
      }

      setFormData({
        Name: "",
        Email: "",
        Occupation: "",
        Post: "",
        Institution: "",
        Comment: ""
      });
      setEditingId(null);
    } catch (err) {
      console.error(err);
      setError("Something went wrong!");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (testimonial) => {
    setFormData({
      Name: testimonial.name,
      Email: testimonial.email,
      Occupation: testimonial.Occupation,
      Post: testimonial.post,
      Institution: testimonial.institution,
      Comment: testimonial.Comment
    });
    setEditingId(testimonial.id);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this testimonial?")) {
      try {
        await remove(ref(db, `testimonials/${id}`));
        setSuccessMessage("Testimonial deleted successfully!");
      } catch (error) {
        setError("Failed to delete testimonial.");
      }
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
          className="w-full h-full object-cover opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/40 to-black opacity-80" />
      </div>

      <div className="relative min-h-auto flex flex-col justify-between items-center px-6 py-16">
        <div className="rounded-[20px] lg:rounded-[70px] w-full h-full p-6 border border-2 mb-4 border-white/20 ">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex flex-col items-center justify-center items-center">
              <span className="font-italiana flex flex-col items-center justify-center text-center text-white/90 text-[20px]">
                <h2 className="font-italiana text-5xl md:text-[160px] text-white tracking-wide">
                  Testimonials
                </h2>
              </span>
              {currentUser ? (
                <button
                  onClick={handleLogout}
                  className="button flex items-center gap-2"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </button>
              ) : (
                <button
                  onClick={handleGoogleLogin}
                  className="button flex items-center gap-2"
                >
                  <LogIn className="h-4 w-4" />
                  <span>Login with Google</span>
                </button>
              )}
            </div>
            <p className="mb-12 text-[16px] text-gray-300 leading-relaxed mt-3 text-center">
              Comments from our customers
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gray-900/40 p-6 rounded-lg shadow-lg backdrop-blur-sm">
                <h2 className="text-xl font-semibold text-white mb-4">
                  {currentUser
                    ? editingId
                      ? "Edit Your Testimonial"
                      : "Share Your Experience"
                    : "Please login to share your experience"}
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

                {currentUser && (
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
                      <p className="text-xs text-gray-400 mt-1">
                        We'll use your email to generate your profile picture
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">
                        Occupation
                      </label>
                      <select
                        value={formData.Occupation}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            Occupation: e.target.value
                          })
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
                          <span>
                            {editingId
                              ? "Update Testimonial"
                              : "Share Your Story"}
                          </span>
                          <Send className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white mb-4">
                  Recent Testimonials
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {latestTestimonials.map((testimonial) => (
                    <div
                      key={testimonial.id}
                      className="bg-gray-800/60 rounded-lg p-4 shadow-lg h-full flex flex-col backdrop-blur-sm relative"
                    >
                      {(isAdmin || currentUser?.uid === testimonial.userId) && (
                        <div className="absolute top-2 right-2 flex gap-2">
                          <button
                            onClick={() => handleEdit(testimonial)}
                            className="p-1 rounded-full bg-gray-700 hover:bg-gray-600"
                            title="Edit"
                          >
                            <Edit className="h-3 w-3 text-white" />
                          </button>
                          <button
                            onClick={() => handleDelete(testimonial.id)}
                            className="p-1 rounded-full bg-gray-700 hover:bg-gray-600"
                            title="Delete"
                          >
                            <Trash2 className="h-3 w-3 text-white" />
                          </button>
                        </div>
                      )}
                      <div className="flex items-center mb-3">
                        <div className="h-10 w-10 rounded-full bg-purple-600 p-0.5 flex-shrink-0">
                          {testimonial.profilePictureUrl ||
                          testimonial.email ? (
                            <img
                              src={
                                testimonial.profilePictureUrl ||
                                getProfilePictureUrl(testimonial.email)
                              }
                              alt={`${testimonial.name}'s profile`}
                              className="h-full w-full rounded-full object-cover"
                              onError={(e) => {
                                e.target.style.display = "none";
                                e.target.nextSibling.style.display = "flex";
                              }}
                            />
                          ) : null}
                          <div
                            className="h-full w-full rounded-full bg-gray-900 flex items-center justify-center"
                            style={{
                              display:
                                testimonial.profilePictureUrl ||
                                testimonial.email
                                  ? "none"
                                  : "flex"
                            }}
                          >
                            <User className="h-5 w-5 text-white" />
                          </div>
                        </div>
                        <div className="ml-3 overflow-hidden">
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
