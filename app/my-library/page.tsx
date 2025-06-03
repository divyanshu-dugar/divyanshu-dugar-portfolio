'use client';

import NoteCard from '../../components/noteCard';
import Navbar from '../../components/navbar';

const notesData = [
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
];

export default function NotesPage() {
  return (
    <>
        <Navbar/>
        <main className="min-h-screen bg-[#121212] px-6 py-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-500 mb-10">
            Welcome to My Library
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {notesData.map((note, idx) => (
            <NoteCard key={idx} {...note} />
            ))}
        </div>
        </main>
    </>
  );
}
