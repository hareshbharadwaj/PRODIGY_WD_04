import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Briefcase, GraduationCap, Wrench, FolderOpen, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', icon: Home, color: 'text-pink-500' },
    { name: 'About', href: '#about', icon: User, color: 'text-purple-500' },
    { name: 'Experience', href: '#experience', icon: Briefcase, color: 'text-blue-500' },
    { name: 'Education', href: '#education', icon: GraduationCap, color: 'text-green-500' },
    { name: 'Skills', href: '#skills', icon: Wrench, color: 'text-orange-500' },
    { name: 'Projects', href: '#projects', icon: FolderOpen, color: 'text-cyan-500' },
    { name: 'Contact', href: '#contact', icon: Mail, color: 'text-red-500' },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-purple-500/10 border-b border-purple-200/20' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 animate-glow">
                <span className="text-white font-bold text-lg animate-pulse">H</span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-300 animate-pulse"></div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-shimmer">
              Haresh Bharadwaj R
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg group relative overflow-hidden ${item.color} hover:text-white`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <div className={`absolute inset-0 bg-gradient-to-r ${
                  item.color.includes('pink') ? 'from-pink-500 to-purple-500' :
                  item.color.includes('purple') ? 'from-purple-500 to-blue-500' :
                  item.color.includes('blue') ? 'from-blue-500 to-cyan-500' :
                  item.color.includes('green') ? 'from-green-500 to-emerald-500' :
                  item.color.includes('orange') ? 'from-orange-500 to-red-500' :
                  item.color.includes('cyan') ? 'from-cyan-500 to-blue-500' :
                  'from-red-500 to-pink-500'
                } opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl`}></div>
                <item.icon size={16} className="relative z-10 transition-transform duration-300 group-hover:rotate-12" />
                <span className="relative z-10">{item.name}</span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-3 text-gray-700 hover:text-purple-600 transition-all duration-300 transform hover:scale-110 hover:rotate-180 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl shadow-2xl border-t border-purple-200/20 animate-slide-down">
            <div className="px-4 py-6 space-y-3">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`flex items-center space-x-3 w-full text-left px-4 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg group relative overflow-hidden ${item.color} hover:text-white`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${
                    item.color.includes('pink') ? 'from-pink-500 to-purple-500' :
                    item.color.includes('purple') ? 'from-purple-500 to-blue-500' :
                    item.color.includes('blue') ? 'from-blue-500 to-cyan-500' :
                    item.color.includes('green') ? 'from-green-500 to-emerald-500' :
                    item.color.includes('orange') ? 'from-orange-500 to-red-500' :
                    item.color.includes('cyan') ? 'from-cyan-500 to-blue-500' :
                    'from-red-500 to-pink-500'
                  } opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl`}></div>
                  <item.icon size={20} className="relative z-10 transition-transform duration-300 group-hover:rotate-12" />
                  <span className="relative z-10 font-medium">{item.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;