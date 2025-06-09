
import Image from "next/image";

const categories = [
  "Mental Health",
  "Emotional Intelligence",
  "Philosophy",
  "Astronomy",
  "History",
  "Evolution",
  "Self-Growth",
  "Miscellaneous",
];

const posts = [
  {
    title: "You Were Born to Evolve!",
    image: "/1PercentWiser/Learning.png",
    category: "Self-Growth",
  },
  {
    title: "Tony Robbins - True Meaning of Life!",
    image: "/1PercentWiser/TonyRobbins-TrueMeaningOfLife.png",
    category: "Philosophy",
  },
  {
    title: "Worry!",
    image: "/1PercentWiser/Worry.png",
    category: "Mental Health",
  },
  {
    title: "Reacting VS Responding!",
    image: "/1PercentWiser/React-Vs-Respond.png",
    category: "Emotional Intelligence",
  },
  {
    title: "Flow State!",
    image: "/1PercentWiser/Flow-State.png",
    category: "Miscellaneous",
  },
  {
    title: "Decision Making!",
    image: "/1PercentWiser/Decision-Making.png",
    category: "Philosophy",
  },
  {
    title: "Focusing on the Bigger Picture!",
    image: "/1PercentWiser/Focus.png",
    category: "Mental Health",
  },
  {
    title: "This Shall Too Pass!",
    image: "/1PercentWiser/Time.png",
    category: "Mental Health",
  },
  {
    title: "Words of Anger!",
    image: "/1PercentWiser/Anger.png",
    category: "Emotional Intelligence",
  },
  {
    title: "Gossip and Criticism!",
    image: "/1PercentWiser/Gossip-And-Criticism.png",
    category: "Self Growth",
  },
  {
    title: "Compliments + Criticism = 🪴!",
    image: "/1PercentWiser/Compliments-And-Criticism.png",
    category: "Self Growth",
  },
  {
    title: "Reaction - ✊🏻!",
    image: "/1PercentWiser/Reaction.png",
    category: "Self Growth",
  },
  {
    title: "Past = 💪🏻!",
    image: "/1PercentWiser/Past.png",
    category: "Self Growth",
  },
  {
    title: "Smarter = 🤫!",
    image: "/1PercentWiser/Smart.png",
    category: "Self Growth",
  },
  {
    title: "Taking a Break!",
    image: "/1PercentWiser/Break.png",
    category: "Self Growth",
  },
  {
    title: "Success!",
    image: "/1PercentWiser/Success.png",
    category: "Self Growth",
  },
  {
    title: "Success Begins!",
    image: "/1PercentWiser/Success-Begins.png",
    category: "Self Growth",
  },
  {
    title: "Pessimist VS Optimist!",
    image: "/1PercentWiser/Pessimist-Optimist.png",
    category: "Self Growth",
  },
  // Add more post objects here as needed
];

export default function MyMindset() {
  return (
    <>
      <div className="min-h-screen bg-zinc-950 text-white px-6 py-12">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-500 mb-4">
            Welcome to 1% Wiser Community
          </h1>
          <p className="text-zinc-400 text-lg">
            Take away your daily dose of wisdom, reflection, and evolution.
          </p>
          <p className="text-zinc-500 mt-2 text-sm">
            I'm a learner who loves sharing life-changing insights from podcasts, books,
            philosophies, and personal reflections.
          </p>
        </div>

        <div className="mt-16 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-8xl mx-auto">
          {posts.map((post, index) => (
            <div
            key={index}
            className="bg-zinc-900 rounded-xl shadow-lg overflow-hidden border border-zinc-800 hover:border-sky-500 transition-all duration-300"
            >
            <Image
                src={post.image}
                alt={post.title}
                width={1080}
                height={1080}
                className="w-full aspect-square object-cover"
            />
            <div className="p-4">
                <h2 className="text-xl font-semibold text-white mb-1">
                {post.title}
                </h2>
                <span className="text-xs bg-sky-800 text-white px-2 py-1 rounded-full">
                {post.category}
                </span>
            </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold text-zinc-300 mb-4">Explore by Category</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((cat, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-zinc-800 hover:bg-sky-700 transition-all text-white rounded-full text-sm"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}