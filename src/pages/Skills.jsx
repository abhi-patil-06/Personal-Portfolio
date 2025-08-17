import React from "react";
import { Globe, Server, Database, Code } from "lucide-react";
import { useInView } from "react-intersection-observer";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Globe className="text-blue-400" size={24} />,
      skills: [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "Material UI", level: 80 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 90 },
      ],
    },
    {
      title: "Backend",
      icon: <Server className="text-blue-400" size={24} />,
      skills: [
        { name: "Fast API", level: 85 },
        { name: "Python", level: 80 },
        { name: "REST APIs", level: 85 },
      ],
    },
    {
      title: "Database",
      icon: <Database className="text-blue-400" size={24} />,
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "MySQL", level: 70 },
      ],
    },
    {
      title: "Tools & Others",
      icon: <Code className="text-blue-400" size={24} />,
      skills: [
        { name: "Git", level: 75 },
        { name: "Monitoring", level: 70 },
        { name: "AWS", level: 45 },
        { name: "VS Code", level: 95 },
        { name: "Databricks", level: 30 },
      ],
    },
  ];

  // Hook to detect when the section is in view
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 min-h-screen bg-slate-900 relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-blue-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            My <span className="text-blue-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-5 md:px-0">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className=" p-6   hover:bg-slate-800/50 transition-all duration-300 group"
            >
              <div className="flex items-center space-x-3 mb-6">
                {category.icon}
                <h3 className="text-white font-semibold text-lg">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 text-sm">{skill.name}</span>
                      <span className="text-blue-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-blue-400 to-cyan-400 h-2 rounded-full transition-all duration-1000 group-hover:shadow-lg group-hover:shadow-blue-400/25"
                        style={{
                          width: inView ? `${skill.level}%` : "0%",
                          transitionProperty: "width",
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
