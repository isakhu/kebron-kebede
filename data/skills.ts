export type SkillCategory = {
  title: string;
  items: string[];
};

export const skills: SkillCategory[] = [
  {
    title: 'Project & M&E',
    items: [
      'Project Planning & Monitoring',
      'Monitoring & Evaluation (M&E)',
      'KPI Tracking & Performance Improvement',
      'Evidence-Based Decision Making',
      'Stakeholder Communication',
    ],
  },
  {
    title: 'Data Analysis',
    items: [
      'SPSS',
      'IBM Analytical Tools',
      'Microsoft Excel (Advanced)',
      'Performance Dashboards',
      'Business Requirements Documentation',
    ],
  },
  {
    title: 'Banking & Operations',
    items: [
      'Payment Platform Analysis',
      'System Change Documentation',
      'Training & Knowledge Transfer',
      'Customer Service',
      'Process Documentation',
    ],
  },
];
