export type SkillCategory = {
  title: string;
  items: string[];
};

export const skills: SkillCategory[] = [
  {
    title: 'Project Management',
    items: [
      'Project Planning & Scheduling',
      'Stakeholder Management',
      'Risk Management',
      'Change Management',
      'Agile / Scrum',
      'Monitoring & Evaluation',
      'Project Coordination',
      'Scope & Requirements Management',
    ],
  },
  {
    title: 'Business Analysis',
    items: [
      'BRD / FRD Documentation',
      'Process Mapping',
      'Gap Analysis',
      'Use Case Development',
      'Requirements Elicitation',
      'System Enhancement Support',
      'Operational Readiness',
    ],
  },
  {
    title: 'Banking & Operations',
    items: [
      'Card Banking Operations',
      'Payment Systems',
      'KPI / KRI Monitoring',
      'Compliance & Regulatory Alignment',
      'Process Optimization',
      'Operational Documentation',
    ],
  },
  {
    title: 'Analytics & Tools',
    items: [
      'Microsoft Excel (Advanced)',
      'SPSS',
      'IBM Analytical Tools',
      'Data Analysis',
      'Trend Analysis',
      'Performance Dashboards',
      'Report Writing',
    ],
  },
  {
    title: 'Leadership & Communication',
    items: [
      'Cross-functional Team Leadership',
      'Training & Knowledge Transfer',
      'Executive Reporting',
      'Problem Solving',
      'Analytical Thinking',
      'Stakeholder Communication',
    ],
  },
];
