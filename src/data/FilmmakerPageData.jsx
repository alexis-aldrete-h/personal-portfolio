export const FilmmakerPageData = {
    profile: {
      name: 'Alexis Aldrete',
      slogan: "I make videos",
      whoAmI: 'I make Film Content for brands',
      socialMedias: [
        {
          iconPath: 'assets/images/icons/github.png',
          link: 'https://github.com/alexis-aldrete-h',
          alt:"github-icon",
        },
        {
          iconPath: 'assets/images/icons/linkedin.png',
          link: 'https://www.linkedin.com/in/alexisaldrete/',
          alt:"linkedin-icon",
        },
        {
          iconPath: 'assets/images/icons/email.png',
          link: 'mailto:alexis.aldrete96@gmail.com',
          alt:"email-icon",
        },
      ]
    },
    portfolioApps: [
      {
        name: 'Online Clothing Store',
        subname: 'Replica',
        description: 'Welcome to Suspicious Antwerp, the ultimate online clothing store replica. Explore a diverse collection of clothing, including hoodies and t-shirts, with a seamless shopping experience. Easily manage your cart and enjoy you shopping experience.',
        githubLink: 'https://github.com/alexis-aldrete-h/clothing-store/tree/main/clothing-store',
        videoPath: 'assets/videos/video1.mp4',
        technologies: ['HTML', 'CSS', 'Javascript', 'React', 'React-Bootstrap', 'Firebase']
      },
    ],
    professionalExperience: [
      {
        name: 'Insulet Corporation',
        logoPath: 'assets/images/logos/insulet.png',
        jobTitle: 'Software Developer',
        timePeriod: 'Jan 6th, 2020 - Current',
        positions: [
          {
            name: 'Front End Developer',
            tasks: [
              {
                what: 'Created multiple features and components',
                how: ' for monitoring and analyzing diabetic patients glucose events with visually appealing charts and graphs to facilitate data analysis and be able to print them in PDF Format.',
              },
              {
                what: 'Spearheaded the development',
                how: ' of an intuitive web interface, enabling doctors to seamlessly access and analyze critical patient data, resulting in improved efficiency and informed medical decisions.',
              },
            ],
            techs: ['HTML', 'CSS', 'JavaScript', 'React', 'Typescript', 'D3.js'],
          },
          {
            name: 'Cloud Developer',
            tasks: [
              {
                what: 'Optimized legacy cloud services',
                how: ' by transitioning from containerized to serverless architecture using AWS API Gateway and Lambda functions. Reduced AWS costs by 18%, while improving scalability and efficiency.',
              },
              {
                what: 'Increased user authentication and client-server data transfer security',
                how: ' by creating an encryption service that worked with Google SafetyNet and Apple’s attestation service, protecting data fetched daily by 105K+ users.',
              },
            ],
            techs: ['Python', 'Java', 'AWS', 'Apple SafetyNet', 'Google Attestation'],
          },
        ],
      },
      {
        name: 'Merit Medical',
        logoPath: 'assets/images/logos/merit.png',
        jobTitle: 'Full Stack Dev. Intern',
        timePeriod: 'Oct, 2018 - Jun, 2019',
        positions: [
          {
            name: 'Full Stack Developer Intern',
            tasks: [
              {
                what: 'Designed and developed a high-impact web application from scratch',
                how: " making a significant contribution to the company's SHINGO Prize for operational excellence. This project incorporated the following features to enhance medical department operations:",
                features: [
                  "Revolutionized medication inventory management through automated tracking, mitigating untracked/expired medication issues. ",
                  "Integrated a scanner for accurate and efficient medication data entry. ",
                  "Created a user-friendly calendar interface for improved medical appointment management. ",
                  "Implemented robust printable reporting functionality, generating detailed insights on doctor's appointments for stakeholders.",
                ],
              },
            ],
            techs: ['HTML', 'CSS', 'JS', 'React', 'Typescript', 'Node.js', 'MySQL'],
          },
        ],
      }
    ],
    technicalSkills : {
      programmingLanguages: [
          'JavaScript (Proficient, 2.5 years)',
          'Python (Proficient, 1.5 years)',
          'Java (Proficient, 1.5 years)',
      ],
      frontEnd: ['HTML5', 'CSS3', 'JavaScript', 'jQuery (Library)'],
      backEnd: [
          'Node.js (Runtime Environment)',
          'Express.js (Framework)',
          'Flask (Micro Framework)',
          'Django (Web Framework)',
      ],
      frameworks: ['React (Front-end Framework)', 'Django (Web Framework)'],
      libraries: [
          'jQuery (Front-end Library)',
          'TypeScript',
          'Lint',
          'Bootstrap (Front-end Library)',
          'D3.js (Data Visualization Library)',
      ],
      versionControl: ['Git', 'GitHub', 'Azure'],
      agileMethodologies: ['Scrum'],
      databases: ['MySQL', 'MongoDB'],
      cloudServices: ['AWS'],
      otherSkills: [
          'APIs and RESTful Services',
          'Data Structures and Algorithms',
          'Object-Oriented Programming',
          'JSON',
      ],
    },
    education : {
      bachelors: [
        {
          name: 'BS. in Computer Engineering',
          schoolLogoPath: 'assets/images/logos/cetys3.png',
          period: 'August 2015 - July 2019',
          grade: 'GPA: 3.97 (93/100)',
          siteLink: 'https://www.cetys.mx/en/programs/cybernetic-electronics/',
        },
        {
          name: 'BS. in Management',
          schoolLogoPath: 'assets/images/logos/cityu1.png',
          period: 'Feb 2017 - May 2019',
          grade: 'GPA: 3.97 (93/100)',
          siteLink: 'https://www.cityu.edu/programs-overview/bachelor-arts-management/',
        },
      ],
      certificates: [
        {
          name: 'Full-stack Development Immersive',
          schoolLogoPath: 'assets/images/logos/SDGKU2.png',
          period: 'March 2022 - October 2022',
          grade: 'GPA: 3.97 (93/100)',
          siteLink: 'https://sdgku.edu/programs-list/full-stack-development-immersive/',
        },
        {
          name: 'Front-end Developer Professional Certificate',
          schoolLogoPath: 'assets/images/logos/meta4.png',
          period: 'May 2023 - November 2023',
          grade: 'GPA: 3.98 (95/100)',
          siteLink: 'https://www.coursera.org/professional-certificates/meta-front-end-developer',
        },
      ]
    }
  };
  
  export default FilmmakerPageData;
  