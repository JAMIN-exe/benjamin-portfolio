import { motion } from "framer-motion";
import aboutImg from "../../assets/images/profile.webp";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <motion.img
          src={aboutImg}
          alt="Benjamin"
          className="w-full md:w-72 rounded-2xl object-cover border border-white/10 shadow-lg"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About Me
          </h2>

          <p className="text-gray-400 mb-4 leading-relaxed">
            I started my career in accounting and audit, where I developed a
            strong foundation in accuracy, structure, and attention to detail.
            Alongside my studies, I became increasingly curious about how
            websites and applications are built, which led me to teach myself
            programming.
          </p>

          <p className="text-gray-400 mb-4 leading-relaxed">
            Receiving a scholarship to a tech academy gave me the guidance and
            community I needed to deepen my skills. That's where I discovered my
            passion for frontend development—combining problem-solving with
            creativity to build engaging user experiences.
          </p>

          <p className="text-gray-400 mb-6 leading-relaxed">
            Today, I specialize in frontend development with React while
            expanding my backend skills as I work toward becoming a well-rounded
            full stack developer.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <span className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              Accounting Background
            </span>
            <span className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              Frontend Focused
            </span>
            <span className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
              <span className="w-2 h-2 rounded-full bg-yellow-400" />
              Learning Backend
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
