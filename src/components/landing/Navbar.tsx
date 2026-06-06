import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold">
          Calisthenics
          <span className="text-green-500">Hub</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-gray-300 hover:text-white">
            Features
          </a>

          <a href="#how-it-works" className="text-gray-300 hover:text-white">
            How It Works
          </a>

          <Link
            href="/login"
            className="rounded-lg border border-white/10 px-4 py-2 hover:bg-white/5"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="rounded-lg bg-green-500 px-4 py-2 font-medium text-black hover:bg-green-400"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}