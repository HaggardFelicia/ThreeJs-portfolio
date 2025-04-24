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
    frontend,
    database,
    calculator,
    searchbar,
    portfolio,
    todo,
    mongodb,
    mysql,
    express,
    sass,
    hwdlogo,
    parent, 
    graduate
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
      title: "React  Developer",
      icon: reactjs,
    },
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: database,
    },
  ];
  
  const technologies = [
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "SASS",
      icon: sass,
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
      name: "MongoDB",
      icon: mongodb,
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
      name: "Express",
      icon: express,
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
      icon: hwdlogo,
      iconBg: "#383E56",
      date: "March 2022 - April 2023",
      points: [
        "Developed cutting-edge React applications, optimizing performance and user experience. Implemented state-of-the-art solutions, driving significant improvements in application responsiveness.",
      'Meticulously crafted reusable React components, enhancing code maintainability. Implemented rigorous testing protocols, significantly reducing bug occurrence in production.',
      'Conducted thorough code reviews, identifying and resolving critical issues. Implemented robust testing strategies, significantly reducing production bugs and improving overall application stability.'
      ],
    },
    {
      title: "Full-Time Student",
      company_name: "Student",
      icon: graduate,
      iconBg: "#383E56",
      date: "March 2022 - April 2024",
      points: [
        'Associate of Science in Web Development',
        ' Relevant Coursework: Interfaces and Usability & Programming for Web Applications & Database Systems & Server-Side Languages',
        'Professional Development: Professional Seminar 1 & 2'
      ],
    },
    {
      title: "Stay-At-Home Parent",
      company_name: "Mom",
      icon: parent,
      iconBg: "#383E56",
      date: "December 2017 - Present",
      points: [
        'Built positive and nurturing environments to support child social and emotional growth.',
        'Bathed, dressed, and helped with teeth brushing as part of bedtime preparation.',
        'Prepared meals and snacks for child based on dietary guidelines.',
        'Handled incoming mail, bills and invoices and completed appropriate actions.'       
      ],
    },
  ];
  
  const testimonials = [

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
      code_url: "https://calculator.haggardwebdev.space/",
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
      code_url: "https://search.haggardwebdev.space/",
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
      image: portfolio,
      source_code_link: "https://github.com/HaggardFelicia/Felicia-Haggards-Portfolio",
      code_url: 'https://portfolio.haggardwebdev.space/'
    },
    {
      name: "Todo App",
      description: "This application is a web-based task management tool designed to assist users in managing their tasks. It features an intuitive interface that facilitates the easy entry and removal of tasks.",
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
          name: "local storage",
          color: "green-text-gradient",
        },
      ],
      image: todo,
      source_code_link: "https://github.com/HaggardFelicia/todo/tree/main",
      code_url: "https://todo-app.haggardwebdev.space/"
    }
  ];
  
  export { services, technologies, experiences, testimonials, projects };