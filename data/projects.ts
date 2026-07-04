export type ProjectItem = {
  title: string;
  category: string;
  timeline: string;
  overview: string;
  challenge: string;
  responsibilities: string[];
  solution: string;
  tools: string[];
  value: string;
  lessons: string[];
  imageAlt: string;
};

export const projects: ProjectItem[] = [
  {
    title: 'Payment Platform Performance Analysis',
    category: 'Data & M&E',
    timeline: 'Ongoing — Feb 2024–Present',
    overview:
      'Bank-wide analysis of payment platform performance to identify trends, bottlenecks, and improvement opportunities using data.',
    challenge:
      'Identify performance gaps affecting transaction reliability and service availability across the bank\'s payment ecosystem.',
    responsibilities: [
      'Collect and analyze platform performance data using SPSS, IBM tools, and Excel.',
      'Monitor KPIs and track performance trends over time.',
      'Prepare evidence-based reports to support management decisions.',
      'Collaborate with business and technical teams to align improvement actions.',
    ],
    solution:
      'Developed structured performance monitoring processes and periodic reporting that translate raw data into clear, actionable insights for decision-makers.',
    tools: ['SPSS', 'IBM Analytical Tools', 'Microsoft Excel'],
    value:
      'Supports data-driven operational decisions and contributes to the bank\'s broader platform transformation goals.',
    lessons: [
      'Consistent monitoring enables early problem detection.',
      'Clear reporting bridges the gap between data and decisions.',
    ],
    imageAlt: 'Payment platform performance analysis dashboard',
  },
  {
    title: 'Business Requirement & Training Documentation',
    category: 'Documentation',
    timeline: 'Ongoing — Feb 2024–Present',
    overview:
      'Preparation of Business Requirement Documents (BRDs) and training materials to support payment system enhancements and staff capability.',
    challenge:
      'Translate complex payment system requirements into clear documentation usable by both business and technical stakeholders.',
    responsibilities: [
      'Draft and maintain BRDs for payment system initiatives.',
      'Develop training materials for branch and district staff.',
      'Deliver training sessions on payment system best practices.',
      'Document system changes and maintain procedure records.',
    ],
    solution:
      'Created a consistent documentation and training approach that improves knowledge transfer and reduces operational gaps across the bank.',
    tools: ['Microsoft Excel', 'IBM Analytical Tools'],
    value:
      'Reduced operational inconsistencies and improved staff readiness for system updates.',
    lessons: [
      'Good documentation reduces rework and supports continuity.',
      'Training is most effective when grounded in real operational examples.',
    ],
    imageAlt: 'Business requirement document layout',
  },
];
