"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  ArrowRight, 
  Code2, 
  Database, 
  Cloud, 
  Terminal,
  Sparkles,
  Zap,
  Mail,
  Github,
  Linkedin,
  BookOpen,
  GraduationCap
} from "lucide-react";

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 1, 0.5, 0]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Full-Stack Development",
      description: "Building modern web applications with React, Next.js, and Node.js",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Analytics",
      description: "Transforming data into insights with Python, SQL, and visualization tools",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud Technologies",
      description: "Deploying scalable solutions with modern cloud platforms and DevOps",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <Terminal className="w-6 h-6" />,
      title: "Problem Solving",
      description: "Strong foundation in algorithms, data structures, and system design",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  const stats = [
    { number: "20+", label: "Projects Built" },
    { number: "1000+", label: "Hours Coding" },
    { number: "15+", label: "Technologies" },
    { number: "∞", label: "Growth Mindset" }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-slate-950 overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </motion.div>

      {/* Mouse Trailer */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300"
        animate={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <motion.div 
          className="text-center max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Education Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-slate-800/50 border border-slate-700 rounded-2xl px-4 py-2 mb-8 backdrop-blur-sm"
          >
            <GraduationCap className="w-4 h-4 text-blue-400" />
            <span className="text-slate-300 text-sm font-medium">Computer Programming & Analysis Student at Seneca Polytechnic</span>
          </motion.div>

          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center space-x-2 bg-slate-800/50 border border-slate-700 rounded-2xl px-4 py-2 mb-8 backdrop-blur-sm mx-4"
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-slate-300 text-sm font-medium">Seeking Full-Time Opportunities | Graduating Soon</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Shaping
            <motion.span 
              className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ["0%", "100%", "0%"] 
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
              style={{
                backgroundSize: "200% 200%"
              }}
            >
              Digital Future
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Passionate Computer Programming student with a growth mindset, continuously expanding my technical expertise through hands-on projects.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="/projects"
              className="group bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center space-x-3"
            >
              <span>Explore My Projects</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="/my-mindset"
              className="group border border-slate-700 text-slate-300 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-slate-800/50 hover:border-slate-600 transition-all duration-300 flex items-center space-x-3 backdrop-blur-sm"
            >
              <BookOpen className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>My Mindset</span>
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto mb-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-slate-400 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator - Moved further down to avoid overlap */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center space-y-2"
            >
              <span className="text-slate-400 text-sm">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center">
                <motion.div
                  animate={{ y: [0, 16, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1 h-3 bg-slate-400 rounded-full mt-2"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
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
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-slate-300 text-sm font-medium">Technical Skills</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What I <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Bring</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              A versatile skill set focused on full-stack development, data analytics, and continuous learning
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500`}></div>
                <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 group-hover:border-slate-600 transition-all duration-300 h-full">
                  <div className={`inline-flex items-center justify-center p-3 rounded-xl bg-gradient-to-r ${feature.gradient} bg-opacity-10 border border-slate-700 mb-4`}>
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="py-20 px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 border border-slate-800 rounded-3xl p-12 backdrop-blur-sm"
          >
            <Sparkles className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Build Together
            </h2>
            <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
              I'm excited to contribute to innovative projects and grow as a developer. 
              Whether it's an internship, junior role, or collaborative project, I'm ready to learn and make an impact.
            </p>
            <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:divyanshudugar@gmail.com"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center space-x-3"
              >
                <Mail className="w-5 h-5" />
                <span>Get In Touch</span>
              </motion.a>
              
              <div className="flex items-center space-x-4">
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  href="https://github.com/divyanshu-dugar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-800/50 border border-slate-700 rounded-xl hover:bg-blue-500/20 hover:border-blue-500/50 transition-all duration-300"
                >
                  <Github className="w-6 h-6 text-slate-300" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  href="https://linkedin.com/in/divyanshu-dugar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-800/50 border border-slate-700 rounded-xl hover:bg-blue-500/20 hover:border-blue-500/50 transition-all duration-300"
                >
                  <Linkedin className="w-6 h-6 text-slate-300" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}