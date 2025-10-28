import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { fetchDepartmentData } from "../../data/staffData";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import LangToggle from "../../components/LangToggle";

export default function DepartmentPage() {
  const router = useRouter();
  const { dept } = router.query;
  const [staff, setStaff] = useState([]);
  const [description, setDescription] = useState(null);
  const [lang, setLang] = useState("en");

  // Load staff data from Google Sheets
  useEffect(() => {
    if (dept) fetchDepartmentData(dept, lang).then(setStaff);
  }, [dept, lang]);

  // Load department description JSON
  useEffect(() => {
    if (dept) {
      fetch(`/content/descriptions/${dept}_description.json`)
        .then((res) => res.json())
        .then(setDescription)
        .catch((err) => console.error("Failed to load description:", err));
    }
  }, [dept]);

  if (!dept) return <p className="p-6 text-center">Loading...</p>;

  // Extract info safely
  const title =
    description && lang === "ms"
      ? description.title_ms
      : description?.title_en || dept.replace("_", " ");

  const summary =
    description && lang === "ms"
      ? description.summary_ms
      : description?.summary_en || "";

  const headerColor = description?.header_color || "#FCE7F3"; // fallback pink

  return (
    <div>
      <Navbar />
      <LangToggle lang={lang} setLang={setLang} />

      {/* Header Section */}
      <div
        className="py-10 text-center text-gray-800"
        style={{ backgroundColor: headerColor }}
      >
        <h1 className="text-4xl font-bold mb-3">{title}</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">{summary}</p>
      </div>

      {/* Staff Cards */}
      <div className="p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {staff.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow p-4 text-center hover:scale-105 transition-transform"
            >
              <img
                src={t.photo}
                alt={t.name}
                className="w-32 h-32 mx-auto rounded-full mb-3 object-cover"
              />
              <h2 className="font-semibold">{t.name}</h2>
              <p className="text-gray-500 text-sm">{t.role}</p>
              {t.bio && (
                <p className="text-gray-600 text-sm mt-2">{t.bio}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
