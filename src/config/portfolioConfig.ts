// Portfolio Configuration
// This is the SINGLE SOURCE OF TRUTH for all dynamic content.
// To update your portfolio, just edit the arrays/objects below.
// Components read from this file — no content is hardcoded in components.

export const portfolioConfig = {
  // Personal Information
  personal: {
    name: "Darshan Tank",
    title: "AI Engineer & ML Specialist",
    tagline: "Crafting intelligent solutions with AI & Machine Learning to transform ideas into reality",
    email: "tankdarshan01@gmail.com",
    location: "Bengaluru, India",
    availability: "Remote & On-site",
    resumeUrl: "https://drive.google.com/file/d/1FpxoHxiw-tU2o13SBXzOBSFA8kDhctCl/view?usp=sharing",
  },

  // Social Links
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/Darshan2104",
      icon: "Github",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/darshan-tank-235897189/",
      icon: "Linkedin",
    },
    {
      platform: "Twitter",
      url: "https://x.com/TankDarshan7",
      icon: "Twitter",
    },
    {
      platform: "LeetCode",
      url: "https://leetcode.com/u/tankdarshan01/",
      icon: "LeetCode",
    },
    {
      platform: "Kaggle",
      url: "https://www.kaggle.com/darshantank2001",
      icon: "Kaggle",
    },
    {
      platform: "Instagram",
      url: "https://www.instagram.com/darshan_tank.01/",
      icon: "Instagram",
    },
  ],

  // About Section
  about: {
    description:
      "I'm a passionate AI Engineer with expertise in machine learning, deep learning, and natural language processing. With a strong foundation in both theoretical concepts and practical applications, I develop innovative solutions that leverage the power of artificial intelligence to solve complex real-world problems and drive meaningful impact.",
    experienceYears: "3+",
    quickTechnologies: [
      "Python",
      "PyTorch",
      "LlamaIndex",
      "LangChain",
      "LangGraph",
      "Azure",
      "Docker",
      "SQL",
    ],
  },

  // Skills Section
  skills: {
    categories: [
      {
        title: "Programming & Tools",
        icon: "Code",
        items: [
          "Python",
          "C/C++",
          "Flask",
          "FastAPI",
          "TensorFlow",
          "PyTorch",
          "Pandas",
          "Numpy",
          "nltk",
          "Scikit-learn",
          "Spacy",
          "Transformers",
          "Huggingface",
          "Jupyter Notebook",
        ],
      },
      {
        title: "Machine Learning",
        icon: "Brain",
        items: [
          "Deep Learning",
          "Neural Networks",
          "LLM",
          "OpenAI",
          "Groq",
          "RAG",
          "LangChain",
          "LangGraph",
          "LlamaIndex",
          "Prompt Engineering",
          "CrewAI",
          "AutoGen",
          "Langfuse",
          "Phoenix",
        ],
      },
      {
        title: "Data & Databases",
        icon: "Database",
        items: [
          "Pinecone",
          "Qdrant",
          "Redis",
          "MongoDB",
          "PostgreSQL",
          "Vector Databases",
          "Data Processing",
        ],
      },
      {
        title: "ML in Production",
        icon: "Network",
        items: [
          "Docker",
          "Jenkins",
          "Kibana",
          "RabbitMQ",
          "Git",
          "Azure",
          "AWS S3",
          "DevOps",
          "CI/CD",
        ],
      },
    ],
  },

  // Work Experience
  experience: [
    {
      title: "AI Data Analyst",
      company: "Sentient Labs",
      location: "Remote",
      period: "Sep 2025 - Current",
      type: "Full-time",
      description:
        "Leading AI agent evaluation and benchmarking research, developing frameworks to systematically assess LLM capabilities in complex multi-tool scenarios.",
      achievements: [
        "Published CryptoAnalystBench paper on arXiv — a benchmark for identifying failure modes in LLMs integrating outputs from multiple tools",
        "Designed evaluation frameworks for multi-step agent reasoning across retrieval, generation, and tool-use stages",
        "Developed systematic error taxonomies for characterizing agent failures in high-volume, time-sensitive data processing",
        "Contributed to agent benchmarking infrastructure used across research teams",
      ],
      technologies: ["Python", "LLM Evaluation", "Agent Benchmarking", "Langfuse", "Phoenix"],
    },
    {
      title: "Consultant GenAI",
      company: "Deloitte",
      location: "Bengaluru, India",
      period: "Feb 2025 - Aug 2025",
      type: "Full-time",
      description:
        "Built and deployed Agentic RAG Chatbot on Tourist Policy Documents",
      achievements: [
        "Designed and deployed Gen-AI RAG pipeline for real-time Conversation on Tourist Policy Documents",
        "It helped with information retrieval and document summarization",
        "It guides the user for drafting new policies and provides suggestions for improvement",
        "It helped to compare different policies for better decision making",
      ],
      technologies: ["LlamaIndex", "GPT-4o", "Azure AI Search", "SQL"],
    },
    {
      title: "Senior NLP Engineer",
      company: "Gnani.ai",
      location: "Bengaluru, India",
      period: "May 2024 - Jan 2025",
      type: "Full-time",
      description:
        "Led advanced call center analytics and Gen-AI solutions, analyzing conversations to enhance agent performance through insights, feedback systems, and script adherence monitoring using COT+Feedback prompting techniques.",
      achievements: [
        "Designed and deployed Gen-AI RAG pipeline for real-time email classification across 150+ categories",
        "Achieved 66% reduction in manpower and 115% accuracy improvement (39% to 84%)",
        "Integrated XGBoost and GPT-4-mini in robust ensemble model",
        "Conducted sentiment analysis, agent scoring, and call auditing for efficiency optimization",
      ],
      technologies: [
        "GPT-4",
        "RAG",
        "XGBoost",
        "NLP",
        "Sentiment Analysis",
        "Gen-AI",
      ],
    },
    {
      title: "NLP Engineer",
      company: "Gnani.ai",
      location: "Bengaluru, India",
      period: "Sep 2022 - Apr 2024",
      type: "Full-time",
      description:
        "Developed multilingual conversational AI systems and no-code/low-code platforms, leveraging deep learning models to create advanced chatbot and voice bot solutions for diverse client needs.",
      achievements: [
        "Achieved 50% reduction in agent costs for Indian and US clients",
        "Developed no-code/low-code conversational AI platforms reducing bot development time by 60%",
        "Implemented advanced NLP techniques: paraphrasing, entity recognition, intent classification",
        "Contributed to innovative POCs including LLM-based voice bots",
      ],
      technologies: [
        "Deep Learning",
        "Conversational AI",
        "Duckling",
        "Entity Recognition",
        "Voice Bots",
        "LLMs",
      ],
    },
  ],

  // Projects
  projects: [
    {
      title: "Deep Learning - Work & Projects",
      description:
        "Comprehensive deep learning implementations covering PyTorch fundamentals, classification algorithms, neural network architectures, seq2seq modeling, and exploratory data analysis with linear algebra foundations.",
      technologies: ["PyTorch", "Python", "OpenCV", "Neural Networks"],
      githubUrl: "https://github.com/Darshan2104/DeepLearning-with-Torch",
      category: "Deep Learning",
      impact: "Educational Resource",
    },
    {
      title: "MailSquad",
      description:
        "AI-powered email automation system leveraging LangChain, RAG, and LangGraph. Automatically classifies emails and generates context-aware responses using reference templates, significantly improving operational efficiency and scalability.",
      technologies: ["CrewAI", "LangChain", "RAG", "LangGraph", "Groq"],
      githubUrl: "https://github.com/Darshan2104/MailSquad",
      category: "AI Automation",
      impact: "Production Ready",
    },
    {
      title: "News Summarization",
      description:
        "Advanced abstractive text summarization research for large news datasets. Fine-tuned PEGASUS for Indian languages and optimized T5 models on Param Shavak supercomputer. Developed adapters reducing fine-tuning time by 75% without performance loss.",
      technologies: [
        "PyTorch",
        "T5",
        "PEGASUS",
        "Hugging Face",
        "Adapter-Transformer",
      ],
      githubUrl: "https://github.com/Darshan2104/News-Summarization",
      category: "NLP Research",
      impact: "75% Time Reduction",
    },
    {
      title: "ThinkRAG",
      description:
        "Interleaved Retrieval guided by Chain-of-Thought (IRCoT), which creates a dynamic feedback loop between information retrieval and reasoning processes.",
      technologies: ["Python", "Groq", "pydantic"],
      githubUrl: "https://github.com/Darshan2104/ThinkRAG",
      category: "NLP Research",
      impact: "Research Paper Implementation",
    },
    {
      title: "FusionRAG",
      description:
        "RAG-Fusion improves RAG by creating multiple versions of a query, retrieving documents for each, and combining the results using Reciprocal Rank Fusion (RRF). The fused documents and all queries are then used to generate a better final answer.",
      technologies: ["Python", "gemini ai", "pydantic"],
      githubUrl: "https://github.com/Darshan2104/FusionRAG",
      category: "NLP Research",
      impact: "Research Paper Implementation",
    },
    {
      title: "LLM-based Q&A System",
      description:
        "Comprehensive exploration of LLM-based question-answering systems. Implemented prompt-engineered contextual Q&A and RAG-based solutions with ChromaDB. Benchmarked various approaches for optimal results and latency performance.",
      technologies: [
        "OpenAI",
        "Llama-2",
        "LangChain",
        "VectorDB",
        "RAG",
        "Prompt Engineering",
      ],
      githubUrl: "https://github.com/Darshan2104/LLM",
      category: "RAG Solution",
      impact: "Optimized Performance",
    },
  ],

  // Publications
  publications: [
    {
      title: "CryptoAnalystBench: Failures in Multi-Tool Long-Form LLM Analysis",
      venue: "arXiv",
      year: "2026",
      url: "https://arxiv.org/abs/2602.11304",
      description:
        "A benchmark and evaluation framework to identify failure modes in LLMs integrating outputs from multiple tools while processing high-volume, time-sensitive cryptocurrency data.",
    },
  ],

  // Blogs
  blogs: [
    {
      title: "Evaluate DeepResearch Agents",
      date: "Dec 19, 2025",
      url: "https://medium.com/@darshantank_55417/how-far-are-we-from-genuinely-useful-deep-research-agents-78fcc7c12bc0",
      description:
        "FINDER benchmark and DEFT error taxonomy for analyzing deep research agent failures across reasoning, retrieval, and generation stages.",
      tags: ["AI Agents", "Evaluation"],
    },
    {
      title: "Search-R1: Teaching LLMs to Think, Search, and Reason Using RL",
      date: "Oct 23, 2025",
      url: "https://medium.com/@darshantank_55417/search-r1-teaching-llms-to-think-search-and-reason-using-reinforcement-learning-aaaf2915629a",
      description:
        "RL framework enabling language models to autonomously decide when and what to search during multi-step reasoning.",
      tags: ["Reinforcement Learning", "LLM"],
    },
    {
      title: "Cracking the Vocabulary Bottleneck: How Modern LLMs Predict Words at Scale",
      date: "Jul 9, 2025",
      url: "https://medium.com/@darshantank_55417/cracking-the-vocabulary-bottleneck-how-modern-llms-predict-words-at-scale-611169e8f82c",
      description:
        "Adaptive softmax techniques that dramatically improve inference speed for large vocabulary prediction without sacrificing accuracy.",
      tags: ["LLM", "Inference"],
    },
    {
      title: "Toolformer: How Language Models Learn to Use Tools by Themselves",
      date: "Jun 2, 2025",
      url: "https://medium.com/@darshantank_55417/toolformer-how-language-models-learn-to-use-tools-by-themselves-9724fb64ed0e",
      description:
        "Self-supervised method where LLMs learn to decide when to use external tools like calculators and search engines.",
      tags: ["Tool Use", "LLM"],
    },
    {
      title: "How Does a VectorDB Handle Million-Scale Vector Search in Milliseconds with HNSW?",
      date: "May 26, 2025",
      url: "https://medium.com/@darshantank_55417/how-does-avectordb-handle-million-scale-vector-search-in-milliseconds-with-hnsw-d9fdeee1d098",
      description:
        "Hierarchical navigable small world graphs for efficient approximate nearest neighbor search at scale.",
      tags: ["Vector DB", "HNSW"],
    },
    {
      title: "Understanding RAG-Fusion: Next-Level Retrieval-Augmented Generation",
      date: "Apr 17, 2025",
      url: "https://medium.com/@darshantank_55417/understanding-rag-fusion-next-level-retrieval-augmented-generation-08646e7d31ce",
      description:
        "Multi-query approach using reciprocal rank fusion to combine multiple retrieval results for comprehensive answers.",
      tags: ["RAG", "Information Retrieval"],
    },
    {
      title: "Meta's Llama 4: A New Era of Multimodal AI with Unprecedented Capabilities",
      date: "Apr 6, 2025",
      url: "https://medium.com/@darshantank_55417/metas-llama-4-a-new-era-of-multimodal-ai-with-unprecedented-capabilities-18847ea38f2d",
      description:
        "Llama 4 family featuring mixture-of-experts architecture, native multimodality, and 10M token context support.",
      tags: ["Llama", "Multimodal"],
    },
    {
      title: "Cognitive Architectures for Language Agents (CoALA)",
      date: "Mar 21, 2025",
      url: "https://medium.com/@darshantank_55417/cognitive-architectures-for-language-agents-coala-standard-method-to-build-ai-agents-f4b85704924e",
      description:
        "Systematic framework organizing memory, action spaces, and decision-making processes for language-based AI agents.",
      tags: ["AI Agents", "Architecture"],
    },
    {
      title: "Mastering IRCoT: Interleaved Retrieval with Chain-of-Thought for Advanced AI Systems",
      date: "Mar 20, 2025",
      url: "https://medium.com/@darshantank_55417/mastering-ircot-interleaved-retrieval-with-chain-of-thought-for-advanced-ai-systems-24acc615272e",
      description:
        "Iterative approach alternating between reasoning steps and dynamic information retrieval for complex multi-step tasks.",
      tags: ["RAG", "Chain-of-Thought"],
    },
    {
      title: "SOLID Principles in Python: A Beginner-Friendly Guide with Examples",
      date: "Mar 16, 2025",
      url: "https://medium.com/@darshantank_55417/solid-principles-in-python-a-beginner-friendly-guide-with-examples-bcdd3916b798",
      description:
        "Practical introduction to five software design principles enabling cleaner, more maintainable code.",
      tags: ["Python", "Software Design"],
    },
  ],

  // Contact Information
  contact: {
    title: "Let's Connect",
    subtitle:
      "Ready to collaborate on your next AI/ML project? Let's discuss how we can bring your ideas to life.",
    description:
      "I'm always excited to discuss new opportunities, innovative projects, and potential collaborations. Whether you're looking to implement AI solutions or need expert consultation, let's connect!",
  },

  // Navigation
  navigation: {
    items: [
      { label: "Home", href: "#home" },
      { label: "Experience", href: "#experience" },
      { label: "Projects", href: "#projects" },
      { label: "Contact", href: "#contact" },
    ],
  },
};
