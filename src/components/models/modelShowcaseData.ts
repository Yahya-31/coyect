export interface ModelItem {
  id: string;
  name: string;
  benefit: string;
  objectType: 'speech_bubble' | 'light_funnel' | 'interlocking_gears' | 'floating_chart' | 'light_prism' | 'eye_lens';
  image: string;
  glowColor: string;
  accentBadge: string;
  fullDescription: string;
  technicalSpecs: string[];
}

export const SHOWCASE_MODELS: ModelItem[] = [
  {
    id: 'chat-assistant',
    name: 'Chat Assistant',
    benefit: 'Instant contextual conversations that convert.',
    objectType: 'speech_bubble',
    image: '/models/chat-assistant.svg',
    glowColor: 'from-[#22D3EE]/30 via-[#8B5CF6]/20 to-[#EC4899]/15',
    accentBadge: 'Speech-Bubble Orb',
    fullDescription: 'A multi-turn conversational neural agent engineered with persistent memory, sub-80ms semantic retrieval, and natural cadence.',
    technicalSpecs: ['Sub-80ms Inference', 'Vectorized Long-term Memory', 'Multimodal Tool Calling', 'Zero Hallucination Guardrails'],
  },
  {
    id: 'lead-engine',
    name: 'Lead Engine',
    benefit: 'High-intent customer conversion on autopilot.',
    objectType: 'light_funnel',
    image: '/models/lead-engine.svg',
    glowColor: 'from-[#8B5CF6]/30 via-[#22D3EE]/20 to-[#EC4899]/15',
    accentBadge: 'Funnel of Light Particles',
    fullDescription: 'Continuous machine learning funnel that ingests raw market signals and autonomously synthesizes high-intent enterprise pipeline.',
    technicalSpecs: ['Algorithmic Bid Tuning', 'Real-time CAPI Integration', 'Intent Vector Scoring', '5.2x Peak ROAS Multiplier'],
  },
  {
    id: 'automation',
    name: 'Automation Matrix',
    benefit: 'Synchronized zero-latency data pipeline flows.',
    objectType: 'interlocking_gears',
    image: '/models/automation.svg',
    glowColor: 'from-[#22D3EE]/30 via-[#8B5CF6]/20 to-[#EC4899]/15',
    accentBadge: 'Interlocking Glass Gears',
    fullDescription: 'Event-driven operational neural layer synchronizing CRM platforms, database events, webhooks, and automated microservices.',
    technicalSpecs: ['99.99% Fault-Tolerant', 'n8n & Python Orchestration', 'Sub-second Webhook Dispatch', 'Zero Manual Overhead'],
  },
  {
    id: 'insights',
    name: 'Predictive Insights',
    benefit: 'Forecast market demand before competitors.',
    objectType: 'floating_chart',
    image: '/models/insights.svg',
    glowColor: 'from-[#8B5CF6]/30 via-[#22D3EE]/20 to-[#EC4899]/15',
    accentBadge: 'Floating 3D Chart',
    fullDescription: 'High-dimensional time-series neural forecasting designed to predict buyer churn, inventory demand, and seasonal yield fluctuations.',
    technicalSpecs: ['Dynamic Volatility Modeling', 'Automated Bayesian Tuning', 'Continuous Feedback Loop', 'Multi-variant Regression'],
  },
  {
    id: 'creative',
    name: 'Creative Prism',
    benefit: 'High-velocity dynamic visual asset synthesis.',
    objectType: 'light_prism',
    image: '/models/creative.svg',
    glowColor: 'from-[#EC4899]/30 via-[#8B5CF6]/20 to-[#22D3EE]/15',
    accentBadge: 'Prism Splitting Light',
    fullDescription: 'Generative creative pipeline synthesizing copy, vector visuals, and personalized product renderings tailored to individual user cohorts.',
    technicalSpecs: ['Hyper-personalized Creatives', 'Real-time Cohort Adaptation', 'Multi-format Export', 'Integrated ROAS Analytics'],
  },
  {
    id: 'vision',
    name: 'Synthetic Vision',
    benefit: 'Real-time intelligent visual perception streams.',
    objectType: 'eye_lens',
    image: '/models/vision.svg',
    glowColor: 'from-[#22D3EE]/30 via-[#EC4899]/20 to-[#8B5CF6]/15',
    accentBadge: 'Glowing Eye-Lens',
    fullDescription: 'Multimodal vision models capable of real-time object classification, quality control anomaly detection, and OCR intelligence.',
    technicalSpecs: ['Sub-30ms Video Inference', 'Zero-shot Edge Classification', 'Defect Anomaly Detection', 'Medical & Spatial Alignment'],
  },
];
