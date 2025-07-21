import Image from "next/image";

const experiences = [
  {
    title: "Supplemental Instruction Leader",
    organization: "Seneca Polytechnic",
    from: "Sept 2024",
    to: "Dec 2024",
    description:
      "Led peer-to-peer sessions supporting students in complex programming and data courses. Facilitated collaborative learning environments, clarified challenging concepts, and boosted student success rates.",
    image: "/work-experience/SI-Leader.png",
    skills: ["Leadership", "Communication", "Collaboration", "Teaching"],
  },
  {
    title: "Abacus Course Instructor",
    organization: "UCMAS",
    from: "Oct 2024",
    to: "Present",
    description:
      "Taught abacus-based arithmetic to children aged 6–13. Created interactive lessons and visual recognition slideshows to engage students and enhance their mental math skills.",
    image: "/work-experience/UCMAS.png",
    skills: ["Teaching", "Patience", "Presentation Skills", "Child Engagement"],
  },
  {
    title: "President - Seneca Data Science Club",
    organization: "Seneca Data Science Club",
    from: "Sept 2024",
    to: "Present",
    description:
      "Founded and currently lead the Seneca Data Science Club. Organize workshops, talks, and hands-on events for aspiring data scientists. Foster community, encourage project-based learning, and share industry insights.",
    image: "/work-experience/Data-Science-Club.png",
    skills: ["Leadership", "Event Management", "Team Building", "Public Speaking"],
  },
];

export default function WorkExperience() {
  return (
    <>
      <main className="min-h-screen bg-zinc-950 px-6 py-12 text-white">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-500">
            My Work Experience
          </h1>
        </div>

        <div className="relative border-l border-zinc-700 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 ml-4 relative">
              <div className="absolute w-4 h-4 bg-sky-400 rounded-full -left-2 top-1"></div>
              <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg border border-zinc-800">
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <div className="w-full md:w-1/4">
                    <Image
                      src={exp.image}
                      alt={exp.title}
                      width={300}
                      height={200}
                      className="rounded-xl object-cover w-full h-32 md:h-full"
                    />
                  </div>
                  <div className="w-full md:w-3/4">
                    <h2 className="text-2xl font-semibold mb-1">{exp.title}</h2>
                    <p className="text-zinc-400 text-sm mb-1">
                      {exp.organization} | {exp.from} – {exp.to}
                    </p>
                    <p className="text-zinc-300 mb-3">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="bg-zinc-800 text-white text-xs px-3 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
