"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { backOut, easeOut } from "framer-motion";
import { 
  Sparkles, 
  Brain, 
  Heart, 
  Star, 
  Users, 
  BookOpen,
  ArrowRight,
  Filter,
  Eye
} from "lucide-react";

const categories = [
  { name: "Mental Health", icon: <Brain className="w-4 h-4" />, count: 3, gradient: "from-blue-500 to-cyan-500" },
  { name: "Emotional Intelligence", icon: <Heart className="w-4 h-4" />, count: 2, gradient: "from-purple-500 to-pink-500" },
  { name: "Philosophy", icon: <BookOpen className="w-4 h-4" />, count: 2, gradient: "from-orange-500 to-amber-500" },
  { name: "Astronomy", icon: <Star className="w-4 h-4" />, count: 0, gradient: "from-yellow-500 to-amber-500" },
  { name: "History", icon: <BookOpen className="w-4 h-4" />, count: 0, gradient: "from-green-500 to-emerald-500" },
  { name: "Evolution", icon: <Users className="w-4 h-4" />, count: 0, gradient: "from-teal-500 to-cyan-500" },
  { name: "Self-Growth", icon: <Sparkles className="w-4 h-4" />, count: 10, gradient: "from-indigo-500 to-purple-500" },
  { name: "Miscellaneous", icon: <Brain className="w-4 h-4" />, count: 1, gradient: "from-red-500 to-pink-500" },
];

const posts = [
  {
    title: "You Were Born to Evolve!",
    image: "/1PercentWiser/Learning.png",
    category: "Self-Growth",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    title: "Tony Robbins - True Meaning of Life!",
    image: "/1PercentWiser/TonyRobbins-TrueMeaningOfLife.png",
    category: "Philosophy",
    gradient: "from-orange-500 to-amber-500"
  },
  {
    title: "Worry!",
    image: "/1PercentWiser/Worry.png",
    category: "Mental Health",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Reacting VS Responding!",
    image: "/1PercentWiser/React-Vs-Respond.png",
    category: "Emotional Intelligence",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Flow State!",
    image: "/1PercentWiser/Flow-State.png",
    category: "Miscellaneous",
    gradient: "from-red-500 to-pink-500"
  },
  {
    title: "Decision Making!",
    image: "/1PercentWiser/Decision-Making.png",
    category: "Philosophy",
    gradient: "from-orange-500 to-amber-500"
  },
  {
    title: "Focusing on the Bigger Picture!",
    image: "/1PercentWiser/Focus.png",
    category: "Mental Health",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "This Shall Too Pass!",
    image: "/1PercentWiser/Time.png",
    category: "Mental Health",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Words of Anger!",
    image: "/1PercentWiser/Anger.png",
    category: "Emotional Intelligence",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Gossip and Criticism!",
    image: "/1PercentWiser/Gossip-And-Criticism.png",
    category: "Self-Growth",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    title: "Compliments + Criticism = 🪴!",
    image: "/1PercentWiser/Compliments-And-Criticism.png",
    category: "Self-Growth",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    title: "Reaction - ✊🏻!",
    image: "/1PercentWiser/Reaction.png",
    category: "Self-Growth",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    title: "Past = 💪🏻!",
    image: "/1PercentWiser/Past.png",
    category: "Self-Growth",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    title: "Smarter = 🤫!",
    image: "/1PercentWiser/Smart.png",
    category: "Self-Growth",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    title: "Taking a Break!",
    image: "/1PercentWiser/Break.png",
    category: "Self-Growth",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    title: "Success!",
    image: "/1PercentWiser/Success.png",
    category: "Self-Growth",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    title: "Success Begins!",
    image: "/1PercentWiser/Success-Begins.png",
    category: "Self-Growth",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    title: "Pessimist VS Optimist!",
    image: "/1PercentWiser/Pessimist-Optimist.png",
    category: "Self-Growth",
    gradient: "from-indigo-500 to-purple-500"
  },
];

export default function MyMindset() {
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: backOut
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
            <span className="text-slate-300 text-sm font-medium">Wisdom Collection</span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            1%{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Wiser
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Your daily dose of wisdom, reflection, and personal evolution
          </motion.p>

          <motion.p 
            className="text-slate-500 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            A learner who loves sharing life-changing insights from podcasts, books, philosophies, and personal reflections
          </motion.p>
        </motion.div>

        {/* Categories Filter */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <Filter className="w-5 h-5 text-slate-400" />
              <h2 className="text-2xl font-bold text-white">Explore by Category</h2>
            </div>
            <div className="text-slate-400 text-sm">
              {posts.length} wisdom posts
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category.name}
                variants={categoryVariants}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`group relative p-4 rounded-2xl backdrop-blur-sm border transition-all duration-300 ${
                  category.count > 0 
                    ? "bg-slate-800/50 border-slate-700 hover:border-slate-600" 
                    : "bg-slate-800/20 border-slate-800 opacity-50 cursor-not-allowed"
                }`}
              >
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center p-2 rounded-xl mb-2 ${
                    category.count > 0 
                      ? `bg-gradient-to-r ${category.gradient} bg-opacity-10 text-white` 
                      : "bg-slate-700/50 text-slate-500"
                  }`}>
                    {category.icon}
                  </div>
                  <div className="text-sm font-medium text-white mb-1">
                    {category.name}
                  </div>
                  <div className={`text-xs ${
                    category.count > 0 ? "text-slate-400" : "text-slate-600"
                  }`}>
                    {category.count} posts
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Wisdom Posts Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {posts.map((post, index) => {
            const categoryData = categories.find(cat => cat.name === post.category);
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative"
              >
                {/* Gradient Border Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${post.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500`}></div>
                
                <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 group-hover:border-slate-600 transition-all duration-300 overflow-hidden">
                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${post.gradient} text-white backdrop-blur-sm border border-white/20`}>
                        {post.category}
                      </span>
                    </div>

                    {/* View Overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileHover={{ scale: 1, opacity: 1 }}
                        className="flex items-center space-x-2 text-white"
                      >
                        <Eye className="w-5 h-5" />
                        <span className="font-semibold">View Wisdom</span>
                      </motion.div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-white leading-tight mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                      {post.title}
                    </h3>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-slate-400 text-sm">
                        <Sparkles className="w-4 h-4" />
                        <span>1% Wiser</span>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-slate-400 hover:text-white transition-colors"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
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
              <Brain className="w-5 h-5 text-cyan-400" />
              <span className="font-semibold">Growing wiser every day</span>
            </div>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}