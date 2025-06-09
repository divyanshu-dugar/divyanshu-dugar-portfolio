import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-bold"
          >
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/skills">Skills</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/work-experience">Work Experience</Link></li>
            <li><Link href="/my-library">My Library</Link></li>
            <li><Link href="/my-mindset">My Mindset</Link></li>
            <li><Link href="/my-books">My Books</Link></li>
            <li><Link href="/">My Learning List 🔒</Link></li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl">DD</Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-normal font-size-l text-lg">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/skills">Skills</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/work-experience">Work Experience</Link></li>
          <li><Link href="/my-library">My Library</Link></li>
          <li><Link href="/my-mindset">My Mindset</Link></li>
          <li><Link href="/my-books">My Books</Link></li>
          <li><Link href="/">My Learning List 🔒</Link></li>
        </ul>
      </div>

      <div className="navbar-end">
        <a
          href="https://docs.google.com/document/d/1qaOGJb2Pb86bN2J_wgu-Q06MwXSBStNNDNJwHT4gGWU/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Resume
        </a>
      </div>
    </div>
  );
}
