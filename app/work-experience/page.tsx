'use client';
import useSWR from "swr";
import Image from "next/image";
import { motion } from "framer-motion";
import { backOut, easeOut } from "framer-motion";
import { 
  Calendar,
  Building2,
  Sparkles,
  ArrowRight,
  MapPin,
  Award
} from "lucide-react";

type ExperienceType = {
  title: string;
  organization: string;
  from: string;
  to: string;
  description: string;
  image: string;
  skills: string[];
  location?: string;
  type?: string;
};

export default function WorkExperience() {
  const { data: experiences, error } = useSWR<ExperienceType[]>('/api/work-experience');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  const timelineVariants = {
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

  if (error) return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="text-center">
        <div className="text-red-400 text-lg mb-4">Error loading experience</div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.location.reload()}
          className="bg-slate-800/50 text-slate-300 px-6 py-3 rounded-xl border border-slate-700 hover:border-slate-600 transition-all"
        >
          Try Again
        </motion.button>
      </div>
    </div>
  );

  if (!experiences) return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="w-12 h-12 border-4 border-blue-500/30 border-t-blue-500 rounded-full"
      />
    </div>
  );

  const sortedExperiences = [...experiences].sort(
    (a, b) => new Date(b.from).getTime() - new Date(a.from).getTime()
  );

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

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
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
            <Building2 className="w-4 h-4 text-cyan-400" />
            <span className="text-slate-300 text-sm font-medium">Professional Journey</span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Work{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Experience
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            My professional journey through various roles and responsibilities, 
            showcasing growth and expertise development
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
          <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-cyan-500/20">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500 to-cyan-500 opacity-20"></div>
          </div>

          {/* Experience Items */}
          <div className="space-y-12">
            {sortedExperiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-start gap-8`}
              >
                {/* Timeline Dot */}
                <motion.div
                  variants={timelineVariants}
                  className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-slate-700 border-2 border-slate-600 z-10"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-0.5"></div>
                </motion.div>

                {/* Content Card */}
                <div className="ml-12 md:ml-0 md:w-5/12">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="group relative"
                  >
                    {/* Gradient Border Effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500"></div>
                    
                    <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 group-hover:border-slate-600 transition-all duration-300">
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 relative bg-white/10 rounded-xl backdrop-blur-sm border border-slate-700 overflow-hidden">
                            <Image
                              src={exp.image}
                              alt={exp.organization}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                        <div className="flex-grow">
                          <h3 className="text-xl font-bold text-white mb-2">
                            {exp.title}
                          </h3>
                          <div className="flex items-center space-x-4 text-slate-400 text-sm mb-2">
                            <div className="flex items-center space-x-1">
                              <Building2 className="w-4 h-4" />
                              <span className="font-medium">{exp.organization}</span>
                            </div>
                            {exp.location && (
                              <div className="flex items-center space-x-1">
                                <MapPin className="w-4 h-4" />
                                <span>{exp.location}</span>
                              </div>
                            )}
                          </div>
                          <div className="flex items-center space-x-2 text-slate-500 text-sm">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.from} – {exp.to}</span>
                            {exp.type && (
                              <span className="px-2 py-1 bg-slate-700/50 rounded-lg text-xs">
                                {exp.type}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-slate-300 leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-lg border border-slate-600 backdrop-blur-sm hover:bg-slate-600/50 transition-colors duration-200"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-2/12"></div>
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
              <Award className="w-5 h-5 text-cyan-400" />
              <span className="font-semibold">Building experience one role at a time</span>
            </div>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}