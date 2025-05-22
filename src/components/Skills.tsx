import { Card, CardContent } from "@/components/ui/card";
import { Brain, Code, Database, Network, Star } from "lucide-react";

const skills = [
  {
    title: "Programming & Tools",
    icon: Code,
    description: "Python, C/C++, Flask, FastAPI, TensorFlow, PyTorch, Pandas, Numpy, nltk, Scikit-learn, Spacy, Transformers, Huggingface, Jupyter Notebook",
    color: "from-blue-500 to-cyan-500",
    items: ["Python", "C/C++", "Flask", "FastAPI", "TensorFlow", "PyTorch"]
  },
  {
    title: "Machine Learning",
    icon: Brain,
    description: "Deep Learning, Neural Networks, LLM, OpenAI, Groq, RAG, LangChain, LangGraph, Prompt Engineering, CrewAI, AutoGen, LangGraph",
    color: "from-purple-500 to-pink-500",
    items: ["Deep Learning", "RAG", "Langchain", "LangGraph", "Prompt Engineering", "LangChain"]
  },
  {
    title: "Data & Databases",
    icon: Database,
    description: "Pinecone, Qdrant, Redis, MongoDB, PostgreSQL, Vector Databases, Data Processing",
    color: "from-green-500 to-emerald-500",
    items: ["Pinecone", "Qdrant", "Redis", "MongoDB", "PostgreSQL", "Vector DBs"]
  },
  {
    title: "ML in Production",
    icon: Network,
    description: "Docker, Jenkins, Kibana, RabbitMQ, Git, AWS S3, DevOps, CI/CD",
    color: "from-orange-500 to-red-500",
    items: ["Docker", "Jenkins", "Kibana", "RabbitMQ", "Git", "AWS S3"]
  },
];

export const Skills = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full filter blur-3xl opacity-30 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 rounded-full filter blur-3xl opacity-30 -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-800 mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-700 max-w-3xl mx-auto">
            Comprehensive expertise across the full AI/ML development lifecycle
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {skills.map((skill, index) => (
            <Card 
              key={skill.title} 
              className="group hover-lift glass-effect animate-fade-in overflow-hidden relative"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <CardContent className="p-8 text-center relative z-10">
                <div className={`w-20 h-20 bg-gradient-to-br ${skill.color} rounded-2xl flex items-center justify-center mx-auto mb-6 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                  <skill.icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-800 group-hover:text-gray-800 dark:group-hover:text-gray-700 transition-colors">
                  {skill.title}
                </h3>
                
                <div className="space-y-3 mb-6">
                  {skill.items.map((item, itemIndex) => (
                    <div 
                      key={item}
                      className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-700 group-hover:text-gray-700 dark:group-hover:text-gray-800 transition-colors"
                      style={{ animationDelay: `${index * 0.2 + itemIndex * 0.1}s` }}
                    >
                      <Star className="w-3 h-3 text-yellow-500 fill-current" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="text-xs text-gray-500 dark:text-gray-600 leading-relaxed">
                  {skill.description}
                </div>
                
                {/* Hover effect indicator */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${skill.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Additional skills grid */}
        <div className="mt-16 max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-gray-800">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "OpenAI", "Groq", "AutoGen", "LangGraph", "CrewAI", "Transformers", 
              "Hugging Face", "Scikit-learn", "Spacy", "NLTK", "Jupyter", "Git"
            ].map((tech, index) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-200 dark:to-gray-300 hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-200 dark:hover:to-purple-200 text-gray-700 dark:text-gray-800 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 cursor-default animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};