export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'ai_ml' | 'automation_marketing' | 'web_dev';
  description: string;
  longDescription?: string;
  technologies: string[];
  metrics?: { label: string; value: string }[];
  imagePlaceholderColor: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarText: string;
  rating: number;
  text: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
}
