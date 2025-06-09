"use client";
import React from "react";


export default function AboutMe() {
  return (
    <>
      <section className="min-h-screen bg-gradient-to-b from-zinc-950 to-black px-6 py-16 text-white flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-sky-400 drop-shadow-lg">
            About Me
          </h1>

          <p className="text-lg text-zinc-300 leading-relaxed">
            Hey! I’m <span className="text-white font-semibold">Divyanshu Dugar</span> - a highly introspective and emotionally driven individual who believes in balancing <span className="text-sky-400 font-medium">ambition with awareness</span>, and <span className="text-purple-400 font-medium">growth with grounding</span>.<br /><br />
            Born with big dreams and a curious mind, I’m on a journey not just to build great things, but to become someone of depth, character, and clarity.
          </p>

          <p className="text-lg text-zinc-300 leading-relaxed">
            I’m passionate about <span className="text-white font-semibold">personal development</span>, often diving into podcasts, self-growth content, and philosophical ideas that challenge how I think and feel. I embrace the tough questions, learn from my overthinking and insecurities, and constantly strive to become more emotionally resilient and mentally fit. I’m not afraid to evolve, even when it’s uncomfortable - in fact, that’s when I grow the most.
          </p>

          <p className="text-lg text-zinc-300 leading-relaxed">
            Beyond academics and tech, I lead initiatives like the <span className="text-sky-400">Seneca Data Science Club</span>, and serve as a <span className="text-purple-400">Supplemental Learning Group Leader</span>, where I help others reinforce their learning - a role that reflects both my love for communication and service.
          </p>

          <p className="text-lg text-zinc-300 leading-relaxed">
            I also founded <span className="text-white font-semibold">1% Wiser</span>, a passion project turned digital startup where I share life lessons, self-growth quotes, and reflections through weekly content on Instagram, WhatsApp, and LinkedIn. My aim? To spark perspective shifts and empower others to live a little more consciously - just like I try to do every day.
          </p>

          <p className="text-lg text-zinc-300 leading-relaxed">
            To me, success isn’t just about accolades or outcomes. It’s about <span className="text-sky-400">consistency over intensity</span>, <span className="text-purple-400">reflection over reaction</span>, and <span className="text-white font-medium">being real - with myself and with the world</span>.
          </p>

          <div className="pt-6">
            <h2 className="text-xl font-bold text-white mb-2">✨ Let’s Grow Together</h2>
            <p className="text-md text-zinc-400">
              Whether it’s building a mindful product, discussing life’s deeper lessons, or collaborating on something meaningful - I’m all ears.<br />
              <span className="text-white font-medium">Let’s connect, create, and grow - 1% at a time.</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}