import { Metadata } from 'next';

const siteUrl = 'https://kebron-portfolio.example.com';

export const metadata: Metadata = {
  title: 'Kebron Kebede Olana | Payment Platform Performance Analyst · Social Development',
  description:
    'Portfolio of Kebron Kebede Olana — Payment Platform Performance Analyst at Cooperative Bank of Oromia, MSc Project Management candidate, Google PM certified, passionate about social development project work.',
  metadataBase: new URL(siteUrl),
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Kebron Kebede Olana · Payment Platform Performance Analyst',
    description:
      'Data-driven analyst with a passion for social development project work. MSc Project Management, Google PM certified.',
    type: 'website',
    url: siteUrl,
    siteName: 'Kebron Kebede Olana',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kebron Kebede Olana · Payment Platform Performance Analyst',
    description:
      'Data analyst and monitoring & evaluation professional passionate about contributing to social development projects.',
  },
  alternates: {
    canonical: siteUrl,
  },
};

export const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Kebron Kebede Olana',
  jobTitle: 'Payment Platform Performance Analyst',
  worksFor: {
    '@type': 'Organization',
    name: 'Cooperative Bank of Oromia',
  },
  email: 'mailto:hopekebron@gmail.com',
  telephone: '+251933773213',
  sameAs: [
    'https://www.linkedin.com/in/kebron-kebede-22bb7324b',
    'https://t.me/KebronK',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Addis Ababa',
    addressCountry: 'Ethiopia',
  },
};
