import { ExternalLink, Github } from "lucide-react";

// Projects Section
export const ProjectsSection = () => {
  const projects = [
    {
      title: "Virtual AI Assistant",
      description: "A Virtual AI Assistant designed to streamline tasks, provide intelligent support, and enhance productivity through natural language interaction and automation",
      image: "🤖",
      technologies: ["Python", "Groq", "Cohere"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Blogging Website",
      description: "A full-stack blogging platform with React frontend and FastAPI backend. Features include user authentication, post creation.",
      image: "📋",
      technologies: ["React", "FastAPI", "PostgreSQL", "Tailwind CSS", "Material UI"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Donation Management System",
      description: "A web application for managing donations, tracking contributors, and generating reports.",
      image: "💰",
      technologies: ["React", "FastAPI", "PostgreSQL", "Tailwind CSS", "MUI"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Personal Portfolio",
      description: "A modern, responsive portfolio website built with React and Tailwind CSS featuring animations and interactive elements.",
      image: "💼",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "MUI"],
      liveLink: "#",
      githubLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-5 min-h-screen bg-slate-900  relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-cyan-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            My <span className="text-blue-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 px-5 md:px-0">
          {projects.map((project, index) => (
            <div key={index} className="group    overflow-hidden  transition-all duration-300  hover:shadow-xl hover:shadow-blue-400/10">
              {/* Project Image/Icon */}
              <div className="h-48 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 flex items-center justify-center">
                <span className="text-6xl">{project.image}</span>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-white text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-blue-400/10 text-blue-400 text-xs rounded-full border border-blue-400/20">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  <a 
                    href={project.liveLink}
                    className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                  <a 
                    href={project.githubLink}
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
