import React from 'react';
import { User } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export const AboutSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // keep triggering every time in view
    threshold: 0.3, // 30% visible triggers
  });

  return (
    <section
      id="about"
      ref={ref}
      className="py-10 min-h-screen bg-slate-900 relative overflow-hidden"
    >
      {/* Background decorative blobs */}
      <div className="absolute inset-0 -z-20">
        <div
          className={`absolute top-10 left-1/4 w-72 h-72 rounded-full bg-blue-700/20 blur-[100px] ${
            inView ? 'animate-blob animation-delay-2000' : ''
          }`}
        ></div>
        <div
          className={`absolute bottom-10 right-1/4 w-96 h-96 rounded-full bg-cyan-600/20 blur-[120px] ${
            inView ? 'animate-blob animation-delay-4000' : ''
          }`}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        {/* Title with animated underline */}
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            About <span className="text-blue-400">Me</span>
          </h2>
          <div
            className={`mt-4 mx-auto w-28 h-1 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 ${
              inView ? 'animate-gradient-x' : ''
            }`}
          ></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-gray-300 text-lg leading-relaxed font-medium">
            <p
              className={`${inView ? 'animate-fadeInUp animation-delay-500' : ''}`}
            >
              Results-driven Software Developer with a strong passion for designing and building modern web applications. Expertise in React, FastAPI, and cutting-edge web technologies, delivering robust, scalable, and efficient solutions tailored to business needs.
            </p>
            <p
              className={`${inView ? 'animate-fadeInUp animation-delay-700' : ''}`}
            >
              Skilled in React, FastAPI, and emerging web tech, focused on scalable
              solutions and seamless user interactions.
            </p>

            <div className="grid grid-cols-2 gap-8 mt-12">
              <div
                className={`bg-slate-800/70 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-colors duration-500 shadow-lg ${
                  inView ? 'animate-fadeInUp animation-delay-900' : ''
                }`}
              >
                <h3 className="text-blue-400 font-semibold mb-3 text-lg">
                  Experience
                </h3>
                <p className="text-white text-2xl font-extrabold">8 Months</p>
              </div>
              <div
                className={`bg-slate-800/70 p-8 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-colors duration-500 shadow-lg ${
                  inView ? 'animate-fadeInUp animation-delay-1100' : ''
                }`}
              >
                <h3 className="text-cyan-400 font-semibold mb-3 text-lg">
                  Projects
                </h3>
                <p className="text-white text-2xl font-extrabold">5+ Completed</p>
              </div>
            </div>
          </div>

          {/* Right Content - Personal Info */}
          <div
            className={`bg-slate-800/80 p-10 rounded-3xl border border-slate-700 hover:bg-slate-800/90 transition-all duration-500 shadow-lg ${
              inView ? 'animate-fadeInUp animation-delay-1300' : ''
            }`}
          >
            <div className="flex items-center mb-8 space-x-4">
              <User size={28} className="text-blue-400 flex-shrink-0" />
              <h3 className="text-white text-2xl font-bold">Personal Info</h3>
            </div>
            <div className="space-y-4 text-gray-300 text-base font-medium">
              <p>
                <span className="text-blue-400 font-semibold">Name:</span> Abhilash
                Patil
              </p>
              <p>
                <span className="text-blue-400 font-semibold">Location:</span> Pune,
                India
              </p>
              <p>
                <span className="text-blue-400 font-semibold">Email:</span>{' '}
                patilabhilash06@gmail.com
              </p>
              <p>
                <span className="text-blue-400 font-semibold">Phone:</span> +91
                9405012040
              </p>
              <p>
                <span className="text-blue-400 font-semibold">Education:</span> B Tech in Computer Science and Engineering
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Animation keyframes in CSS */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% center; }
          50% { background-position: 100% center; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 5s ease infinite;
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s forwards;
        }
        .animation-delay-500 { animation-delay: 0.5s; }
        .animation-delay-700 { animation-delay: 0.7s; }
        .animation-delay-900 { animation-delay: 0.9s; }
        .animation-delay-1100 { animation-delay: 1.1s; }
        .animation-delay-1300 { animation-delay: 1.3s; }
        
      `}</style>
    </section>
  );
};
