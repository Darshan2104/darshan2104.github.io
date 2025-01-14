import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Twitter, FileDown } from "lucide-react";

export const SocialLinks = () => {
  const socialLinks = [
    {
      icon: <Github className="h-6 w-6" />,
      href: "https://github.com/yourusername",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      href: "https://linkedin.com/in/yourusername",
      label: "LinkedIn"
    },
    {
      icon: <Twitter className="h-6 w-6" />,
      href: "https://twitter.com/yourusername",
      label: "Twitter"
    }
  ];

  const handleDownloadResume = () => {
    // Replace this URL with your actual resume file URL
    const resumeUrl = "https://drive.google.com/file/d/1YuUWBOboEyf1O3LuO7polP2RB0r3JWdO/view?usp=sharing";
    window.open(resumeUrl, "_blank");
  };

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto bg-white">
          <CardContent className="p-6">
            <div className="flex flex-col items-center space-y-6">
              <div className="flex flex-wrap justify-center gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-900 text-white hover:bg-gray-700 transition-colors"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
              <Button
                onClick={handleDownloadResume}
                className="bg-gray-900 hover:bg-gray-700 text-white"
              >
                <FileDown className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};