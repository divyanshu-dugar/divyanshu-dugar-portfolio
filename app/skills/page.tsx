"use client";
import React from "react";
import Image from "next/image";


const skillsTimeline = [
  {
    year: "2017",
    logo: "/logos/java.svg",
    title: "Java",
    description:
      "My Gateway into Programming - I began my coding journey with Java back in high school (Grade 8-12), where it served as the foundation for my understanding of programming. From basic constructs like loops, conditionals, and arrays to core concepts like OOP, recursion, and data structures like stacks and queues. Java trained me to think logically and solve problems efficiently. It wasn't just a subject; it was where my love for code began.",
    category: "Technical Language",
    color: "bg-red-500/20 border-red-500",
  },
  {
    year: "2022",
    logo: "/logos/c.svg",
    title: "C",
    description:
      "I first explored C in 2021 through YouTube, where I learned its syntax and basic constructs. However, my formal programming journey truly began in college during my first semester (Jan'23), where C was the foundation. Through countless assignments and a hands-on end-semester project, I built a strong grasp of logic building, memory handling, pointers, and address-level manipulation. C shaped my understanding of how code interacts with hardware - forming a deep-rooted appreciation for problem solving at a low level.",
    category: "Technical Language",
    color: "bg-blue-500/20 border-blue-500",
  },
  {
    year: "2021",
    logo: "/logos/c++.svg",
    title: "C++",
    description:
      "C++ was the first language I intentionally chose to dive deep into Data Structures and Algorithms - even before my college journey began. It was with C++ that I learned to solve problems using arrays, stacks, queues, linked lists, and recursion. I submitted my very first CodeChef and LeetCode solutions in this language, which gave me a taste of competitive programming and algorithmic thinking. In my second semester, I formally studied Object-Oriented Programming through C++, solidifying my understanding of classes, inheritance, polymorphism, and abstraction. This language truly sharpened both my logical and memory management skills.",
    category: "Technical Language",
    color: "bg-indigo-500/20 border-indigo-500",
  },
  {
    year: "2022",
    logo: "/logos/python.svg",
    title: "Python",
    description:
      "My journey with Python began when I purchased my very first course on Coursera - Learn to Program: The Fundamentals by the University of Toronto. It introduced me to programming in the most beginner-friendly and intuitive way. Later, in my fourth semester of college, I took a course named DSA456, where I deepened my understanding of algorithm design and analysis - all implemented using Python. From writing clean code to exploring recursive logic and time complexity, Python became my go-to tool for expressing ideas quickly and effectively.",
    category: "Technical Language",
    color: "bg-green-500/20 border-green-500",
  },
  {
    year: "2021",
    logo: "/logos/htmlCssJsLogo.jpg",
    title: "HTML, CSS, JavaScript",
    description:
      "My web development journey began out of pure curiosity after discovering Google Summer of Code (GSoC). Fascinated by how websites were built, I started exploring HTML, CSS, and JavaScript in 2021. I still remember being intimidated by the 'Inspect Element' tool - it looked like a hacker’s console! But as I dove deeper, things started making sense. From building simple static pages to interactive sites, I’ve been consistently upgrading my skills, especially in CSS layouts and JavaScript logic. This trio of technologies became the canvas for many of my creative experiments online.",
    category: "Frontend",
    color: "bg-yellow-500/20 border-yellow-500",
  },
  {
    year: "2024",
    logo: "/logos/node-express.png",
    title: "Node.js & Express",
    description:
    "After learning plain HTML, CSS, and JavaScript, I moved into backend development to build full-stack applications. Thanks to WEB322 - a course in my 3rd semester. I gained hands-on experience and a solid understanding of the backend stack through practical assignments. I learned key concepts like HTTP methods (GET, POST, PUT, DELETE), RESTful APIs, AJAX, ORM, ODM, client sessions, and more. It was a great learning experience and exciting to build dynamic applications beyond static pages.",
    category: "Backend",
    color: "bg-emerald-500/20 border-emerald-500",
  },
  {
    year: "2025",
    logo: "/logos/react.svg",
    title: "React.js",
    description:
      "To build on my foundation in HTML, CSS, and JavaScript, I decided to learn React - a powerful and in-demand frontend library. I created several projects, including FinCraft Studios (featured on the Projects page of this portfolio). With React in my toolkit, I officially completed the MERN stack and proudly consider myself a MERN developer.",
    category: "Frontend",
    color: "bg-cyan-500/20 border-cyan-500",
  },
  {
    year: "2025",
    logo: "/logos/nextjs.png",
    title: "Next.js",
    description:
      "After successfully learning the MERN stack, I decided to take the next step by exploring Next.js - a powerful React framework that's widely used and highly recommended in the industry today. With its built-in benefits like improved SEO, server-side rendering (SSR), static site generation (SSG), API routes, faster performance, and better developer experience, I knew mastering Next.js would be a valuable move toward building a strong career as a developer. Credit goes to WEB422, a 4th-semester web development course at Seneca, which made the learning process hands-on and practical by diving deep into various core concepts of Next.js.",
      category: "Frontend",
      color: "bg-purple-500/20 border-purple-500",
    },
    {
      year: "2024",
      logo: "/logos/mongodb.svg",
    title: "MongoDB",
    description:
      "I had the opportunity to explore MongoDB in two ways. First, while was while learning the MERN stack, where I primarily worked with Mongoose, an ODM that interacts with MongoDB. Second, while I studied MongoDB more formally in DBS311, a third-semester database course at college. There, I learned its native syntax and practiced writing both simple and complex queries. I really enjoyed how its JSON-like syntax felt familiar to JavaScript and appreciated the flexibility it offered compared to traditional SQL databases. This experience also helped me become comfortable working with tools like Mongosh, MongoDB Atlas, and MongoDB Compass.",
    category: "Database",
    color: "bg-teal-500/20 border-teal-500",
  },
  {
    year: "2024",
    logo: "/logos/sql.png",
    title: "SQL",
    description:
      "My understanding of SQL and writing queries is quite dynamic. I’ve worked with Oracle SQL 12c, MySQL, and PostgreSQL - each with slight differences, but fundamentally similar in query structure. The ease with which I grasped SQL concepts sparked my interest in exploring the world of data and data science. It made me realize that this might be my ikigai - something I truly enjoy and am naturally good at, and potentially a lifelong pursuit.",
    category: "Database",
    color: "bg-teal-500/20 border-teal-500",
  },
];

export default function SkillsTimeline() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-zinc-950 to-black px-4 py-16 text-white overflow-x-hidden">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-400 to-pink-400 drop-shadow-lg py-2">
            My Skills Journey <span className="inline-block animate-bounce">📈</span>
          </h1>
          
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 h-full w-1 bg-gradient-to-b from-sky-500 via-purple-500 to-pink-500 transform -translate-x-1/2 hidden md:block"></div>
            
            {/* Single dot for each timeline item positioned correctly */}
            {skillsTimeline.map((_, index) => (
            <div 
                key={index}
                className="absolute left-1/2 w-4 h-4 rounded-full bg-white transform -translate-x-1/2 border-4 border-zinc-900 hidden md:block z-10"
                style={{ top: `${(index * 120) + 40}px` }}
            ></div>
            ))}
            
            {/* Timeline items */}
            {skillsTimeline.map((skill, index) => (
              <div 
                key={index}
                className={`relative mb-16 md:mb-12 w-full md:w-1/2 ${index % 2 === 0 ? 'md:ml-0 md:mr-auto md:pr-8 md:pl-0 md:text-right' : 'md:ml-auto md:pl-8 md:pr-0 md:text-left'}`}
              >
                <div className={`p-6 rounded-xl backdrop-blur-lg border ${skill.color} shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]`}>
                  <div className={`flex ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center gap-4 mb-4`}>
                    <div className="flex-shrink-0">
                      <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm border border-white/10">
                        <Image 
                          src={skill.logo} 
                          alt={skill.title} 
                          width={48} 
                          height={48} 
                          className="rounded-md"
                        />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h2 className="text-2xl font-bold text-white">{skill.title}</h2>
                      <p className="text-sm text-zinc-300">
                        {skill.year} • <span className="font-medium text-white/80">{skill.category}</span>
                      </p>
                    </div>
                  </div>
                  <p className="text-zinc-300 text-base leading-relaxed mb-4">{skill.description}</p>
                  <div className="flex justify-end">
                    <a
                      href={`https://github.com/Programming-Languages-Playground/${skill.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white shadow-md hover:shadow-lg transition-all group"
                    >
                      Visit My {skill.title} Playground 🔒
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}