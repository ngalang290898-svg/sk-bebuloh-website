import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-pink-100 p-4 shadow flex justify-between items-center">
      <h1 className="text-xl font-bold text-pink-800">SK Bebuloh</h1>
      <div className="space-x-4">
        <Link href="/" className="hover:text-pink-600">Home</Link>
        <Link href="/department/english_department" className="hover:text-pink-600">Departments</Link>
      </div>
    </nav>
  );
}
