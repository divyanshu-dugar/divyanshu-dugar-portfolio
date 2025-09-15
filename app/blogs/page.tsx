import Link from "next/link";
import Image from "next/image";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";

const BLOGS_QUERY = `*[
  _type == "blog"
  && defined(slug.current)
][0...12]{title, slug, createdAt, excerpt, coverImage}`;

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  const blogs = await client.fetch<SanityDocument[]>(BLOGS_QUERY, {}, options);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Latest <span className="text-cyan-400">Blog Posts</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Discover insights, tutorials, and thoughts on web development, programming, and technology.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <article 
              key={blog.slug.current}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group border border-gray-700"
            >
              {/* Blog Cover Image */}
              <div className="h-48 relative overflow-hidden">
                {blog.coverImage ? (
                  <Image
                    src={blog.coverImage}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-r from-cyan-900 to-purple-900 flex items-center justify-center">
                    <span className="text-white text-4xl font-bold">{blog.title.charAt(0)}</span>
                  </div>
                )}
                <div className="absolute top-4 left-4 bg-cyan-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Article
                </div>
              </div>

              {/* Blog Content */}
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-400 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{new Date(blog.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                
                <Link href={`/blogs/${blog.slug.current}`}>
                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                    {blog.title}
                  </h2>
                </Link>
                
                {blog.excerpt && (
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>
                )}
                
                <Link 
                  href={`/blogs/${blog.slug.current}`}
                  className="inline-flex items-center text-cyan-400 font-medium hover:text-cyan-300 transition-colors duration-300 group/readmore"
                >
                  Read more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover/readmore:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-16">
          <button className="bg-gray-800 text-cyan-400 font-semibold py-3 px-8 rounded-full border border-cyan-800 hover:bg-gray-700 transition-colors duration-300 shadow-md hover:shadow-lg">
            Load More Articles
          </button>
        </div>

        {/* Newsletter Section */}
        <div className="mt-24 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 md:p-12 text-center text-white border border-gray-700">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="max-w-xl mx-auto mb-6 text-gray-400">
            Subscribe to my newsletter to receive the latest blog posts and updates directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <button className="bg-cyan-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-cyan-500 transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}