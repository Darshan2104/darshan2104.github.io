// Portfolio Configuration
// This is the SINGLE SOURCE OF TRUTH for all dynamic content.
// To update your portfolio, just edit the arrays/objects below.
// Components read from this file — no content is hardcoded in components.

export const portfolioConfig = {
  // Personal Information
  personal: {
    name: "Darshan Tank",
    title: "Applied AI Researcher — Agent Evaluation & Trace Analysis",
    tagline: "Measuring, diagnosing, and improving production LLM agents",
    email: "tankdarshan2022@gmail.com",
    location: "Bengaluru, India",
    availability: "Remote & On-site",
    resumeUrl: "https://drive.google.com/file/d/1FpxoHxiw-tU2o13SBXzOBSFA8kDhctCl/view?usp=sharing",
    // Bump this by hand whenever the portfolio content changes.
    lastUpdated: "Aug 9, 2026",
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
      "I'm an applied AI researcher working on agent evaluation, agent trace analysis, and agent self-improvement for production LLM agents — LLM-as-Judge scoring, failure taxonomies built from trace-level error analysis, benchmark generation, and self-authored skill libraries that match frontier meta-skill creators at ~12× lower cost. I'm the author of CryptoAnalystBench (KDD 2026) and The Regression Tax. Before that I shipped production GenAI at Deloitte and Gnani.ai: RAG policy advisers, Text2SQL chatbots, and multilingual conversational agents.",
    experienceYears: "3+",
    quickTechnologies: [
      "Python",
      "Langfuse",
      "LLM-as-Judge",
      "Agent Evals",
      "LangGraph",
      "LlamaIndex",
      "PyTorch",
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
          "MCP",
          "LiteLLM",
        ],
      },
      {
        title: "Evaluation & Observability",
        icon: "Search",
        items: [
          "Langfuse",
          "Phoenix",
          "LLM-as-Judge",
          "Agent Trace Analysis",
          "Error Taxonomies",
          "Synthetic Data Generation",
          "Benchmark Generation",
          "Harbor",
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
      logo: "/logos/sentient.svg",
      logoClass: "h-3.5",
      location: "Bengaluru, India",
      period: "Sep 2025 - Present",
      type: "Full-time",
      description:
        "Evaluation, trace analysis, and self-improvement for CryptoAgent (SERA), Sentient's multi-tool crypto research agent — building the benchmarks, judges, and observability that tell us where the agent actually fails and which fixes are worth making.",
      achievements: [
        "Built the evaluation benchmark for CryptoAgent (SERA) by mining and curating real production queries into an evaluation set that reflects what users actually ask rather than synthetic proxies",
        "Built the LLM-as-Judge evaluation setup on Langfuse — instrumented production agents for trace management (nested spans across tool calls, retrievals, and LLM generations, session attribution, per-run token, cost, and latency accounting), then defined the evaluation parameters and scoring methods used to judge long-form, multi-tool analyst responses; those scores drove the prompt, tool, and model changes that improved the agent",
        "Ran systematic error analysis and discovery across production traces, coding recurring failures into a reusable taxonomy and quantifying how often each mode fires to rank fixes by expected impact rather than intuition",
        "Built an open-source meta-skill creator for agent self-improvement — swapped the benchmark-rerun loop for single-pass self-critique plus discover-before-create, authoring skill libraries ~12× cheaper and 5× faster ($112 → $9) while matching frontier creators on downstream task success; published as The Regression Tax",
        "Generated synthetic data and use-case-specific benchmarks covering long-tail scenarios that production traffic never exercises — the basis for CryptoAnalystBench",
      ],
      technologies: [
        "Langfuse",
        "LLM-as-Judge",
        "Agent Trace Analysis",
        "Error Taxonomies",
        "Agent Self-Improvement",
        "Benchmark Generation",
      ],
    },
    {
      title: "GenAI Consultant",
      company: "Deloitte",
      logo: "/logos/deloitte.svg",
      logoClass: "h-3.5",
      location: "Bengaluru, India",
      period: "Feb 2025 - Aug 2025",
      type: "Full-time",
      description:
        "Built and shipped production GenAI for enterprise clients — retrieval over legal and compliance data, and natural-language analytics over procurement databases.",
      achievements: [
        "Developed a Policy Adviser RAG solution for conflict checks using LlamaIndex, GPT-4o, and Azure AI Search, enabling fast, context-aware retrieval over legal and compliance data",
        "Built a Text2SQL-powered chatbot for Unilever's Procurement team, integrated with Microsoft Teams — natural language queries with auto-generated SQL execution and visual plots, cutting manual query effort by 60%",
      ],
      technologies: [
        "LlamaIndex",
        "GPT-4o",
        "Azure AI Search",
        "Text2SQL",
        "Microsoft Teams",
        "SQL",
      ],
    },
    {
      title: "Senior NLP Engineer",
      company: "Gnani.ai",
      logo: "/logos/gnani.svg",
      logoClass: "h-5",
      location: "Bengaluru, India",
      period: "May 2024 - Jan 2025",
      type: "Full-time",
      description:
        "Led call center analytics and GenAI solutions — mining ASR-transcribed conversations for agent performance insights, and shipping large-scale classification pipelines into production.",
      achievements: [
        "Built an automated pipeline for analyzing customer service representative (CSR) conversations over ASR-transcribed text, extracting customer sentiment, interaction summaries, positive/negative keywords, feedback scores, CSR scoring, and script adherence using GPT-4o-mini and CoT prompting",
        "Designed, developed, and deployed a real-time multiclass email classification pipeline across 150+ categories, using the HNSW algorithm over Qdrant to narrow the search space",
      ],
      technologies: [
        "GPT-4o-mini",
        "CoT Prompting",
        "Qdrant",
        "HNSW",
        "ASR",
        "Sentiment Analysis",
      ],
    },
    {
      title: "NLP Engineer",
      company: "Gnani.ai",
      logo: "/logos/gnani.svg",
      logoClass: "h-5",
      location: "Bengaluru, India",
      period: "Sep 2022 - Apr 2024",
      type: "Full-time",
      description:
        "Developed multilingual conversational AI systems and no-code/low-code platforms, leveraging deep learning models to create advanced chatbot and voice bot solutions for diverse client needs.",
      achievements: [
        "Led multilingual conversational systems for Indian and US clients — 50% reduction in agent costs and 12% success rate — using paraphrase augmentation, duckling entity recognition, and intent classification",
        "Developed no-code/low-code conversational AI platforms reducing bot development time by 60%",
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
      title: "Garuda-openagent — Agent Harness",
      description:
        "Provider-agnostic agent harness that does what OpenCode does — any LLM against real environments with bash/file/edit/tmux/MCP tools, session persistence, context compaction — at better latency.",
      technologies: ["Python", "MCP", "LiteLLM", "Agent Harness"],
      githubUrl: "https://github.com/Darshan2104/Garuda-openagent",
      category: "AI Agents",
      impact: "Provider-Agnostic Harness",
    },
    {
      title: "Meta-Skill Creator",
      description:
        "Open-source meta-skill creator for agent self-improvement. Swaps the benchmark-rerun loop for single-pass self-critique plus discover-before-create, authoring skill libraries ~12× cheaper and 5× faster ($112 → $9) while matching frontier creators on downstream task success. Published as The Regression Tax.",
      technologies: [
        "Agent Self-Improvement",
        "Skill Libraries",
        "LLM Agents",
        "Python",
      ],
      githubUrl: "https://github.com/sentient-agi/meta-skill-creator",
      category: "AI Agents",
      impact: "12× Cheaper, 5× Faster",
    },
    {
      title: "RAGent",
      description:
        "Implementations of ideas from research papers — Corrective RAG, Self-RAG, and Adaptive RAG — built with LangGraph and LangChain.",
      technologies: ["LangGraph", "LangChain", "RAG", "Python"],
      githubUrl: "https://github.com/Darshan2104/RAGent",
      category: "NLP Research",
      impact: "Research Paper Implementation",
    },
    {
      title: "Max Health Companion",
      description:
        "Contributed a personalized disease recommendation engine (symptom inputs + user profiles) to a caregiver-facing health tracking app.",
      technologies: ["Python", "Recommendation Engine", "Expo"],
      githubUrl: "https://max-health-companion.expo.app/",
      category: "Applied ML",
      impact: "Shipped Product",
    },
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
      venue: "KDD 2026",
      year: "2026",
      url: "https://dl.acm.org/doi/10.1145/3770855.3817585",
      description:
        "A benchmark and evaluation framework to identify failure modes in LLMs integrating outputs from multiple tools while processing high-volume, time-sensitive cryptocurrency data.",
    },
    {
      title: "The Regression Tax: Decomposing Why Skills Help and Hurt LLM Agents",
      venue: "Preprint",
      year: "2026",
      url: "https://arxiv.org/abs/2607.22520",
      description:
        "Decomposes the net effect of adding skills to an LLM agent — separating where a skill genuinely helps from where it regresses behaviour the agent already handled, and why. Introduces a meta-skill creator that authors skill libraries ~12× cheaper and 5× faster while matching frontier creators on downstream task success.",
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
