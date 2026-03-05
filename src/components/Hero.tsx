import { Github, Linkedin, Twitter, Instagram, ArrowDown } from "lucide-react";
import { LeetCode, Kaggle } from "@/components/ui/custom-icons";
import { portfolioConfig } from "@/config/portfolioConfig";
import { useEffect, useState } from "react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  LeetCode,
  Kaggle,
};

function useTypingEffect(text: string, speed = 60) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    setDisplayed("");
    setDone(false);
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        setDone(true);
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return { displayed, done };
}

export const Hero = () => {
  const { personal, socialLinks, about } = portfolioConfig;
  const { displayed: typedName, done: typingDone } = useTypingEffect(
    personal.name,
    80
  );

  const scrollToNext = () => {
    document
      .getElementById("experience")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative">
      <div className="container mx-auto px-4 max-w-3xl py-16 md:py-20">
        {/* Photo left, intro right */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-10">
          {/* Left: borderless illustration */}
          <div className="hero-enter hero-enter-delay-1 flex-shrink-0">
            <img
              src="/me.png"
              alt={personal.name}
              className="w-52 h-52 md:w-64 md:h-64 object-contain select-none"
              draggable={false}
            />
          </div>

          {/* Right: name + title + socials */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-notion-text mb-2 hero-enter hero-enter-delay-2">
              <span>Hi, I'm {typedName}</span>
              {!typingDone && <span className="typing-cursor" />}
              {typingDone && (
                <span className="ml-2 inline-block emoji-bounce select-none">
                  👋
                </span>
              )}
            </h1>

            <p className="text-xl text-notion-secondary mb-4 hero-enter hero-enter-delay-3">
              {personal.title}
            </p>

            {/* Social links */}
            <div className="flex items-center justify-center md:justify-start gap-5 hero-enter hero-enter-delay-4">
              {socialLinks.map((link) => {
                const IconComponent = iconMap[link.icon];
                if (!IconComponent) return null;
                return (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline text-notion-secondary hover:text-notion-text transition-colors"
                    aria-label={link.platform}
                  >
                    <IconComponent className="h-[18px] w-[18px]" />
                  </a>
                );
              })}
              <span className="text-notion-border mx-1">|</span>
              <span className="text-sm text-notion-secondary">
                {personal.location}
              </span>
            </div>
          </div>
        </div>

        {/* Description — full width below the intro */}
        <p className="text-base text-notion-secondary leading-[1.8] mb-8 hero-enter hero-enter-delay-4 text-center md:text-left">
          {about.description}
        </p>

        {/* Technology tags */}
        <div className="flex flex-wrap justify-center md:justify-start gap-2 hero-enter hero-enter-delay-5">
          {about.quickTechnologies.map((tech) => (
            <span
              key={tech}
              className="tag-pill px-3 py-1 text-sm text-notion-secondary bg-notion-gray border border-notion-border rounded cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-notion-secondary hover:text-notion-text transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-5 h-5" />
      </button>
    </div>
  );
};
