import React from 'react';
import { ExternalLink, Github, Calendar, Users, Star } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard. Built with modern technologies for optimal performance and user experience.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      features: [
        "Real-time inventory tracking",
        "Secure payment processing",
        "Admin dashboard",
        "Mobile responsive design"
      ],
      liveUrl: "#",
      githubUrl: "#",
      status: "Live",
      duration: "3 months",
      team: "4 developers"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team collaboration features, and advanced project tracking capabilities.",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Express.js", "MongoDB", "Socket.io", "Docker"],
      features: [
        "Real-time collaboration",
        "Project timeline tracking",
        "Team communication",
        "File sharing capabilities"
      ],
      liveUrl: "#",
      githubUrl: "#",
      status: "Live",
      duration: "2 months",
      team: "3 developers"
    },
    {
      title: "Weather Analytics Dashboard",
      description: "An interactive weather analytics dashboard that provides comprehensive weather data visualization, forecasting, and historical analysis with beautiful charts and maps.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL"],
      features: [
        "Interactive data visualization",
        "Weather forecasting",
        "Historical data analysis",
        "Responsive design"
      ],
      liveUrl: "#",
      githubUrl: "#",
      status: "Live",
      duration: "6 weeks",
      team: "2 developers"
    },
    {
      title: "Social Media Analytics Tool",
      description: "A comprehensive social media analytics platform that tracks engagement, analyzes trends, and provides actionable insights for social media managers.",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Vue.js", "Node.js", "Redis", "Chart.js", "AWS"],
      features: [
        "Multi-platform integration",
        "Real-time analytics",
        "Trend analysis",
        "Automated reporting"
      ],
      liveUrl: "#",
      githubUrl: "#",
      status: "In Development",
      duration: "4 months",
      team: "5 developers"
    },
    {
      title: "Learning Management System",
      description: "A modern LMS platform with video streaming, interactive quizzes, progress tracking, and comprehensive course management features for educators and students.",
      image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Next.js", "Supabase", "Tailwind CSS", "Stripe", "Vercel"],
      features: [
        "Video streaming platform",
        "Interactive assessments",
        "Progress tracking",
        "Course authoring tools"
      ],
      liveUrl: "#",
      githubUrl: "#",
      status: "Live",
      duration: "5 months",
      team: "6 developers"
    },
    {
      title: "Cryptocurrency Tracker",
      description: "A real-time cryptocurrency tracking application with portfolio management, price alerts, and detailed market analysis with beautiful charts and indicators.",
      image: "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React Native", "Redux", "CoinGecko API", "Firebase", "Expo"],
      features: [
        "Real-time price tracking",
        "Portfolio management",
        "Price alerts",
        "Market analysis tools"
      ],
      liveUrl: "#",
      githubUrl: "#",
      status: "Live",
      duration: "10 weeks",
      team: "Solo project"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A showcase of my recent work, demonstrating expertise in full-stack development, 
              modern technologies, and user-centered design.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Live' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <Star size={12} className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Users size={14} className="mr-1" />
                      <span>{project.team}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <a 
                      href={project.liveUrl}
                      className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex-1 justify-center"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="flex items-center space-x-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors duration-200 flex-1 justify-center"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors duration-200 shadow-lg">
              View All Projects on GitHub
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;