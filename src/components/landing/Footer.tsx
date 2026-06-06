export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-10 text-center text-gray-500 text-sm">
      © {new Date().getFullYear()} Calisthenics Hub. Built for athletes.
    </footer>
  );
}