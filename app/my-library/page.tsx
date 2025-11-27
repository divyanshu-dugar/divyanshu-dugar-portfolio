'use client';

import { motion } from "framer-motion";
import { easeOut } from "framer-motion";
import { 
  BookOpen, 
  FileText, 
  Sparkles, 
  ArrowRight,
  Library,
  Map,
  Code2,
  Database,
  Brain,
  Star,
  TrendingUp,
  Users
} from "lucide-react";

const categorizedNotes = {
  'Programming Languages': [
    {
      image: '/c.svg',
      name: 'C Notes',
      desc: 'Master the basics of C programming with comprehensive notes covering syntax, memory management, and core concepts.',
      buttonText: 'View Notes',
      link: 'https://docs.google.com/document/d/1tT7xC_FIHJm1xOVVPA_WMddSqEzeijsT/edit?usp=sharing&ouid=113501728012545291332&rtpof=true&sd=true',
      icon: <Code2 className="w-5 h-5" />,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      image: '/c++.svg',
      name: 'C++ Notes',
      desc: 'Essential concepts for modern C++ development including OOP, STL, and advanced programming techniques.',
      buttonText: 'View Notes',
      link: 'https://docs.google.com/document/d/1RffeJCgKCoDBj_0y1iY7LMW3_uy5BBek/edit?usp=sharing&ouid=113501728012545291332&rtpof=true&sd=true',
      icon: <Code2 className="w-5 h-5" />,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      image: '/c++.svg',
      name: 'OOP | C++ Notes',
      desc: 'Comprehensive Object-Oriented Programming concepts with C++ implementations and design patterns.',
      buttonText: 'View Notes',
      link: 'https://docs.google.com/document/d/1RffeJCgKCoDBj_0y1iY7LMW3_uy5BBek/edit?usp=sharing&ouid=113501728012545291332&rtpof=true&sd=true',
      icon: <Code2 className="w-5 h-5" />,
      gradient: "from-orange-500 to-amber-500"
    },
  ],
  'Career Roadmaps': [
    {
      image: '/logos/google.svg',
      name: 'Google Roadmap',
      desc: 'Curated roadmap for preparing and getting into top tech companies like Google with structured learning paths.',
      buttonText: 'View Roadmap',
      link: 'https://docs.google.com/document/d/1mQJyfXc-o-ujsHYBbltOEzx1Yl-h_Lvv/edit?usp=sharing&ouid=113501728012545291332&rtpof=true&sd=true',
      icon: <Map className="w-5 h-5" />,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      image: '/logos/notion.svg',
      name: 'Job Search Roadmap',
      desc: 'Comprehensive guide for navigating the job search process from preparation to offer negotiation.',
      buttonText: 'View Roadmap',
      link: 'https://www.notion.so/Emotion-Energy-Execution-Divyanshu-Dugar-1ff2865156e880209abefd54e4554ce2?source=copy_link',
      icon: <TrendingUp className="w-5 h-5" />,
      gradient: "from-indigo-500 to-purple-500"
    },
  ],
  'Web Development': [
    {
      image: '/logos/react.svg',
      name: 'React & Next.js',
      desc: 'Modern frontend development with React hooks, Next.js features, and best practices.',
      buttonText: 'Coming Soon',
      link: '#',
      icon: <Code2 className="w-5 h-5" />,
      gradient: "from-cyan-500 to-blue-500"
    },
  ],
  'Data Science': [
    {
      image: '/logos/python.svg',
      name: 'Python for Data',
      desc: 'Data analysis, visualization, and machine learning with Python libraries.',
      buttonText: 'Coming Soon',
      link: '#',
      icon: <Database className="w-5 h-5" />,
      gradient: "from-yellow-500 to-amber-500"
    },
  ],
  'Computer Science': [
    {
      image: '/logos/dsa.png',
      name: 'Data Structures',
      desc: 'Fundamental data structures and algorithms with implementation examples.',
      buttonText: 'Coming Soon',
      link: '#',
      icon: <Brain className="w-5 h-5" />,
      gradient: "from-red-500 to-pink-500"
    },
  ]
};

const categoryIcons = {
  'Programming Languages': <Code2 className="w-5 h-5" />,
  'Career Roadmaps': <Map className="w-5 h-5" />,
  'Web Development': <Code2 className="w-5 h-5" />,
  'Data Science': <Database className="w-5 h-5" />,
  'Computer Science': <Brain className="w-5 h-5" />
};

export default function NotesPage() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: easeOut
      }
    }
  };

  return (
    <section className="min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        
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
            <Library className="w-4 h-4 text-cyan-400" />
            <span className="text-slate-300 text-sm font-medium">Knowledge Repository</span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            My{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Library
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            A curated collection of notes, roadmaps, and resources across various domains. 
            Continuously updated with new learnings and insights.
          </motion.p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          {Object.entries(categorizedNotes).map(([category, notes]) => (
            <motion.div
              key={category}
              variants={categoryVariants}
              className="relative"
            >
              {/* Category Header */}
              <motion.div 
                className="flex items-center space-x-3 mb-8"
                whileHover={{ x: 10 }}
              >
                <div className="p-2 bg-slate-800/50 rounded-xl border border-slate-700">
                  {categoryIcons[category as keyof typeof categoryIcons]}
                </div>
                <h2 className="text-3xl font-bold text-white">
                  {category}
                </h2>
                <div className="flex-1 h-px bg-gradient-to-r from-slate-700 to-transparent ml-4"></div>
              </motion.div>

              {/* Notes Grid */}
              {notes.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {notes.map((note, idx) => (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="group relative"
                    >
                      {/* Gradient Border Effect */}
                      <div className={`absolute -inset-0.5 bg-gradient-to-r ${note.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500`}></div>
                      
                      <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 group-hover:border-slate-600 transition-all duration-300 h-full flex flex-col">
                        {/* Header */}
                        <div className="flex items-start space-x-4 mb-4">
                          <div className={`p-3 rounded-xl bg-gradient-to-r ${note.gradient} bg-opacity-10 border border-slate-700 flex-shrink-0`}>
                            {note.icon}
                          </div>
                          <div className="flex-grow">
                            <h3 className="text-xl font-bold text-white mb-2">
                              {note.name}
                            </h3>
                            <div className="flex items-center space-x-2">
                              <FileText className="w-4 h-4 text-slate-400" />
                              <span className="text-slate-400 text-sm">
                                {note.buttonText.includes('Coming') ? 'In Progress' : 'Available'}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-grow">
                          {note.desc}
                        </p>

                        {/* Action Button */}
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={note.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-full ${
                            note.buttonText.includes('Coming') 
                              ? 'bg-slate-700/50 text-slate-400 cursor-not-allowed' 
                              : 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-lg hover:shadow-blue-500/25'
                          } px-4 py-3 rounded-xl font-semibold text-center transition-all duration-200 flex items-center justify-center space-x-2 group/btn`}
                        >
                          <span>{note.buttonText}</span>
                          {!note.buttonText.includes('Coming') && (
                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                          )}
                        </motion.a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                    <Sparkles className="w-12 h-12 text-slate-500 mx-auto mb-4" />
                    <p className="text-slate-400 text-lg">
                      Content coming soon for {category}
                    </p>
                    <p className="text-slate-500 text-sm mt-2">
                      Currently being curated and organized
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
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
              <BookOpen className="w-5 h-5 text-cyan-400" />
              <span className="font-semibold">Knowledge grows when shared</span>
            </div>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}