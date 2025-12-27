import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. As a B.Tech student and aspiring developer, I am actively building my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my growing expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a motivated and adaptable web developer with a solid foundation in full stack technologies. As a 3rd year B.Tech student, I've gained experience with React, Next.js, Node.js, and databases like MySQL, PostgreSQL, and MongoDB. I'm passionate about building efficient web applications and enjoy tackling complex problems in collaborative settings. I'm eager to learn, contribute to open-source projects, and stay current with the latest technologies.`

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "EmirateEstate – Real Estate Dashboard",
    image: project1,
    description:
      "A full-stack real estate dashboard with secure authentication, advanced property filtering, real-time data integration, and personalized saved listings. Built with a clean, responsive UI and optimized backend for user-specific sessions.",
    technologies: [
      "Next.js",
      "MongoDB",
      "NextAuth",
      "ShadCN UI",
      "Tailwind CSS"
    ],
  },
  {
    title: "SensAI – AI Career Insights & Interview Prep",
    image: project2,
    description:
      "An AI-powered career analytics platform providing skill trend analysis, salary predictions, and personalized insights, along with an interactive interview preparation module featuring dynamic questions and progress tracking.",
    technologies: [
      "Next.js",
      "PostgreSQL",
      "Prisma",
      "AI Analytics",
      "SSR / ISR"
    ],
  },
  {
    title: "Memories App – Photo Management System",
    image: project3,
    description:
      "A full-stack photo management application supporting image upload, update, deletion, and metadata handling. Includes secure REST APIs, JWT authentication, and optimized database schemas for fast querying.",
    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "JWT"
    ],
  },
];


export const CONTACT = {
  address: "IIIT Nagpur, Maharashtra, India",
  phoneNo: "+91 8854991379",
  email: "rajveer.rs2005@gmail.com",
};
