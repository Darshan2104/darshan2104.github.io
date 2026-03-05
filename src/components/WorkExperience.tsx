import { useState } from "react";
import {
  Code,
  Brain,
  Database,
  Network,
  ChevronRight,
} from "lucide-react";
import { portfolioConfig } from "@/config/portfolioConfig";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code,
  Brain,
  Database,
  Network,
};

const emojiMap: Record<string, string> = {
  Code: "🛠",
  Brain: "🧠",
  Database: "🗄",
  Network: "🚀",
};

function ExperienceToggle({
  exp,
}: {
  exp: (typeof portfolioConfig.experience)[0];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-notion-border rounded hover:border-notion-secondary/40 transition-colors">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start gap-3 p-4 text-left group"
      >
        <ChevronRight
          className={`toggle-arrow w-4 h-4 text-notion-secondary mt-0.5 flex-shrink-0 ${open ? "open" : ""}`}
        />
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
            <h3 className="font-semibold text-notion-text group-hover:text-black transition-colors">
              {exp.title}
            </h3>
            <span className="text-sm text-notion-secondary whitespace-nowrap">
              {exp.period}
            </span>
          </div>
          <p className="text-sm text-notion-secondary">
            {exp.company} &middot; {exp.location}
          </p>
        </div>
      </button>

      {open && (
        <div className="px-4 pb-4 pl-11 space-y-3 animate-[heroIn_0.3s_ease_forwards]">
          <p className="text-sm text-notion-secondary leading-relaxed">
            {exp.description}
          </p>

          <ul className="space-y-1.5">
            {exp.achievements.map((achievement, i) => (
              <li
                key={i}
                className="text-sm text-notion-secondary pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-notion-secondary"
              >
                {achievement}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-1.5 pt-1">
            {exp.technologies.map((tech) => (
              <span
                key={tech}
                className="tag-pill px-2 py-0.5 text-xs text-notion-secondary bg-notion-gray border border-notion-border rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export const WorkExperience = () => {
  const { skills, experience } = portfolioConfig;
  const sectionRef = useScrollReveal();

  return (
    <div className="py-20" ref={sectionRef}>
      <div className="container mx-auto px-4 max-w-2xl">
        {/* Skills — Notion callout blocks with emojis */}
        <h2 className="reveal text-2xl font-bold text-notion-text mb-2">
          <span className="emoji-bounce inline-block mr-2">⚡</span>
          Technical Skills
        </h2>
        <p className="reveal text-sm text-notion-secondary mb-6">
          Core technologies and frameworks I work with daily.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-20 stagger">
          {skills.categories.map((category) => {
            const emoji = emojiMap[category.icon] || "📦";
            return (
              <div
                key={category.title}
                className="reveal callout-hover p-4 bg-notion-gray rounded border border-transparent cursor-default"
              >
                <div className="flex items-start gap-3">
                  <span className="text-lg select-none mt-0.5">{emoji}</span>
                  <div>
                    <h3 className="font-semibold text-sm text-notion-text mb-1">
                      {category.title}
                    </h3>
                    <p className="text-sm text-notion-secondary leading-relaxed">
                      {category.items.join("  ·  ")}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Experience — Notion toggle blocks */}
        <h2 className="reveal text-2xl font-bold text-notion-text mb-2">
          <span className="emoji-bounce inline-block mr-2">💼</span>
          Work Experience
        </h2>
        <p className="reveal text-sm text-notion-secondary mb-6">
          Click to expand each role and see details.
        </p>

        <div className="space-y-3 stagger">
          {experience.map((exp, index) => (
            <div key={index} className="reveal">
              <ExperienceToggle exp={exp} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
