import { motion } from "framer-motion";
import { skills } from "../../data/skills";
const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-white mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        Technical Arsenal
      </motion.h2>
      <motion.p
        className="text-gray-400 max-w-xl mx-auto mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Bridging imagination and reality with a modern toolkit built for
        performance and scale.
      </motion.p>

      <div className="flex flex-wrap justify-center gap-6">
        {skills.map(({ name, icon: Icon, color }, index) => (
          <motion.div
            key={name}
            className="flex flex-col items-center justify-center gap-3 w-32 h-32 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
          >
            <Icon className={`text-3xl ${color}`} />
            <span className="text-xs uppercase tracking-wide text-gray-300">
              {name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;