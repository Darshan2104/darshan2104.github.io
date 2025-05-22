import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { LeetCode, Kaggle } from "@/components/ui/custom-icons";

export const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "tankdarshan01@gmail.com",
      href: "mailto:tankdarshan01@gmail.com",
      color: "text-blue-600"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: "Location",
      value: "Bengaluru, India",
      href: "#",
      color: "text-green-600"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Available for",
      value: "Remote & On-site",
      href: "#",
      color: "text-purple-600"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/Darshan2104",
      label: "GitHub",
      color: "hover:bg-gray-800"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/in/darshan-tank-235897189/",
      label: "LinkedIn", 
      color: "hover:bg-blue-600"
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      href: "https://x.com/TankDarshan7",
      label: "Twitter",
      color: "hover:bg-sky-500"
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      href: "https://www.instagram.com/darshan_tank.01/",
      label: "Instagram",
      color: "hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500"
    },
    {
      icon: <LeetCode className="h-5 w-5" />,
      href: "https://leetcode.com/u/tankdarshan01/",
      label: "LeetCode",
      color: "hover:bg-yellow-500"
    },
    {
      icon: <Kaggle className="h-5 w-5" />,
      href: "https://www.kaggle.com/darshantank2001",
      label: "Kaggle",
      color: "hover:bg-cyan-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 dark:from-gray-100 dark:via-gray-200 dark:to-gray-300 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white dark:text-gray-800 mb-4">
            <span className="text-gradient bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Let's Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-200 dark:text-gray-800 max-w-3xl mx-auto">
            Ready to collaborate on your next AI/ML project? Let's discuss how we can bring your ideas to life.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center">
            {/* Contact Info */}
            <div className="w-full animate-slide-up">
              <Card className="glass-effect dark:bg-white/90 border-white/20 dark:border-gray-300">
                <CardContent className="p-8 md:p-12">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-800 mb-6 text-center">Get in Touch</h3>
                  <p className="text-gray-800 dark:text-gray-800 mb-8 leading-relaxed text-center max-w-2xl mx-auto">
                    I'm always excited to discuss new opportunities, innovative projects, and potential collaborations. 
                    Whether you're looking to implement AI solutions or need expert consultation, let's connect!
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {contactInfo.map((info, index) => (
                      <div 
                        key={info.label}
                        className="flex flex-col items-center text-center animate-fade-in"
                        style={{ animationDelay: `${index * 0.2}s` }}
                      >
                        <div className={`w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4 ${info.color}`}>
                          {info.icon}
                        </div>
                        <div>
                          <p className="text-sm text-gray-900 dark:text-gray-600 mb-1">{info.label}</p>
                          <a 
                            href={info.href}
                            className="text-gray-800 dark:text-gray-800 hover:text-blue-400 dark:hover:text-blue-600 transition-colors font-medium"
                          >
                            {info.value}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t border-white/10 pt-8">
                    <h4 className="text-lg font-semibold text-gray mb-6 text-center">Follow Me</h4>
                    <div className="flex flex-wrap justify-center gap-4">
                      {socialLinks.map((link, index) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`group w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:rotate-12 ${link.color} animate-fade-in`}
                          style={{ animationDelay: `${index * 0.1}s` }}
                          aria-label={link.label}
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
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};