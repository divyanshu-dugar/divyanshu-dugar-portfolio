"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Heart,
  Users,
  Target,
  Sparkles,
  ArrowRight,
  BookOpen,
  GraduationCap,
  Lightbulb,
  Rocket
} from "lucide-react";

export default function AboutMe() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        ease: "easeOut",
      },
    },
  };

  const highlightVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "backOut",
      },
    },
  };

  const values = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Growth Mindset",
      description: "Constant learning and evolution through challenges",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Emotional Intelligence",
      description: "Balancing ambition with awareness and empathy",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Building",
      description: "Leading initiatives and helping others grow",
      gradient: "from-orange-500 to-amber-500",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Purpose Driven",
      description: "Building meaningful things with conscious intent",
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section className="min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center space-x-2 bg-slate-800/50 border border-slate-700 rounded-2xl px-4 py-2 mb-6 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-slate-300 text-sm font-medium">
                Beyond Code
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white mb-6"
              variants={itemVariants}
            >
              About{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Me
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
            >
              Building with purpose, growing with intention, and creating with
              heart
            </motion.p>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column */}
            <motion.div variants={containerVariants} className="space-y-8 text-left">
              {/* Intro Card */}
              <motion.div
                variants={itemVariants}
                className="bg-slate-800/30 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50"
              >
                <motion.p
                  className="text-lg text-slate-300 leading-relaxed"
                  variants={itemVariants}
                >
                  Hey! I'm{" "}
                  <span className="text-white font-semibold bg-gradient-to-r from-blue-500/20 to-cyan-500/20 px-2 py-1 rounded-lg">
                    Divyanshu Dugar
                  </span>{" "}
                  - a highly introspective and emotionally driven individual who
                  believes in balancing{" "}
                  <motion.span
                    variants={highlightVariants}
                    className="text-sky-400 font-medium bg-sky-500/10 px-2 py-1 rounded-lg"
                  >
                    ambition with awareness
                  </motion.span>
                  , and{" "}
                  <motion.span
                    variants={highlightVariants}
                    className="text-purple-400 font-medium bg-purple-500/10 px-2 py-1 rounded-lg"
                  >
                    growth with grounding
                  </motion.span>
                  .
                </motion.p>
              </motion.div>

              {/* Personal Development */}
              <motion.div
                variants={itemVariants}
                className="bg-slate-800/30 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <BookOpen className="w-5 h-5 text-blue-400" />
                  <h3 className="text-white font-semibold">Personal Development</h3>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  I'm passionate about diving into podcasts, self-growth content,
                  and philosophical ideas that challenge how I think and feel. I
                  embrace the tough questions, learn from my overthinking and
                  insecurities, and constantly strive to become more emotionally
                  resilient and mentally fit.
                </p>
              </motion.div>

              {/* Leadership */}
              <motion.div
                variants={itemVariants}
                className="bg-slate-800/30 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <GraduationCap className="w-5 h-5 text-purple-400" />
                  <h3 className="text-white font-semibold">Leadership & Community</h3>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Beyond academics and tech, I lead initiatives like the{" "}
                  <span className="text-sky-400 font-medium">
                    Seneca Data Science Club
                  </span>
                  , and serve as a{" "}
                  <span className="text-purple-400 font-medium">
                    Supplemental Learning Group Leader
                  </span>
                  , helping others reinforce their learning.
                </p>
              </motion.div>

              {/* 1% Wiser */}
              <motion.div
                variants={itemVariants}
                className="bg-slate-800/30 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Rocket className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-white font-semibold">1% Wiser</h3>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  I founded{" "}
                  <span className="text-white font-semibold">1% Wiser</span>, a
                  digital startup where I share self-growth insights, weekly
                  content, and reflections intended to spark perspective shifts
                  and inspire conscious living.
                </p>
              </motion.div>
            </motion.div>

            {/* Right Column */}
            <motion.div variants={containerVariants} className="space-y-8">
              {/* Core Values */}
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  Core Values
                </h3>

                <div className="grid gap-4">
                  {values.map((value) => (
                    <motion.div
                      key={value.title}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="group relative"
                    >
                      <div
                        className={`absolute -inset-0.5 bg-gradient-to-r ${value.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500`}
                      ></div>

                      <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 group-hover:border-slate-600 transition-all duration-300">
                        <div className="flex items-center space-x-4">
                          <div
                            className={`p-3 rounded-xl bg-gradient-to-r ${value.gradient} bg-opacity-10`}
                          >
                            {value.icon}
                          </div>

                          <div>
                            <h4 className="text-white font-semibold mb-1">
                              {value.title}
                            </h4>
                            <p className="text-slate-400 text-sm">
                              {value.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Philosophy */}
              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Lightbulb className="w-6 h-6 text-yellow-400" />
                  <h3 className="text-white font-semibold text-xl">
                    My Philosophy
                  </h3>
                </div>

                <p className="text-slate-300 leading-relaxed mb-4">
                  To me, success isn't about accolades—it's about{" "}
                  <span className="text-sky-400">consistency over intensity</span>
                  ,{" "}
                  <span className="text-purple-400">reflection over reaction</span>
                  , and{" "}
                  <span className="text-white font-medium">
                    being real with myself and the world
                  </span>
                  .
                </p>

                <div className="bg-slate-800/50 rounded-2xl p-4 border border-slate-700">
                  <p className="text-slate-400 text-sm italic">
                    "Born with big dreams and a curious mind, I'm on a journey
                    not just to build great things, but to become someone of
                    depth, character, and clarity."
                  </p>
                </div>
              </motion.div>

              {/* Call to Action */}
              <motion.div variants={itemVariants} className="text-center">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50"
                >
                  <h3 className="text-white font-semibold text-lg mb-2">
                    ✨ Let's Grow Together
                  </h3>

                  <p className="text-slate-400 mb-4">
                    Whether it's building a mindful product, discussing deeper
                    lessons, or collaborating on meaningful work.
                  </p>

                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#contact"
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                  >
                    <span>Start a Conversation</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
