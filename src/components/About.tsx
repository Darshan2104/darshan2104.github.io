import { Card, CardContent } from "@/components/ui/card";
import { Brain, Lightbulb, Target, Users } from "lucide-react";
import { portfolioConfig } from "@/config/portfolioConfig";

const getIconComponent = (iconName: string) => {
  const iconMap: Record<string, any> = {
    Brain,
    Lightbulb,
    Target,
    Users
  };
  return iconMap[iconName];
};

export const About = () => {
  const highlights = portfolioConfig.about.highlights.map(highlight => {
    const IconComponent = getIconComponent(highlight.icon);
    return {
      ...highlight,
      icon: <IconComponent className="h-8 w-8" />
    };
  });

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-200 to-purple-200 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 dark:from-purple-900/30 dark:to-pink-900/30 rounded-full filter blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-800 mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <Card className="glass-effect hover-lift mb-12 animate-slide-up border-white/20 dark:border-gray-700/20">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-800">
                    {portfolioConfig.about.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {portfolioConfig.about.quickTechnologies.map((tech, index) => (
                      <span 
                        key={tech}
                        className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-gray-200 dark:to-gray-300 text-gray-700 dark:text-gray-800 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="relative">
                  <div className="w-64 h-64 md:w-80 md:h-80 mx-auto relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full animate-pulse-soft"></div>
                    <div className="absolute inset-4 bg-white dark:bg-gray-200 rounded-full flex items-center justify-center">
                      <div className="text-center">
                        <Brain className="h-16 w-16 text-gray-700 dark:text-gray-800 mx-auto mb-4 animate-float" />
                        <p className="text-2xl font-bold text-gray-900 dark:text-gray-800">AI Expert</p>
                        <p className="text-sm text-gray-600 dark:text-gray-700">{portfolioConfig.about.experienceYears} Years Experience</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <Card 
                key={highlight.title}
                className="hover-lift glass-effect animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                    <div className="text-white">
                      {highlight.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-800">{highlight.title}</h3>
                  <p className="text-gray-600 dark:text-gray-700 text-sm leading-relaxed">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};