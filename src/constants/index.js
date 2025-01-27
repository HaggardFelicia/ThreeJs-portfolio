import {
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    figma,
    threejs,
    express,
    mongo,
    mysql,
    sass,
    frontend,
    database,
    logo,
    calculator,
    searchbar,
    sanity_portfolio
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
      title: "React  Developer",
      icon: reactjs,
    },
    {
      title: "Frontend Developer",
      icon: frontend,
    },
    {
      title: "Backend Developer",
      icon: database,
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
      name: "SCSS",
      icon: sass,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
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
      name: "MongoDB",
      icon: mongo,
    },
    {
      name: "MySql",
      icon: mysql,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: 'express',
      icon: express,
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
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Freelance",
      icon: logo,
      iconBg: "#383E56",
      date: "March 2022 - April 2023",
      points: [
        "Developed cutting-edge React applications, optimizing performance and user experience. Implemented state-of-the-art solutions, driving significant improvements in application responsiveness.",
      'Meticulously crafted reusable React components, enhancing code maintainability. Implemented rigorous testing protocols, significantly reducing bug occurrence in production.',
      'Conducted thorough code reviews, identifying and resolving critical issues. Implemented robust testing strategies, significantly reducing production bugs and improving overall application stability.'
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Freelance",
      icon: logo,
      iconBg: "#383E56",
      date: "April 2023 - Present",
      points: [
        'Develop cutting-edge web solutions, leveraging full-stack expertise to create seamless user experiences. Implement modern frameworks, optimizing performance and scalability.',
        'Drive project completion with efficient coding practices, meeting tight deadlines. Deliver high-quality, responsive web applications that exceed client expectations.',
        'Conduct thorough testing and debugging to maintain application integrity. Analyse user feedback and performance metrics to identify areas for enhancement. Implement data-driven optimizations.'
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Calculator",
      description:
        "An online calculator that enables users to perform basic mathematical operations, offering a convenient and efficient tool for both personal and professional use. Created with:",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "next.js",
          color: "blue-text-gradient",
        },
      ],
      image: calculator,
      source_code_link: "https://github.com/HaggardFelicia/calculator",
      code_url: "https://simplecalculator-felicia-haggards-projects.vercel.app/",
    },
    {
      name: "Search Bar",
      description:
        "A straightforward search interface that consists of one input field for data entry and an additional input field for filtering. Created with:",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "next.js",
          color: "blue-text-gradient",
        },
      ],
      image: searchbar,
      source_code_link: "https://github.com/HaggardFelicia/Search-bar",
      code_url: "https://search-bar-gilt-seven.vercel.app/",
    },
    {
      name: "Sanity Portfolio",
      description: "This document serves as my initial portfolio in web development, showcasing various web applications and websites that demonstrate my technical expertise.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "next.js",
          color: "blue-text-gradient",
        },
        {
          name: "sanity",
          color: "green-text-gradient",
        },
      ],
      image: sanity_portfolio,
      source_code_link: "https://github.com/HaggardFelicia/Felicia-Haggards-Portfolio",
      code_url: 'https://felicia-haggards-portfolio.vercel.app/'
    }
  ];
  
  export { services, technologies, experiences, testimonials, projects };