import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Deep Learning - work and projects",
    description: "Pytorch, Classification, Neural Network, seq2seq modelling, EDA, Linear Algebra",
    technologies: ["Pytorch", "Python", "OpenCV"],
    githubUrl: "https://github.com/Darshan2104/DeepLearning-with-Torch",
  },
  {
    title: "News Summarization",
    description: "I researched abstractive text summarization for large news datasets, fine-tuned PEGASUS for Indian languages, and optimized T5 models on Param Shavak. By developing adapters, I reduced fine-tuning time by 75% without performance loss, enhancing multilingual summarization efficiency.",
    technologies: ["PyTorch", "T5", "PEGASUS", "huggingface", "Adapter-transformer"],
    githubUrl: "https://github.com/yourusername/nlp-pipeline",
  },
  {
    title: "MailSquad",
    description: "Developed 'MailSquad' AI Crew, an email automation system using Langchain, RAG, and LangGraph to classify emails and generate automated, context-aware responses based on reference templates, improving efficiency and scalability.",
    technologies: ["crewAI", "Langchain", "RAG", "LangGraph", "Groq"],
    githubUrl: "https://github.com/Darshan2104/MailSquad",
  },
  {
    title: "LLM based Q&A ",
    description: "Explored LLM-based open Q&A, prompt-engineered contextual Q&A, and RAG-based Q&A with Cromadb. Found RAG pipeline with vectordb excelled in results and latency.",
    technologies: ["Openai", "Llama-2", "Langchain", "VectorDB", "RAG", "Prompt Engineering"],
    githubUrl: "https://github.com/Darshan2104/LLM",
  },
];

export const Projects = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <a 
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              key={project.title}
              className="transition-transform duration-300 hover:scale-105"
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
                <CardHeader>
                  <CardTitle className="text-gray-900">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-600">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-gray-200 text-gray-700 hover:bg-gray-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};