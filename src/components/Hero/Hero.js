import React, { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden-element');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8">
            <h2 className="hidden-element text-lg md:text-xl text-blue-400 font-medium tracking-wide uppercase mb-2 opacity-0 transform -translate-y-10 transition-all duration-1000 ease-out">
              Hi, I'm
            </h2>
            <h1 className="hidden-element text-4xl sm:text-5xl md:text-7xl font-bold mb-4 opacity-0 transform -translate-y-10 transition-all duration-1000 delay-300 ease-out">
              Beka Chkhirodze
            </h1>
            <div className="hidden-element text-2xl sm:text-3xl text-blue-400 font-bold mb-6 opacity-0 transform -translate-y-10 transition-all duration-1000 delay-400 ease-out">
              Full Stack Developer
            </div>
            <p className="hidden-element text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto lg:mx-0 mb-10 opacity-0 transform -translate-y-10 transition-all duration-1000 delay-500 ease-out">
              Crafting seamless web experiences from front-end to back-end with modern technologies
            </p>
            
            <div className="hidden-element flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center opacity-0 transform -translate-y-10 transition-all duration-1000 delay-700 ease-out">
              <a
                href="#projects"
                className="w-full sm:w-auto px-8 py-4 text-lg font-medium bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 text-lg font-medium border-2 border-white hover:bg-white hover:text-gray-900 text-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg backdrop-blur-sm"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="hidden-element relative lg:flex justify-center items-center opacity-0 transform translate-x-10 transition-all duration-1000 delay-700 ease-out">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse"></div>
              <img
                src="https://beka.webin.ge/wp-content/uploads/2025/04/beka-profile.jpg"
                alt="Beka Chkhirodze"
                className="absolute inset-2 rounded-full object-cover w-[calc(100%-16px)] h-[calc(100%-16px)] border-4 border-white/20 backdrop-blur-3xl transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            </div>
          </div>
        </div>

        <div className="hidden-element absolute bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 transition-all duration-1000 delay-1000 ease-out">
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        
        .hidden-element {
          opacity: 0;
          transform: translateY(20px);
        }
        
        .show {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
};

export default Hero;
