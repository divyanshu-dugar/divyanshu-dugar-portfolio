'use client';
import useSWR from "swr";
import Image from "next/image";

type ExperienceType = {
  title: string;
  organization: string;
  from: string;
  to: string;
  description: string;
  image: string;
  skills: string[];
};

export default function WorkExperience() {
  const { data: experiences, error } = useSWR<ExperienceType[]>('/api/work-experience');

  if (error) return <div>Error loading experience.</div>;
  if (!experiences) return <div>Loading...</div>;

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-12 text-white">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-400 to-pink-400 drop-shadow-lg py-2">
          My Work Experience
        </h1>
      </div>

      <div className="relative border-l border-zinc-700 max-w-4xl mx-auto">
      {[...experiences]
        .sort((a, b) => new Date(b.from).getTime() - new Date(a.from).getTime())
        .map((exp, index) => (
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
  );
}
