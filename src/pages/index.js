import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LangToggle from "../components/LangToggle";

export default function Home() {
  const [metadata, setMetadata] = useState(null);
  const [lang, setLang] = useState("en");

  useEffect(() => {
    fetch("/content/metadata/school_metadata.json")
      .then((res) => res.json())
      .then(setMetadata)
      .catch((err) => console.error("Failed to load metadata:", err));
  }, []);

  const departments = [
    "english_department",
    "bahasa_melayu_department",
    "mathematics_department",
    "science_department",
    "islamic_education_department",
    "arts_department",
    "rbt_department",
    "ict_innovation_department",
    "pjpk_department",
    "pendidikan_moral_department",
    "sejarah_department",
    "prasekolah_department",
    "admin_support_staff"
  ];

  if (!metadata) return <p className="text-center p-8">Loading...</p>;

  const name =
    lang === "ms" ? metadata.school_name_ms : metadata.school_name_en;
  const motto = lang === "ms" ? metadata.motto_ms : metadata.motto_en;
  const desc =
    lang === "ms"
      ? metadata.description_ms
      : metadata.description_en;

  return (
    <div>
      <Navbar />
      <LangToggle lang={lang} setLang={setLang} />

      {/* School Header */}
      <div className="text-center py-12 bg-pastelBlue">
        {metadata.logo && (
          <img
            src={metadata.logo}
            alt="School Logo"
            className="mx-auto mb-4 w-24 h-24 object-contain"
          />
        )}
        <h1 className="text-4xl font-bold text-gray-800">{name}</h1>
        <p className="italic text-gray-600 mb-4">{motto}</p>
        <p className="max-w-2xl mx-auto text-gray-700">{desc}</p>
        <p className="mt-2 text-sm text-gray-500">{metadata.address}</p>
      </div>

      {/* Departments Section */}
      <main className="p-8 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          {lang === "ms" ? "Jabatan Sekolah" : "School Departments"}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {departments.map((d) => (
            <Link key={d} href={`/department/${d}`}>
              <div className="bg-white shadow hover:shadow-lg rounded-xl p-4 cursor-pointer hover:scale-105 transition-transform">
                <h3 className="font-semibold capitalize">
                  {d.replace("_", " ")}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
