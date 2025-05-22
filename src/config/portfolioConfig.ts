// Portfolio Configuration
// This file contains all the configurable content for the portfolio website.
// Update these values to customize your portfolio.

export const portfolioConfig = {
  // Personal Information
  personal: {
    name: "Darshan Tank",
    title: "AI Engineer & ML Specialist", 
    tagline: "Crafting intelligent solutions with AI & Machine Learning to transform ideas into reality",
    email: "tankdarshan01@gmail.com",
    location: "Bengaluru, India",
    availability: "Remote & On-site",
    resumeUrl: "https://drive.google.com/file/d/1FpxoHxiw-tU2o13SBXzOBSFA8kDhctCl/view?usp=sharing"
  },

  // Social Links
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/Darshan2104",
      icon: "Github"
    },
    {
      platform: "LinkedIn", 
      url: "https://www.linkedin.com/in/darshan-tank-235897189/",
      icon: "Linkedin"
    },
    {
      platform: "Twitter",
      url: "https://x.com/TankDarshan7",
      icon: "Twitter"
    },
    
    {
      platform: "LeetCode",
      url: "https://leetcode.com/u/tankdarshan01/",
      icon: "LeetCode"
    },
    {
      platform: "Kaggle",
      url: "https://www.kaggle.com/darshantank2001",
      icon: "Kaggle"
    },
    {
      platform: "Instagram",
      url: "https://www.instagram.com/darshan_tank.01/",
      icon: "Instagram"
    }
  ],

  // About Section
  about: {
    description: "I'm a passionate AI Engineer with expertise in machine learning, deep learning, and natural language processing. With a strong foundation in both theoretical concepts and practical applications, I develop innovative solutions that leverage the power of artificial intelligence to solve complex real-world problems and drive meaningful impact.",
    experienceYears: "3+",
    highlights: [
      {
        title: "AI Innovation",
        description: "Built and delivered cutting-edge AI solutions leveraging advanced Generative AI techniques",
        icon: "Brain"
      },
      {
        title: "Problem Solving", 
        description: "Transforming complex challenges into elegant AI-powered solutions",
        icon: "Lightbulb"
      },
      {
        title: "Results Driven",
        description: "Delivered 66% reduction in manpower and 115% accuracy improvement",
        icon: "Target"
      },
      {
        title: "Collaboration",
        description: "Building conversational AI systems that enhance human-machine interaction",
        icon: "Users"
      }
    ],
    quickTechnologies: ["Python", "PyTorch", "LlamaIndex", "LangChain", "LangGraph", "Azure", "Docker", "SQL"]
  },

  // Skills Section
  // skills: {
  //   categories: [
  //     {
  //       title: "Programming & Tools",
  //       description: "Python, C/C++, Flask, FastAPI, TensorFlow, PyTorch, Pandas, Numpy, nltk, Scikit-learn, Spacy, Transformers, Huggingface, Jupyter Notebook",
  //       color: "from-blue-500 to-cyan-500",
  //       icon: "Code",
  //       items: ["Python", "C/C++", "Flask", "FastAPI", "TensorFlow", "PyTorch"]
  //     },
  //     {
  //       title: "Machine Learning",
  //       description: "Deep Learning, Neural Networks, LLM, OpenAI, Groq, RAG, LangChain, LangGraph, Prompt Engineering, CrewAI, AutoGen, LangGraph",
  //       color: "from-purple-500 to-pink-500",
  //       icon: "Brain",
  //       items: ["Deep Learning", "RAG", "Langchain", "LangGraph", "Prompt Engineering", "LangChain"]
  //     },
  //     {
  //       title: "Data & Databases",
  //       description: "Pinecone, Qdrant, Redis, MongoDB, PostgreSQL, Vector Databases, Data Processing",
  //       color: "from-green-500 to-emerald-500",
  //       icon: "Database",
  //       items: ["Pinecone", "Qdrant", "Redis", "MongoDB", "PostgreSQL", "Vector DBs"]
  //     },
  //     {
  //       title: "ML in Production",
  //       description: "Docker, Jenkins, Kibana, RabbitMQ, Git, AWS S3, DevOps, CI/CD",
  //       color: "from-orange-500 to-red-500",
  //       icon: "Network",
  //       items: ["Docker", "Jenkins", "Kibana", "RabbitMQ", "Git", "AWS S3"]
  //     }
  //   ],
  //   additionalTechnologies: [
  //     "OpenAI", "Groq", "AutoGen", "LangGraph", "CrewAI", "Transformers",
  //     "Hugging Face", "Scikit-learn", "Spacy", "NLTK", "Jupyter", "Git"
  //   ]
  // },

  // Work Experience
  experience: {
    experiences: [
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
      }
    ]
  },

  // Projects
  projects: {
    projects: [
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
      }
    ]
  },

  // Contact Information
  contact: {
    title: "Let's Connect",
    subtitle: "Ready to collaborate on your next AI/ML project? Let's discuss how we can bring your ideas to life.",
    description: "I'm always excited to discuss new opportunities, innovative projects, and potential collaborations. Whether you're looking to implement AI solutions or need expert consultation, let's connect!",
    showContactForm: false // Set to true if you want to re-enable the contact form
  },

  // Navigation
  navigation: {
    items: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Experience", href: "#experience" },
      { label: "Projects", href: "#projects" },
      { label: "Contact", href: "#contact" }
    ]
  }
};