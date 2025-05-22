import { Button } from "@/components/ui/button";
import { ArrowUp, Github, Linkedin, Twitter, FileDown, Instagram, ChevronDown, Sparkles } from "lucide-react";
import { LeetCode, Kaggle } from "@/components/ui/custom-icons";
import { useEffect, useState } from "react";
import { portfolioConfig } from "@/config/portfolioConfig";

const getIconComponent = (iconName: string) => {
  const iconMap: Record<string, any> = {
    Github,
    Linkedin, 
    Twitter,
    Instagram,
    LeetCode,
    Kaggle
  };
  return iconMap[iconName];
};

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const socialLinks = portfolioConfig.socialLinks.map(link => {
    const IconComponent = getIconComponent(link.icon);
    const colorMap: Record<string, string> = {
      'Github': 'hover:bg-gray-800',
      'Linkedin': 'hover:bg-blue-600',
      'Twitter': 'hover:bg-sky-500',
      'Instagram': 'hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500',
      'LeetCode': 'hover:bg-yellow-500',
      'Kaggle': 'hover:bg-cyan-500'
    };
    
    return {
      icon: <IconComponent className="h-6 w-6" />,
      href: link.url,
      label: link.platform,
      color: colorMap[link.icon] || 'hover:bg-gray-600'
    };
  });

  const handleDownloadResume = () => {
    window.open(portfolioConfig.personal.resumeUrl, "_blank");
  };

  const scrollToNext = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 animate-gradient"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white dark:bg-blue-400 rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      {/* Mouse follower effect */}
      <div 
        className="absolute w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-600 dark:to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-soft"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          transition: 'all 0.3s ease'
        }}
      />
      
      <div className={`text-center space-y-8 z-10 px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-2 text-yellow-300 dark:text-yellow-400 animate-pulse-soft">
            <Sparkles className="h-5 w-5" />
            <span className="text-sm font-medium tracking-wider uppercase">{portfolioConfig.personal.title}</span>
            <Sparkles className="h-5 w-5" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white">
            <span className="inline-block animate-slide-up" style={{ animationDelay: '0.2s' }}>
              {portfolioConfig.personal.name}
            </span>{' '}
            {/* <span className="inline-block text-gradient animate-slide-up" style={{ animationDelay: '0.4s' }}>
              {portfolioConfig.personal.name.split(' ')[1]}
            </span> */}
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto text-gray-200 dark:text-gray-300 leading-relaxed animate-slide-up" style={{ animationDelay: '0.6s' }}>
            {portfolioConfig.personal.tagline.split('AI & Machine Learning')[0]}
            <span className="text-yellow-300 dark:text-yellow-400 font-semibold">AI & Machine Learning</span>
            {portfolioConfig.personal.tagline.split('AI & Machine Learning')[1]}
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 pt-6 animate-slide-up" style={{ animationDelay: '0.8s' }}>
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 dark:bg-gray-800/50 backdrop-blur-md border border-white/20 dark:border-gray-600/20 text-white transition-all duration-300 hover:scale-110 hover:rotate-12 ${link.color}`}
              aria-label={link.label}
              style={{ animationDelay: `${1 + index * 0.1}s` }}
            >
              <div className="transition-transform duration-300 group-hover:scale-110">
                {link.icon}
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 dark:bg-gray-900/90 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {link.label}
              </div>
            </a>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 animate-slide-up" style={{ animationDelay: '1s' }}>
          <Button
            onClick={handleDownloadResume}
            className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <FileDown className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
            Download Resume
          </Button>
          
          <Button
            onClick={scrollToNext}
            variant="ghost"
            className="text-white hover:bg-white/10 border border-white/20 px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
          >
            Explore My Work
          </Button>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white/60" />
        </div>
      </div>
      
      {/* Scroll to top button */}
      <Button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 rounded-full p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl border-0"
        size="icon"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-6 w-6" />
      </Button>
    </div>
  );
};