import React, { useState, useEffect } from 'react';
import { Code, Book, Briefcase, FileText, Globe, Award } from 'lucide-react';

// Mock Data with more detailed information
const initialPortfolioData = {
  profile: {
    name: 'Darshan Tank',
    title: 'NLP Engineer | Machine Learning Specialist',
    bio: 'Passionate AI engineer with expertise in machine learning, deep learning, and innovative tech solutions. Committed to solving complex problems through intelligent systems.',
    contact: {
      email: 'tankdarshan2022@gmail.com',
      linkedin: '',
      github: 'https://github.com/Darshan2104',
      twitter:'',
      leetcode:''
    }
  },
  skills: [
    'Machine Learning', 'Deep Learning', 'Python', 'Pytorch',
    'Natural Language Processing',
    'Docker', 'Kubernetes', 'Linux'
  ],
  education: [
    {
      degree: 'Bachelor of Engineering in Computer Science',
      institution: 'Dharmsinh Desai University',
      year: '2022',
      highlights: [
        'Thesis on Abstractive Text Summarization',
        'GPA: 8.05/10',
        'Research Assistant in AI Lab'
      ]
    }
  ],
  workExperience: [
    {
      company: 'TechInnovate Solutions',
      position: 'Machine Learning Engineer',
      duration: 'Jan 2023 - Present',
      responsibilities: [
        'Developed advanced NLP models for text analysis',
        'Implemented scalable machine learning pipelines',
        'Collaborated with cross-functional teams to deliver AI solutions'
      ]
    }
  ],
  openSourceContributions: [
    {
      project: 'Hugging Face Transformers',
      contribution: 'Added support for multilingual sentiment analysis',
      link: 'https://github.com/huggingface/transformers'
    },
    {
      project: 'scikit-learn',
      contribution: 'Improved documentation for clustering algorithms',
      link: 'https://github.com/scikit-learn/scikit-learn'
    }
  ],
  competitiveCoding: {
    platforms: [
      { name: 'LeetCode', rank: '1200', badge: 'Knight' },
      { name: 'CodeChef', rating: '1800', badge: 'Three Star' }
    ]
  },
  projects: [
    {
      name: 'AI-Powered Recommendation System',
      description: 'Developed a machine learning recommendation engine using collaborative filtering and deep learning techniques.',
      technologies: ['Python', 'TensorFlow', 'Scikit-learn'],
      githubLink: 'https://github.com/alexrodriguez/recommendation-system',
      achievements: [
        'Improved recommendation accuracy by 35%',
        'Implemented real-time learning algorithm'
      ]
    },
    {
      name: 'NLP Conversational Chatbot',
      description: 'Created an intelligent conversational agent using transformer models and natural language processing.',
      technologies: ['Python', 'NLTK', 'Hugging Face Transformers'],
      githubLink: 'https://github.com/alexrodriguez/nlp-chatbot',
      achievements: [
        'Achieved 92% intent recognition accuracy',
        'Deployed on cloud infrastructure'
      ]
    }
  ],
  blogs: [
    {
      title: 'Understanding Transformer Architecture',
      excerpt: 'Deep dive into the revolutionary transformer models that changed NLP forever.',
      link: '/blog/transformers-explained',
      date: '2023-06-15'
    },
    {
      title: 'Ethics in AI Development',
      excerpt: 'Exploring the critical ethical considerations in modern AI engineering.',
      link: '/blog/ai-ethics',
      date: '2023-09-22'
    }
  ]
};

const AIEngineerPortfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [portfolioData] = useState(initialPortfolioData);
  
  // Animated typing effect for bio
  const [displayBio, setDisplayBio] = useState('');
  
  useEffect(() => {
    const bio = portfolioData.profile.bio;
    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < bio.length) {
        setDisplayBio(prevBio => prevBio + bio.charAt(i));
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, 30);
    
    return () => clearInterval(typingEffect);
  }, [portfolioData.profile.bio]);

  // Render different sections based on active navigation
  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div className="min-h-screen flex flex-col justify-center items-center text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100">
            <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-4xl w-full space-y-6">
              <div>
                <h1 className="text-4xl font-bold mb-4 text-blue-800">{portfolioData.profile.name}</h1>
                <h2 className="text-2xl mb-4 text-blue-600">{portfolioData.profile.title}</h2>
                <p className="text-gray-700 mb-6 min-h-[100px]">{displayBio}</p>
                <div className="flex justify-center space-x-4 mb-6">
                  <a href={portfolioData.profile.contact.github} target="_blank" rel="noopener noreferrer" className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">GitHub</a>
                  <a href={portfolioData.profile.contact.linkedin} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">LinkedIn</a>
                  <a href={portfolioData.profile.contact.twitter} target="_blank" rel="noopener noreferrer" className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">X (Twitter)</a>
                  <a href={portfolioData.profile.contact.leetcode} target="_blank" rel="noopener noreferrer" className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition">LeetCode</a>
                </div>
              </div>

              {/* Technical Skills Section */}
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-2xl font-semibold mb-4 text-blue-800">Technical Skills</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {portfolioData.skills.map((skill, index) => (
                    <div key={index} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full hover:bg-blue-200 transition">{skill}</div>
                  ))}
                </div>
              </div>

              {/* Education Section */}
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-2xl font-semibold mb-4 text-blue-800">Education</h3>
                {portfolioData.education.map((edu, index) => (
                  <div key={index} className="mb-4">
                    <h4 className="text-xl font-semibold text-blue-600">{edu.degree}</h4>
                    <p className="text-gray-700">{edu.institution} | {edu.year}</p>
                    <ul className="list-disc list-inside text-gray-600 mt-2">
                      {edu.highlights.map((highlight, hIndex) => (
                        <li key={hIndex}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Timeline for Work Experience */}
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-2xl font-semibold mb-4 text-blue-800">Work Experience</h3>
                <div className="relative border-l-2 border-blue-300">
                  {portfolioData.workExperience.map((job, index) => (
                    <div key={index} className="mb-6 ml-4">
                      <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-1.5 border border-white"></div>
                      <h4 className="text-xl font-semibold text-blue-600">{job.position}</h4>
                      <p className="text-gray-700">{job.company} | {job.duration}</p>
                      <ul className="list-disc list-inside text-gray-600 mt-2">
                        {job.responsibilities.map((resp, rIndex) => (
                          <li key={rIndex}>{resp}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Open Source Contributions */}
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-2xl font-semibold mb-4 text-blue-800">Open Source Contributions</h3>
                  {portfolioData.openSourceContributions.map((contrib, index) => (
                  <div key={index} className="mb-4 flex items-center justify-between">
                    <div>
                      <h4 className="text-xl font-semibold text-blue-600">{contrib.project}</h4>
                      <p className="text-gray-700">{contrib.contribution}</p>
                    </div>
                    <a href={contrib.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      View Contribution
                    </a>
                </div>
                ))}
              </div>

              {/* Competitive Coding Performance */}
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-2xl font-semibold mb-4 text-blue-800">Competitive Coding</h3>
                <div className="flex justify-around">
                  {portfolioData.competitiveCoding.platforms.map((platform, index) => (
                    <div key={index} className="text-center">
                      <div className="bg-blue-100 rounded-full p-4 inline-block mb-2">
                        <Award size={32} className="text-blue-600" />
                      </div>
                      <h4 className="text-xl font-semibold text-blue-600">{platform.name}</h4>
                      <p className="text-gray-700">
                        {platform.rank && `Rank: ${platform.rank}`}
                        {platform.rating && `Rating: ${platform.rating}`}
                      </p>
                      <p className="text-blue-500 font-medium">{platform.badge}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      
      // Rest of the code remains the same
      case 'projects':
        return (
          <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {portfolioData.projects.map((project, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all transform hover:-translate-y-2">
                  <h3 className="text-xl font-semibold mb-4 text-blue-800">{project.name}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">{tech}</span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center">
                      <Code className="mr-2" size={20} /> View Code
                    </a>
                    <div className="space-y-1">
                      {project.achievements.map((achievement, achIndex) => (
                        <p key={achIndex} className="text-xs text-green-600"> • {achievement} </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'blogs':
        return (
          <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Blog Posts</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {portfolioData.blogs.map((blog, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
                  <h3 className="text-xl font-semibold mb-4 text-blue-800">{blog.title}</h3>
                  <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <a href={blog.link} className="text-blue-600 hover:underline">Read More</a>
                    <span className="text-sm text-gray-500">{blog.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  // Navigation menu
  const NavigationMenu = () => (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-[100]">
      <div className="flex justify-around py-4">
        {[ 
          { icon: Globe, section: 'home', label: 'Home' },
          { icon: Code, section: 'projects', label: 'Projects' },
          { icon: FileText, section: 'blogs', label: 'Blogs' },
        ].map(({ icon: Icon, section, label }) => (
          <button key={section} onClick={() => setActiveSection(section)} 
                  className={`flex flex-col items-center ${activeSection === section ? 
                  'text-blue-600' : 
                  'text-gray-500 hover:text-blue-400'} transition`}>
            <Icon size={24} />
            <span className="text-xs mt-[1px]">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {renderSection()}
      <NavigationMenu />
    </div>
  );
};

export default AIEngineerPortfolio;