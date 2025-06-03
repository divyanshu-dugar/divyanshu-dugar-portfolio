import Navbar from "../../components/navbar";
import Image from "next/image";
import Link from "next/link";

const books = [
  {
    title: "Atomic Habits",
    status: "Completed",
    author: "James Clear",
    rating: "5/5",
    image: "/books/atomic-habits.jpg",
    slug: "atomic-habits",
    genre: "Self-Growth",
  },
  {
    title: "Rich Dad Poor Dad",
    status: "Completed",
    author: "Robert Kiyosaki",
    rating: "4.5/5",
    image: "/books/rich-dad-poor-dad.png",
    slug: "rich-dad-poor-dad",
    genre: "Finance",
  },
  {
    title: "Ikigai",
    status: "In Progress",
    author: "Francesc Miralles & Héctor García",
    rating: "4/5",
    image: "/books/ikigai.jpg",
    slug: "ikigai",
    genre: "Mental Health",
  },
  {
    title: "How to Win Friends & Influence People",
    status: "In Progress",
    author: "Dale Carnegie",
    rating: "4.8/5",
    image: "/books/win-friends.jpeg",
    slug: "win-friends",
    genre: "Self-Growth",
  },
  {
    title: "Sapiens",
    status: "In Progress",
    author: "Yuval Noah Harari",
    rating: "4.9/5",
    image: "/books/sapiens.jpg",
    slug: "sapiens",
    genre: "History",
  },
  {
    title: "The Psychology of Money",
    status: "To-Read",
    author: "Morgan Housel",
    rating: "-",
    image: "/books/the-psychology-of-money.jpg",
    slug: "psychology-of-money",
    genre: "Finance",
  },
];

export default function MyBooks() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-zinc-900 px-6 py-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-500 mb-10">
            My Book Collection :)
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book, i) => (
            <div
              key={i}
              className="card bg-zinc-800 text-white shadow-xl rounded-2xl overflow-hidden border border-zinc-700"
            >
              <figure>
                <Image
                  src={book.image}
                  alt={book.title}
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-xl font-semibold">
                  {book.title}
                  <span
                    className={`badge text-xs py-1 px-2 rounded-full ${
                      book.status === "Completed"
                        ? "bg-green-600"
                        : book.status === "In Progress"
                        ? "bg-yellow-600"
                        : "bg-gray-600"
                    }`}
                  >
                    {book.status}
                  </span>
                </h2>
                <p className="text-sm text-zinc-400">By {book.author}</p>
                <p className="text-sm text-zinc-300">Rating: {book.rating}</p>
                <p className="text-xs text-zinc-500 italic">Genre: {book.genre}</p>
                <div className="card-actions justify-end mt-4">
                  <Link
                    href={`/my-books/${book.slug}`}
                    className="btn btn-outline btn-accent"
                  >
                    Read Summary →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}