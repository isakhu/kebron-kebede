export type EducationItem = {
  degree: string;
  field: string;
  institution: string;
  location: string;
  year?: string;
  completed?: boolean;
};

export const education: EducationItem[] = [
  {
    degree: 'Master of Science',
    field: 'Project Management',
    institution: 'Maryland International College (MIC)',
    location: 'Ethiopia',
    year: 'Nov 2023 – Nov 2025',
    completed: true,
  },
  {
    degree: 'Bachelor of Science',
    field: 'Electrical & Computer Engineering (Communication Stream)',
    institution: 'Hawassa University',
    location: 'Ethiopia',
    year: '2018 – 2022',
    completed: true,
  },
];
