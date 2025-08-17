import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CTASection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
    setFormData({ name: "", email: "", message: "" });
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim()) {
      toast.error("Please enter your name");
      return;
    }
    if (!validateEmail(formData.email)) {
      toast.error("Please enter a valid email");
      return;
    }
    if (!formData.message.trim()) {
      toast.error("Please enter a message");
      return;
    }

    setIsSubmitting(true);

    emailjs
      .send(
        "service_1bio10p", // Your EmailJS Service ID
        "template_wezxwla", // Your EmailJS Template ID
        formData,
        "qkuqEx8W28RhHnHOh" // Your EmailJS Public Key
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          setIsSubmitting(false);
          closeModal();
        },
        () => {
          toast.error("Failed to send message. Try again later.");
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-[500px] bg-slate-900 flex flex-col items-center justify-center relative overflow-hidden"
    >
      <h2 className="text-4xl font-bold text-white mb-6 text-center">
        Get in <span className="text-blue-400">Touch</span>
      </h2>
      <p className="text-gray-300 max-w-xl mb-10 text-center">
        Have a project or question? Send me a message, and I'll get back to you
        ASAP.
      </p>
      <button
        onClick={openModal}
        className="px-8 py-3 cursor-pointer bg-blue-500 hover:bg-blue-600 active:bg-blue-700 rounded-full text-white font-semibold text-lg shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-400"
      >
        Contact Me
      </button>

      {/* Modal backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300"
          onClick={closeModal}
        >
          {/* Modal content */}
          <div
            className="bg-slate-800 rounded-2xl w-full max-w-md p-8 relative shadow-xl transform transition-all scale-100"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <h3 className="text-white text-2xl font-semibold mb-6 text-center">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-300 mb-1 font-medium"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full bg-slate-700 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-300 mb-1 font-medium"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="w-full bg-slate-700 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-300 mb-1 font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message..."
                  className="w-full bg-slate-700 text-white rounded-md px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                  disabled={isSubmitting}
                />
              </div>
              <div className="flex justify-end space-x-4 pt-2">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-6 py-2 rounded-md bg-gray-600 hover:bg-gray-700 text-white font-semibold transition disabled:opacity-60"
                  disabled={isSubmitting}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white font-semibold transition disabled:opacity-60"
                >
                  {isSubmitting ? "Sending..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Toast container */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </section>
  );
};

export default CTASection;