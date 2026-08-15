export default [
  {
    id: 'ledgershredder',
    title: 'LedgerShredder',
    category: 'Hackathon Project',
    description:
      'A mobile app for creating and tracking repayment agreements between friends. I implemented the Flutter frontend and integrated Gemini-powered image analysis to estimate item value from photos, enabling quick ledger entry.',
    tags: ['Flutter', 'Dart', 'Gemini API'],
    ownership: 'Frontend & image-analysis integration',
    awards: ['2nd Blockchain · 3rd Overall'],
    image: '/media/ledgershredder-thumb.png'
  },

  {
    id: 'address-pipeline',
    title: 'Address Validation Pipeline',
    category: 'Professional Engineering Case Study',
    description:
      'An automated address-validation pipeline built at Crosslists Data. The service ingests large CSVs, chunks work, validates addresses via a third-party REST API using parallel Prefect tasks, and outputs organized valid/invalid files.',
    tags: ['Python', 'Pandas', 'Prefect', 'Docker', 'SeaweedFS'],
    ownership: 'Core engineering and pipeline implementation',
    verifiedScale: 'Tested on datasets with >200,000 addresses',
    image: '/media/address-pipeline-thumb.png'
  },

  {
    id: 'agrivision',
    title: 'AgriVision',
    category: 'AI-Powered Agriculture Hackathon Project',
    description:
      'Cross-platform agriculture application that helps farmers photograph plant leaves and receive AI-assisted information about potential crop pests, diseases, causes, and solutions. Built by a four-person team using Flutter, Flask, MongoDB Atlas, AWS services, and Claude.',
    tags: ['Flutter', 'AWS Rekognition', 'Flask', 'MongoDB'],
    ownership: 'Flutter mobile frontend: camera & gallery workflow',
    team: 'Four-person team (LionHogTech Hackathon)',
    awards: ['2nd Place'],
    caseStudy: {
      problem: 'Farmers need quick, accessible information when encountering unfamiliar crop symptoms or pests.',
      solution: 'Users can photograph or upload plant images to receive AI-assisted analysis, environmental data, and community features.',
      myWork: 'Implemented the Flutter camera and image-gallery workflow for capture, upload, preview, and review; collaborated on integrating the mobile UI with backend analysis.',
      result: '2nd Place — LionHogTech Hackathon'
    },
    image: '/media/agrivision-thumb.png'
  },

  {
    id: 'fitcheck',
    title: 'FitCheck',
    category: 'Solo Mobile Project',
    description:
      'A solo-built Flutter MVP that uploads images to AWS Rekognition for cloud analysis and displays results in a polished mobile UI. I designed the frontend and integrated the app with AWS services.',
    tags: ['Flutter', 'Dart', 'AWS Rekognition'],
    ownership: 'Built independently',
    image: '/media/fitcheck-thumb.png'
  },

  {
    id: 'bitesize',
    title: 'BiteSize (in progress)',
    category: 'Currently Building',
    description:
      'A workout and nutrition mobile app in progress. Firebase authentication is implemented; future plans include Hugging Face models for AI-assisted guidance.',
    tags: ['Flutter', 'Dart', 'Firebase'],
    ownership: 'Sole developer',
    image: '/media/bitesize-thumb.png'
  },

  // Older projects (kept compact) — only include when links valid
  {
    id: 'more',
    title: 'More Projects',
    category: 'Archive',
    description: 'A curated list of earlier projects and demos is available in the repository. Older demos are shown as compact entries.',
    tags: ['Various'],
    image: '/media/projects-archive.png'
  }
];
