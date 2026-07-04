export type ExperienceItem = {
  role: string;
  organization: string;
  location: string;
  period: string;
  responsibilities: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: 'Payment Platform Performance Analyst – Business Team',
    organization: 'Cooperative Bank of Oromia',
    location: 'Addis Ababa, Ethiopia',
    period: 'Feb 2024 – Present',
    responsibilities: [
      'Analyze bank-wide payment platform performance to support data-driven decisions.',
      'Prepare Business Requirement and training documents.',
      'Document system changes and procedures.',
      'Train branch and district staff on payment system best practices.',
      'Use SPSS, IBM, and Excel for monitoring, KPI tracking, and evidence-based performance improvement.',
    ],
  },
  {
    role: 'Graduate Trainee, Customer Service',
    organization: 'Cooperative Bank of Oromia',
    location: 'Addis Ababa, Ethiopia',
    period: 'Feb 2023 – Feb 2024',
    responsibilities: [
      'Built strong customer relationships while promoting banking products.',
      'Developed communication skills and deepened understanding of customer needs.',
    ],
  },
];
