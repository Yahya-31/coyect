import { Skill, Service, Project, Testimonial, BlogPost } from './types';

export const SKILLS_DATA: Skill[] = [
  // Artificial Intelligence & ML
  { name: 'Artificial Intelligence', level: 95, category: 'AI & Machine Learning' },
  { name: 'Machine Learning', level: 98, category: 'AI & Machine Learning' },
  { name: 'Deep Learning', level: 92, category: 'AI & Machine Learning' },
  { name: 'Python', level: 96, category: 'AI & Machine Learning' },
  { name: 'TensorFlow', level: 90, category: 'AI & Machine Learning' },
  { name: 'PyTorch', level: 88, category: 'AI & Machine Learning' },
  { name: 'Data Science', level: 94, category: 'AI & Machine Learning' },
  { name: 'Computer Vision', level: 85, category: 'AI & Machine Learning' },
  { name: 'Natural Language Processing (NLP)', level: 93, category: 'AI & Machine Learning' },

  // Generative AI
  { name: 'LLMs (GPT-4, Gemini, Claude)', level: 95, category: 'Generative AI & LLMs' },
  { name: 'Prompt Engineering', level: 97, category: 'Generative AI & LLMs' },
  { name: 'Google AI / Gemini API', level: 94, category: 'Generative AI & LLMs' },
  { name: 'OpenAI APIs', level: 95, category: 'Generative AI & LLMs' },
  { name: 'LangChain / LlamaIndex', level: 90, category: 'Generative AI & LLMs' },
  { name: 'RAG (Retrieval-Augmented Gen)', level: 92, category: 'Generative AI & LLMs' },
  { name: 'Vector Databases (Pinecone, Chroma)', level: 88, category: 'Generative AI & LLMs' },

  // Automation & Systems
  { name: 'n8n Workflow Automation', level: 94, category: 'No-Code & Automation' },
  { name: 'Make.com (Integromat)', level: 93, category: 'No-Code & Automation' },
  { name: 'Business Automation', level: 95, category: 'No-Code & Automation' },
  { name: 'WordPress Development', level: 88, category: 'No-Code & Automation' },
  { name: 'Shopify Customization', level: 85, category: 'No-Code & Automation' },

  // Marketing & Growth
  { name: 'Meta Ads (Facebook & Instagram)', level: 96, category: 'Growth Marketing & SEO' },
  { name: 'Google Ads (Search & Display)', level: 95, category: 'Growth Marketing & SEO' },
  { name: 'SEO Optimization', level: 91, category: 'Growth Marketing & SEO' },
  { name: 'Performance Marketing Strategy', level: 97, category: 'Growth Marketing & SEO' },
];

export const SERVICES_DATA: Service[] = [
  {
    id: 'ai-automation',
    title: 'AI Automation',
    description: 'Integrate advanced language models and automated workflows to stream operations, cutting down repetitive administrative hours by up to 90%.',
    iconName: 'Cpu',
  },
  {
    id: 'custom-ai-tools',
    title: 'Custom AI Tools',
    description: 'Build enterprise-ready web portals, custom ChatGPT models, or proprietary assistant tools designed around your business-specific processes.',
    iconName: 'Wrench',
  },
  {
    id: 'ml-solutions',
    title: 'Machine Learning Solutions',
    description: 'Design and deploy state-of-the-art predictive analytics models, sentiment analyses, pricing estimation engines, or health screening models.',
    iconName: 'Activity',
  },
  {
    id: 'gen-ai-dev',
    title: 'Generative AI Development',
    description: 'Implement Retrieval-Augmented Generation (RAG) pipelines over internal documentation libraries to provide semantic search and precise Q&A.',
    iconName: 'Sparkles',
  },
  {
    id: 'performance-marketing',
    title: 'Performance Marketing',
    description: 'Launch and run strategic Meta and Google ad campaigns optimized for maximum sales, lead count, and healthy Return on Ad Spend (ROAS).',
    iconName: 'TrendingUp',
  },
  {
    id: 'lead-generation',
    title: 'Lead Generation Systems',
    description: 'Design and execute multi-channel automated campaigns that consistently supply sales teams with qualified inbound pipeline.',
    iconName: 'UserCheck',
  },
  {
    id: 'marketing-automation',
    title: 'Marketing Automation',
    description: 'Connect Shopify, CRM pipelines, email flows, and social platforms with smart, automated triggers ensuring zero lead fall-off.',
    iconName: 'Workflow',
  },
  {
    id: 'business-intelligence',
    title: 'Business Intelligence',
    description: 'Develop comprehensive analytics dashboards (using PowerBI, Looker, or custom apps) to visualize client metrics and optimization points.',
    iconName: 'BarChart3',
  },
  {
    id: 'chatbot-development',
    title: 'Chatbot Development',
    description: 'Implement conversational AI assistants equipped with live business details, scheduled triggers, and database logging systems.',
    iconName: 'MessageSquareCode',
  },
  {
    id: 'consulting',
    title: 'AI & Growth Consulting',
    description: 'Audit your existing data infrastructure, ad strategies, and manual bottlenecks to build a multi-phase digital transformation roadmap.',
    iconName: 'Lightbulb',
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'early-dementia-detection',
    title: 'Early Dementia Detection using AI',
    category: 'ai_ml',
    description: 'A revolutionary healthcare research project (AI DOC) analyzing speech and handwriting patterns with deep learning models to predict cognitive decline early.',
    longDescription: 'This clinical-grade predictive model leverages Convolutional Neural Networks (CNNs) and recurrent neural networks (RNNs) to detect sub-visual tremors in handwriting and phonetic variance in spoken audio, facilitating early screening for neurodegenerative patterns.',
    technologies: ['Python', 'TensorFlow', 'Deep Learning', 'PyTorch', 'Audio Processing'],
    metrics: [
      { label: 'Screening Accuracy', value: '94.2%' },
      { label: 'Early Detection Lead', value: '18 Months' },
    ],
    imagePlaceholderColor: 'from-blue-50 to-indigo-100',
    githubUrl: 'https://github.com/coyect',
  },
  {
    id: 'ai-financial-management',
    title: 'AI Financial Management System',
    category: 'ai_ml',
    description: 'Smart personal wealth tracking platform with multi-source ingestion, automated spending classification, and customized RAG financial consulting.',
    longDescription: 'A fully responsive full-stack platform that secure-connects to financial transaction tables, categorizes transactions, and integrates a customized financial advisor chatbot powered by LLMs and vector database retrieval.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Pinecone', 'OpenAI API', 'Tailwind'],
    metrics: [
      { label: 'Transaction Accuracy', value: '98.5%' },
      { label: 'RAG Answer Relevancy', value: '96.1%' },
    ],
    imagePlaceholderColor: 'from-sky-50 to-blue-100',
    liveUrl: '#',
  },
  {
    id: 'used-car-price-prediction',
    title: 'Used Car Price Prediction Engine',
    category: 'ai_ml',
    description: 'Advanced gradient boosting and mathematical optimization model to predict used vehicle valuation based on physical and economic market metrics.',
    longDescription: 'Developed specialized data engineering pipelines for structured automotive datasets. Applied Random Forest, XGBoost, and hyperparameter tuning to accurately forecast vehicle depreciation curves.',
    technologies: ['Python', 'Scikit-Learn', 'XGBoost', 'Pandas', 'Flask'],
    metrics: [
      { label: 'Model R² Score', value: '0.915' },
      { label: 'Mean Absolute Error', value: '$340' },
    ],
    imagePlaceholderColor: 'from-indigo-50 to-sky-100',
    githubUrl: 'https://github.com/coyect',
  },
  {
    id: 'ai-customer-support-chatbot',
    title: 'AI Customer Support Chatbot',
    category: 'ai_ml',
    description: 'Intelligent multi-agent chatbot capable of analyzing buyer intent, retrieving context from company guidelines, and scheduling appointments.',
    longDescription: 'Implemented stateful LLM conversational agents with memory systems. Integrates with calendar booking APIs and matches inbound search intent to deliver helpful response vectors within seconds.',
    technologies: ['Gemini SDK', 'Node.js', 'LangChain', 'PostgreSQL', 'Vector Databases'],
    metrics: [
      { label: 'Auto-Resolved Queries', value: '82%' },
      { label: 'Response Latency', value: '0.9s' },
    ],
    imagePlaceholderColor: 'from-violet-50 to-purple-100',
    liveUrl: '#',
  },
  {
    id: 'marketing-automation-platform',
    title: 'Marketing Automation Platform',
    category: 'automation_marketing',
    description: 'Centralized growth dashboard connecting e-commerce platforms like Shopify/WordPress with ad channels (Meta/Google Ads) to automate bidding adjustments.',
    longDescription: 'Built custom data sync tools linking product catalogs to active ad copy. Enabled real-time performance tracking that triggered automatic pausing of underperforming media segments.',
    technologies: ['n8n', 'Make.com', 'Meta Ads API', 'Shopify', 'WordPress'],
    metrics: [
      { label: 'Last Month Sales', value: '₹81,994' },
      { label: 'Ad ROI (ROAS)', value: '4.6x' },
    ],
    imagePlaceholderColor: 'from-rose-50 to-pink-100',
    liveUrl: '#',
  },
  {
    id: 'ai-lead-generation-system',
    title: 'AI Lead Generation System',
    category: 'automation_marketing',
    description: 'End-to-end prospective buyer acquisition funnel equipped with AI intent scoring, immediate SMS follow-ups, and live CRM routing.',
    longDescription: 'Created hyper-targeted acquisition campaigns for high-volume organizations (including a film academy). Captured leads are routed to custom scoring layers and delivered to counselor queues within 15 seconds.',
    technologies: ['Google Ads', 'Meta Ads', 'n8n', 'CRM Automation', 'Lead Scoring'],
    metrics: [
      { label: 'Leads Generated', value: '32,450' },
      { label: 'Cost Per Lead Reduced', value: '42%' },
    ],
    imagePlaceholderColor: 'from-cyan-50 to-emerald-100',
    liveUrl: '#',
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Mohammad Farooq',
    role: 'Director',
    company: '99 Store Factory Outlet',
    avatarText: 'MF',
    rating: 5,
    text: 'Working with Coyect has been an absolute game-changer for our e-commerce business. Their expertise in online marketing strategies helped us reach 50,000 active social followers and generated remarkable sales growth in our digital channel. Highly recommended!',
  },
  {
    id: 'test-2',
    name: 'Aisha Ibrahim',
    role: 'Founder',
    company: 'Ayisha Ibrahim Lifestyle',
    avatarText: 'AI',
    rating: 5,
    text: 'The n8n automation and custom CRM systems Coyect built for our brand completely relieved our administrative burden. We no longer worry about missing inbound inquiries, and our client response time went from hours to literally 15 seconds.',
  },
  {
    id: 'test-3',
    name: 'V. Sundaram',
    role: 'Admissions Lead',
    company: 'Flim Institution India',
    avatarText: 'VS',
    rating: 5,
    text: 'Coyect is unique because their team possesses deep machine learning skills alongside world-class performance marketing expertise. They optimized our Google Ads funnels and generated over 32,000 highly qualified leads. Truly exceptional work.',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'Building Enterprise RAG Pipelines with Gemini 2.5 & Pinecone',
    excerpt: 'An in-depth guide on designing robust, low-latency semantic search over private documents, resolving hallucination challenges.',
    category: 'Artificial Intelligence',
    date: 'June 18, 2026',
    readTime: '6 min read',
  },
  {
    id: 'blog-2',
    title: 'How we Built a Meta Ads Optimization Engine with Machine Learning',
    excerpt: 'Using predictive regression models to dynamically budget social campaigns and maximize Return on Ad Spend (ROAS) based on hourly trends.',
    category: 'Performance Marketing',
    date: 'May 04, 2026',
    readTime: '8 min read',
  },
  {
    id: 'blog-3',
    title: 'Automating 95% of Creative Lead Ingestion with n8n & OpenAI',
    excerpt: 'Step-by-step breakdown of how to construct intelligent multi-channel triggers that qualify and enrich leads automatically.',
    category: 'Workflow Automation',
    date: 'March 22, 2026',
    readTime: '5 min read',
  },
];

export const STATS_DATA = [
  { value: 50, label: 'Projects Completed', suffix: '+' },
  { value: 25, label: 'Clients Served', suffix: '+' },
  { value: 1200, label: 'Automation Hours Saved', suffix: 'h+' },
  { value: 15, label: 'AI Models Built', suffix: '+' },
  { value: 320, label: 'Campaign Lead Growth', suffix: 'k+' },
];
