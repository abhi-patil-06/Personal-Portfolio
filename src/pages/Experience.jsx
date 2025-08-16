import React from 'react';
import { Briefcase } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export const ExperienceSection = () => {
  const experiences = [
    {
      title: "Associate Software Engineer",
      company: "RSquareSoft Technologies, pvt ltd, Pune",
      period: "June2025 - Present",
      description: "Developing web applications using React and modern web technologies.",
      technologies: ["React", "JavaScript", "FastAPI", "AWS"]
    },
    {
      title: "Software Engineer Intern",
      company: "RSquareSoft Technologies, pvt ltd, Pune",
      period: "Jan 2025 - June 2025",
      description: "Developed responsive web applications and improved user experience across multiple client projects.",
      technologies: ["React", "JavaScript", "Tailwind CSS", "Monitoring", "AWS"]
    },
    {
      title: "Started Journey",
      company: "",
      period: "2023 - 2025",
      description: "Started my journey in web development, building components and learning industry best practices.",
      technologies: ["HTML/CSS", "JavaScript", "React", "SQL"]
    }
  ];

  return (
    <section id="experience" className="py-5 pb-15 bg-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Work <span className="text-blue-400">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-400 to-cyan-400"></div>

          <div className="space-y-10">
            {experiences.map((exp, index) => {
              const { ref, inView } = useInView({
                triggerOnce: false,
                threshold: 0.5,
              });

              return (
                <div
                  key={index}
                  ref={ref}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                  } transition-transform duration-700 ease-out ${
                    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full border-4 border-slate-900 z-10"></div>

                  {/* Content Card */}
                  <div
                    className={`ml-16 md:ml-0 w-full md:w-5/12 ${
                      index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                    }`}
                  >
                    <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700 hover:bg-slate-800/50 transition-all duration-300 hover:border-blue-400/50">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-blue-400 text-sm font-medium">{exp.period}</span>
                        <Briefcase className="text-blue-400" size={20} />
                      </div>
                      <h3 className="text-white text-xl font-semibold mb-2">{exp.title}</h3>
                      <h4 className="text-gray-300 font-medium mb-3">{exp.company}</h4>
                      <p className="text-gray-400 mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-blue-400/10 text-blue-400 text-xs rounded-full border border-blue-400/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
