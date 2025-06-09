'use client';

import NoteCard from '../../components/noteCard';

const categorizedNotes = {
  'Programming Languages': [
    {
      image: '/c.svg',
      name: 'C Notes',
      desc: 'Master the basics of C programming.',
      buttonText: 'View Notes',
      link: 'https://docs.google.com/document/d/1tT7xC_FIHJm1xOVVPA_WMddSqEzeijsT/edit?usp=sharing&ouid=113501728012545291332&rtpof=true&sd=true',
    },
    {
      image: '/c++.svg',
      name: 'C++ Notes',
      desc: 'Essential concepts for frontend and backend devs.',
      buttonText: 'View Notes',
      link: 'https://docs.google.com/document/d/1RffeJCgKCoDBj_0y1iY7LMW3_uy5BBek/edit?usp=sharing&ouid=113501728012545291332&rtpof=true&sd=true',
    },
    {
      image: '/c++.svg',
      name: 'OOP | C++ Notes',
      desc: 'Quick reference for syntax, libraries, and tips.',
      buttonText: 'View Notes',
      link: 'https://docs.google.com/document/d/1RffeJCgKCoDBj_0y1iY7LMW3_uy5BBek/edit?usp=sharing&ouid=113501728012545291332&rtpof=true&sd=true',
    },
  ],
  Roadmaps: [
    {
      image: '/logos/google.svg',
      name: 'Google Roadmap',
      desc: 'Curated Roadmap for getting into Google!',
      buttonText: 'View Roadmap',
      link: 'https://docs.google.com/document/d/1mQJyfXc-o-ujsHYBbltOEzx1Yl-h_Lvv/edit?usp=sharing&ouid=113501728012545291332&rtpof=true&sd=true',
    },
    {
      image: '/logos/notion.svg',
      name: 'Job Search Roadmap',
      desc: 'Curated Roadmap for landing a job!',
      buttonText: 'View Roadmap',
      link: 'https://www.notion.so/Emotion-Energy-Execution-Divyanshu-Dugar-1ff2865156e880209abefd54e4554ce2?source=copy_link',
    },
  ],
  // Add placeholders for other categories to be filled later
  'Web Dev': [],
  'Data Science': [],
  DSA: [],
  Philosophy: [],
  Astronomy: [],
  Finance: [],
  Psychology: [],
  History: [],
};

export default function NotesPage() {
  return (
    <main className="min-h-screen bg-[#121212] px-6 py-10">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-500 mb-10">
          Welcome to My Library
        </h1>
      </div>

      {Object.entries(categorizedNotes).map(([category, notes]) => (
        <div key={category} className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6 border-b border-zinc-800 pb-2">
            {category}
          </h2>
          {notes.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {notes.map((note, idx) => (
                <NoteCard key={idx} {...note} />
              ))}
            </div>
          ) : (
            <p className="text-zinc-500">Notes coming soon...</p>
          )}
        </div>
      ))}
    </main>
  );
}
