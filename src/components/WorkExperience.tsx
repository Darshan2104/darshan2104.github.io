import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin, TrendingUp, Users, Zap } from "lucide-react";

export const WorkExperience = () => {
  const experiences = [
    {
      title: "Consultant GenAI",
      company: "Deloitte",
      location: "Bengaluru, India",
      period: "Feb 2025 - Current",
      duration: "Working",
      type: "Full-time",
      description: "Built and deployed Agentic RAG Chatbot on Tourist Policy Documents",
      achievements: [
        "Designed and deployed Gen-AI RAG pipeline for real-time Conversation on Tourist Policy Documents",
        "It helped with information retrieval and document summarization",
        "It guides the user for drafting new policies and provides suggestions for improvement",
        "It helped to compare different policies for better decision making",
      ],
      technologies: ["LlamaIndex", "GPT-4o", "Azure AI Search", "SQL"],
      gradient: "from-purple-600 to-pink-600"
    },
    {
      title: "Senior NLP Engineer",
      company: "Gnani.ai",
      location: "Bengaluru, India",
      period: "May 2024 - Jan 2025",
      duration: "9 months",
      type: "Full-time",
      description: "Led advanced call center analytics and Gen-AI solutions, analyzing conversations to enhance agent performance through insights, feedback systems, and script adherence monitoring using COT+Feedback prompting techniques.",
      achievements: [
        "Designed and deployed Gen-AI RAG pipeline for real-time email classification across 150+ categories",
        "Achieved 66% reduction in manpower and 115% accuracy improvement (39% to 84%)",
        "Integrated XGBoost and GPT-4-mini in robust ensemble model",
        "Conducted sentiment analysis, agent scoring, and call auditing for efficiency optimization"
      ],
      technologies: ["GPT-4", "RAG", "XGBoost", "NLP", "Sentiment Analysis", "Gen-AI"],
      gradient: "from-blue-600 to-purple-600"
    },
    {
      title: "NLP Engineer",
      company: "Gnani.ai",
      location: "Bengaluru, India", 
      period: "Sep 2022 - Apr 2024",
      duration: "1 year 8 months",
      type: "Full-time",
      description: "Developed multilingual conversational AI systems and no-code/low-code platforms, leveraging deep learning models to create advanced chatbot and voice bot solutions for diverse client needs.",
      achievements: [
        "Achieved 50% reduction in agent costs for Indian and US clients",
        "Developed no-code/low-code conversational AI platforms reducing bot development time by 60%",
        "Implemented advanced NLP techniques: paraphrasing, entity recognition, intent classification",
        "Contributed to innovative POCs including LLM-based voice bots"
      ],
      technologies: ["Deep Learning", "Conversational AI", "Duckling", "Entity Recognition", "Voice Bots", "LLMs"],
      gradient: "from-purple-600 to-pink-600"
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full filter blur-3xl opacity-30 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-full filter blur-3xl opacity-30 -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-800 mb-4">
            Work Experience
            {/* <span className="text-gradient">Experience</span> */}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-700 max-w-3xl mx-auto">
            Delivering measurable impact through innovative AI/ML solutions
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>
            
            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <div 
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} animate-fade-in`}
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  {/* Content card */}
                  <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-8 md:text-right' : 'md:ml-8'} md:w-1/2`}>
                    <Card className="hover-lift glass-effect overflow-hidden">
                      {/* Gradient top border */}
                      <div className={`h-1 bg-gradient-to-r ${experience.gradient}`}></div>
                      
                      <CardContent className="p-6 md:p-8">
                        <div className="space-y-4">
                          {/* Header */}
                          <div>
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                              <Badge className={`bg-gradient-to-r ${experience.gradient} text-white border-0`}>
                                {experience.type}
                              </Badge>
                              <Badge variant="outline" className="bg-white/50">
                                {experience.duration}
                              </Badge>
                            </div>
                            
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-800 mb-1">
                              {experience.title}
                            </h3>
                            
                            <div className="flex flex-col md:flex-row md:items-center gap-2 text-gray-600 dark:text-gray-700">
                              <div className="flex items-center gap-1">
                                <Briefcase className="w-4 h-4" />
                                <span className="font-medium">{experience.company}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                <span>{experience.location}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                <span>{experience.period}</span>
                              </div>
                            </div>
                          </div>
                          
                          {/* Description */}
                          <p className="text-gray-700 dark:text-gray-800 leading-relaxed">
                            {experience.description}
                          </p>
                          
                          {/* Achievements */}
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-gray-800 mb-3 flex items-center gap-2">
                              <TrendingUp className="w-4 h-4" />
                              Key Achievements
                            </h4>
                            <ul className="space-y-2">
                              {experience.achievements.map((achievement, achievementIndex) => (
                                <li 
                                  key={achievementIndex}
                                  className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-700"
                                >
                                  <Zap className="w-3 h-3 text-yellow-500 mt-1 flex-shrink-0" />
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          {/* Technologies */}
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-gray-800 mb-3 flex items-center gap-2">
                              <Users className="w-4 h-4" />
                              Technologies Used
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {experience.technologies.map((tech, techIndex) => (
                                <Badge 
                                  key={tech}
                                  variant="secondary"
                                  className="bg-gray-100 dark:bg-gray-200 text-gray-700 dark:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-300 transition-colors"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};