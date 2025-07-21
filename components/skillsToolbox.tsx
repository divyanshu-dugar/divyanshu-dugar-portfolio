import React from "react";
import { Code, Cpu, Database, Terminal, Settings, Wrench } from "lucide-react";

const skillsData = [
  {
    icon: <Code className="w-6 h-6 text-sky-400" />,
    title: "Data Structures and Algorithms",
    items: ["Arrays", "Stacks", "Queues", "Linked-Lists", "Tress", "Graphs"],
  },
  {
    icon: <Code className="w-6 h-6 text-sky-400" />,
    title: "Technical Languages",
    items: ["JavaScript", "Python", "Java", "C/C++"],
  },
  {
    icon: <Terminal className="w-6 h-6 text-pink-400" />,
    title: "Frontend",
    items: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap"],
  },
  {
    icon: <Cpu className="w-6 h-6 text-green-400" />,
    title: "Backend",
    items: ["Node.js", "Express.js", "RESTful APIs"],
  },
  {
    icon: <Database className="w-6 h-6 text-yellow-400" />,
    title: "Databases",
    items: ["MongoDB", "PostgreSQL", "Firebase", "MySQL"],
  },
  {
    icon: <Settings className="w-6 h-6 text-purple-400" />,
    title: "Development Tools",
    items: ["Git", "GitHub", "Jira", "VS Code", "Thunder Client", "Postman"],
  },
  {
    icon: <Wrench className="w-6 h-6 text-red-400" />,
    title: "Software Concepts",
    items: ["OOP", "Operating Systems", "DBMS", "Agile Development"],
  },
];

export default function SkillsToolbox() {
  return (
    <section className="w-full px-6 py-16 bg-[#0f0f0f] text-white" id="skills">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center text-white drop-shadow-lg">
          Skills Toolbox 🧰
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, idx) => (
            <div
              key={idx}
              className="bg-[#1a1a1a] rounded-2xl p-6 shadow-lg shadow-black/40 border border-gray-800 hover:scale-[1.02] hover:border-sky-500 transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-4">
                {skill.icon}
                <h2 className="text-xl font-semibold">{skill.title}</h2>
              </div>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                {skill.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
