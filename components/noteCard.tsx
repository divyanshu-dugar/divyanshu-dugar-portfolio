import Image from "next/image";
import Link from "next/link";

type NoteCardProps = {
  image: string;
  name: string;
  desc: string;
  buttonText: string;
  link: string;
};

export default function NoteCard({ image, name, desc, buttonText, link }: NoteCardProps) {
  return (
    <div className="bg-[#121921] border border-[#0f172a] rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-cyan-500/50 hover:-translate-y-1 transition-transform duration-300">
      <div className="w-20 h-20 mb-4 relative">
        <Image
          src={image}
          alt={name}
          fill
          style={{ objectFit: "contain" }}
          className="rounded-md"
          sizes="80px"
        />
      </div>
      <h2 className="text-lg font-semibold text-cyan-400 mb-2">{name}</h2>
      <p className="text-sm text-gray-400 mb-5">{desc}</p>
      <Link href={link} target="_blank" rel="noopener noreferrer" passHref>
        <button className="px-5 py-2 rounded-md bg-cyan-500 text-gray-900 font-semibold hover:bg-cyan-600 shadow-md hover:shadow-cyan-600/70 transition">
          {buttonText}
        </button>
      </Link>
    </div>
  );
}
