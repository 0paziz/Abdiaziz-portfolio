
export const DATA = {
  name: "Abdiaziz Jama",
  initials: "AJ",
  url: "https://example.com",
  location: "Kampala, UG",
  description:
    "Junior Frontend Engineer | Building modern web apps with clean code and scalable architecture.",
  summary:
    "I’m a Frontend Engineer passionate about building modern, responsive web applications. With a foundation in computer science, I enjoy combining clean, maintainable code with thoughtful design to create user-friendly interfaces.",
  avatarUrl: "/aziz1.png",
  skills: [
    "React",
    "Next.js",
    "Javascript",
    "Node.js",
    "Python",
    "MongoDB",
    "Express.js",
    "Tailwind CSS",
    "HTML5",
    "CSS3",
    "Git",
    "JWT",
    "Responsive Design",
    "REST APIs",
    "Redux",
    "JavaScript (ES6+)",
    "Figma"


  ],
  navbar: [
    { href: "/", icon: "Home", label: "Home", navbar: true },
  ],
  contact: {
    email: "itzabdiaziz@gmail.com",
    tel: "+256 707 838274",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/0paziz",
        icon: "Github",
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/abdiaziz-jama-876b06256/",
        icon: "Linkedin",
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/0paziz",
        icon: "Twitter",
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:abdiaziz.jama@gmail.com",
        icon: "Mail",
        navbar: false,
      },
    },
  },
 work: [
  {
    company: "HalLink",
    href: "https://www.hallink.ink/", 
    badges: ["Full Stack Project"],
    location: "Remote",
    title: "Personal Project",
    logoUrl: "/hallink.png",
    start: "2025",
    end: "Present",
    description:
      "Built HalLink, a link-in-bio platform for creators, using React, Tailwind CSS, Node.js, Express, and MongoDB. Implemented user authentication, profile customization, link management, and responsive UI. Focused on clean design, performance, and scalability.",
  }
],

  education: [
    {
      school: "ISBAT University Kampala",
      href: "https://www.isbatuniversity.ac.ug/",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/isbat.jpg",
      start: "2023",
      end: "2026",
    },
  ],
projects: [
  
  {
    title: "Inventory Management System",
    href: "https://inventory-manager-two-pi.vercel.app/login",
    dates: "2025",
    active: false,
    description:
      "Developed a full stack inventory management system to help small businesses track products, stock levels, and low-stock alerts. Implemented full CRUD operations, data validation, and an admin dashboard.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "REST API",
    ],
    links: [
      {
        type: "Website",
        href: "https://inventory-manager-two-pi.vercel.app/login",
        icon: "Globe",
      },
      {
        type: "Source",
        href: "https://github.com/0paziz/InventoryManagement-MERN",
        icon: "Github",
      },
    ],
    image: "/projects_image/inventoryMock.png",
    video: "",
  },
  {
    title: "SpendWise",
    href: "https://spendwise-1.vercel.app/",
    dates: "2025",
    active: false,
    description:
      "Built an expense and income tracking application that allows users to record transactions, categorize expenses, and view summaries. Focused on clean UX and accurate data handling.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Chart Visualization",
    ],
    links: [
      {
        type: "Website",
        href: "https://spendwise-1.vercel.app/",
        icon: "Globe",
      },
      {
        type: "Source",
        href: "https://github.com/0paziz/SpendWise_MERN-Stack",
        icon: "Github",
      },
    ],
    image: "/projects_image/spendwiseMock.png",
    video: "",
  },
  {
    title: "DreamHome – Real Estate Platform",
    href: "https://dreamhomes3.netlify.app/",
    dates: "2025",
    active: false,
    description:
      "Created a real estate web application where users can browse properties, view details, and contact agents. Implemented responsive layouts, property listings, and dynamic routing.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    links: [
      {
        type: "Website",
        href: "https://dreamhomes3.netlify.app/",
        icon: "Globe",
      },
      {
        type: "Source",
        href: "https://github.com/0paziz/DreamHome-Client",
        icon: "Github",
      },
    ],
    image: "/projects_image/dreamhomeMock.png",
    video: "",
  },
  {
    title: "HalLink",
    href: "https://www.hallink.ink/",
    dates: "Aug 2025 - Present",
    active: true,
    description:
      "Built a link-in-bio platform for creators to manage and share multiple links from a single profile. Focused on clean UI, responsive design, and scalable architecture with authentication and profile customization.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT Authentication",
    ],
    links: [
      {
        type: "Website",
        href: "https://www.hallink.ink/",
        icon: "Globe",
      },
    ],
    image: "/projects_image/hallinkMock.png",
    video: "",
  },
],

}
