import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

export const WorkExperience = () => {
  const experiences = [
    {
      title: "Senior NLP Engineer",
      company: "Gnani.ai | Bengaluru, India",
      period: "May 2024 - Jan 2025",
      description: "Darshan has expertise in analyzing call center conversations to enhance agent performance through insights such as agent feedback, call summaries, and adherence to scripts, using methods like COT+Feedback prompting. He has conducted sentiment analysis, agent scoring, and call auditing to improve overall efficiency. Additionally, he designed and deployed a Gen-AI-enabled RAG pipeline for real-time, large-scale email classification across 150+ categories, achieving a 66% reduction in manpower and a 115% improvement in accuracy (from 39% to 84%) by integrating XGBoost and GPT-40-mini in a robust ensemble model. This innovative approach effectively addressed weak data challenges and optimized classification performance."
    },
    {
      title: "NLP Engineer",
      company: "Gnani.ai | Bengaluru, India",
      period: "Sep 2022 - Apr 2024",
      description: "Darshan has extensive experience in developing multilingual conversational systems, leveraging deep learning models to achieve a 50% reduction in agent costs and a 12% success rate for Indian and US clients. He has hands-on expertise in NLP techniques such as paraphrasing for training data augmentation, entity recognition (e.g., using Duckling for capturing date and time inputs), and intent classification for rule-based conversations. He played a pivotal role in creating no-code/low-code conversational AI platforms, reducing bot development time by 60%, and contributed to innovative POCs, including LLM-based voice bots. With a strong command of conversational AI, Darshan has successfully designed, trained, and evaluated deep learning models, implemented advanced chatbot and voice bot solutions, and delivered omnichannel conversational AI systems to meet diverse client needs."
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 flex items-center justify-center gap-2">
          <Briefcase className="h-8 w-8" />
          Work Experience
        </h2>
        <div className="space-y-6 max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <Card key={index} className="animate-fade-in">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{experience.title}</h3>
                    <p className="text-gray-700">{experience.company}</p>
                  </div>
                  <span className="text-gray-500 mt-2 md:mt-0">{experience.period}</span>
                </div>
                <p className="text-gray-600">{experience.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};