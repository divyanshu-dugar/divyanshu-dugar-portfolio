import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import Link from "next/link";
import Image from "next/image";

const BLOG_QUERY = `*[_type == "blog" && slug.current == $slug][0]{
  title,
  slug,
  content,
  metadesc,
  blogimage,
  createdAt,
  "authorName": author.author->name,
  "authorImage": author.author->image,
  "authorBio": author.author->bio
}`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const blog = await client.fetch<SanityDocument>(BLOG_QUERY, await params, options);
  const blogImageUrl = blog.blogimage
    ? urlFor(blog.blogimage)?.width(800).height(450).url()
    : null;

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto max-w-4xl px-6 py-4">
          <Link 
            href="/blogs" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200 group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to blogs
          </Link>
        </div>
      </nav>

      <article className="container mx-auto max-w-4xl px-6 py-8">
        {/* Header Section */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {blog.title}
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            {blog.metadesc}
          </p>

          {/* Author and Date Info */}
          <div className="flex items-center justify-center gap-4 mb-8">
            {blog.authorImage && (
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
                <Image
                  src={urlFor(blog.authorImage)?.width(28).height(48).url() || ''}
                  alt={blog.authorName}
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
            )}
            <div className="text-left">
              <p className="font-semibold text-gray-900">{blog.authorName}</p>
              <p className="text-gray-500 text-sm">
                {new Date(blog.createdAt).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
          </div>

          {/* Featured Image */}
          {blogImageUrl && (
            <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8">
              <Image
                src={blogImageUrl}
                alt={blog.title}
                width={800}
                height={450}
                className="w-full h-auto object-cover"
                priority
              />
              {blog.blogimage?.caption && (
                <figcaption className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-sm p-4 text-center">
                  {blog.blogimage.caption}
                  {blog.blogimage.attribution && (
                    <span className="italic"> | {blog.blogimage.attribution}</span>
                  )}
                </figcaption>
              )}
            </div>
          )}
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-blockquote:border-blue-600 prose-blockquote:bg-blue-50 prose-blockquote:italic prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-lg prose-img:rounded-xl prose-img:shadow-md prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-800 prose-code:text-gray-900 prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none prose-ol:list-decimal prose-ul:list-disc prose-hr:border-gray-300 mb-16">
          <PortableText value={blog.content} />
        </div>

        {/* Author Bio */}
        {blog.authorBio && (
          <div className="bg-gray-50 rounded-2xl p-8 mb-12 border border-gray-200">
            <div className="flex items-start gap-6">
              {blog.authorImage && (
                <div className="flex-shrink-0">
                  <Image
                    src={urlFor(blog.authorImage)?.width(80).height(80).url() || ''}
                    alt={blog.authorName}
                    width={80}
                    height={80}
                    className="rounded-full object-cover border-2 border-white shadow-md"
                  />
                </div>
              )}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">About the Author</h3>
                <p className="text-gray-700 leading-relaxed">{blog.authorBio}</p>
              </div>
            </div>
          </div>
        )}

        {/* Share Section */}
        <div className="text-center py-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Share this post</h3>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors duration-200">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </button>
            <button className="bg-blue-800 text-white p-3 rounded-full hover:bg-blue-900 transition-colors duration-200">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
              </svg>
            </button>
            <button className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition-colors duration-200">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M13.682 10.621L20 4h-2.974l-5.461 6.26L6.934 4H3l6.611 9.49L3 20h2.974l5.809-6.656L17.203 20H21l-7.318-9.379zm-2.135 2.447L15.742 5.78h-1.856l-4.104 5.807 1.856 2.447 3.242-4.508h1.856l-4.104 5.807z"></path>
              </svg>
            </button>
          </div>
        </div>
      </article>

      {/* Related Posts Section (Optional) */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">You might also like</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Placeholder for related posts */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg mb-4"></div>
              <h3 className="font-semibold text-gray-900 mb-2">Coming soon</h3>
              <p className="text-gray-600 text-sm">More blog posts will be added soon</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg mb-4"></div>
              <h3 className="font-semibold text-gray-900 mb-2">Stay tuned</h3>
              <p className="text-gray-600 text-sm">Check back for new content</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}