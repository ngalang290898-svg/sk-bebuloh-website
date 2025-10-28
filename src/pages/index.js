import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  const departments = [
    "english_department",
    "bahasa_melayu_department",
    "mathematics_department",
    "science_department",
    "islamic_education_department",
    "arts_department",
    "rbt_department",
    "pjpk_department",
    "admin_support_staff",
  ];

  return (
    <div>
      <Navbar />
      <main className="p-8 text-center">
        <h1 className="text-4xl font-bold mb-6">SK Bebuloh Staff Directory</h1>
        <p className="text-gray-500 mb-8">
          Explore our departments and meet our dedicated staff.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
          {departments.map((d) => (
            <Link key={d} href={`/department/${d}`}>
              <div className="bg-white shadow hover:shadow-lg rounded-xl p-4 cursor-pointer hover:scale-105 transition-transform">
                <h2 className="font-semibold capitalize">
                  {d.replace("_", " ")}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
