import { Card, CardContent } from "@/components/ui/card";
import { Brain, Code, Database, Network } from "lucide-react";

const skills = [
  {
    title: "Programming and Tools",
    icon: Code,
    description: "Python, C/C++, Flask, FastAPI, TensorFlow, PyTorch, Pandas, Numpy, nltk, Scikit-learn, Spacy, Transformers, Huggingface, Jupyter Notebook",
  },
  {
    title: "Machine Learning",
    icon: Brain,
    description: "Deep Learning, Neural Networks, LLM, Openai, Groq, Langchain, RAG, Prompt Engineering, CrewAI, AutoGen, LangGraph",
  },
  {
    title: "Data",
    icon: Database,
    description: "Pinecone, Qdrant, Redis, MongoDB, PostgreSQL,",
  },
  {
    title: "ML In Prod",
    icon: Network,
    description: "Docker, Jenkins ,Kibana, RabbitMQ, Git, AWS S3",
  },
];

export const Skills = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <Card key={skill.title} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <skill.icon className="w-12 h-12 mx-auto mb-4 text-gray-700" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{skill.title}</h3>
                <p className="text-gray-600">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};