/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Aditya's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Aditya Kumar Singh Portfolio",
    type: "website",
    url: "https://adityasinghportfolia.in/",
  },
};

//Home Page
const greeting = {
  title: "Hi all, I'm Aditya",
  emoji: "👋",
  nickname: "Backend-Focused Full Stack Developer",
  logo_name: "AdityaKumarSingh",
  subTitle:
    "A passionate Backend-Focused Full Stack Developer 🚀 having experience in building scalable web applications using Spring Boot, React, and Microservices architecture. I love solving real-world problems and building impactful fintech systems.",

  resumeLink:
    "https://drive.google.com/file/d/15Hq0SGS6fcHnVtnXpSweRbmn1lpsQBav/view?usp=sharing",
  portfolio_repository: "https://github.com/aditya9852/Portfolio",
  githubProfile: "https://github.com/aditya9852",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/aditya9852",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/adityasingh78/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "LeetCode",
    link: "https://leetcode.com/aditya_singh98/",
    fontAwesomeIcon: "simple-icons:leetcode",
    backgroundColor: "#FFA116",
  },
  {
    name: "CodeChef",
    link: "https://www.codechef.com/users/aditya_singh48",
    fontAwesomeIcon: "simple-icons:codechef",
    backgroundColor: "#5B4638",
  },
  {
    name: "Gmail",
    link: "mailto:aditya9852046@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://twitter.com/adityasingh926",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
];

const skills = {
  data: [
    {
      title: "Backend Development",
      fileName: "backend",
      skills: [
        "⚡ Build scalable backend systems using Spring Boot, Java & Microservices architecture",
        "⚡ Design and develop secure REST APIs with JWT authentication and role-based access",
        "⚡ Implement authentication, authorization, and payment workflows",
        "⚡ Optimize backend performance using efficient database design and query optimization",
      ],
      softwareSkills: [
        { skillName: "Java", fontAwesomeClassname: "logos-java" },
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "simple-icons:springboot",
        },
        {
          skillName: "Microservices",
          fontAwesomeClassname: "simple-icons:docker",
        },
        {
          skillName: "JWT",
          fontAwesomeClassname: "simple-icons:jsonwebtokens",
        },
        { skillName: "MySQL", fontAwesomeClassname: "simple-icons:mysql" },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "fullstack",
      skills: [
        "⚡ Develop responsive and modern web applications using React / Next.js",
        "⚡ Integrate frontend with backend APIs for end-to-end application development",
        "⚡ Build complete real-world applications with clean architecture and scalability",
      ],
      softwareSkills: [
        { skillName: "ReactJS", fontAwesomeClassname: "simple-icons:react" },
        { skillName: "NextJS", fontAwesomeClassname: "simple-icons:nextdotjs" },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
        },
        { skillName: "HTML5", fontAwesomeClassname: "simple-icons:html5" },
        { skillName: "CSS3", fontAwesomeClassname: "simple-icons:css3" },
        { skillName: "Redux", fontAwesomeClassname: "simple-icons:redux" },
      ],
    },
    {
      title: "Fintech & Real-World Systems",
      fileName: "fintech",
      skills: [
        "⚡ Developed Biompe – a biometric-based Payment system enabling phoneless transactions",
        "⚡ Designed secure transaction workflows and payment authorization systems",
        "⚡ Built biometric attestation mechanism for generating short-lived secure tokens",
        "⚡ Designed backend architecture ensuring security, scalability, and low-latency transactions",
        "⚡ Handled sensitive user data with secure encryption and validation mechanisms",
        "⚡ Focused on building real-world fintech solutions solving accessibility and usability problems",
      ],
      softwareSkills: [],
    },
    {
      title: "Problem Solving & Competitive Coding",
      fileName: "problemsolving",
      skills: [
        "⚡ Strong foundation in Data Structures & Algorithms",
        "⚡ Active on platforms like LeetCode & CodeChef",
        "⚡ Solved 600+ problems across arrays, graphs, DP, and system design patterns",
        "⚡ Strong understanding of time & space complexity optimization",
        "⚡ Experience in solving real-world problems using efficient algorithms",
        "⚡ Focus on writing optimized, clean, and scalable solutions",
        "⚡ Familiar with common patterns like sliding window, recursion, and backtracking",
        "⚡ Ability to break down complex problems into efficient logical steps",
      ],
      softwareSkills: [],
    },
    {
      title: "Deployment & Engineering Practices",
      fileName: "deployment",
      skills: [
        "⚡ Deploy applications using GitHub Pages and cloud platforms",
        "⚡ Manage backend services, APIs, and databases in production environments",
        "⚡ Configure environment variables and handle secure deployments",
        "⚡ Experience with containerization using Docker",
        "⚡ Use Postman & Swagger for API testing and documentation",
        "⚡ Use Git for version control and collaborative development",
      ],
      softwareSkills: [
        { skillName: "Git", fontAwesomeClassname: "simple-icons:git" },
        { skillName: "Docker", fontAwesomeClassname: "simple-icons:docker" },
        { skillName: "Postman", fontAwesomeClassname: "simple-icons:postman" },
        { skillName: "Swagger", fontAwesomeClassname: "simple-icons:swagger" },
      ],
    },
    {
      title: "Engineering Mindset",
      fileName: "engineering",
      skills: [
        "⚡ Focus on building real-world systems, not just projects",
        "⚡ Write clean, scalable, and maintainable code",
        "⚡ Follow modular architecture and separation of concerns",
        "⚡ Strong debugging and problem-solving approach",
        "⚡ Continuously improving in backend engineering and system design",
        "⚡ Passionate about learning new technologies and improving system performance",
        "⚡ Focus on writing production-ready and reusable code components",
        "⚡ Understand trade-offs between performance, scalability, and maintainability",
      ],
      softwareSkills: [],
    },
  ],
};
// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/aditya_singh98/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/adityakumarsin24",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/aditya_singh48",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://codeforces.com/profile/Aditya__Singh48",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@aditya7008/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Technocrats Institute of Technology & Science, Bhopal",
      subtitle: "B.Tech in Computer Science Engineering",
      logo_path: "tit.png",
      alt_name: "TIT&S Bhopal",
      duration: "2021 - 2025",
      descriptions: [
        "⚡ CGPA: 8.34",
        "⚡ Studied core computer science subjects including Data Structures & Algorithms, DBMS, Operating Systems, and Computer Networks",
        "⚡ Developed strong problem-solving skills and understanding of time & space complexity through continuous practice",
        "⚡ Specialized in backend development using Java, Spring Boot, and Microservices architecture",
        "⚡ Built real-world applications including Biompe – a biometric-based UPI payment system enabling phoneless transactions",
        "⚡ Gained hands-on experience in REST API development, authentication systems (JWT, OTP), and database design",
        "⚡ Actively improving system design and backend engineering skills alongside academic curriculum",
      ],
      website_link: "https://technocratsgroup.edu.in",
    },
    {
      title: "DAV Public Sr. Sec. School, Bina (UP)",
      subtitle: "Senior Secondary (12th - CBSE)",
      logo_path: "school.jpg",
      alt_name: "DAV Bina",
      duration: "2020",
      descriptions: [
        "⚡ Percentage: 84.6%",
        "⚡ Strong foundation in Mathematics, Physics, and logical reasoning",
        "⚡ Developed analytical thinking and structured problem-solving approach",
        "⚡ Built early interest in computer science and technology",
      ],
      website_link: "",
    },
    {
      title: "DAV Public Sr. Sec. School, Bina (UP)",
      subtitle: "Secondary (10th - CBSE)",
      logo_path: "school.jpg",
      alt_name: "DAV Bina",
      duration: "2018",
      descriptions: [
        "⚡ Percentage: 91%",
        "⚡ Developed strong academic foundation with focus on science and mathematics",
        "⚡ Built discipline, consistency, and problem-solving mindset",
        "⚡ Participated in academic activities and strengthened logical thinking skills",
      ],
      website_link: "",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work & Practical Experience",
  description:
    "Hands-on experience building real-world applications, backend systems, and solving production-level problems with a focus on scalability, performance, and security.",
  header_image_path: "experience.png",

  sections: [
    {
      title: "Internships",
      Internships: true,
      experiences: [
        {
          title: "Python Developer Intern",
          company: "Timoz Digital Era Pvt Ltd",
          company_url: "",
          logo_path: "timoz_logo.png", // ✅ make sure file exists
          duration: "Oct 2024 – Dec 2024",
          location: "Bangalore",
          description: [
            "Developed a real-time Back Cover Visualization system supporting 10,000+ users",
            "Built image processing pipelines using Python, OpenCV, and NumPy",
            "Achieved ~95% rendering accuracy for dynamic design previews",
            "Reduced production bugs through testing and performance optimization",
            "Improved system efficiency and reliability for real-world usage",
          ],
          color: "#000000",
        },
      ],
    },
    {
      title: "Freelancing",
      experiences: [
        {
          title: "Backend Developer",
          company: "Self-Employed",
          company_url: "",
          logo_path: "freelance_logo.png", // ✅ will use fallback UI
          duration: "2023 – Present",
          location: "Remote",
          description: [
            "Built scalable backend systems using Spring Boot and REST APIs",
            "Implemented secure authentication using JWT and role-based access control",

            "🚨 SECURITY INCIDENT HANDLING (PRODUCTION SYSTEM)",
            "Detected unauthorized crypto-mining activity affecting server performance",
            "Analyzed server logs and identified malicious processes consuming resources",
            "Removed injected scripts and secured backend endpoints",
            "Prevented further exploitation by strengthening application security",

            "Optimized database queries and improved system performance",
            "Worked on real-world applications focusing on scalability and reliability",
          ],
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I design and build scalable, production-ready applications using modern technologies, focusing on real-world problem solving, microservices architecture, and cloud deployment.",
  avatar_image_path: "project.png",
};

const projects = [
  {
    title: "Phone-less Biometric UPI Payment System",
    problem:
      "UPI payments rely on smartphones, PIN entry, and internet access, limiting usability in real-world scenarios such as rural areas, elderly users, and device unavailability.",
    objective:
      "Develop a biometric-based UPI payment system enabling secure transactions using fingerprint authentication, leveraging UPI AutoPay and microservices architecture.",
    impact: [
      "Eliminates dependency on smartphones and PINs, enabling seamless and frictionless transactions",
      "Improves accessibility for non-tech users, especially in rural and low-connectivity environments",
      "Enhances transaction speed and user experience through biometric authentication",
      "Establishes a scalable foundation for offline-first and next-generation payment systems",
    ],
    tech: ["Spring Boot", "Microservices", "MySQL", "JWT"],
    github: "#",
    demo: "#",
  },
  {
    title: "E-commerce Web Application (Microservices)",
    problem:
      "Traditional monolithic e-commerce systems face scalability limitations, slow deployments, and poor fault isolation under high traffic conditions.",
    objective:
      "Build a scalable microservices-based e-commerce platform with independent services for authentication, product management, orders, and payments using REST APIs.",
    impact: [
      "Improves scalability and fault isolation by decoupling services",
      "Reduces deployment downtime through independent service updates",
      "Handles high concurrent user traffic with optimized backend performance",
      "Enhances maintainability and supports rapid feature expansion",
    ],
    tech: ["Spring Boot", "React", "Docker", "MySQL"],
    github: "#",
    demo: "#",
  },
  {
    title: "Secure Share with Face Guard Encryption",
    problem:
      "Conventional file-sharing systems rely on weak authentication mechanisms like links or passwords, making them vulnerable to unauthorized access and data breaches.",
    objective:
      "Design a secure file-sharing platform combining AES-256 encryption with facial recognition-based authentication to ensure identity-based access control.",
    impact: [
      "Achieves 97% biometric authentication accuracy for reliable identity verification",
      "Reduces unauthorized access attempts by 90% through face-based authentication",
      "Prevents 95% of potential data breaches using strong encryption mechanisms",
      "Strengthens data protection with secure key management and encrypted storage",
    ],
    tech: ["Python", "OpenCV", "Django", "AES-256"],
    github: "#",
    demo: "#",
  },
  {
    title: "Smart Expense Tracker & Admin Dashboard",
    problem:
      "Existing expense tracking applications lack scalability, centralized analytics, and real-time insights for effective financial management.",
    objective:
      "Develop a microservices-based expense tracking system with an admin dashboard to manage, categorize, and analyze financial data in real time.",
    impact: [
      "Reduces API response time by 40% through optimized backend processing",
      "Provides real-time financial insights for improved decision-making",
      "Handles large datasets efficiently using scalable architecture",
      "Enhances user experience with structured dashboards and analytics",
    ],
    tech: ["Spring Boot", "React", "PostgreSQL"],
    github: "#",
    demo: "#",
  },
];
// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contact.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  experience,
  projectsHeader,
  projects,
  contactPageData,
};
