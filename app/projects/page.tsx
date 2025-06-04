import Navbar from "@/components/navbar";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

const projects = [
  {
    name: "Fin-Craft-Studios",
    image: "/projects/Fin-Craft-Studios.png",
    description:
      "A full-stack finance suite consisting of 3 apps: Ledgerify (expense tracker with Chart.js), Budgetify (budget planner with insights), and Savify (goal visualization app).",
    tech: ["MongoDB", "Express", "React", "Node.js", "Chart.js"],
    github: "https://github.com/divyanshu-dugar/Fin-Craft-Studios",
    live: "https://ledgerify-client.vercel.app/",
  },
  {
    name: "Nike Database",
    image: "/projects/nike.png",
    description:
      "A comprehensive SQL-based database project for Nike, including schema design, queries, and procedures for inventory and order management.",
    tech: ["Oracle 12c", "SQL", "ERD Design"],
    github: "https://github.com/divyanshu-dugar/Nike-DataBase",
    live: "",
  },
  {
    name: "LegoSets",
    image: "/projects/lego-sets.png",
    description:
      "An Express.js and MongoDB-based app to browse, filter, and manage Lego set collections, with dynamic routes and EJS views.",
    tech: ["MongoDB", "Express.js", "EJS", "Node.js"],
    github: "https://github.com/divyanshu-dugar/LegoSets",
    live: "",
  },
];

export default function Projects() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-zinc-950 text-white px-6 py-12">
        <div className="max-w-5xl mx-auto text-center mb-10">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-500 mb-4">
            My Projects
          </h1>
          <p className="text-zinc-400 text-lg">
            A showcase of the applications I've built with passion and purpose.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-md hover:border-sky-500 transition-all flex flex-col justify-between"
            >
              <div>
                <h2 className="text-2xl font-bold mb-2 text-white">
                  {project.name}
                </h2>

                {/* Blurred Image Preview */}
                <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                    <Image
                    src={project.image}
                    alt={`${project.name} preview`}
                    fill
                    className="object-cover filter scale-105"
                    />
                </div>

                <p className="text-zinc-400 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-zinc-800 text-sky-300 text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-between items-center mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-sky-400 hover:text-sky-300"
                >
                  <FaGithub /> GitHub
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
