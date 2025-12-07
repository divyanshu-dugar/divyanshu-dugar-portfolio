"use client";

import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { motion, easeOut } from "framer-motion";

import {
  Sparkles,
  ExternalLink,
  Github,
  ArrowRight,
  Code2,
  Eye,
} from "lucide-react";

const projects = [
  {
    name: "Fincraft Studios",
    image: "/projects/Fin-Craft-Studios.png",
    description:
      "A comprehensive financial management platform with expense/income, saving goals tracking, budget management, dashboard analytics, and AI-powered insights. Features include JWT authentication, real-time filtering, data visualization, and import/export functionality.",
    tech: [
      "MongoDB",
      "Express",
      "Next.js",
      "Node.js",
      "Tailwind CSS",
      "Framer Motion",
      "JWT Auth",
      "REST API",
    ],
    github: "https://github.com/divyanshu-dugar/fincraft-studios",
    live: "https://fincraft-studios.vercel.app/",
    gradient: "from-blue-600 to-purple-600",
  },
  {
    name: "1% Wiser - Kids",
    image: "/projects/one-percent-wiser-kids.jpeg",
    description:
      "Built a premium SaaS-grade educational platform from scratch using Next.js. Implemented a fully responsive dark-themed UI with glassmorphism effects, Framer Motion animations, and a comprehensive design system. Features include dynamic hero sliders, interactive program cards with expandable sections, email integration via Email.js, and a contact form with WhatsApp integration. Optimized for performance with Next.js Image component, server-side rendering, and client-side state management.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Email.js",
      "Lucide React",
      "App Router",
    ],
    github: "https://github.com/divyanshu-dugar/1-percent-wiser-kids",
    live: "https://1-percent-wiser-kids.vercel.app",
    gradient: "from-[#F58634] to-[#FBBF24]",
    category: "Full Stack SaaS",
  },
  {
    name: "Web Development Playground",
    image: "/projects/web-development-playground.jpeg",
    description:
      "A comprehensive personal knowledge base and code snippet manager for web developers. Features include interactive code snippets with Prism.js syntax highlighting, categorized resources, search functionality, and copy-to-clipboard capabilities.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prism.js",
      "NextAuth.js",
      "Lucide Icons",
      "React Hooks",
    ],
    github: "https://github.com/divyanshu-dugar/web-development-playground",
    live: "https://web-development-playground.vercel.app/",
    gradient: "from-purple-500 via-blue-500 to-cyan-500",
  },
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        ease: easeOut,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  return (
    <section className="min-h-screen bg-slate-950 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-2 bg-slate-800/50 border border-slate-700 rounded-2xl px-4 py-2 mb-6 backdrop-blur-sm"
          >
            <Code2 className="w-4 h-4 text-cyan-400" />
            <span className="text-slate-300 text-sm font-medium">
              Featured Work
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            My{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h1>
        </motion.div>

        {/* Project Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 overflow-hidden h-full flex flex-col">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3">
                      {project.name}
                    </h3>

                    <p className="text-slate-400 text-sm mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      href={project.github}
                      target="_blank"
                      className="flex items-center space-x-2 text-slate-400"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm font-medium">Code</span>
                    </motion.a>

                    {project.live && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        href={project.live}
                        target="_blank"
                        className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-xl text-sm font-semibold"
                      >
                        <Eye className="w-4 h-4" />
                        <span>Live Demo</span>
                        <ExternalLink className="w-3 h-3" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
