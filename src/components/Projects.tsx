import { ExternalLink, Github, BookOpen, FileText } from "lucide-react";
import { portfolioConfig } from "@/config/portfolioConfig";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const Projects = () => {
  const { projects, publications, blogs, personal, skills } = portfolioConfig;
  const sectionRef = useScrollReveal();

  return (
    <div className="py-20 bg-notion-gray/50" ref={sectionRef}>
      <div className="container mx-auto px-4 max-w-2xl">
        {/* Publications */}
        {publications.length > 0 && (
          <>
            <h2 className="reveal text-2xl font-bold text-notion-text mb-2">
              <span className="emoji-bounce inline-block mr-2">📄</span>
              Publications
            </h2>
            <div className="space-y-0 mb-16 stagger">
              {publications.map((pub, index) => (
                <div
                  key={index}
                  className={`reveal py-4 ${index !== publications.length - 1 ? "border-b border-notion-border" : ""}`}
                >
                  <div className="flex items-start gap-2">
                    <FileText className="w-4 h-4 text-notion-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <a
                        href={pub.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline font-semibold text-sm text-notion-text"
                      >
                        {pub.title}
                      </a>
                      <p className="text-sm text-notion-secondary">
                        {pub.venue} &middot; {pub.year}
                      </p>
                      {pub.description && (
                        <p className="text-sm text-notion-secondary mt-1">
                          {pub.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Technical Skills */}
        <h2 className="reveal text-2xl font-bold text-notion-text mb-2 mt-8">
          <span className="emoji-bounce inline-block mr-2">⚡</span>
          Technical Skills
        </h2>
        <div className="space-y-5 mb-16 stagger">
          {skills.categories.map((category) => (
            <div key={category.title} className="reveal">
              <h3 className="text-sm font-semibold text-notion-text mb-2">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="tag-pill px-2 py-0.5 text-xs text-notion-secondary bg-notion-gray border border-notion-border rounded"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Projects — Notion gallery view */}
        <h2 className="reveal text-2xl font-bold text-notion-text mb-2 mt-8">
          <span className="emoji-bounce inline-block mr-2">🧪</span>
          Projects
        </h2>
        <p className="reveal text-sm text-notion-secondary mb-6">
          Featured AI/ML work with real-world impact.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8 stagger">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal card-lift group block p-4 bg-white border border-notion-border rounded"
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="font-semibold text-sm text-notion-text leading-tight group-hover:text-black">
                  {project.title}
                </h3>
                <Github className="w-4 h-4 text-notion-secondary group-hover:text-notion-text transition-colors flex-shrink-0" />
              </div>

              <div className="flex items-center gap-2 mb-2">
                <span className="inline-block px-2 py-0.5 text-xs text-notion-secondary bg-notion-gray rounded">
                  {project.category}
                </span>
                <span className="text-xs text-notion-secondary">
                  {project.impact}
                </span>
              </div>

              <p className="text-sm text-notion-secondary leading-relaxed mb-3 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-xs text-notion-secondary bg-notion-gray rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        <div className="reveal text-center mb-16">
          <a
            href="https://github.com/Darshan2104"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline inline-flex items-center gap-2 text-sm text-notion-secondary hover:text-notion-text transition-colors"
          >
            <Github className="w-4 h-4" />
            View all projects on GitHub
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Blogs */}
        {blogs.length > 0 && (
          <>
            <h2 className="reveal text-2xl font-bold text-notion-text mb-2 mt-8">
              <span className="emoji-bounce inline-block mr-2">✍️</span>
              Blog
            </h2>
            <div className="space-y-0 stagger">
              {blogs.map((blog, index) => (
                <div
                  key={index}
                  className={`reveal py-4 ${index !== blogs.length - 1 ? "border-b border-notion-border" : ""}`}
                >
                  <div className="flex items-start gap-2">
                    <BookOpen className="w-4 h-4 text-notion-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <a
                        href={blog.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline font-semibold text-sm text-notion-text"
                      >
                        {blog.title}
                      </a>
                      <p className="text-sm text-notion-secondary">
                        {blog.date}
                      </p>
                      {blog.description && (
                        <p className="text-sm text-notion-secondary mt-1">
                          {blog.description}
                        </p>
                      )}
                      {blog.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {blog.tags.map((tag) => (
                            <span
                              key={tag}
                              className="tag-pill px-2 py-0.5 text-xs text-notion-secondary bg-notion-gray rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

        {/* Footer */}
        <p className="reveal text-center text-xs text-notion-secondary/60 mt-16">
          &copy; {new Date().getFullYear()} Darshan Tank
        </p>
        <p className="reveal text-center text-[11px] text-notion-secondary/50 mt-1">
          Last updated on {personal.lastUpdated}
        </p>
    </div>
  );
};
