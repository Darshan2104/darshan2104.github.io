import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Star, TrendingUp } from "lucide-react";

const projects = [
  {
    title: "Deep Learning - Work & Projects",
    description: "Comprehensive deep learning implementations covering PyTorch fundamentals, classification algorithms, neural network architectures, seq2seq modeling, and exploratory data analysis with linear algebra foundations.",
    technologies: ["PyTorch", "Python", "OpenCV", "Neural Networks"],
    githubUrl: "https://github.com/Darshan2104/DeepLearning-with-Torch",
    category: "Deep Learning",
    impact: "Educational Resource",
    gradient: "from-blue-500 to-purple-600"
  },
  {
    title: "News Summarization",
    description: "Advanced abstractive text summarization research for large news datasets. Fine-tuned PEGASUS for Indian languages and optimized T5 models on Param Shavak supercomputer. Developed adapters reducing fine-tuning time by 75% without performance loss.",
    technologies: ["PyTorch", "T5", "PEGASUS", "Hugging Face", "Adapter-Transformer"],
    githubUrl: "https://github.com/yourusername/nlp-pipeline",
    category: "NLP Research",
    impact: "75% Time Reduction",
    gradient: "from-green-500 to-teal-600"
  },
  {
    title: "MailSquad",
    description: "AI-powered email automation system leveraging LangChain, RAG, and LangGraph. Automatically classifies emails and generates context-aware responses using reference templates, significantly improving operational efficiency and scalability.",
    technologies: ["CrewAI", "LangChain", "RAG", "LangGraph", "Groq"],
    githubUrl: "https://github.com/Darshan2104/MailSquad",
    category: "AI Automation",
    impact: "Production Ready",
    gradient: "from-purple-500 to-pink-600"
  },
  {
    title: "LLM-based Q&A System",
    description: "Comprehensive exploration of LLM-based question-answering systems. Implemented prompt-engineered contextual Q&A and RAG-based solutions with ChromaDB. Benchmarked various approaches for optimal results and latency performance.",
    technologies: ["OpenAI", "Llama-2", "LangChain", "VectorDB", "RAG", "Prompt Engineering"],
    githubUrl: "https://github.com/Darshan2104/LLM",
    category: "RAG Systems",
    impact: "Optimized Performance",
    gradient: "from-orange-500 to-red-600"
  },
];

export const Projects = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full filter blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Innovative AI/ML solutions solving real-world problems with measurable impact
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="group hover-lift glass-effect overflow-hidden relative animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Gradient overlay */}
              <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge 
                        variant="secondary" 
                        className={`bg-gradient-to-r ${project.gradient} text-white border-0`}
                      >
                        {project.category}
                      </Badge>
                      <div className="flex items-center gap-1 text-yellow-500">
                        <TrendingUp className="w-4 h-4" />
                        <span className="text-sm font-medium text-gray-600">{project.impact}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl md:text-2xl text-gray-900 group-hover:text-gray-800 transition-colors leading-tight">
                      {project.title}
                    </CardTitle>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 opacity-60 group-hover:opacity-100 transition-opacity"
                      asChild
                    >
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View on GitHub"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 opacity-60 group-hover:opacity-100 transition-opacity"
                      asChild
                    >
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="External link"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="mb-6 text-gray-600 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className="bg-white/50 text-gray-700 border-gray-200 hover:bg-gray-100 transition-colors animate-fade-in"
                      style={{ animationDelay: `${index * 0.2 + techIndex * 0.1}s` }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <Button
                  className={`w-full bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white border-0 group-hover:scale-105 transition-all duration-300`}
                  asChild
                >
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    View Project
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
              
              {/* Corner decoration */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Star className="w-8 h-8 text-gray-400" />
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <Button
            variant="outline"
            size="lg"
            className="bg-white/50 backdrop-blur-sm hover:bg-white border-gray-200 text-gray-700 hover:text-gray-900 transition-all duration-300 hover:scale-105"
            asChild
          >
            <a 
              href="https://github.com/Darshan2104"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              View All Projects on GitHub
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};