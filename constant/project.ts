export type ProjectType = {
  id: string;
  title: string;
  type: string;
  description: string;
  iconList: string[];
  demo?: string;
  repository?: string;
  date: string;
};

export const projectsCaroussel = [
  {
    id: "1",
    title: "AI Logo Generator",
    type: "Full-stack",
    description:
      "An AI-powered logo generation platform that utilizes Gemini AI and Cloudflare Workers AI to create high-quality brand logos. Features include download and delete logo, Stripe-powered payments, and Clerk authentication for user management. The platform is designed for fast performance and seamless user experience, deployed on Vercel.",
    image:
      "https://j90aldrpnd.ufs.sh/f/H5P49jZha6Jp988xfQsCPVjqX5R02L8g7puzHJobafevIFhr",
    iconList: [
      "NextJs",
      "JavaScript",
      "Firebase",
      "Clerk",
      "Stripe",
      "Gemini AI",
    ],
    repository: "https://github.com/OumB2021/ai-logo-maker",
    demo: "https://ai-logo-maker-theta.vercel.app/",
  },
  {
    id: "2",
    title: "OumBlog",
    type: "Full-stack",
    description:
      "A modern blogging platform where users can write, edit, and publish content with a rich-text editor powered by Quill.js. Features include user authentication via NextAuth, MongoDB for content storage, and a clean, responsive UI built with Tailwind CSS. The platform is optimized for performance and scalability, hosted on Vercel.",
    image:
      "https://j90aldrpnd.ufs.sh/f/H5P49jZha6Jpo3PRYzCkFiPxbJUpz39kq1MACNYom2VdQvWH",
    iconList: ["NextJs", "JavaScript", "TailwindCSS", "MongoDB", "NextAuth"],
    repository: "https://github.com/OumB2021/Oumblog",
    demo: "https://my-blog-delta-swart.vercel.app/",
  },
  {
    id: "3",
    title: "Omniscolaire",
    type: "Full-stack",
    description:
      "A university management system designed to modernize course management, student enrollment, and academic record-keeping, tailored for implementation in Africa. Built with Next.js and TypeScript, the platform leverages Supabase for database management, Prisma for ORM, and NextAuth for authentication, ensuring a seamless, scalable, and secure experience for educational institutions.",
    image:
      "https://j90aldrpnd.ufs.sh/f/H5P49jZha6JpsjeH92MGNuLY8xzA5qZp2KEtOXgrQowT3j1W",
    iconList: ["NextJs", "TypeScript", "TailwindCSS", "Prisma", "NextAuth"],
    repository: "https://github.com/boundy99/omniscolaire-dashboard",
  },
  {
    id: "4",
    title: "My Portfolio",
    type: "Front-end",
    description:
      "A personal portfolio showcasing my projects, skills, and experience. Built with Next.js and TypeScript, the website features a modern UI, smooth animations, and optimized performance. Deployed on Vercel for fast loading and global accessibility.",
    image:
      "https://j90aldrpnd.ufs.sh/f/H5P49jZha6JpoBIlP4kFiPxbJUpz39kq1MACNYom2VdQvWHZ",
    iconList: ["NextJs", "TypeScript", "Vercel"],
    repository: "https://github.com/OumB2021/my-portfolio",
    demo: "https://my-portfolio-3l77-nine.vercel.app/",
  },
];

export const projectsAll: ProjectType[] = [
  {
    id: "1",
    title: "AI Logo Generator",
    type: "Full-stack",
    description:
      "An AI-powered logo generation platform that utilizes Gemini AI and Cloudflare Workers AI to create high-quality brand logos. Features include download and delete logo, Stripe-powered payments, and Clerk authentication for user management. The platform is designed for fast performance and seamless user experience, deployed on Vercel.",

    iconList: [
      "NextJs",
      "JavaScript",
      "Firebase",
      "Clerk",
      "Stripe",
      "Gemini AI",
    ],
    repository: "https://github.com/OumB2021/ai-logo-maker",
    demo: "https://ai-logo-maker-theta.vercel.app/",
    date: "March 2025",
  },
  {
    id: "2",
    title: "OumBlog",
    type: "Full-stack",
    description:
      "A modern blogging platform where users can write, edit, and publish content with a rich-text editor powered by Quill.js. Features include user authentication via NextAuth, MongoDB for content storage, and a clean, responsive UI built with Tailwind CSS. The platform is optimized for performance and scalability, hosted on Vercel.",
    iconList: ["NextJs", "JavaScript", "TailwindCSS", "MongoDB", "NextAuth"],
    repository: "https://github.com/OumB2021/Oumblog",
    demo: "https://my-blog-delta-swart.vercel.app/",
    date: "December 2024",
  },
  {
    id: "3",
    title: "Omniscolaire",
    type: "Full-stack",
    description:
      "A university management system designed to modernize course management, student enrollment, and academic record-keeping, tailored for implementation in Africa. Built with Next.js and TypeScript, the platform leverages Supabase for database management, Prisma for ORM, and NextAuth for authentication, ensuring a seamless, scalable, and secure experience for educational institutions.",
    iconList: ["NextJs", "TypeScript", "TailwindCSS", "Prisma", "NextAuth"],
    repository: "https://github.com/boundy99/omniscolaire-dashboard",
    date: "October 2024",
  },
  {
    id: "4",
    title: "My Portfolio",
    type: "Front-end",
    description:
      "A personal portfolio showcasing my projects, skills, and experience. Built with Next.js and TypeScript, the website features a modern UI, smooth animations, and optimized performance. Deployed on Vercel for fast loading and global accessibility.",

    iconList: ["NextJs", "TypeScript", "Vercel"],
    repository: "https://github.com/OumB2021/my-portfolio",
    demo: "https://my-portfolio-3l77-nine.vercel.app/",
    date: "October 2024",
  },
  {
    id: "5",
    title: "CCNY Calendar Scraping",
    type: "Data Science",
    description:
      "A Python-based web scraping project to extract CCNY's academic calendar using BeautifulSoup and Requests. The scraped data is analyzed in a Jupyter Notebook for further processing.",
    iconList: ["Python", "BeautifulSoup", "Requests", "Jupyter Notebook"],
    date: "March 2025",
    repository: "https://github.com/OumB2021/Scrape_CCNY_Calendar",
  },
  {
    id: "6",
    title: "Video Streaming Platform",
    type: "Full-stack",
    description:
      "A school project that involved building a video streaming platform with authentication, state management, and real-time communication. Implemented using LiveKit for streaming, Zustand for state management, and Zod for data validation.",
    iconList: [
      "NextJs",
      "TypeScript",
      "TailwindCSS",
      "Clerk",
      "Prisma",
      "Zustand",
      "Zod",
      "LiveKit",
    ],
    date: "April 2024",
    repository: "https://github.com/OumB2021/Video-Streaming",
  },
  {
    id: "7",
    title: "Recipe App",
    type: "Full-stack",
    description:
      "A CRUD-based recipe application to practice the Next.js App Router API with MongoDB. Users can create, update, and delete recipes in an interactive and intuitive UI.",
    iconList: ["NextJs", "TailwindCSS", "MongoDB"],
    date: "May 2024",
    repository: "https://github.com/OumB2021/Recipe-App",
  },
  {
    id: "8",
    title: "Computer Store",
    type: "Full-stack",
    description:
      "An e-commerce platform for managing inventory, orders, and shipments. Features user authentication with JWT and Bcrypt.js, along with Redux for state management.",
    iconList: [
      "React",
      "MongoDB",
      "JWT",
      "Bcryptjs",
      "Express",
      "NodeJs",
      "Redux",
    ],
    date: "April 2023",
    repository: "https://github.com/OumB2021/Computer-Store",
  },
  {
    id: "9",
    title: "Emojimedia",
    type: "Full-stack",
    description:
      "A social media-inspired platform where users can share emoji reactions. Built using React for the frontend and Node.js for the backend.",
    iconList: ["React", "NodeJS"],
    date: "February 2023",
    repository: "https://github.com/OumB2021/Emojipedia",
  },
  {
    id: "10",
    title: "To-Do List",
    type: "Front-end",
    description:
      "A simple yet functional to-do list application built using EJS templating, HTML, CSS, and JavaScript.",
    iconList: ["EJS", "HTML", "CSS", "JavaScript"],
    date: "January 2023",
    repository: "https://github.com/OumB2021/To-Do-List",
  },
  {
    id: "11",
    title: "Simon Game",
    type: "Front-end",
    description:
      "A classic Simon Says game implemented with HTML, CSS, and JavaScript, featuring interactive user input and dynamic sound effects.",
    iconList: ["HTML", "CSS", "JavaScript"],
    date: "December 2022",
    repository: "https://github.com/OumB2021/Simon_Game",
  },
  {
    id: "12",
    title: "TinDog",
    type: "Front-end",
    description:
      "A fun Tinder-inspired landing page for dog adoption, designed using Bootstrap and HTML/CSS.",
    iconList: ["HTML", "CSS", "Bootstrap"],
    date: "December 2022",
    repository: "https://github.com/OumB2021/tinDog",
  },
];
