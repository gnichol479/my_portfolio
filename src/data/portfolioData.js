// Edit this file during the workshop. All personal content lives here.
// Featured IDs control the gallery order. Each project cover uses image and imageAlt:
//   image: "/images/projects/example.webp",
//   imageAlt: "A screenshot of Example Project",
// Put files in public/images/projects/. Empty or broken images use the cover fallback.
// Add real code/demo URLs when available; empty URLs hide those buttons.
// Resume: add public/Gibson_Nichol_Resume.pdf, then set resume.available to true.

const portfolioData = {
  "siteTitle": "Gibson Nichol",
  "name": "Gibson Nichol",
  "headline": "Computer Science Student & Software Developer",
  "intro": "I’m a computer science student at UCM. I spend a lot of my time building projects for hackathons, working with Unity and XR, and helping run events for ACM.",
  "heroStatement": "I like figuring out\nhow to make things work.",
  "availability": "Looking for Summer 2027 internships",
  "email": "gibson.nichol@gmail.com",
  "githubUrl": "https://github.com/gnichol479",
  "linkedinUrl": "https://linkedin.com/in/gibson-nichol-a9a490295/",
  "resume": {
    "available": false,
    "path": "/Gibson_Nichol_Resume.pdf"
  },
  "aboutTitle": "A little about\nme.",
  "about": [
    "I’m studying software development at UCM. I’ve worked on pharmacy software at Oracle and data pipelines at Crosslists. Outside of work and class, I help run ACM events and lead our MuleSuits team.",
    "Most of my projects start with me wanting to understand how something works. That’s taken me from Unity games and HoloLens experiments to mobile apps and data pipelines."
  ],
  "portrait": "/media/unnamed.jpg",
  "portraitAlt": "Gibson Nichol holding an award at the FBLA National Leadership Conference",
  "highlights": [
    {
      "value": "2",
      "label": "Technical internships"
    },
    {
      "value": "3",
      "label": "Hackathon placements"
    },
    {
      "value": "4.0",
      "label": "College GPA"
    }
  ],
  "education": {
    "school": "University of Central Missouri",
    "degree": "Bachelor of Science in Computer Science",
    "note": "Honors College",
    "dates": "August 2025 – Present",
    "location": "Warrensburg, Missouri",
    "gpa": "4.0"
  },
  "experience": [
    {
      "id": "e2",
      "role": "Data Science Intern",
      "company": "Crosslists Data",
      "location": "Remote",
      "start": "June 2025",
      "end": "Present",
      "bullets": [
        "Developed an automated address-validation pipeline using Python, Pandas, Prefect, Docker, and SeaweedFS to process large CSV datasets through a third-party REST API.",
        "Built workflows that upload, split, validate, merge, and organize data while automatically producing separate valid and invalid output files.",
        "Tested parallel-processing and API-concurrency configurations on datasets containing more than 200,000 addresses to improve performance and reliability.",
        "Worked with data collection and processing tools including Python, Kotlin, Scrapy, Ktor, Jsoup, and dataframe tooling."
      ],
      "tools": [
        "Python",
        "Pandas",
        "Prefect",
        "Docker",
        "SeaweedFS"
      ]
    },
    {
      "id": "e1",
      "role": "Software Development Intern",
      "company": "Oracle",
      "location": "Remote",
      "start": "January 2025",
      "end": "May 2025",
      "bullets": [
        "Contributed to an enterprise pharmacy application by implementing functionality for collecting and displaying patient race and marital-status information.",
        "Collaborated with a remote development team using Jira and Bitbucket to track work, test functionality, and manage code changes.",
        "Learned to navigate a large codebase and translate feature requirements into working software."
      ],
      "tools": [
        "Java",
        "Git",
        "Bitbucket",
        "Jira"
      ]
    },
    {
      "id": "e3",
      "role": "Community Advisor",
      "company": "University of Central Missouri Housing",
      "location": "Warrensburg, Missouri",
      "start": "August 2026",
      "end": "Present",
      "bullets": [
        "Build relationships with residents, facilitate community programs, and connect students with campus resources to foster an inclusive floor environment.",
        "Respond to conflicts and unexpected situations using professional communication, sound judgment, and teamwork.",
        "Collaborate with housing staff and other Community Advisors to support residents and maintain a welcoming environment."
      ],
      "tools": [
        "Leadership",
        "Communication",
        "Conflict Resolution"
      ]
    }
  ],
  "skills": {
    "languages": [
      "Python",
      "Java",
      "Dart",
      "SQL",
      "Kotlin"
    ],
    "frameworks": [
      "Flutter",
      "Pandas",
      "Scrapy",
      "Prefect",
      "Flask",
      "Ktor",
      "Jsoup",
      "Firebase"
    ],
    "cloud": [
      "AWS",
      "AWS Rekognition",
      "Docker",
      "Git",
      "GitHub",
      "Bitbucket",
      "Jira",
      "SeaweedFS",
      "MongoDB",
      "Kubernetes"
    ],
    "concepts": [
      "REST API Integration",
      "Data Pipelines",
      "Parallel Processing",
      "CSV and Data Processing",
      "Mobile Development",
      "Machine Learning",
      "Image Analysis",
      "CI/CD",
      "Automated Testing",
      "OOP"
    ]
  },
  "contactTitle": "Let’s talk\nabout a project.",
  "contactText": "I’m looking for Summer 2027 internships. If you’d like to talk about software, XR, hackathons, or something I’ve built, send me a message.",
  "featuredProjectIds": [
    "shadows-of-the-moon",
    "hololens-object-identification",
    "gate-gatekeeper"
  ],
  "projects": [
    {
      "id": "shadows-of-the-moon",
      "title": "Shadows of the Moon",
      "category": "Game development",
      "description": "I built this survival-horror game in Unity for the FBLA Computer Game & Simulation Programming event. I worked on the AI-driven chase mechanics, puzzles, and ethical decision paths.",
      "tags": [
        "Unity",
        "C#",
        "AI",
        "Game Design"
      ],
      "ownership": "Designed and developed independently",
      "awards": [
        "4th at Missouri State",
        "7th at Nationals 2025"
      ],
      "image": "/media/Screenshot_2025-04-06_182623.png",
      "imageAlt": "A creature in the torchlit stone corridors of Shadows of the Moon, captured in Unity",
      "imagePosition": "50% 38%",
      "coverStyle": "midnight",
      "story": [
        {
          "heading": "The build",
          "text": "A 3D escape game developed independently in Unity for the FBLA Computer Game & Simulation Programming event."
        },
        {
          "heading": "Inside the game",
          "text": "AI-driven chase mechanics, puzzle solving, and ethical decision paths bring the survival-horror experience together."
        },
        {
          "heading": "The result",
          "text": "4th at Missouri State and 7th at FBLA Nationals in 2025."
        }
      ],
      "media": [
        {
          "type": "image",
          "src": "/media/Screenshot_2025-10-28_233835.png",
          "alt": "Shadows of the Moon title screen"
        },
        {
          "type": "image",
          "src": "/media/Screenshot_2025-01-15_122417.png",
          "alt": "The spaceship puzzle environment in the Unity editor"
        },
        {
          "type": "video",
          "src": "/media/Monstor_Lair.mp4",
          "label": "Monster lair gameplay recording"
        },
        {
          "type": "video",
          "src": "/media/Cabinet_and_Room_2.mp4",
          "label": "Cabinet puzzle and second room gameplay"
        }
      ]
    },
    {
      "id": "hololens-object-identification",
      "title": "HoloLens Object Identification",
      "category": "Mixed reality · Research",
      "description": "I’m connecting HoloLens image capture to a FastAPI backend running YOLO object detection. I’m exploring how object detection and natural language voice queries could help users find objects in mixed reality.",
      "tags": [
        "Unity",
        "C#",
        "Python",
        "FastAPI",
        "YOLO"
      ],
      "image": "",
      "imageAlt": "",
      "coverStyle": "blue",
      "coverLines": [
        "HoloLens",
        "Object",
        "Identification"
      ],
      "story": [
        {
          "heading": "The question",
          "text": "How can object detection and natural language voice queries help users find objects in mixed reality?"
        },
        {
          "heading": "The system",
          "text": "HoloLens image capture connects to a FastAPI backend running YOLO object detection. Unity and C# bring the mixed reality side together with Python on the backend."
        }
      ],
      "githubUrl": "",
      "liveUrl": ""
    },
    {
      "id": "gate-gatekeeper",
      "title": "Gate & Gatekeeper",
      "category": "AI agents · Hack Midwest 2026",
      "description": "At Hack Midwest 2026, my three-person team built a payment authorization firewall for AI agents using Python, FastAPI, and MCP. We earned the $2,500 DevRev track prize.",
      "tags": [
        "Python",
        "FastAPI",
        "MCP",
        "DevRev"
      ],
      "team": "Three-person team",
      "awards": [
        "$2,500 · DevRev track prize"
      ],
      "image": "/media/gate-gatekeeper-demo.jpg",
      "imageAlt": "Gate & Gatekeeper demo showing a payment approval screen framed by a digital firewall",
      "coverStyle": "violet",
      "coverLines": [
        "Gate &",
        "Gatekeeper"
      ],
      "story": [
        {
          "heading": "The idea",
          "text": "A payment authorization firewall for AI agents, explored at Hack Midwest 2026."
        },
        {
          "heading": "The build",
          "text": "Built with a team of three using Python, FastAPI, and MCP."
        },
        {
          "heading": "The result",
          "text": "Awarded the $2,500 DevRev track prize at Hack Midwest 2026."
        }
      ],
      "githubUrl": "",
      "liveUrl": "https://www.youtube.com/watch?v=4CpligsFX20"
    },
    {
      "id": "ledgershredder",
      "title": "LedgerShredder",
      "category": "Hackathon Project · Blockchain",
      "description": "I built the Flutter frontend for a blockchain-focused mobile app that creates and tracks repayment agreements between friends. I also integrated Gemini-powered image analysis to estimate item value from photos.",
      "tags": [
        "Flutter",
        "Dart",
        "Gemini API",
        "Blockchain"
      ],
      "ownership": "Frontend & image-analysis integration",
      "awards": [
        "3rd General Track",
        "2nd Blockchain Track"
      ],
      "image": "/media/ledgershredder-demo.jpg",
      "imageAlt": "LedgerShredder mobile app screens for creating and tracking repayment agreements",
      "coverStyle": "blue",
      "liveUrl": "https://www.youtube.com/watch?v=MBt4zuKuOpU"
    },
    {
      "id": "nettrace",
      "title": "NetTrace",
      "category": "Interactive 3D Web Project",
      "description": "I built an interactive 3D cybersecurity learning tool that shows how attacks move through a network. Users can inspect devices, pause the incident, and step through each stage.",
      "tags": [
        "React",
        "Three.js",
        "React Three Fiber",
        "Vite",
        "WebGL"
      ],
      "ownership": "Designed and built independently",
      "liveUrl": "https://nettrace-mauve.vercel.app/",
      "image": "/media/nettrace-thumb.png",
      "imageAlt": "NetTrace cybersecurity incident visualizer showing an active attack simulation",
      "coverStyle": "midnight"
    },
    {
      "id": "address-pipeline",
      "title": "Address Validation Pipeline",
      "category": "Professional Engineering Case Study",
      "description": "At Crosslists Data, I built an address-validation pipeline that ingests large CSVs, validates addresses through a REST API, and writes organized valid and invalid files.",
      "tags": [
        "Python",
        "Pandas",
        "Prefect",
        "Docker",
        "SeaweedFS"
      ],
      "ownership": "Core engineering and pipeline implementation",
      "verifiedScale": "Tested on datasets with >200,000 addresses",
      "image": "",
      "imageAlt": "",
      "coverStyle": "sky"
    },
    {
      "id": "agrivision",
      "title": "AgriVision",
      "category": "AI-Powered Agriculture Hackathon Project",
      "description": "Our four-person team built a Flutter app that lets farmers photograph plant leaves, identify diseases and pests with AI, and get treatment recommendations. I worked on the camera and gallery workflow.",
      "tags": [
        "Flutter",
        "AWS Rekognition",
        "Amazon Bedrock",
        "Claude 3.5 Sonnet",
        "Flask",
        "MongoDB",
        "USDA API",
        "Open-Meteo"
      ],
      "ownership": "Flutter mobile frontend: camera & gallery workflow",
      "team": "Four-person team (LionHogTech Hackathon)",
      "awards": [
        "2nd Place"
      ],
      "caseStudy": {
        "problem": "Farmers need quick, accessible information when encountering unfamiliar crop symptoms or pests.",
        "solution": "Users can photograph or upload plant images to receive AI-assisted analysis, environmental data, and community features.",
        "myWork": "Implemented the Flutter camera and image-gallery workflow for capture, upload, preview, and review; collaborated on integrating the mobile UI with backend analysis.",
        "result": "2nd Place — LionHogTech Hackathon"
      },
      "image": "",
      "imageAlt": "",
      "coverStyle": "violet",
      "githubUrl": "https://github.com/AamirAbatiyow/LionHogTech25"
    },
    {
      "id": "patientprivy",
      "title": "PatientPrivy",
      "category": "AI & Machine Learning · TigerHacks",
      "description": "I built PatientPrivy for TigerHacks as an AI and machine-learning project centered on patient privacy. It won Best Use of AI and Machine Learning at the hackathon.",
      "tags": [
        "AI",
        "Machine Learning",
        "Privacy"
      ],
      "ownership": "Built for TigerHacks",
      "awards": [
        "Best Use of AI and Machine Learning"
      ],
      "image": "/media/patientprivy-demo.jpg",
      "imageAlt": "PatientPrivy web app showing a patient privacy acknowledgement form",
      "coverStyle": "midnight",
      "coverLines": [
        "Patient",
        "Privy"
      ],
      "story": [
        {
          "heading": "The idea",
          "text": "A TigerHacks project about using AI and machine learning while keeping patient information private."
        },
        {
          "heading": "The result",
          "text": "PatientPrivy won Best Use of AI and Machine Learning at TigerHacks."
        }
      ],
      "githubUrl": "",
      "liveUrl": "https://www.youtube.com/watch?v=wpNiArXuZaQ"
    },
    {
      "id": "fitcheck",
      "title": "FitCheck",
      "category": "Solo Mobile Project",
      "description": "I built this Flutter MVP to upload outfit images to AWS Rekognition and show the results in a mobile UI. I designed the frontend and integrated the AWS services.",
      "tags": [
        "Flutter",
        "Dart",
        "AWS Rekognition"
      ],
      "ownership": "Built independently",
      "image": "",
      "imageAlt": "",
      "coverStyle": "blue"
    },
    {
      "id": "bitesize",
      "title": "BiteSize (in progress)",
      "category": "Currently Building",
      "description": "A workout and nutrition mobile app in progress. Firebase authentication is implemented; future plans include Hugging Face models for AI-assisted guidance.",
      "tags": [
        "Flutter",
        "Dart",
        "Firebase"
      ],
      "ownership": "Sole developer",
      "image": "",
      "imageAlt": "",
      "coverStyle": "midnight"
    }
  ]
};

export default portfolioData;
