import { Button } from "@/components/ui/button";
import { ArrowUp, Github, Linkedin, Twitter, FileDown, Instagram } from "lucide-react";
import { LeetCode, Kaggle } from "@/components/ui/custom-icons";

export const Hero = () => {
  const socialLinks = [
    {
      icon: <Github className="h-6 w-6" />,
      href: "https://github.com/Darshan2104",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      href: "https://www.linkedin.com/in/darshan-tank-235897189/",
      label: "LinkedIn"
    },
    {
      icon: <Twitter className="h-6 w-6" />,
      href: "https://x.com/TankDarshan7",
      label: "Twitter"
    },
    {
      icon: <Instagram className="h-6 w-6" />,
      href: "https://www.instagram.com/darshan_tank.01/",
      label: "Instagram"
    },
    {
      icon: <LeetCode className="h-6 w-6" />,
      href: "https://leetcode.com/u/tankdarshan01/",
      label: "LeetCode"
    },
    {
      icon: <Kaggle className="h-6 w-6" />,
      href: "https://www.kaggle.com/darshantank2001",
      label: "Kaggle"
    }
  ];

  const handleDownloadResume = () => {
    // Replace this URL with your actual resume file URL
    const resumeUrl = "https://drive.google.com/file/d/1YuUWBOboEyf1O3LuO7polP2RB0r3JWdO/view?usp=sharing";
    window.open(resumeUrl, "_blank");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 text-white relative">
      <div className="text-center space-y-8 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold">Darshan Tank</h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto px-4">
          Building the future with artificial intelligence and machine learning
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-gray-900 hover:bg-gray-200 transition-colors hover:scale-110 duration-300"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
        <div className="flex items-center justify-center gap-4 pt-4">
          <Button
            onClick={handleDownloadResume}
            variant="outline"
            className="bg-white text-gray-900 hover:bg-gray-200 border-white hover:scale-110 transition-transform duration-300"
          >
            <FileDown className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
        </div>
      </div>
      <Button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 rounded-full p-3 bg-white text-gray-900 hover:bg-gray-200 hover:scale-110 transition-all duration-300 shadow-lg"
        size="icon"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-6 w-6" />
      </Button>
    </div>
  );
};