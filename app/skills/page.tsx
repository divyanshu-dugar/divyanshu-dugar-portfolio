"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { easeOut } from "framer-motion";
import { 
  Code2, 
  Database, 
  Terminal, 
  Cpu, 
  Sparkles, 
  ExternalLink,
  Calendar,
  ArrowRight,
  GitBranch,
  Server
} from "lucide-react";

const skillsTimeline = [
  {
    year: "2017",
    logo: "/logos/java.svg",
    title: "Java",
    description: "My Gateway into Programming - I began my coding journey with Java back in high school (Grade 8-12), where it served as the foundation for my understanding of programming. From basic constructs like loops, conditionals, and arrays to core concepts like OOP, recursion, and data structures like stacks and queues.",
    category: "Technical Language",
    color: "from-red-500 to-orange-500",
    icon: <Terminal className="w-5 h-5" />,
    gradient: "from-red-500/20 to-orange-500/20"
  },
  {
    year: "2022",
    logo: "/logos/c.svg",
    title: "C",
    description: "I first explored C in 2021 through YouTube, where I learned its syntax and basic constructs. However, my formal programming journey truly began in college during my first semester (Jan'23), where C was the foundation. Through countless assignments and hands-on projects.",
    category: "Technical Language",
    color: "from-blue-500 to-cyan-500",
    icon: <Cpu className="w-5 h-5" />,
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    year: "2021",
    logo: "/logos/c++.svg",
    title: "C++",
    description: "C++ was the first language I intentionally chose to dive deep into Data Structures and Algorithms - even before my college journey began. It was with C++ that I learned to solve problems using arrays, stacks, queues, linked lists, and recursion.",
    category: "Technical Language",
    color: "from-indigo-500 to-purple-500",
    icon: <Code2 className="w-5 h-5" />,
    gradient: "from-indigo-500/20 to-purple-500/20"
  },
  {
    year: "2022",
    logo: "/logos/python.svg",
    title: "Python",
    description: "My journey with Python began when I purchased my very first course on Coursera - Learn to Program: The Fundamentals by the University of Toronto. It introduced me to programming in the most beginner-friendly and intuitive way.",
    category: "Technical Language",
    color: "from-green-500 to-emerald-500",
    icon: <Terminal className="w-5 h-5" />,
    gradient: "from-green-500/20 to-emerald-500/20"
  },
  {
    year: "2021",
    logo: "/logos/htmlCssJsLogo.jpg",
    title: "HTML, CSS, JavaScript",
    description: "My web development journey began out of pure curiosity after discovering Google Summer of Code (GSoC). Fascinated by how websites were built, I started exploring HTML, CSS, and JavaScript in 2021.",
    category: "Frontend",
    color: "from-yellow-500 to-amber-500",
    icon: <Code2 className="w-5 h-5" />,
    gradient: "from-yellow-500/20 to-amber-500/20"
  },
  {
    year: "2024",
    logo: "/logos/node-express.png",
    title: "Node.js & Express",
    description: "After learning plain HTML, CSS, and JavaScript, I moved into backend development to build full-stack applications. Thanks to WEB322 - a course in my 3rd semester. I gained hands-on experience and a solid understanding of the backend stack.",
    category: "Backend",
    color: "from-emerald-500 to-teal-500",
    icon: <Server className="w-5 h-5" />,
    gradient: "from-emerald-500/20 to-teal-500/20"
  },
  {
    year: "2025",
    logo: "/logos/react.svg",
    title: "React.js",
    description: "To build on my foundation in HTML, CSS, and JavaScript, I decided to learn React - a powerful and in-demand frontend library. I created several projects, including FinCraft Studios.",
    category: "Frontend",
    color: "from-cyan-500 to-blue-500",
    icon: <Code2 className="w-5 h-5" />,
    gradient: "from-cyan-500/20 to-blue-500/20"
  },
  {
    year: "2025",
    logo: "/logos/nextjs.png",
    title: "Next.js",
    description: "After successfully learning the MERN stack, I decided to take the next step by exploring Next.js - a powerful React framework that's widely used and highly recommended in the industry today.",
    category: "Frontend",
    color: "from-purple-500 to-pink-500",
    icon: <GitBranch className="w-5 h-5" />,
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    year: "2024",
    logo: "/logos/mongodb.svg",
    title: "MongoDB",
    description: "I had the opportunity to explore MongoDB in two ways. First, while learning the MERN stack, where I primarily worked with Mongoose. Second, while I studied MongoDB more formally in DBS311.",
    category: "Database",
    color: "from-teal-500 to-green-500",
    icon: <Database className="w-5 h-5" />,
    gradient: "from-teal-500/20 to-green-500/20"
  },
  {
    year: "2024",
    logo: "/logos/sql.png",
    title: "SQL",
    description: "My understanding of SQL and writing queries is quite dynamic. I've worked with Oracle SQL 12c, MySQL, and PostgreSQL - each with slight differences, but fundamentally similar in query structure.",
    category: "Database",
    color: "from-blue-500 to-indigo-500",
    icon: <Database className="w-5 h-5" />,
    gradient: "from-blue-500/20 to-indigo-500/20"
  },
];

export default function SkillsTimeline() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: easeOut
      }
    }
  };

  const rightItemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: easeOut
      }
    }
  };

  return (
    <section className="min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-2 bg-slate-800/50 border border-slate-700 rounded-2xl px-4 py-2 mb-6 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-slate-300 text-sm font-medium">Learning Journey</span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Skills{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Timeline
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            My journey through programming languages and technologies, from foundational concepts to modern full-stack development
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-cyan-500/20 hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500 to-cyan-500 opacity-20"></div>
          </div>

          {/* Timeline Items */}
          <div className="space-y-12 lg:space-y-8">
            {skillsTimeline.map((skill, index) => (
              <motion.div
                key={index}
                variants={index % 2 === 0 ? itemVariants : rightItemVariants}
                className={`relative flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-slate-700 border-2 border-slate-600 z-10 hidden lg:block">
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${skill.color} mx-auto mt-0.5`}></div>
                </div>

                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="group relative"
                  >
                    {/* Gradient Border Effect */}
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${skill.color} rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500`}></div>
                    
                    <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 group-hover:border-slate-600 transition-all duration-300">
                      {/* Header */}
                      <div className="flex items-start space-x-4 mb-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${skill.gradient} border border-slate-700 flex-shrink-0`}>
                          <div className={`bg-gradient-to-r ${skill.color} bg-clip-text `}>
                            {skill.icon}
                          </div>
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-xl font-bold text-white">{skill.title}</h3>
                            <span className={`px-2 py-1 rounded-lg text-xs font-medium bg-gradient-to-r ${skill.gradient} border border-slate-700 text-white`}>
                              {skill.category}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2 text-slate-400">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm font-medium">{skill.year}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-slate-300 leading-relaxed mb-4">
                        {skill.description}
                      </p>

                      {/* Footer */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 relative bg-white/10 rounded-lg backdrop-blur-sm border border-slate-700">
                            <Image 
                              src={skill.logo} 
                              alt={skill.title}
                              fill
                              className="rounded-lg object-cover p-1"
                            />
                          </div>
                          <span className="text-slate-400 text-sm">Technology</span>
                        </div>

                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={`https://github.com/Programming-Languages-Playground/${skill.title}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center space-x-2 bg-slate-700/50 hover:bg-slate-600/50 px-4 py-2 rounded-xl text-slate-300 hover:text-white transition-all duration-200 border border-slate-600 hover:border-slate-500"
                        >
                          <span className="text-sm font-medium">View Playground</span>
                          <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block lg:w-2/12"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-20"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-slate-300">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span className="font-semibold">Continuous learning journey</span>
            </div>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}