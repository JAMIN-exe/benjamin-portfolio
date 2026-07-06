import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import profileImg from "../../assets/images/profile.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 overflow-hidden">

      <motion.img
        src={profileImg}
        alt="Benjamin, Frontend Developer"
        className="w-28 h-28 rounded-full object-cover border border-white/10 shadow-lg mb-4"
        initial="hidden"
        animate="visible"
        custom={0}
        variants={fadeUp}
      />

      <motion.div
        className="flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/5 border border-white/10"
        initial="hidden"
        animate="visible"
        custom={0.1}
        variants={fadeUp}
      >
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        <span className="text-xs uppercase tracking-wide text-gray-300">
          Available for work
        </span>
      </motion.div>

      <motion.h1
        className="text-4xl md:text-6xl font-bold text-white max-w-3xl leading-tight mb-6"
        initial="hidden"
        animate="visible"
        custom={0.2}
        variants={fadeUp}
      >
        I build clean, fast, and responsive web experiences.
      </motion.h1>

      <motion.p
        className="text-gray-400 max-w-xl mb-10"
        initial="hidden"
        animate="visible"
        custom={0.3}
        variants={fadeUp}
      >
        Hey, I&apos;m Benjamin, a Frontend developer focused on creating modern, user-friendly websites
        with React and JavaScript.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row gap-4"
        initial="hidden"
        animate="visible"
        custom={0.4}
        variants={fadeUp}
      >
        <a
          href="#projects"
          className="px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-gray-200 transition-colors"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="px-6 py-3 rounded-full border border-white/20 text-white text-sm font-medium hover:bg-white/10 transition-colors"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
