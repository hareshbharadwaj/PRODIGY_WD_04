import React from 'react';
import { Calendar, MapPin, ExternalLink, Zap, Star, Trophy } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Tech Solutions Inc.",
      location: "Bangalore, India",
      period: "Jan 2022 - Present",
      description: "Leading the development of scalable web applications using React, Node.js, and AWS. Mentoring junior developers and implementing best practices for code quality and deployment.",
      achievements: [
        "Reduced application load time by 40% through optimization techniques",
        "Led a team of 5 developers in delivering critical features on time",
        "Implemented CI/CD pipelines that improved deployment efficiency by 60%"
      ],
      technologies: ["React", "Node.js", "AWS", "Docker", "PostgreSQL"],
      color: "from-purple-500 to-pink-500",
      iconColor: "text-purple-400"
    },
    {
      title: "Software Engineer",
      company: "Digital Innovations Ltd.",
      location: "Bangalore, India",
      period: "Jun 2020 - Dec 2021",
      description: "Developed and maintained full-stack applications using modern web technologies. Collaborated with cross-functional teams to deliver high-quality software solutions.",
      achievements: [
        "Built responsive web applications serving 10,000+ users daily",
        "Integrated third-party APIs and payment gateways",
        "Participated in code reviews and maintained high code quality standards"
      ],
      technologies: ["JavaScript", "React", "Express.js", "MongoDB", "Git"],
      color: "from-blue-500 to-cyan-500",
      iconColor: "text-blue-400"
    },
    {
      title: "Junior Developer",
      company: "StartUp Ventures",
      location: "Mysore, India",
      period: "Aug 2019 - May 2020",
      description: "Started my career as a junior developer, learning foundational technologies and contributing to various projects. Gained experience in agile development methodologies.",
      achievements: [
        "Developed user-friendly interfaces using HTML, CSS, and JavaScript",
        "Contributed to mobile app development using React Native",
        "Participated in daily standups and sprint planning meetings"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "React Native", "Firebase"],
      color: "from-green-500 to-emerald-500",
      iconColor: "text-green-400"
    }
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-purple-500/10 to-pink-500/10 animate-gradient"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-10 animate-blob"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-10 animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full opacity-10 animate-blob" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-5xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-shimmer">
                Professional Experience
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6 rounded-full animate-shimmer"></div>
            <p className="text-xl text-purple-200 leading-relaxed">
              A journey of growth, learning, and impactful contributions to 
              <span className="text-pink-300 font-semibold"> innovative projects</span>.
            </p>
          </div>

          <div className="relative">
            {/* Animated Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500 animate-shimmer"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 last:mb-0 animate-slide-up" style={{ animationDelay: `${index * 0.3}s` }}>
                {/* Animated Timeline dot */}
                <div className="absolute left-6 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-white shadow-lg animate-pulse"></div>
                
                <div className="ml-20">
                  <div className="group relative overflow-hidden bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-white/20">
                    {/* Hover Effect Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
                    
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4 relative z-10">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                          {exp.title}
                        </h3>
                        <div className="flex items-center text-purple-300 mb-2 group-hover:text-pink-300 transition-colors duration-300">
                          <ExternalLink size={16} className="mr-2 animate-pulse" />
                          <span className="font-semibold">{exp.company}</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center text-purple-200 text-sm space-y-1 sm:space-y-0 sm:space-x-4 mb-4">
                          <div className="flex items-center">
                            <Calendar size={14} className="mr-1 animate-bounce" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin size={14} className="mr-1 animate-bounce" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-purple-100 mb-6 leading-relaxed text-lg relative z-10 group-hover:text-white transition-colors duration-300">
                      {exp.description}
                    </p>
                    
                    <div className="mb-6 relative z-10">
                      <h4 className="font-semibold text-white mb-4 flex items-center">
                        <Trophy size={20} className="mr-2 text-yellow-400 animate-bounce" />
                        Key Achievements:
                      </h4>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start group/item">
                            <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-2 mr-3 flex-shrink-0 animate-pulse"></div>
                            <span className="text-purple-100 group-hover:text-white transition-colors duration-300 group-hover/item:text-pink-200">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="relative z-10">
                      <h4 className="font-semibold text-white mb-3 flex items-center">
                        <Zap size={20} className="mr-2 text-blue-400 animate-pulse" />
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span 
                            key={i} 
                            className={`bg-gradient-to-r ${exp.color} text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-xl cursor-pointer animate-float`}
                            style={{ animationDelay: `${i * 0.1}s` }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Animated Border */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-0 group-hover:opacity-30 transition-opacity duration-500 animate-shimmer"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;