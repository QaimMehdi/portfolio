import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  wenawa,
  aptech,
  devhub1,
  fl,
  abdullah,
  prepza,
  vidface,
  expense,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },

];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Java Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI Based Applications",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "Wenawa",
    icon: wenawa,
    iconBg: "#383E56",
    date: "July 2025 - December 2025",
    points: [
      "Built multiple projects using Node.js with Java and Python backends, developing 15+ RESTful APIs for authentication, sessions, and data handling.",
      "Developed frontend features using Vanilla JavaScript and React, creating 20+ reusable components with responsive behavior across devices.",
      "Integrated AI APIs into applications, testing across 50+ scenarios to improve response accuracy and system stability.",
      "Fixed 30+ bugs and refactored existing code while managing version control with Git and collaborating with senior developers.",
    ],
  },
  {
    title: "Visiting Faculty",
    company_name: "Aptech",
    icon: aptech,
    iconBg: "#E6DEDD",
    date: "May 2025 - January 2026",
    points: [
      "Delivered 150+ hours of instruction in Web Designing (HTML, CSS, JavaScript), C#, and SQL to 8+ batches of students.",
      "Designed course materials, assignments, and practical labs for 20+ sessions, improving student engagement and understanding.",
      "Mentored 40+ students on projects and problem-solving, with consistent improvement in assessment performance.",
      "Evaluated code, provided structured feedback, and reviewed 100+ student submissions to reinforce clean coding practices.",
    ],
  },
  {
    title: "Software Development Intern",
    company_name: "DevelopersHub Corporation©",
    icon: devhub1,
    iconBg: "#383E56",
    date: "March 2025 - April 2025",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Freelancer",
    company_name: "Freelancer",
    icon: fl,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Delivered 10+ client projects including websites, dashboards, and web apps using React, Node.js, Java, and Python based stacks.",
      "Built 25+ reusable components and implemented responsive layouts, achieving consistent performance across desktop and mobile devices.",
      "Integrated third party APIs, authentication systems, and databases across 8+ projects to support real world functionality.",
      "Worked directly with clients to gather requirements, provide revisions, and deliver projects with a 90%+ on time completion rate.",
    ],

  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Qaim proved me wrong.",
    name: "Abdullah Arif",
    designation: "CFO",
    company: "LuminoidX",
    image: abdullah,
  },
  {
    testimonial:
      "I've never met a developer who truly cares about their clients' success like Qaim does.",
    name: "Chris Brown",
    designation: "Client",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Qaim optimized our website, our traffic increased by 50%. We can't thank him enough!",
    name: "Lisa Wang",
    designation: "Client",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Prepza",
    description:
      "Web-based platform that uses AI to conduct realistic mock interviews with voice interaction, real time feedback, and personalized coaching to help users prepare effectively for technical and HR interviews.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "java",
        color: "pink-text-gradient",
      },
    ],
    image: prepza,
    source_code_link: "https://github.com/QaimMehdi/Prepza",
  },
  {
    name: "VidFace",
    description:
      "Web-based platform that converts text scripts into AI-generated talking avatar videos using SadTalker for image animation and voice synthesis, enabling users to create engaging video content quickly and easily.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "Vanilla JS",
        color: "pink-text-gradient",
      },
    ],
    image: vidface,
    source_code_link: "https://github.com/QaimMehdi/VidFace-AI-Video-Text-To-Video-Generator",
  },
  {
    name: "Expense Tracker",
    description:
      "Java-based desktop application that tracks, categorizes, and visualizes personal expenses with AI-powered insights, interactive charts, and comprehensive budget management features for smarter financial planning.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "sql",
        color: "green-text-gradient",
      },
      {
        name: "JAR",
        color: "pink-text-gradient",
      },
    ],
    image: expense,
    source_code_link: "https://github.com/QaimMehdi/ExpenseTracker",
  },
];

export { services, technologies, experiences, testimonials, projects };
