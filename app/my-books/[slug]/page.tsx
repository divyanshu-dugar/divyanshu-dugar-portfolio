"use client"
import Navbar from '@/app/components/navbar';
import { useParams } from 'next/navigation'

export default function BookDetailPage() {
  const params = useParams();
  const {slug} = params;

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-zinc-900 text-white p-10">
        <h1 className="text-3xl font-bold capitalize">{slug}</h1>
        <p className="text-zinc-400 mt-2">Summary, my opinion, takeaways, etc. will go here.</p>
      </div>
    </>
  );
}
