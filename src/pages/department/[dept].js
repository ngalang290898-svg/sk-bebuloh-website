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
  const [lang, setLang] = useState("en");

  useEffect(() => {
    if (dept) fetchDepartmentData(dept, lang).then(setStaff);
  }, [dept, lang]);

  if (!dept) return <p className="p-6 text-center">Loading...</p>;

  return (
    <div>
      <Navbar />
      <LangToggle lang={lang} setLang={setLang} />
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6 text-center capitalize">
          {dept.replace("_", " ")} Department
        </h1>
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
              <p className="text-gray-600 text-sm mt-2">{t.bio}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
