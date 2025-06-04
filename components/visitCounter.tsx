"use client";
import { useEffect, useState } from "react";

export default function VisitCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("https://api.countapi.xyz/hit/divyanshu-dugar.com/portfolio")
      .then((res) => res.json())
      .then((data) => setCount(data.value))
      .catch(() => setCount(null));
  }, []);

  return (
    <div className="mt-4 inline-flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded-lg border border-zinc-700 text-sm text-zinc-400">
      <span>👀 Portfolio Visits:</span>
      <span className="text-sky-400 font-semibold">
        {count !== null ? count : "—"}
      </span>
    </div>
  );
}
