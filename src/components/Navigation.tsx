
import { useState, useEffect } from 'react';
import { Linkedin, Github } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'technical-skills', shortName: 'Skills' },
    { name: 'AWS Certs', id: 'aws-certifications', shortName: 'AWS' },
    { name: 'Statistics', id: 'platform-statistics', shortName: 'Stats' },
    { name: 'Education', id: 'education' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  // Add scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => ({
        id: item.id,
        element: document.getElementById(item.id)
      })).filter(section => section.element);

      const scrollPosition = window.scrollY + 200; // Offset for header height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsOpen(false);
    }
  };

  const isActive = (sectionId: string) => activeSection === sectionId;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-black/95 backdrop-blur-xl border-b border-gray-200/30 dark:border-gray-800/30">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-2 sm:py-3">
        <div className="flex items-center justify-between">
          {/* Logo/Name - More touch-friendly */}
          <button 
            onClick={() => scrollToSection('home')}
            className="text-base sm:text-lg font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 px-3 sm:px-4 py-2 sm:py-3 rounded-xl hover:bg-gray-100/60 dark:hover:bg-gray-800/60 min-h-[44px] touch-manipulation"
          >
            <span className="hidden sm:inline">Dulara Abhiranda</span>
            <span className="sm:hidden">Dulara</span>
          </button>

          {/* Desktop Navigation - Better spacing and responsive */}
          <div className="hidden xl:flex items-center justify-center flex-1 mx-4">
            <div className="flex items-center space-x-1 bg-gray-100/60 dark:bg-gray-900/60 rounded-2xl p-2 backdrop-blur-sm shadow-lg">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2.5 text-xs font-medium rounded-xl transition-all duration-300 hover:scale-105 whitespace-nowrap min-h-[40px] touch-manipulation ${
                    isActive(item.id) 
                      ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25' 
                      : 'text-gray-700 dark:text-gray-300 hover:bg-white/80 dark:hover:bg-gray-800/80 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Tablet Navigation - Compact version */}
          <div className="hidden lg:flex xl:hidden items-center justify-center flex-1 mx-4">
            <div className="flex items-center space-x-1 bg-gray-100/60 dark:bg-gray-900/60 rounded-2xl p-1.5 backdrop-blur-sm shadow-lg">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-2 py-2 text-xs font-medium rounded-lg transition-all duration-300 hover:scale-105 whitespace-nowrap min-h-[36px] touch-manipulation ${
                    isActive(item.id) 
                      ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25' 
                      : 'text-gray-700 dark:text-gray-300 hover:bg-white/80 dark:hover:bg-gray-800/80 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {item.shortName || item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links and Theme Toggle - Desktop/Tablet */}
          <div className="hidden lg:flex items-center space-x-2">
            <div className="flex items-center space-x-1 bg-gray-100/60 dark:bg-gray-900/60 rounded-2xl p-1.5">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 rounded-xl hover:bg-white/80 dark:hover:bg-gray-800/80 hover:scale-110 min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300 rounded-xl hover:bg-white/80 dark:hover:bg-gray-800/80 hover:scale-110 min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation"
              >
                <Github size={18} />
              </a>
              <div className="p-1">
                <ThemeToggle />
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <div className="bg-gray-100/60 dark:bg-gray-900/60 rounded-2xl p-1">
              <ThemeToggle />
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 text-gray-900 dark:text-white bg-gray-100/60 dark:bg-gray-900/60 rounded-2xl hover:bg-gray-200/60 dark:hover:bg-gray-800/60 transition-all duration-300 min-h-[48px] min-w-[48px] flex items-center justify-center touch-manipulation"
            >
              <div className="w-5 h-5 flex flex-col justify-center space-y-1">
                <span className={`block h-0.5 w-5 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                <span className={`block h-0.5 w-5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 w-5 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Enhanced for touch */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200/30 dark:border-gray-800/30">
            <div className="flex flex-col space-y-1 mt-4 bg-gray-100/40 dark:bg-gray-900/40 rounded-2xl p-3 backdrop-blur-sm">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-all duration-300 text-left px-4 py-4 rounded-xl min-h-[52px] touch-manipulation ${
                    isActive(item.id) 
                      ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25' 
                      : 'text-gray-700 dark:text-gray-300 hover:bg-white/70 dark:hover:bg-gray-800/70 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="flex items-center justify-center space-x-4 pt-4 mt-2 border-t border-gray-200/30 dark:border-gray-800/30">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 rounded-2xl bg-white/70 dark:bg-gray-800/70 hover:scale-110 min-h-[56px] min-w-[56px] flex items-center justify-center touch-manipulation"
                >
                  <Linkedin size={22} />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300 rounded-2xl bg-white/70 dark:bg-gray-800/70 hover:scale-110 min-h-[56px] min-w-[56px] flex items-center justify-center touch-manipulation"
                >
                  <Github size={22} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
