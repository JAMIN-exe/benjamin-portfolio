import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-gray-500 uppercase tracking-wide">
          © {year} Benjamin. All rights reserved.
        </p>

        <div className="flex items-center gap-5">
          <a
            href="https://www.linkedin.com/in/benjamintaiwo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs text-gray-400 hover:text-white transition-colors"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href="https://github.com/JAMIN-exe"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs text-gray-400 hover:text-white transition-colors"
          >
            <FaGithub /> GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
