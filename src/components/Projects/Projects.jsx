import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Featured Projects
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Here are some of my recent projects that showcase my skills in web
          development and problem-solving.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="group rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <div className="h-44 overflow-hidden">
              <img
                src={project.thumbnail}
                alt={`${project.title} preview`}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-6">
              <h3 className="text-lg font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] uppercase tracking-wide px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white text-black text-xs font-medium hover:bg-gray-200 transition-colors"
                >
                  <FaExternalLinkAlt size={11} /> Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-white/20 text-white text-xs font-medium hover:bg-white/10 transition-colors"
                >
                  <FaGithub size={13} /> GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
