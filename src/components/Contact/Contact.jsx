import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // null | "sending" | "success" | "error"

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch(() => setStatus("error"));
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Let's Work Together
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Have a project in mind? I'd love to hear about it. Let's create
          something amazing together.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Contact info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h3 className="text-xl font-semibold text-white mb-3">
            Get In Touch
          </h3>
          <p className="text-gray-400 text-sm mb-8 leading-relaxed">
            I usually respond within 24-48 hours. Reach out directly through any
            of these, or use the form.
          </p>

          <div className="space-y-4">
            <a
              href="https://wa.me/2347080845892"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300"
            >
              <FaWhatsapp className="text-purple-400 text-lg" />
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">
                  WhatsApp
                </p>
                <p className="text-sm text-white">Chat with me</p>
              </div>
            </a>

            <a
              href="mailto:benjamintaiwo26@gmail.com"
              className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300"
            >
              <FaEnvelope className="text-purple-400 text-lg" />
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">
                  Email
                </p>
                <p className="text-sm text-white">Send me an email</p>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/benjamintaiwo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300"
            >
              <FaLinkedin className="text-purple-400 text-lg" />
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">
                  LinkedIn
                </p>
                <p className="text-sm text-white">Connect with me</p>
              </div>
            </a>

            <a
              href="https://github.com/JAMIN-exe"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300"
            >
              <FaGithub className="text-purple-400 text-lg" />
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">
                  GitHub
                </p>
                <p className="text-sm text-white">View my work</p>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.div
          className="p-8 rounded-2xl bg-white/5 border border-white/10"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h3 className="text-lg font-semibold text-white mb-6">
            Send a Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="text-xs text-gray-500 uppercase tracking-wide"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 px-4 py-2 rounded-lg bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-purple-400"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="text-xs text-gray-500 uppercase tracking-wide"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 px-4 py-2 rounded-lg bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-purple-400"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="text-xs text-gray-500 uppercase tracking-wide"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full mt-1 px-4 py-2 rounded-lg bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-purple-400"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="text-xs text-gray-500 uppercase tracking-wide"
              >
                Subject
              </label>
              <input
                id="subject"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full mt-1 px-4 py-2 rounded-lg bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-purple-400"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="text-xs text-gray-500 uppercase tracking-wide"
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
                className="w-full mt-1 px-4 py-2 rounded-lg bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-purple-400 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-gray-200 transition-colors disabled:opacity-50"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-green-400 text-sm text-center">
                Message sent! I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-sm text-center">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
