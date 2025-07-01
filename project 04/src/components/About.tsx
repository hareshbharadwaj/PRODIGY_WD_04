import React from 'react';
import { Code, Database, Cloud, Smartphone, Zap, Star, Heart, Sparkles } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Expertise in modern web technologies including React, Node.js, and TypeScript",
      color: "from-pink-500 to-purple-500",
      iconColor: "text-pink-400"
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Proficient in SQL and NoSQL databases, optimization, and data modeling",
      color: "from-blue-500 to-cyan-500",
      iconColor: "text-blue-400"
    },
    {
      icon: Cloud,
      title: "Cloud Technologies",
      description: "Experience with AWS, Azure, and containerization using Docker and Kubernetes",
      color: "from-green-500 to-emerald-500",
      iconColor: "text-green-400"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Cross-platform mobile development using React Native and Flutter",
      color: "from-orange-500 to-red-500",
      iconColor: "text-orange-400"
    }
  ];

  const traits = [
    { name: 'Problem Solving', color: 'from-pink-400 to-purple-400', icon: Zap },
    { name: 'Team Collaboration', color: 'from-blue-400 to-cyan-400', icon: Heart },
    { name: 'Continuous Learning', color: 'from-green-400 to-emerald-400', icon: Star },
    { name: 'Innovation', color: 'from-orange-400 to-red-400', icon: Sparkles }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-100/30 to-purple-100/30 animate-gradient"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-20 h-20 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 left-20 w-16 h-16 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-10 w-12 h-12 bg-gradient-to-r from-green-300 to-emerald-300 rounded-full opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6 rounded-full animate-shimmer"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              I'm a passionate software engineer with a strong foundation in computer science and 
              years of experience building 
              <span className="text-purple-600 font-semibold">scalable applications</span>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-slide-left">
              <div className="relative group">
                <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 w-full h-96 rounded-3xl shadow-2xl flex items-center justify-center transform transition-all duration-500 hover:scale-105 hover:rotate-2 animate-morph">
                  <div className="text-white text-center">
                    <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                      <Code size={40} className="text-white animate-spin-slow" />
                    </div>
                    <h3 className="text-3xl font-bold mb-2 animate-glow">Software Engineer</h3>
                    <p className="text-purple-100 animate-shimmer">Building the future, one line of code at a time</p>
                  </div>
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500 animate-pulse"></div>
              </div>
            </div>
            
            <div className="space-y-6 animate-slide-right">
              <div>
                <h3 className="text-3xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    My Journey
                  </span>
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                  With a strong academic background in computer science and hands-on experience in 
                  various technologies, I've developed a comprehensive skill set that spans across 
                  <span className="text-blue-600 font-semibold"> frontend and backend development</span>, 
                  <span className="text-green-600 font-semibold"> cloud computing</span>, and 
                  <span className="text-purple-600 font-semibold"> mobile applications</span>.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  I'm passionate about creating efficient, scalable solutions and staying up-to-date 
                  with the latest industry trends and best practices. My goal is to contribute to 
                  <span className="text-pink-600 font-semibold"> innovative projects</span> that make a positive impact.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {traits.map((trait, index) => (
                  <div
                    key={trait.name}
                    className={`group relative overflow-hidden bg-gradient-to-r ${trait.color} text-white px-4 py-2 rounded-full font-medium shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-xl cursor-pointer`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <div className="flex items-center space-x-2 relative z-10">
                      <trait.icon size={16} className="animate-pulse" />
                      <span>{trait.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 animate-slide-up">
            {highlights.map((highlight, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-purple-100"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="text-center relative z-10">
                  <div className={`w-20 h-20 bg-gradient-to-r ${highlight.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 animate-float`}>
                    <highlight.icon size={32} className="text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                    {highlight.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {highlight.description}
                  </p>
                </div>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${highlight.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;