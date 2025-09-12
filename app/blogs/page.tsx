import Link from "next/link";
import { type SanityDocument } from "next-sanity";

import { client } from "@/sanity/client";

const BLOGS_QUERY = `*[
  _type == "blog"
  && defined(slug.current)
][0...12]{title, slug, createdAt}`;

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  const blogs = await client.fetch<SanityDocument[]>(BLOGS_QUERY, {}, options);

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8">
      <h1 className="text-4xl font-bold mb-8">Posts</h1>
      <ul className="flex flex-col gap-y-4">
        {blogs.map((blog) => (
          <li className="hover:underline" key={blog.slug.current}>
            <Link href={`/blogs/${blog.slug.current}`}>
              <h2 className="text-xl font-semibold">{blog.title}</h2>
            </Link>
            <p>{new Date(blog.createdAt).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}