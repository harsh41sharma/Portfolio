const navLinks = [
  {
    name: "About",
    link: "#about",
  },
  
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Projects",
    link: "#work",
  },
  {
    name:"Education",
    link: "#education",
  }
];
  
const words = [
  { text: "Coder"},
  { text: "Full Stack Developer"},
  { text: "Backend Developer"},
  { text: "Coder"},
  { text: "Full Stack Developer"},
  { text: "Backend Developer"},
];

const counterItems = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Satisfied Clients" },
  { value: 108, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];






const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];



const socialImgs = [

  {
    name: "github",
    imgPath: "/images/github.png",
    link:"https://github.com/harsh41sharma/" // Added link for GitHub
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    link: "https://www.linkedin.com/in/harsh41sharma/" // Added link for LinkedIn
  },
];

export {
  navLinks,
  words,
  abilities,
  logoIconsList,
  counterItems,
  expLogos,
  socialImgs,
}



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      {
        name: "React JS",
        imgPath: "/skills/reactjs.png",
      },
      {
        name: "Next JS",
        imgPath: "/skills/nextjs.png",
      },
      {
        name: "HTML",
        imgPath: "/skills/html.png",
      },
      {
        name: "CSS",
        imgPath: "/skills/css.png",
      },
      {
        name: "JavaScript",
        imgPath: "/skills/javascript.png",
      },
      {
        name: "TypeScript",
        imgPath: "/skills/typescript.png",
      },
      {
        name: "Tailwind CSS",
        imgPath: "/skills/tailwindcss.png",
      },
      {
        name: "Redux",
        imgPath: "/skills/redux.png",
      },
      {
        name: "Material UI",
        imgPath: "/skills/materialui.png",
      },
    ]
  },
  {
    title: 'Backend',
    skills: [
      {
        name: "Node.js",
        imgPath: "/skills/nodejs.png",
      },
      {
        name: "Express",
        imgPath: "/skills/express.png",
      },
      {
        name: "MongoDB",
        imgPath: "/skills/mongodb.png",
      },
      {
        name: "MySQL",
        imgPath: "/skills/mysql.png",
      },
    ]  
  },
  {
    title: 'Languages',
    skills: [
      {
        name: "Python",
        imgPath: "/skills/python.png",
      },
      {
        name: "Java",
        imgPath: "/skills/java.png",
      },
      {
        name: "C++",
        imgPath: "/skills/cpp.png",
      },
      {
        name: "JavaScript",
        imgPath: "/skills/javascript.png",
      },
      {
        name: "TypeScript",
        imgPath: "/skills/typescript.png",
      },
      {
        name: "C",
        imgPath: "/skills/c.png",
      }
    ]
  },
  {
    title: "Tools",
    skills: [
      {
        name: "Git",
        imgPath: "/skills/git.png",
      },
      {
        name: "GitHub",
        imgPath: "/skills/github.png",
      },
      {
        name: "Postman",
        imgPath: "/skills/postman.png",
      },
      {
        name: "Vercel",
        imgPath: "/skills/vercel.png",
      },
      {
        name : "Vs Code",
        imgPath: "/skills/vscode.png",
      }
    ]
  }

];

export const education = [
  {
    id: 0,
    img: "education/college.jpeg",
    school: "Raj Kumar Goel Institute of Technology, Ghaziabad",
    date: "Nov 2022 - Present",
    CGPA: "8.30",
    desc: "I am pursuing my Bachelor's degree in Computer Science and Engineering  (BTech) from Raj Kumar Goel Institute of Technology, Ghaziabad. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems.",
    degree: "Bachelor of Technology - BTech (Computer Science and Engineering)",
  },
  {
    id: 1,
    img: "education/school.jpeg",
    school: "Varanasi Public School, Varanasi",
    date: "Apr 2020 - March 2021",
    grade: "89.60%",
    desc: "I completed my class 12th education from Varanasi Public School, Varanasi, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
    degree: "CBSE(XII) - PCM with Computer Science",
  },
  {
    id: 2,
    img: "education/school.jpeg",
    school: "Varanasi Public School, Varanasi",
    date: "Apr 2018 - March 2019",
    grade: "95.20%",
    desc: "I completed my class 10 education from Varanasi Public School, Varanasi, under the CBSE board, where I studied Science with Computer.",
    degree: "CBSE(X), Science with Computer Application",
  },
];



export const projects = [
  {
    id: 2,
    title: "Cabify - Online Cab Booking Plateform",
    description:
      "Cabify is a full-stack cab booking web application built using the MERN stack. It features real-time cab availability, user authentication, booking history, and interactive UI. Designed to streamline ride-hailing with a smooth and responsive user experience.",
    image: "project/cabify.jpg",
    tags: ["React.js", "Node.js", "Express", "MongoDB", "Socket.io", "Tailwind CSS", "Google Maps API (via GCP)"],
    github: "https://github.com/harsh41sharma/Cabify",
    webapp: "",
  },
  {
    id: 1,
    title: "Learnify - Learning Management System Plateform",
    description:
      "Built Learnify, an interactive e-learning platform where users can enroll in courses, track progress, and access study resources seamlessly. Implemented a full-stack architecture with secure authentication, real-time data updates, and a smooth user interface. Focused on delivering a dynamic and user-friendly learning experience.",
    image: "project/lms.png",
    tags: ["React.js", "Node.js", "Express", "MongoDB", "Stripe", "Cloudinary", "Tailwind CSS"],
    github: "https://github.com/harsh41sharma/Learnify",
    webapp: "https://learnify-uy89.onrender.com",
  },
  {
    id: 0,
    title: "Linkup - Real Time Chat Plateform",
    description:
      "Linkup is a social media web application that enables users to create posts, follow others, like, comment, and interact in real time. Built with the MERN stack, it features authentication, responsive design, and a clean, user-friendly interface.",
    image: "project/linkup.png",
    tags: ["React.js", "Node.js", "Express", "MongoDB", "Socket.io", "Tailwind CSS"],
    github: "https://github.com/harsh41sharma/Linkup",
    webapp: "https://linkup-u40u.onrender.com/",
  },
  
  {
    id: 3,
    title: "Shoppy - E - Commerce Web Plateform",
    description:
      "Shoppy is a modern e-commerce dashboard application built using React and Syncfusion components. It features dynamic charts, theme customization, responsive UI, and seamless navigation for managing products, orders, and customers efficiently.",
    image: "project/bytelog.png",
    tags: ["Next.js", "React.js", "TypeScript", "Neon (PostgreSQL)", "Prisma ORM", "Clerk Authentication", "Tailwind CSS"],
    github: "https://github.com/techie-mohit/ByteLog",
    webapp: "", // Updated webapp link
  },
  ];  






