// ─── Types ────────────────────────────────────────────────────────────────────

export type CourseItem = {
  title: string;
  issued: string;
  skills: string[];
  credentialUrl?: string; // undefined = no button shown
};

export type CertificationTrack = {
  kind: 'track';
  id: string;
  program: string;
  issuer: string;
  issuerLogo: 'coursera' | 'udemy' | 'alison';
  platform?: string;
  status: 'completed';
  courses: CourseItem[];
};

export type CertificationSingle = {
  kind: 'single';
  id: string;
  title: string;
  issuer: string;
  issuerLogo: 'coursera' | 'udemy' | 'alison';
  issued?: string;
  credentialId?: string;
  skills?: string[];
  status: 'completed';
  credentialUrl?: string; // undefined = no button shown
};

export type CertificationEntry = CertificationTrack | CertificationSingle;

// ─── Data ─────────────────────────────────────────────────────────────────────

export const certifications: CertificationEntry[] = [
  // ── Google Project Management Professional Certificate (5-course track) ──
  {
    kind: 'track',
    id: 'google-pm',
    program: 'Google Project Management Professional Certificate',
    issuer: 'Coursera',
    issuerLogo: 'coursera',
    platform: 'Google Career Certificates',
    status: 'completed',
    courses: [
      {
        title: 'Foundations of Project Management',
        issued: 'Apr 2025',
        skills: ['Business Requirement Documentation (BRD)'],
        credentialUrl: 'https://www.coursera.org/account/accomplishments/records/ZHK84ABA1DFU',
      },
      {
        title: 'Project Initiation: Starting a Successful Project',
        issued: 'Apr 2025',
        skills: ['Project Planning', 'Business Requirement Documentation (BRD)'],
        // no URL
      },
      {
        title: 'Project Planning: Putting It All Together',
        issued: 'May 2025',
        skills: ['Project Planning'],
        // no URL
      },
      {
        title: 'Project Execution: Running the Project',
        issued: 'Jul 2025',
        skills: ['Change Management & Training', 'Monitoring & Evaluation Through Data'],
        credentialUrl: 'https://www.coursera.org/account/accomplishments/records/EWF53JUAM0SY',
      },
      {
        title: 'Agile Project Management',
        issued: 'Mar 2026',
        skills: ['Agile Methodologies', 'Scrum'],
        credentialUrl: 'https://coursera.org/share/8e4a9a1f993603f72a0fb824db89148f',
      },
    ],
  },

  // ── Computer Networks Simplified — Udemy ─────────────────────────────────
  {
    kind: 'single',
    id: 'udemy-networks',
    title: 'Computer Networks Simplified',
    issuer: 'Udemy',
    issuerLogo: 'udemy',
    issued: 'Feb 2024',
    status: 'completed',
    credentialUrl: 'https://udemy-certificate.s3.amazonaws.com/image/UC-8a189ed4-2de8-4370-9780-a2da17a7080f.jpg',
  },

  // ── Data Entry Tools and Techniques — Alison ─────────────────────────────
  {
    kind: 'single',
    id: 'alison-data-entry',
    title: 'Data Entry Tools and Techniques',
    issuer: 'Alison',
    issuerLogo: 'alison',
    issued: 'Dec 2023',
    credentialId: '6173-28189056',
    skills: ['Data Entry', 'Microsoft Excel'],
    status: 'completed',
    // no link — credential ID shown as text only
  },
];
