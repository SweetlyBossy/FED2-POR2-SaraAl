import { type ProjectArticle } from "../types/User";

export const projectData: ProjectArticle[] = [
  {
    id: "1",
    title: "Javascript Frameworks - FED2",
    description:
      "A project based on following the best practices of JavaScript frameworks and libraries, with a focus on Vite, React, TypeScript and Tailwind CSS. For a web app called Aurora Shop, an e-commerce platform for a fictional brand.",
    imageUrl: "../AuroraShop.png",
    imageAlt:
      "The logo for the Aurora Shop. Simple and Modern with a blue background and white text.",
    LiveUrl: "https://jsf-fed2-sara-al-merat-rezvany.netlify.app/",
    RepoUrl: "https://github.com/NoroffFEU/jsfw-2025-v1-jsf-fed2-sara-al-merat-r-ca",
    client: "Noroff School Project",
    year: "2025",
    caption:
      "A fully responsive e-commerce storefront. Built with React, TypeScript, and Tailwind CSS.",
    overview:
      "This was the first React, Vite, Typescript, Tailwind CSS project I built. I focused on creating a clean, modern design while implementing best practices for state management and component architecture. The project allowed me to deepen my understanding of React hooks, TypeScript types, and Tailwind's utility-first approach to styling. Integrated with an external API to fetch product data and implemented a shopping cart feature to enhance the user experience. Overall, it was a great learning experience that helped me solidify my skills in front-end development and prepare for more complex projects in the future.",
    challenge:
      "I did struggle with managing state across multiple components and ensuring type safety with TypeScript. Additionally, I wanted to create a visually appealing design while maintaining a responsive layout. Balancing functionality with aesthetics was a key challenge, as I had to ensure that the user interface was both intuitive and visually engaging across different devices.",
    solution:
      "I spent hours on hours researching and learning about React's Context API for state management and how to effectively use TypeScript with React. For the design, I utilized Tailwind CSS's utility classes to quickly iterate on different layouts and styles until I achieved a clean and modern look that was also responsive across devices. I also implemented best practices for component structure and code organization to ensure maintainability and scalability of the project. Overall, it was a rewarding experience that allowed me to grow as a front-end developer and gain confidence in my skills with React, TypeScript, and Tailwind CSS.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "REST API"],
  },
  {
    id: "2",
    title: "Semester Exam - FED2",
    description:
      "BidSmart is a web-based auction platform that connects buyers and sellers in a dynamic marketplace. The platform allows users to create and manage auctions, place bids, and track their activity.",
    imageUrl: "../Bidsmart.png",
    imageAlt:
      "The logo for BidSmart. A modern design with a yellow and blue color scheme.",
    LiveUrl: "https://se2-fed2-merat-sara.netlify.app/",
    RepoUrl: "https://github.com/ReZvanYY/SE2-FED2-MeratR-SaraAl",
    client: "Noroff Semester Exam",
    year: "2025",
    caption:
      "Dynamic marketplace interface for live bidding. Built with JavaScript, HTML, and CSS.",
    overview:
      "This was a challenging project that required me to build a fully functional auction platform with real-time bidding capabilities. I had to implement a robust backend system to handle concurrent bids and ensure data integrity. On the front-end, I focused on creating an intuitive user interface that allowed users to easily navigate auctions, place bids, and track their activity.",
    challenge:
      "The main challenge was implementing the real-time bidding feature while maintaining a smooth user experience. I also had to ensure the platform was secure and could handle a large number of concurrent users. Additionally, I wanted to create a visually appealing design that was also user-friendly and responsive across different devices.",
    solution:
      "I tackled the dynamic bidding feature by optimizing how the front-end communicates with the REST API. By managing asynchronous JavaScript requests effectively, I ensured the UI fetches and displays the latest bid data smoothly. To protect user data and maintain platform integrity, I implemented secure token-based authentication and thorough input validation. Visually, I focused on a modular structure using vanilla HTML and CSS, resulting in a clean, intuitive, and fully responsive marketplace.",
    technologies: ["JavaScript", "HTML", "CSS", "REST API"],
  },
  {
    id: "3",
    title: "Project Exam - FED2",
    description:
      "Nordic Stay is a modern, responsive accommodation platform designed to connect travelers with authentic Norwegian experiences. Developed as the final Project Exam 2 (PE2) for Noroff.",
    imageUrl: "../logo.png",
    imageAlt:
      "The Nordic Stay logo, featuring a stylized graphic icon in a teal gradient against a solid grey background. On the left, the icon forms a sharp mountain peak, which smoothly transitions into flowing, wavy lines on the right.",
    LiveUrl: "https://fed2-pe2-saraal.netlify.app/",
    RepoUrl: "https://github.com/SweetlyBossy/FED2-PE2-SaraAl",
    client: "Noroff Final Exam",
    year: "2026",
    caption:
      "Accommodation booking platform for authentic Norwegian stays. Built with Vite, React, TypeScript, and Tailwind CSS.",
    overview:
      "Nordic Stay is a modern, responsive accommodation platform designed to connect travelers with authentic Norwegian experiences. The platform offers a seamless booking experience with a focus on user-friendly design and efficient search functionality. Built with Vite, React, TypeScript, and Tailwind CSS, Nordic Stay provides a visually appealing interface while ensuring optimal performance across devices. The project allowed me to apply my skills in front-end development, focusing on creating a scalable and maintainable codebase while delivering a polished user experience.",
    challenge:
      "The main challenge was creating a visually appealing interface while ensuring optimal performance across different devices. Additionally, I had to implement a robust search and filtering system to help users find their ideal accommodations. Balancing aesthetics with functionality was a key focus, as I wanted to create an engaging user experience without compromising on performance or usability. I also had to ensure that the codebase was scalable and maintainable, which required careful planning and organization of components and state management.",
    solution:
      "I utilized React's component-based architecture to create a modular and maintainable codebase. Tailwind CSS was employed for rapid UI development and consistent styling. The search and filtering system was built using efficient algorithms to ensure fast and accurate results. I also implemented lazy loading for images and optimized API calls to enhance performance. Overall, the project was a great opportunity to apply my front-end development skills and create a polished, user-friendly accommodation platform.",
    technologies: [
      "Vite",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "REST API",
      "Context API",
    ],
  },
  {
    id: "4",
    title: "CSS Frameworks -  FED2",
    description:
      "A social media platform built with JavaScript, HTML and Tailwind CSS. The project focuses on implementing a clean and modern design while utilizing Tailwind's utility-first approach to styling.",
    imageUrl: "../SocialMedia.png",
    imageAlt:
      "A screenshot of my personal portfolio website, featuring a clean and modern design with a dark background and vibrant accent colors.",
    LiveUrl: "https://fed2-js-meratr-saraal-ca.netlify.app//",
    RepoUrl: "https://github.com/ReZvanYY/FED2-JS-MeratR-SaraAl/tree/CSS-WorkFlow-SaraAl",
    client: "Personal Project",
    year: "2025",
    caption:
      "A social media platform built with JavaScript, HTML and Tailwind CSS. The project focuses on implementing a clean and modern design while utilizing Tailwind's utility-first approach to styling.",
    overview:
      "This social media platform was created to showcase my projects, skills, and experience as a front-end developer. I focused on creating a clean and modern design that highlights my work while providing an intuitive user experience. Built with JavaScript, HTML, and Tailwind CSS, the platform is fully responsive and optimized for performance across devices. The project allowed me to apply my front-end development skills in a real-world context, creating a polished and professional online presence.",
    challenge:
      "The main challenge was creating a visually appealing design that effectively showcases my projects and skills while maintaining a user-friendly experience. I also wanted to ensure that the platform was fully responsive and optimized for performance across different devices. Balancing aesthetics with functionality was a key focus, as I wanted to create an engaging user experience without compromising on performance or usability.",
    solution:
      "I utilized React's component-based architecture to create a modular and maintainable codebase. Tailwind CSS was employed for rapid UI development and consistent styling. I focused on creating a clean and modern design that highlights my work while providing an intuitive user experience. The portfolio is fully responsive and optimized for performance across devices, ensuring that visitors can easily navigate and explore my projects regardless of the device they are using.",
    technologies: ["JavaScript", "HTML", "Tailwind CSS"],
  },
];
