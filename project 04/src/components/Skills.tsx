import React from 'react';
import { Code, Database, Cloud, Smartphone, Globe, Settings, Zap, Star, Heart, Sparkles } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Globe,
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "JavaScript", level: 95 },
        { name: "HTML/CSS", level: 90 },
        { name: "Tailwind CSS", level: 80 },
        { name: "Next.js", level: 75 }
      ],
      color: "from-pink-500 to-purple-500",
      bgColor: "from-pink-50 to-purple-50"
    },
    {
      title: "Backend Development",
      icon: Code,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "Java", level: 75 },
        { name: "Express.js", level: 85 },
        { name: "REST APIs", level: 90 },
        { name: "GraphQL", level: 70 }
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50"
    },
    {
      title: "Database & Storage",
      icon: Database,
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Redis", level: 70 },
        { name: "MySQL", level: 75 },
        { name: "Elasticsearch", level: 65 },
        { name: "Firebase", level: 80 }
      ],
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50"
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: [
        { name: "AWS", level: 80 },
        { name: "Docker", level: 85 },
        { name: "Kubernetes", level: 70 },
        { name: "CI/CD", level: 80 },
        { name: "Linux", level: 75 },
        { name: "Git", level: 90 }
      ],
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50"
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      skills: [
        { name: "React Native", level: 80 },
        { name: "Flutter", level: 70 },
        { name: "iOS Development", level: 60 },
        { name: "Android Development", level: 65 },
        { name: "Expo", level: 75 },
        { name: "Mobile UI/UX", level: 80 }
      ],
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50"
    },
    {
      title: "Tools & Others",
      icon: Settings,
      skills: [
        { name: "VS Code", level: 95 },
        { name: "Figma", level: 70 },
        { name: "Postman", level: 85 },
        { name: "Jira", level: 80 },
        { name: "Slack", level: 85 },
        { name: "Agile/Scrum", level: 80 }
      ],
      color: "from-indigo-500 to-blue-500",
      bgColor: "from-indigo-50 to-blue-50"
    }
  ];

  const getSkillColor = (level: number) => {
    if (level >= 90) return 'from-green-400 to-emerald-400';
    if (level >= 80) return 'from-blue-400 to-cyan-400';
    if (level >= 70) return 'from-yellow-400 to-orange-400';
    if (level >= 60) return 'from-orange-400 to-red-400';
    return 'from-red-400 to-pink-400';
  };

  const learningSkills = [
    { name: 'Machine Learning', icon: Zap, color: 'from-purple-400 to-pink-400' },
    { name: 'Blockchain', icon: Star, color: 'from-blue-400 to-cyan-400' },
    { name: 'WebAssembly', icon: Heart, color: 'from-green-400 to-emerald-400' },
    { name: 'Microservices', icon: Sparkles, color: 'from-orange-400 to-red-400' },
    { name: 'AI/ML', icon: Zap, color: 'from-pink-400 to-purple-400' },
    { name: 'Cybersecurity', icon: Star, color: 'from-indigo-400 to-blue-400' }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
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
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-5xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-shimmer">
                Technical Skills
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6 rounded-full animate-shimmer"></div>
            <p className="text-xl text-purple-200 leading-relaxed">
              A comprehensive overview of my technical expertise across 
              <span className="text-pink-300 font-semibold"> various domains</span>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-white/20 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Hover Effect Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
                
                <div className="flex items-center mb-6 relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mr-4 shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 animate-float`}>
                    <category.icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4 relative z-10">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group/skill">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-purple-100 font-medium group-hover:text-white transition-colors duration-300">
                          {skill.name}
                        </span>
                        <span className="text-purple-300 text-sm font-bold animate-pulse">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
                        <div 
                          className={`h-3 rounded-full bg-gradient-to-r ${getSkillColor(skill.level)} transition-all duration-1000 shadow-lg animate-shimmer`}
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${skillIndex * 0.1}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Animated Border */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 animate-shimmer`}></div>
              </div>
            ))}
          </div>

          <div className="text-center animate-slide-up">
            <div className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 rounded-3xl p-12 text-white shadow-2xl">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4 flex items-center justify-center">
                  <Sparkles size={36} className="mr-3 animate-bounce" />
                  Always Learning
                </h3>
                <p className="text-xl mb-8 leading-relaxed">
                  Technology evolves rapidly, and I'm committed to continuous learning and staying updated 
                  with the latest trends and best practices in 
                  <span className="text-yellow-300 font-semibold"> software development</span>.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  {learningSkills.map((skill, index) => (
                    <div
                      key={skill.name}
                      className={`group relative overflow-hidden bg-gradient-to-r ${skill.color} text-white px-6 py-3 rounded-2xl font-medium shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-2xl cursor-pointer animate-float`}
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                      <div className="flex items-center space-x-2 relative z-10">
                        <skill.icon size={18} className="animate-pulse" />
                        <span>{skill.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;