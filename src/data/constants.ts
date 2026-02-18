import type { BioType, SkillCategory, Experience, Education, Project } from '../types';
import { 
  SiReact, SiHtml5, SiCss3, SiJavascript, SiTypescript, SiTailwindcss, 
  SiStyledcomponents, SiRedux, SiNodedotjs, SiExpress, SiNestjs, 
  SiPython, SiDjango, SiGo, SiMongodb, SiMysql, SiClickhouse, 
  SiApachekafka, SiGit, SiGithub, SiNetlify, SiPostman, SiTableau,
  SiDocker
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';

export const Bio: BioType = {
  name: "SIVAMUTHU NARAYANA SABARIGANESH A",
  shortName: "SIVAMUTHU",
  roles: ["Full Stack Developer", "AI Enthusiast", "Java Developer","Backend Architect"],
  description: "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
  github: "https://github.com/sivaganesz",
  resume: "https://drive.google.com/file/d/1N8GruURA_c6xEXShPUyc25DfQMOBS5Dt/view?usp=drive_link",
  linkedin: "https://www.linkedin.com/in/sivamuthu-narayana-45968622a",
  twitter: "https://twitter.com/SivaGanesz",
  insta: "https://www.instagram.com/sivaganesz/",
  email: "sivamuthunarayanan@gmail.com",
};

export const skills: SkillCategory[] = [
  {
    id: 1,
    title: "Frontend",
    skills: [
      { name: "React",            icon: SiReact,          color: "#61DAFB" },
      { name: "HTML5",            icon: SiHtml5,          color: "#E34F26" },
      { name: "CSS3",             icon: SiCss3,           color: "#1572B6" },
      { name: "JavaScript",       icon: SiJavascript,     color: "#F7DF1E" },
      { name: "TypeScript",       icon: SiTypescript,     color: "#3178C6" },
      { name: "Tailwind CSS",     icon: SiTailwindcss,    color: "#06B6D4" },
      { name: "Styled Components",icon: SiStyledcomponents,color: "#DB7093" },
      { name: "Redux",            icon: SiRedux,          color: "#764ABC" },
    ],
  },
  {
    id: 2,
    title: "Backend",
    skills: [
      { name: "Node.js",    icon: SiNodedotjs,   color: "#339933" },
      { name: "Express.js", icon: SiExpress,     color: "#FFFFFF" },
      { name: "NestJS",     icon: SiNestjs,      color: "#E0234E" },
      { name: "Java",       icon: FaJava,        color: "#ED8B00" },
      { name: "Go",         icon: SiGo,          color: "#00ADD8" },
    ],
  },
  {
    id: 3,
    title: "Database & Messaging",
    skills: [
      { name: "MongoDB",    icon: SiMongodb,    color: "#47A248" },
      { name: "MySQL",      icon: SiMysql,      color: "#4479A1" },
      { name: "ClickHouse", icon: SiClickhouse, color: "#FFCC01" },
      { name: "Kafka",      icon: SiApachekafka,color: "#231F20" },
    ],
  },
  {
    id: 4,
    title: "Tools & Others",
    skills: [
      { name: "Git",      icon: SiGit,      color: "#F05032" },
      { name: "GitHub",   icon: SiGithub,   color: "#FFFFFF" },
      { name: "Netlify",  icon: SiNetlify,  color: "#00C7B7" },
      { name: "Postman",  icon: SiPostman,  color: "#FF6C37" },
      { name: "Tableau",  icon: SiTableau,  color: "#E97627" },
      { name: "VS Code",  icon: VscVscode,   color: "#007ACC" },
      { name: "Docker",   icon: SiDocker,   color: "#2496ED" },
    ],
  },
];

export const experiences: Experience[] = [
  {
    id: 0,
    img: "https://skill-mine.com/wp-content/uploads/2022/05/Skillmine-01-2048x493.png",
    role: "Junior Software Developer",
    company: "Skillmine Technology Consulting Pvt Ltd",
    date: "Jan 2025 - Present",
    location: "Sivakasi",
    desc: "Developed scalable frontend and backend features using React.js, NestJS, Go and MongoDB. Optimized APIs and improved performance using Kafka and efficient query handling. Implemented reliable data flow and integrated advanced tools like LangGraph. Built responsive and high-performance UI components using React.js and Remix.",
    skills: ["React.js", "Redux", "JavaScript", "NestJS", "MongoDB", "Go", "Kafka"],
  },
  {
    id: 1,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV4LQREuhS3BBh8sbVnDDdwD9oc0UJg1_FA89YfNcxQ2mtW_ON",
    role: "Java Developer Intern",
    company: "Internsavy",
    date: "Dec 2023 - Jan 2024",
    desc: "Leveraged object-oriented programming principles within the NetBeans environment. Proficient in Java OOP and Swing concepts, implementing solutions that optimize functionality and user experience.",
    skills: ["Swing", "Java", "NetBeans"],
  },
  {
    id: 2,
    img: "https://topos.azureedge.net/website/quarksek_logo.png",
    role: "Hackathon Participant",
    company: "Quarksek",
    date: "Mar 2024",
    desc: "Developed a bug tracking web app using MERN stack. Designed API to facilitate interactions among customer, project manager, and tester roles. Demonstrated problem-solving skills in a collaborative environment.",
    skills: ["HTML", "Tailwind CSS", "JavaScript", "React.js", "Node.js", "Express.js", "MongoDB"],
  },
];

export const educations: Education[] = [
  {
    id: 0,
    img: "https://d13loartjoc1yn.cloudfront.net/upload/institute/logo/medium/121019104858_vvv.webp",
    school: "Kamaraj College of Engineering and Technology, Virudhunagar",
    date: "Oct 2021 - Mar 2025",
    grade: "7.97 CGPA",
    desc: "Bachelor's degree in Information Technology. Courses: Data Structures, Algorithms, OOP, DBMS, OS, Computer Networks. Actively participated in workshops and coding competitions.",
    degree: "Bachelor of Technology - B.Tech (IT)",
  },
  {
    id: 1,
    img: "https://th.bing.com/th/id/OIP.TakpypyiN6Pu151UJgGrkwAAAA?rs=1&pid=ImgDetMain",
    school: "TNDTA RMP PCN HSS, Sathankulam",
    date: "Apr 2019 - Apr 2021",
    grade: "74%",
    desc: "Completed class 12 with Science and Computer Science stream.",
    degree: "HSC (XII) — Science with Computer",
  },
  {
    id: 2,
    img: "https://th.bing.com/th/id/OIP.TakpypyiN6Pu151UJgGrkwAAAA?rs=1&pid=ImgDetMain",
    school: "TNDTA RMP PCN HSS, Sathankulam",
    date: "Apr 2017 - Apr 2019",
    grade: "61%",
    desc: "Completed class 10 education with strong fundamentals.",
    degree: "SSLC (X)",
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "DMS — Document Management System",
    date: "Jul 2025 - Present",
    description: "Developed an enterprise document management platform to digitize, process, and manage large volumes of documents. Implemented AI/OCR capabilities for data extraction and intelligent document categorization. Enabled high-speed full-text search using Elasticsearch. Built scalable processing workflows using Kafka and improved performance with Redis caching.",
    image: "https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=1000&auto=format&fit=crop",
    tags: ["React", "NestJS", "MongoDB", "Kafka", "Redis","Tesseract OCR", "Document AI"],
    category: "web app",
    type: "professional",
    webapp: "",
    github: ''
  },
  {
    id: 2,
    title: "FCS — First Credit Service",
    date: "2025",
    description: "Worked as a Backend Developer building scalable services for a credit processing platform for a US client. Developed microservices using NestJS and managed financial data with MongoDB. Implemented email integration via SMTP for automated customer communications. Used Kafka and Redis to support asynchronous processing and performance optimization.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop",
    tags: ["React", "Remix", "NestJS", "MongoDB", "Kafka", "Redis", "SMTP"],
    category: "web app",
    type: "professional",
    webapp: "",
    github: ''
  },
  {
    id: 3,
    title: "Sales360 — AI-Driven Sales Platform",
    date: "2025 - Present",
    description: "Currently developing an end-to-end sales tracking and engagement platform covering the full sales pipeline lifecycle. Built real-time analytics and deal tracking systems using scalable data architecture. Implemented AI-driven multi-channel communication across Email, WhatsApp, SMS, and Voice. Designed intelligent automation to improve lead conversion.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    tags: ["React", "TanStack", "Go", "Gin", "MongoDB", "Kafka", "Redis", "ClickHouse"],
    category: "web app",
    type: "professional",
    webapp: "",
    github: ''
  },
  {
    id: 4,
    title: "MERN Blogging Platform",
    date: "June 2024",
    description: "A user-friendly blogging platform with full CRUD for posts, secure storage, and intuitive writing interface. Built on MERN stack prioritizing user experience and data protection.",
    image: "https://raw.githubusercontent.com/sivaganesz/Portfolio/master/src/components/Project/Image/mernblog.png",
    tags: ["React.js", "Express.js", "Node.js", "MongoDB", "Styled-Components"],
    category: "web app",
    type: "academic",
    github: "https://github.com/sivaganesz/MERN-Blogging-platform",
    webapp: "",
  },
  {
    id: 5,
    title: "Bug Tracking App",
    date: "Mar 2023 - Apr 2023",
    description: "Bug tracking web app using MERN stack. Designed API to facilitate interactions among customer, project manager, and tester roles for efficient bug management.",
    image: "https://raw.githubusercontent.com/sivaganesz/Portfolio/master/src/components/Project/Image/bugtrack.png",
    tags: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "React Js", "Node.js"],
    category: "web app",
    type: "academic",
    github: "https://github.com/sivaganesz/BugTracking",
    webapp: "",
  },
  {
    id: 6,
    title: "Hostel Attendance Management",
    date: "Jun 2023 - Jul 2023",
    description: "Java Swing attendance management system with admin and user roles. Admin manages all functions; students view their own attendance. Backed by MySQL on NetBeans IDE.",
    image: "https://raw.githubusercontent.com/sivaganesz/Portfolio/master/src/components/Project/Image/hostelAM.jpg",
    tags: ["Swing", "Java", "MySQL", "NetBeans"],
    category: "web app",
    type: "academic",
    github: "https://github.com/sivaganesz/Attendance_Management",
    webapp: "",
  },
];
