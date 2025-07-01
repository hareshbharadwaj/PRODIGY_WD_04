import React from 'react';
import { Download, Mail, Github, Linkedin, MapPin, Sparkles, Zap, Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900">
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-purple-500/10 to-pink-500/10 animate-gradient"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20 animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-40 w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full opacity-20 animate-blob" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-40 right-40 w-28 h-28 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-20 animate-blob" style={{ animationDelay: '6s' }}></div>
        
        {/* Floating Icons */}
        <div className="absolute top-32 right-32 text-purple-300 animate-float">
          <Sparkles size={24} />
        </div>
        <div className="absolute bottom-32 left-32 text-pink-300 animate-float" style={{ animationDelay: '2s' }}>
          <Zap size={28} />
        </div>
        <div className="absolute top-1/2 left-20 text-blue-300 animate-float" style={{ animationDelay: '4s' }}>
          <Heart size={20} />
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Profile Photo */}
            <div className="flex justify-center lg:justify-end animate-slide-left">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 animate-pulse transition-opacity duration-500"></div>
                <div className="relative overflow-hidden rounded-3xl shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-2">
                  <img 
                    src="/WhatsApp Image 2025-06-30 at 12.53.07_aa3cc727.jpg" 
                    alt="Haresh Bharadwaj R"
                    className="w-80 h-96 object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-bounce-slow flex items-center justify-center">
                    <Sparkles size={16} className="text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Text Content */}
            <div className="text-center lg:text-left animate-slide-right">
              <div className="mb-8">
                <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-slide-up">
                  <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-shimmer">
                    Haresh Bharadwaj R
                  </span>
                </h1>
                
                <div className="relative inline-block">
                  <p className="text-2xl md:text-3xl text-white mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                    <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                      Software Engineer & Full Stack Developer
                    </span>
                  </p>
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full animate-shimmer"></div>
                </div>
                
                <div className="flex items-center justify-center lg:justify-start space-x-2 text-purple-200 mb-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                  <MapPin size={20} className="animate-bounce" />
                  <span className="text-lg">Bangalore, India</span>
                </div>
              </div>

              <div className="mb-8 animate-slide-up" style={{ animationDelay: '0.6s' }}>
                <p className="text-lg text-purple-100 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Passionate software engineer with expertise in full-stack development, cloud technologies, 
                  and modern web frameworks. Committed to building 
                  <span className="text-pink-300 font-semibold"> scalable</span>, 
                  <span className="text-blue-300 font-semibold"> user-centric applications</span> that 
                  solve real-world problems with 
                  <span className="text-green-300 font-semibold">innovative solutions</span>.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 mb-12 animate-slide-up" style={{ animationDelay: '0.8s' }}>
                <button className="group relative overflow-hidden bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white px-8 py-4 rounded-2xl font-semibold shadow-2xl transform transition-all duration-300 hover:scale-110 hover:shadow-pink-500/25">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <div className="flex items-center space-x-2 relative z-10">
                    <Download size={20} className="animate-bounce" />
                    <span>Download Resume</span>
                  </div>
                </button>
                
                <button 
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group relative overflow-hidden bg-white/10 backdrop-blur-sm text-white border-2 border-purple-400 px-8 py-4 rounded-2xl font-semibold shadow-2xl transform transition-all duration-300 hover:scale-110 hover:bg-purple-500 hover:border-purple-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <div className="flex items-center space-x-2 relative z-10">
                    <Mail size={20} className="animate-pulse" />
                    <span>Get In Touch</span>
                  </div>
                </button>
              </div>

              <div className="flex items-center justify-center lg:justify-start space-x-8 animate-slide-up" style={{ animationDelay: '1s' }}>
                {[
                  { icon: Github, color: 'hover:text-purple-400', bg: 'hover:bg-purple-500/20' },
                  { icon: Linkedin, color: 'hover:text-blue-400', bg: 'hover:bg-blue-500/20' },
                  { icon: Mail, color: 'hover:text-pink-400', bg: 'hover:bg-pink-500/20' }
                ].map((social, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className={`p-4 text-purple-200 ${social.color} ${social.bg} rounded-2xl transition-all duration-300 transform hover:scale-125 hover:rotate-12 backdrop-blur-sm border border-white/10 hover:border-white/30 shadow-lg hover:shadow-2xl`}
                    style={{ animationDelay: `${1 + index * 0.1}s` }}
                  >
                    <social.icon size={28} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-purple-300 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;